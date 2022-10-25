import { CommentType } from "../../utils/types";

function Comment({ data }: { data: CommentType }) {
  return <div>{data.body}</div>;
}

export default Comment;
