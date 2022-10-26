import { memo, useState } from "react";
import { Button, Input } from "../../lib/components";
import { BUTTON_CATEGORY, BUTTON_TYPES } from "../../lib/components/Button";
import { CommentType } from "../../utils/types";

function Comment({
  data,
  handleReply,
  handleDelete,
}: {
  data: CommentType;
  handleReply: Function;
  handleDelete: Function;
}) {
  const [replyComment, setReplyComment] = useState("");
  const [enableReply, setReplyStatus] = useState(false);

  return (
    <div>
      <div>{data.body}</div>
      <div>
        <Button
          type={BUTTON_TYPES.outline}
          category={BUTTON_CATEGORY.primary}
          onClick={() => {
            setReplyStatus(true);
          }}
          disabled={enableReply}
        >
          Reply
        </Button>
        <Button
          type={BUTTON_TYPES.outline}
          category={BUTTON_CATEGORY.secondary}
        >
          Edit
        </Button>
        <Button
          type={BUTTON_TYPES.outline}
          category={BUTTON_CATEGORY.error}
          onClick={() => handleDelete()}
        >
          Delete
        </Button>
      </div>
      {enableReply && (
        <div>
          <Input
            value={replyComment}
            name="reply-input"
            onChange={(e) => {
              setReplyComment(e.target.value);
            }}
          />{" "}
          <Button
            disabled={!replyComment}
            onClick={() => {
              handleReply(replyComment);
              setReplyComment("");
              setReplyStatus(false);
            }}
          >
            Reply
          </Button>
          <Button
            category={BUTTON_CATEGORY.error}
            type={BUTTON_TYPES.outline}
            onClick={() => {
              setReplyStatus(false);
            }}
          >
            Cancel
          </Button>
        </div>
      )}
    </div>
  );
}

export default memo(Comment);
