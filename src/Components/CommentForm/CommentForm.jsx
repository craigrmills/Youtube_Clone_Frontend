import React from 'react'
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';


function CommentForm() {
    return (
        <div>
                <form>
                    <TextField type="text" name="comment" placeholder="Comments Here...." id="outlined-size-normal" variant="outlined"  />
                    <br></br>
                    <Button color='yellow' type='submit'>Cancel</Button>
                    <Button positive type='submit'>Comment</Button>
                </form>
        </div>
    )
}

export default CommentForm



