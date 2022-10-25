import { useState, ChangeEvent } from "react";
import { Button, Input } from "../../lib/components";
import { getCurrentTimestamp } from "../../utils";
import { AddCommentWrapper } from "./style";

interface iAddCommentPropType {
  handleAddComment: Function;
}
function AddComment({ handleAddComment }: iAddCommentPropType) {
  const [comment, setComment] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleAddBtnClick = () => {
    const timeStamp = getCurrentTimestamp();
    handleAddComment({
      body: comment,
      createdAt: timeStamp,
      createdBy: "",
      updatedAt: timeStamp,
    });
    setComment("");
  };

  return (
    <AddCommentWrapper>
      <h2>Comment Widget</h2>
      <div className="comment-input-container">
        <div className="input-wrapper">
          <Input
            value={comment}
            placeholder="Enter a comment"
            name="add-comment"
            label=""
            onChange={handleInputChange}
          />
        </div>
        <Button disabled={!comment} onClick={handleAddBtnClick}>
          Add Comment
        </Button>
      </div>
    </AddCommentWrapper>
  );
}

export default AddComment;
