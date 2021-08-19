import React from 'react'
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Avatar, Grid, Paper } from "@material-ui/core";



function CommentForm() {
    return (
    <div style={{ padding: 14 }} className="App">
        <h1>Comments</h1>
        <Paper style={{ padding: "40px 20px" }}>
        <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
            <Avatar alt="Remy Sharp"  />
            </Grid>
            <Grid justifyContent="left" item xs zeroMinWidth>
                    <form>
                    <TextareaAutosize maxRows={50} aria-label="maximum height" placeholder="Comment Here....."/>
                    <br></br>
                        <Button color='yellow' type='submit'>Cancel</Button>
                        <Button positive type='submit'>Comment</Button>
                    </form>
            </Grid>
            </Grid>
        </Paper>
    </div>
    );
}

export default CommentForm



