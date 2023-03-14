import { Box, Button, Divider, Chip, Paper, Stack, TextField, TextareaAutosize, Typography} from "@mui/material";
import React, { useEffect, useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import CommentCard from "./CommentCard";
import { useParams } from "react-router-dom";
import axios from "axios";

function Comments(){
    const [data, setData] = useState([])
    const {videoid} = useParams();
    useEffect(()=>{
        console.log(videoid);
        axios.post('http://localhost:5000/comments', {videoid: videoid}).then((resp)=>{
            if (resp.status == 200){
                console.log(resp.data);
                setData(resp.data);
            }
        })
    }, [videoid])
    return(
        <Stack height={'87vh'} direction={'column'} justifyContent={'flex-start'} spacing={2} my={2} mx={2}>
            <Paper sx={{height:100, backgroundColor:'whitesmoke'}}>
                <Stack height={'100%'} direction={"column"} justifyContent={'center'} mx={2}>
                    <Stack direction={"row"} spacing={1}>                    
                        <TextField label='Comment' multiline rows={2} color="success" sx={{backgroundColor:"white", display:"flex", flexGrow: 1}}/>
                        <Button disabled={false} sx={{p:0.7}}>
                            <SendIcon/>
                        </Button>
                    </Stack>
                </Stack>
            </Paper>
            <Paper sx={{display:"flex", backgroundColor:'whitesmoke'}}>
                <Stack width={'100%'} mx={2} my={1} direction={"column"} spacing={1}>
                    <Divider>
                        <Chip label='Comments'/>
                    </Divider>
                    {/* <CommentCard data={{user: 'Tejaswi', content:'Some Content', date: '13/03/2023', replies:420}}/>
                    <CommentCard data={{user: 'Tejaswi', content:'Some Content', date: '13/03/2023'}}/> */}
                    {
                        data.map((dat)=>{
                            return(
                                <CommentCard data={dat} videoid={videoid}/>
                            );
                        })
                    }
                </Stack>
            </Paper>            
        </Stack>
    );
}

export default Comments;