type User = {
    id: string,
    createdAt: string,
    firstName: string,
    lastName: string,
    Avatar: string[]
}
type Post = {
    id: string,
    title: string,
    content: string,
    author: User,
    Image: string[]
    Likes: number,
    Dislikes: number
    _count: {
        comments: number,
    },
    createdAt: string
}
type RealProps = {
    posts: Post[]
}

type PostComment = {
    id: string,
    createdAt: string,
    text: string,
    User: User,
    Reply: Reply
}
type Reply = any

enum Reaction {
    like = "LIKE",
    dislike = "DISLIKE",
}