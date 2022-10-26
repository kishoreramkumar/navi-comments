import { useCallback, useState } from "react";
import { Button, Input } from "../../lib/components";
import { BUTTON_CATEGORY, BUTTON_TYPES } from "../../lib/components/Button";
import CommentInput from "../CommentInput";

interface iEditComment {
  body: string;
  handleUpdate: Function;
  handleCancel: Function;
}
function EditComment({ body, handleUpdate, handleCancel }: iEditComment) {
  const [commentValue, setCommentValue] = useState(body);

  const handleUpdateClick = useCallback(() => {
    handleUpdate(commentValue);
  }, [commentValue, handleUpdate]);

  const handleCancelClick = useCallback(() => {
    handleCancel();
  }, [handleCancel]);
  return (
    <div>
      <CommentInput
        value={commentValue}
        onChange={setCommentValue}
        name="edit-comment"
      />
      <div>
        <Button
          disabled={!commentValue}
          category={BUTTON_CATEGORY.secondary}
          onClick={handleUpdateClick}
        >
          Update
        </Button>
        <Button
          type={BUTTON_TYPES.outline}
          category={BUTTON_CATEGORY.error}
          onClick={handleCancelClick}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default EditComment;
