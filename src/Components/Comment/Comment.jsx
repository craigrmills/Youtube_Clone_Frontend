import React from 'react';
// import Reply from '../Reply/Reply';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const Comment = ({ comment, addLike, addDislike /*replies*/ }) => {
    // const listOfReplies = replies.map((reply, id) => <Reply key={id} reply={reply} />)

    if(!comment) return <div></div>

    return (
        <div className="comment">
            <p>{comment.body}</p>
            <p> <ThumbUpIcon onClick={() => addLike(comment.id, comment.video_id)}>Likes:</ThumbUpIcon> {comment.likes} | <ThumbDownIcon onClick={() => addDislike(comment.id, comment.video_id)}>Dislikes:</ThumbDownIcon> {comment.dislikes} </p>
            {/* <p>{listOfReplies}</p> */}
        </div>
    )
}

export default Comment;