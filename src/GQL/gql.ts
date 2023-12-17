import { gql } from "@apollo/client";

export const GetPost_Filter= gql`
query GetPost_Filter($filterBy:TFilterByEnum,$cursor:String){
    GetPost_Filter(FilterBy:$filterBy,Cursor:$cursor){
     posts {
        id
        title
        content
        Image
        Video
        createdAt
        author{
          id
          firstName
          Avatar
          lastName
        }
        _count{
          comments
        }
        Likes
        Dislikes
      }
      Post_count
    }
  }
`;
export enum TFilterByEnum {resent = "RECENT",popular = "MOST_POPULAR",oldest = "OLDEST"}
export type Variables_GetPost_Filter = {filterBy:TFilterByEnum,cursor?:string}
export type Return_GetPost_Filter = {GetPost_Filter:{posts:Post[],Post_count:number}}