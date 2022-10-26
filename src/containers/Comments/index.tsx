import { timeStamp } from "console";
import { useCallback, useEffect, useRef, useState } from "react";
import AddComment from "../../components/AddComment";
import CommentList from "../../components/CommentList";
import { Input } from "../../lib/components";
import { getCurrentTimestamp, getUniqueId } from "../../utils";
import {
  getPersistCommentsData,
  setPersistCommentsData,
} from "../../utils/data";
import { CommentType } from "../../utils/types";

function Comments({}) {
  const [commentList, setCommentList] = useState<Array<CommentType>>([]);
  const [currentUser, setCurrentUser] = useState("NAVI");
  const isFirstLoadedRef = useRef(false);

  // get the persisted data from localstorage
  useEffect(() => {
    setCommentList(getPersistCommentsData());
  }, []);

  // get the  data to localstorage to persist while reload
  useEffect(() => {
    if (isFirstLoadedRef.current) setPersistCommentsData(commentList);
    else isFirstLoadedRef.current = true;
  }, [commentList]);

  const handleAddComment = useCallback((comment: CommentType) => {
    setCommentList((prevCommentList: Array<CommentType>) => {
      return [...prevCommentList, comment];
    });
  }, []);

  const handleReply = useCallback(
    (reply: string, pathArr: Array<number>) => {
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
    },
    [commentList]
  );

  const handleEdit = useCallback(
    (updatedComment: string, pathArr: Array<number>) => {
      const _commentList = [...commentList];
      let commentModified = _commentList;
      pathArr.forEach((pathInd: number, arrIndex) => {
        if (!commentModified[pathInd].replies) {
          commentModified[pathInd].replies = [];
        }
        if (pathArr.length - 1 === arrIndex) {
          const timeStamp = getCurrentTimestamp();
          commentModified[pathInd].body = updatedComment;
          commentModified[pathInd].updatedAt = timeStamp;
        } else {
          commentModified = commentModified[pathInd].replies ?? [];
        }
      });

      setCommentList(_commentList);
    },
    [commentList]
  );

  const handleDelete = useCallback(
    (pathArr: Array<number>) => {
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
    },
    [commentList]
  );

  return (
    <div style={{ padding: "0.5rem" }}>
      <div>
        Current User:{" "}
        <Input
          value={currentUser}
          onChange={(e) => {
            setCurrentUser(e.target.value);
          }}
          name="current-user"
        />
      </div>
      <span className="notice">
        <u>Note:</u> Change the current user. Edit and delete are user specific
        and the data will persist on reload
      </span>
      <AddComment
        handleAddComment={handleAddComment}
        currentUser={currentUser}
      />
      <CommentList
        comments={commentList}
        handleReply={handleReply}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        currentUser={currentUser}
      />
    </div>
  );
}

export default Comments;
