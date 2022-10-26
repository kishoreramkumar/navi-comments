import { memo, useMemo, useState } from "react";
import { Button, Input } from "../../lib/components";
import { BUTTON_CATEGORY, BUTTON_TYPES } from "../../lib/components/Button";
import { CommentType } from "../../utils/types";
import EditComment from "../EditComment";
import ReplyComment from "../ReplyComment";
import { CommentWrapper } from "./style";

function Comment({
  data,
  currentUser,
  handleReply,
  handleDelete,
  handleEdit,
}: {
  data: CommentType;
  currentUser?: string;
  handleReply: Function;
  handleDelete: Function;
  handleEdit: Function;
}) {
  const [enableReply, setReplyStatus] = useState(false);
  const [enableEdit, setEnableEdit] = useState(false);

  const isOwner = useMemo(() => {
    return data.createdBy === currentUser;
  }, [currentUser, data.createdBy]);

  return (
    <CommentWrapper>
      {enableEdit && (
        <EditComment
          body={data.body}
          handleUpdate={(commentValue: string) => {
            setEnableEdit(false);
            handleEdit(commentValue);
          }}
          handleCancel={() => {
            setEnableEdit(false);
          }}
        />
      )}
      {!enableEdit && (
        <div className="comment-container">
          <div className="comment-body">{data.body}</div>
          <div className="meta-details">
            {data.createdBy && (
              <span>
                Created By : <span className="user-name">{data.createdBy}</span>
              </span>
            )}
            <span>{new Date(data.createdAt).toString().slice(0, 24)}</span>
          </div>
          <div>
            <Button
              type={BUTTON_TYPES.outline}
              category={BUTTON_CATEGORY.primary}
              onClick={() => {
                setReplyStatus(true);
                setEnableEdit(false);
              }}
              disabled={enableReply}
            >
              Reply
            </Button>
            {isOwner && (
              <>
                <Button
                  type={BUTTON_TYPES.outline}
                  category={BUTTON_CATEGORY.secondary}
                  onClick={() => {
                    setEnableEdit(true);
                    setReplyStatus(false);
                  }}
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
              </>
            )}
          </div>
        </div>
      )}
      {enableReply && (
        <ReplyComment
          handleReply={(replyComment: string) => {
            handleReply(replyComment);
            setReplyStatus(false);
          }}
          handleCancel={() => {
            setReplyStatus(false);
          }}
        />
      )}
    </CommentWrapper>
  );
}

export default memo(Comment);
