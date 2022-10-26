import { memo, useCallback } from "react";
import { CommentType } from "../../utils/types";
import Comment from "../Comment";

interface iCommentList {
  comments: Array<CommentType>;
  handleReply: Function;
  handleDelete: Function;
  handleEdit: Function;
}

function CommentList({
  comments,
  handleReply,
  handleDelete,
  handleEdit,
}: iCommentList) {
  const handleOnReply = useCallback(
    (reply: string, pathArr: Array<number>, index: number) => {
      handleReply(reply, [index, ...pathArr]);
    },
    [handleReply]
  );

  const handleOnDelete = useCallback(
    (pathArr: Array<number>, index: number) => {
      handleDelete([index, ...pathArr]);
    },
    [handleDelete]
  );

  const handleOnEdit = useCallback(
    (updatedComment: string, pathArr: Array<number>, index: number) => {
      handleEdit(updatedComment, [index, ...pathArr]);
    },
    [handleEdit]
  );

  return (
    <div style={{ marginLeft: "1rem" }}>
      {comments.map((c, index) => (
        <>
          <Comment
            data={c}
            handleReply={(reply: string) => handleOnReply(reply, [], index)}
            handleDelete={() => {
              handleOnDelete([], index);
            }}
            handleEdit={(updatedComment: string) => {
              handleOnEdit(updatedComment, [], index);
            }}
          />
          {c.replies && (
            <CommentList
              comments={c.replies}
              handleReply={(reply: string, pathArr: Array<number>) =>
                handleOnReply(reply, pathArr, index)
              }
              handleDelete={(pathArr: Array<number>) => {
                handleOnDelete(pathArr, index);
              }}
              handleEdit={(updatedComment: string, pathArr: Array<number>) => {
                handleOnEdit(updatedComment, pathArr, index);
              }}
            />
          )}
        </>
      ))}
    </div>
  );
}

export default memo(CommentList);
