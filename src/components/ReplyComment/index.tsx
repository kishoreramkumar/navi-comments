import { useCallback, useState } from "react";
import { Button, Input } from "../../lib/components";
import { BUTTON_CATEGORY, BUTTON_TYPES } from "../../lib/components/Button";
import CommentInput from "../CommentInput";

interface iReplyComment {
  handleReply: Function;
  handleCancel: Function;
}
function ReplyComment({ handleReply, handleCancel }: iReplyComment) {
  const [replyComment, setReplyComment] = useState("");

  const handleReplyClick = useCallback(() => {
    handleReply(replyComment);
  }, [replyComment, handleReply]);

  const handleCancelClick = useCallback(() => {
    handleCancel();
  }, [handleCancel]);
  return (
    <div>
      <CommentInput
        value={replyComment}
        name="reply-input"
        onChange={setReplyComment}
        placeholder="Enter your reply"
      />
      <Button disabled={!replyComment} onClick={handleReplyClick}>
        Reply
      </Button>
      <Button
        category={BUTTON_CATEGORY.error}
        type={BUTTON_TYPES.outline}
        onClick={handleCancelClick}
      >
        Cancel
      </Button>
    </div>
  );
}

export default ReplyComment;
