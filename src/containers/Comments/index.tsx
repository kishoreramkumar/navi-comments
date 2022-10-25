import { useState } from "react";
import { Input } from "../../lib/components";

function Comments() {
  const [commentList, setCommentList] = useState();
  return (
    <div>
      <Input placeholder="Add your comments..." value={} />
    </div>
  );
}

export default Comments;
