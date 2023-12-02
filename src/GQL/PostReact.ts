import { getClient } from "../Apollo/registerApolloClient";
import { gql } from "@apollo/client";



export const  ReactToPost = async (postId: string, vote: Reaction)=> {
   
    await getClient().query({ query ,variables:{PostId:postId,reaction:vote}});
}
