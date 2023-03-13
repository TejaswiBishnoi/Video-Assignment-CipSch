import { Box, Button, Chip, Divider, Paper, Stack, TextField, TextareaAutosize, Typography} from "@mui/material";
import React from "react";
import SendIcon from '@mui/icons-material/Send';
import CommentCard from "./CommentCard";
import CommentCard2 from "./CommentCard2";
import ReplyCard from "./ReplyCard";

function Replies(props){
    return(
        <Stack height={'87vh'} direction={'column'} justifyContent={'flex-start'} spacing={2} my={2} mx={2}>
            <Paper sx={{height:100, backgroundColor:'whitesmoke'}}>
                <Stack height={'100%'} direction={"column"} justifyContent={'center'} mx={2}>
                    <Stack direction={"row"} spacing={1}>                    
                        <TextField label='Reply' multiline rows={2} color="success" sx={{backgroundColor:"white", display:"flex", flexGrow: 1}}/>
                        <Button disabled={false} size="small">
                            <SendIcon/>
                        </Button>
                    </Stack>
                </Stack>
            </Paper>
            <Paper sx={{display:"flex", backgroundColor:'whitesmoke'}}>                                
                <Stack width={'100%'} mx={2} my={1} direction={"column"} spacing={1}>
                    <CommentCard2 data={{author: 'Tejaswi', content:'Some Content', date: '13/03/2023', replies:420}}/>
                    <Divider>
                        <Chip label='Replies'/>
                    </Divider>
                    <ReplyCard data={{author: 'Tejaswi', content:'Some Content', date: '13/03/2023'}}/>
                    <ReplyCard data={{author: 'Tejaswi', content:'Some Content', date: '13/03/2023'}}/>
                </Stack>
            </Paper>            
        </Stack>
    );
}

export default Replies;