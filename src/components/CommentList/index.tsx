import { CommentType } from "../../utils/types";
import Comment from "../Comment";

interface iCommentList {
  comments: Array<CommentType>;
}

function CommentList({ comments }: iCommentList) {
  return (
    <div>
      {comments.map((c) => (
        <Comment data={c} />
      ))}
    </div>
  );
}

export default CommentList;
