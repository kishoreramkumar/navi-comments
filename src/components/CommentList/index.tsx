import { Fragment, memo, useCallback } from "react";
import { CommentType } from "../../utils/types";
import Comment from "../Comment";

interface iCommentList {
  comments: Array<CommentType>;
  handleReply: Function;
  handleDelete: Function;
  handleEdit: Function;
  currentUser?: string;
}

function CommentList({
  comments,
  currentUser,
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
        <Fragment key={c.id}>
          <Comment
            key={c.id}
            data={c}
            handleReply={(reply: string) => handleOnReply(reply, [], index)}
            handleDelete={() => {
              handleOnDelete([], index);
            }}
            handleEdit={(updatedComment: string) => {
              handleOnEdit(updatedComment, [], index);
            }}
            currentUser={currentUser}
          />
          {c.replies && (
            <CommentList
              key={"replies-" + c.id}
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
              currentUser={currentUser}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
}

export default memo(CommentList);
