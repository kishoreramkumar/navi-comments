import { memo } from "react";
import { CommentType } from "../../utils/types";
import Comment from "../Comment";

interface iCommentList {
  comments: Array<CommentType>;
  handleReply: Function;
}

function CommentList({ comments, handleReply }: iCommentList) {
  const handleOnReply = (
    reply: string,
    pathArr: Array<number>,
    index: number
  ) => {
    handleReply(reply, [index, ...pathArr]);
  };
  return (
    <div style={{ marginLeft: "1rem" }}>
      {comments.map((c, index) => (
        <>
          <Comment
            data={c}
            handleReply={(reply: string) => handleOnReply(reply, [], index)}
          />
          {c.replies && (
            <CommentList
              comments={c.replies}
              handleReply={(reply: string, pathArr: Array<number>) =>
                handleOnReply(reply, pathArr, index)
              }
            />
          )}
        </>
      ))}
    </div>
  );
}

export default memo(CommentList);
