import React from "react";
import { NESTED_COMMENTS } from "../../Constants";
import CommentComponent from "./comment-component";

const CommentSectionComponent = () => {
  const comments = NESTED_COMMENTS;
  const renderComment = (comments) => {
    return comments.map((comment, index) => {
      return (
        <div key={index}>
          <CommentComponent comments={comment}/>
          {comment?.replies && 
          <div className="pl-4 border-t-2">{renderComment(comment?.replies)}</div>}
        </div>
      );
    });
  };

  return <>{renderComment(comments)}</>;
};

export default CommentSectionComponent;
