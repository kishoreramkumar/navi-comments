import { useState, ChangeEvent, useCallback } from "react";
import { Button, Input } from "../../lib/components";
import { getCurrentTimestamp, getUniqueId } from "../../utils";
import CommentInput from "../CommentInput";
import { AddCommentWrapper } from "./style";

interface iAddCommentPropType {
  currentUser?: string;
  handleAddComment: Function;
}
function AddComment({ currentUser, handleAddComment }: iAddCommentPropType) {
  const [comment, setComment] = useState<string>("");

  const handleAddBtnClick = useCallback(() => {
    const timeStamp = getCurrentTimestamp();
    handleAddComment({
      id: getUniqueId(),
      body: comment,
      createdAt: timeStamp,
      createdBy: currentUser,
      updatedAt: timeStamp,
    });
    setComment("");
  }, [comment, currentUser, handleAddComment]);

  return (
    <AddCommentWrapper>
      <h2>Comment Widget</h2>
      <div className="comment-input-container">
        <CommentInput
          className="input-wrapper"
          value={comment}
          placeholder="Enter a comment"
          name="add-comment"
          onChange={setComment}
        />
        <Button disabled={!comment} onClick={handleAddBtnClick}>
          Add Comment
        </Button>
      </div>
    </AddCommentWrapper>
  );
}

export default AddComment;
