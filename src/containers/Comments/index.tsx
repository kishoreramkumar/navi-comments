import { useState } from "react";
import AddComment from "../../components/AddComment";
import CommentList from "../../components/CommentList";
import { Input } from "../../lib/components";
import { CommentType } from "../../utils/types";

function Comments() {
  const [commentList, setCommentList] = useState<Array<CommentType>>([]);

  const handleAddComment = (comment: CommentType) => {
    setCommentList((prevCommentList: Array<CommentType>) => {
      return [...prevCommentList, comment];
    });
  };

  return (
    <div>
      <AddComment handleAddComment={handleAddComment} />
      <CommentList comments={commentList} />
    </div>
  );
}

export default Comments;
