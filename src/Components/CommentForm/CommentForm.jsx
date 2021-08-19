import React, { Component } from 'react'
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';



class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            comments: '',
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <TextField type="text" name="comment" placeholder="Comments Here...." id="outlined-size-normal" variant="outlined"  />
                    <br></br>
                    <Button color='yellow' type='submit'>Cancel</Button>
                    <Button positive type='submit'>Comment</Button>
                </form>
            </div>
        )
    }
}

export default CommentForm;