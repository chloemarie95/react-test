import React from 'react';


const CommentDetail = (props) => {
    console.log(props);
    return (
        <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar" src={props.profileImg} />
        </a>
        <div className="content">
            <a href="/" className="author">
                {props.author}
            </a>
            <div className="metadata">
                <span className="date">
                    {props.timeAgo}
                </span>
            </div>
            <div className="text">
                {props.postText}
            </div>
        </div>  
    </div>
    );
};

// Allows component to be available to other files
export default CommentDetail;