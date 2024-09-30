// You can define interfaces for all React components here.
// Do not forget to export properly.
interface CommentProps {
    userImagePath: string;
    username: string;
    commentText: string;
    likeNum: number;
    replies: ReplyProps[];

}
export type { CommentProps };


export type { ReplyProps };

interface PostProps {
    userImagePath: string;
    username: string;
    likes: number;
}
export type { PostProps };



interface ReplyProps {
    userImagePath: string;
    username: string;
    replyText: string;
    likeNum: number;
}


