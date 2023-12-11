"use client"
import Image from "next/image"
import Vote from '../../../public/vote.svg'
import { getClient } from "../../Apollo/registerApolloClient";
import { ApolloError, gql, useMutation } from "@apollo/client";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr"
import { useEffect, useState, MouseEvent } from "react";
import { setModalView } from "@/redux/features/motalViewSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
const query = gql`
mutation Reaction ($PostId : String!,$reaction :UserRole!){  
ReactToThePost(postId: $PostId ,reaction:$reaction)
}`
const getmyReactionToPostQuery = gql`query PostInfo($_post_id:String!) {
    GetMyReactionForPost(_post_id:$_post_id){
      reaction
    }  
}`
export enum Reaction {
    like = "LIKE",
    dislike = "DISLIKE",
}
export default function ReactionSection({ initialCount, postId }: { postId: string, initialCount: number }) {
    const [MyVote, SetMyVote] = useState<Reaction | null>(null)
    const [reactoinCount, setReactionCount] = useState(initialCount)
    const { data, error, loading, refetch } = useQuery(getmyReactionToPostQuery, { variables: { _post_id: postId } })
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (data) {
            SetMyVote(data.GetMyReactionForPost.reaction)
        }
    }, [data])
    const [mutateReaction, _] = useMutation(query, { variables: { PostId: postId } });
    const PerformVoteEvent = async (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, vote: Reaction) => {

        e.preventDefault()
        e.stopPropagation()
        if (MyVote !== vote) {
            if (vote === Reaction.like) {
                if (reactoinCount == -1) { setReactionCount(reactoinCount + 2); return }
                setReactionCount(reactoinCount + 1)
            }
            if (vote === Reaction.dislike) {
                if (reactoinCount == 1) { setReactionCount(reactoinCount - 2); return }
                setReactionCount(reactoinCount - 1)
            }
            SetMyVote(vote);
            try {
                await mutateReaction({ variables: { reaction: vote } });
            } catch (error) {
                if (error instanceof ApolloError && error.graphQLErrors[0].message==="Unauthorized") {
                    dispatch(setModalView({ open: true, view: "login" }))
                }
            }
        }
    }
    return (
        <div className='rounded-xl h-7 w-16 flex flex-row justify-between items-center bg-white '>
            <button className={`rounded-full hover:bg-gray-200 ${MyVote == Reaction.like ? 'bg-orange-300' : ''}`} onClick={e => { PerformVoteEvent(e, Reaction.like) }}>
                <Image src={Vote} alt="vote" width={23} height={23}></Image>
            </button>
            {reactoinCount}
            <button className={`rounded-full hover:bg-gray-200 ${MyVote == Reaction.dislike ? 'bg-red-200' : ''}`} onClick={e => { PerformVoteEvent(e, Reaction.dislike) }}>
                <Image className='rotate-180' src={Vote} alt="vote" width={23} height={23}></Image>
            </button>
        </div>
    )
}