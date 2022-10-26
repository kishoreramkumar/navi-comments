import { ChangeEvent, useCallback } from "react";
import { Input } from "../../lib/components";
import { CommentInputWrapper } from "./style";

interface iCommentInput {
  name: string;
  value: any;
  onChange: Function;
  placeholder?: string;
  [key: string]: any;
}
function CommentInput({
  name,
  value,
  onChange,
  placeholder,
  ...rest
}: iCommentInput) {
  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );
  return (
    <CommentInputWrapper {...rest}>
      <Input
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={handleInputChange}
      />
    </CommentInputWrapper>
  );
}

CommentInput.defaultProps = {
  placeholder: "Enter a comment",
};

export default CommentInput;
