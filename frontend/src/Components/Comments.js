import { Box, Button, Paper, Stack, TextField, TextareaAutosize, Typography} from "@mui/material";
import React from "react";
import SendIcon from '@mui/icons-material/Send';
import CommentCard from "./CommentCard";

function Comments(props){
    return(
        <Stack height={'87vh'} direction={'column'} justifyContent={'space-between'} spacing={2} my={2} mx={2}>
            <Paper sx={{height:'60vh', overflowY:'scroll', display:"flex", flexGrow: 1, backgroundColor:'whitesmoke'}}>
                <Stack width={'100%'} mx={2} my={1} direction={"column"} spacing={1}>
                    <CommentCard data={{author: 'Tejaswi', content:'Some Content', date: '13/03/2023', replies:420}}/>
                    <CommentCard data={{author: 'Tejaswi', content:'Some Content', date: '13/03/2023'}}/>
                </Stack>
            </Paper>
            <Paper sx={{height:100, backgroundColor:'whitesmoke'}}>
                <Stack height={'100%'} direction={"column"} justifyContent={'center'} mx={2}>
                    <Stack direction={"row"} spacing={1}>                    
                        <TextField label='Comment' multiline rows={2} color="success" sx={{backgroundColor:"white", display:"flex", flexGrow: 1}}/>
                        <Button disabled={false}>
                            <SendIcon/>
                        </Button>
                    </Stack>
                </Stack>
            </Paper>
        </Stack>
    );
}

export default Comments;