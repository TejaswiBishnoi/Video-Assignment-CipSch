import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Box, Button, Chip, Divider, Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ShareIcon from '@mui/icons-material/Share';
import { HorizontalRule } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function VideoDesc(props){
    const [views, setViews] = useState(props.views);
    const [likes, setLikes] = useState("");
    const [liked, setLiked] = useState(props.liked)
    function likeHandler(){
        if (!liked){
            setLikes(likes + 1);
            setLiked(true);
        }
        else{
            setLikes(likes - 1);
            setLiked(false);
        }
    }
    useEffect(()=>{
        
    }, [])
    useEffect(()=>{
        console.log(likes);
        setLikes(props.likes);
    },[props])
    return(
        <Paper sx={{width:'90%', mx:'auto', my:2, backgroundColor:'whitesmoke'}}>
            <Box sx={{p:4}}>
                <Typography variant="h5" align="left" mb={2}>
                    {props.title}
                </Typography>
                <Grid container rowSpacing={1}>
                    <Grid item xs={12} md={7}>
                        <Typography align="left" fontSize={'0.8rem'}>By: {props.by}</Typography>
                    </Grid>
                    <Grid item xs md>
                        <Stack spacing={1} direction={"row"} alignItems={"flex-start"}>
                            <Button color="primary" variant={liked?'contained':'outlined'} sx={{p: 0.7}} onClick={likeHandler}>
                                <ThumbUpIcon sx={{fontSize: '0.8rem'}}/>
                                <Typography sx={{fontSize: '0.8rem'}} align='left'>&nbsp;{likes} </Typography>
                            </Button>
                            <Button color='primary' variant='outlined' sx={{p: 0.7}} LinkComponent={Link} to="/video/640f5d8749e3cd3da4cda5d3">
                                <ShareIcon sx={{fontSize: '0.8rem'}}/>
                                <Typography sx={{fontSize: '0.8rem'}} align='left' textTransform={'capitalize'}>&nbsp;Share </Typography>
                            </Button>                        
                        </Stack>
                    </Grid>
                </Grid>
                <Typography align='left' fontSize={'0.8rem'} my={2}>
                    Uploaded on: {props.date}
                </Typography>
                <Typography align='left' fontSize={'1.1rem'}>
                    Description
                </Typography>
                <Divider/>
                <Typography align='left'>{props.desc}</Typography>
            </Box>
        </Paper>
    );
    
}
export default VideoDesc