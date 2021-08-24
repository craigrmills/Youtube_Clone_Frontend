import React from 'react';
// import Reply from '../Reply/Reply';

const Comment = ({ comment, addLike, addDislike /*replies*/ }) => {
    // const listOfReplies = replies.map((reply, id) => <Reply key={id} reply={reply} />)

    if(!comment) return <div></div>

    return (
        <div className="comment">
            <p>{comment.body}</p>
            <p> <button onClick={() => addLike(comment.id, comment.video_id)}>Likes:</button> {comment.likes} | <button onClick={() => addDislike(comment.id, comment.video_id)}>Dislikes:</button> {comment.dislikes}</p>
            {/* <p>{listOfReplies}</p> */}
        </div>
    )
}

export default Comment;