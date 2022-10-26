import { memo } from "react";
import { CommentType } from "../../utils/types";
import Comment from "../Comment";

interface iCommentList {
  comments: Array<CommentType>;
  handleReply: Function;
  handleDelete: Function;
}

function CommentList({ comments, handleReply, handleDelete }: iCommentList) {
  const handleOnReply = (
    reply: string,
    pathArr: Array<number>,
    index: number
  ) => {
    handleReply(reply, [index, ...pathArr]);
  };

  const handleOnDelete = (pathArr: Array<number>, index: number) => {
    handleDelete([index, ...pathArr]);
  };

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
            />
          )}
        </>
      ))}
    </div>
  );
}

export default memo(CommentList);
