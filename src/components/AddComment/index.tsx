import { useCallback, useState, ChangeEvent } from "react";
import { Button, Input } from "../../lib/components";
import { AddCommentWrapper } from "./style";

function AddComment() {
  const [comment, setComment] = useState("");

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  }, []);

  return (
    <AddCommentWrapper>
      <div>Comment Widget</div>
      <div>
        <div>
          <Input
            value={comment}
            placeholder="Enter a comment"
            name="add-comment"
            label=""
            onChange={(e) => {}}
          />
        </div>
        <Button>Add Comment</Button>
      </div>
    </AddCommentWrapper>
  );
}
