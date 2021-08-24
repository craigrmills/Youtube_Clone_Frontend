import React from 'react';
import Comment from '../Comment/Comment';

const Comments = ({comments, addLike, addDislike, /*replies*/}) => {
    const listOfComments = comments.map((comment, id) => <Comment key={id} comment={comment} addLike={addLike} addDislike={addDislike}/>)

    return(
        <div className="comments">
            {listOfComments}
        </div>
    )
}

export default Comments;