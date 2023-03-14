import { Box, Button, Chip, Divider, Paper, Stack, TextField, TextareaAutosize, Typography} from "@mui/material";
import React, { useEffect, useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import CommentCard from "./CommentCard";
import CommentCard2 from "./CommentCard2";
import ReplyCard from "./ReplyCard";
import { useParams } from "react-router-dom";
import axios from "axios";

function Replies(props){
    const [data, setData] = useState([]);
    const [comment, setComment] = useState({});

    const {videoid, commentid} = useParams();

    useEffect(()=>{
        axios.post('http://localhost:5000/replies', {commentid: commentid}).then((resp)=>{
            if (resp.status == 200){
                console.log(resp.data);
                setData(resp.data.replies);
                setComment(resp.data.org);
            }
        }).catch((e)=>{
            console.log(e);
        })
    }, [videoid, commentid])

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
                    <CommentCard2 data={comment} back={videoid}/>
                    <Divider>
                        <Chip label='Replies'/>
                    </Divider>
                    {/* <ReplyCard data={{author: 'Tejaswi', content:'Some Content', date: '13/03/2023'}}/>
                    <ReplyCard data={{author: 'Tejaswi', content:'Some Content', date: '13/03/2023'}}/> */}
                    {
                        data.map((dat)=>{
                            return(
                                <ReplyCard data={dat}/>
                            );
                        })
                    }
                </Stack>
            </Paper>            
        </Stack>
    );
}

export default Replies;