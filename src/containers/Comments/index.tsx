import { timeStamp } from "console";
import { useState } from "react";
import AddComment from "../../components/AddComment";
import CommentList from "../../components/CommentList";
import { Input } from "../../lib/components";
import { getCurrentTimestamp, getUniqueId } from "../../utils";
import { CommentType } from "../../utils/types";

function Comments() {
  const [commentList, setCommentList] = useState<Array<CommentType>>([]);

  const handleAddComment = (comment: CommentType) => {
    setCommentList((prevCommentList: Array<CommentType>) => {
      return [...prevCommentList, comment];
    });
  };

  const handleReply = (reply: string, pathArr: Array<number>) => {
    const _commentList = [...commentList];
    let commentModified = _commentList;
    pathArr.forEach((pathInd: number) => {
      if (!commentModified[pathInd].replies) {
        commentModified[pathInd].replies = [];
      }
      commentModified = commentModified[pathInd].replies ?? [];
    });
    const timeStamp = getCurrentTimestamp();
    commentModified.push({
      id: getUniqueId(),
      body: reply,
      createdAt: timeStamp,
      createdBy: "",
      updatedAt: timeStamp,
    });
    setCommentList(_commentList);
  };

  const handleDelete = (pathArr: Array<number>) => {
    const _commentList = [...commentList];
    let commentModified = _commentList;
    pathArr.forEach((pathInd: number, arrIndex: number) => {
      if (!commentModified[pathInd].replies) {
        commentModified[pathInd].replies = [];
      }
      if (pathArr.length - 1 === arrIndex) {
        commentModified.splice(pathInd, 1);
      } else {
        commentModified = commentModified[pathInd].replies ?? [];
      }
    });
    setCommentList(_commentList);
  };

  return (
    <div>
      <AddComment handleAddComment={handleAddComment} />
      <CommentList
        comments={commentList}
        handleReply={handleReply}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default Comments;
