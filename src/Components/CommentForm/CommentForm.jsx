import React, { Component } from 'react'
import './CommentForm.css';



class CommentForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comment: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = async (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const comment = {
            video_id: this.props.selectedVideo.id.videoId,
            body: this.state.comment,
            likes: 0,
            dislikes: 0
        }
        console.log(comment)
        this.props.addComment(comment, this.props.selectedVideo.id.videoId);
        this.setState({
            comment: ''
        })
    }

    render() {
        return (
            <div className="comment">
                <form className="comment__form">
                    <p>
                        <textarea name="comment" value={this.state.comment} cols="120" rows="2" placeholder="Add a public comment. . ." onChange={this.handleChange}></textarea>
                    </p>
                        <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        
        );
    } 
}

export default CommentForm;
