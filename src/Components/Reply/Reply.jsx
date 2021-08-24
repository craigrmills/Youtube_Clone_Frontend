import React from 'react'

const Reply = ({ reply }) => {
    if(!reply) return <div></div>

    return (
        <div className="reply">
            <p>--- {reply.body}</p>            
        </div>
    )
}

export default Reply;