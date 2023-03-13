import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Card, CardContent, CardMedia, Grid, Tooltip, Typography } from "@mui/material";

function Home(){
    // const [data, setData] = useState({});
    // useEffect(async ()=>{
    //     try{
    //         var resp = await axios.get('http://localhost:5000/videos');
    //         setData(resp);
    //     }
    //     catch{
    //         alert('Error');
    //     }
    // }, [])
    return(
        <Box sx={{overflowY: 'scroll', my: 5, mx: {xs:2, md: 10}}}>
            <Grid container>
                <Grid item xs={12} md={4} lg={3} sm={6}>
                    <Card variant="outlined" sx={{width: '100%', height: 420}}>
                        <CardMedia sx={{maxHeight:200, overflowY:"clip", overflowX:'clip', backgroundColor: 'black'}}>
                            <img src="https://i.redd.it/b14cjci978na1.jpg" Height={200} width={'auto'}/>
                        </CardMedia>
                        <CardContent>
                            <Tooltip title="Wow">
                                <Typography align="left" variant="h6" gutterBottom sx={{display: '-webkit-box', overflow: "hidden",textOverflow: "ellipsis", WebkitLineClamp: "2", WebkitBoxOrient: "vertical"}}>Wow! What a life Hack 123 hello zzzzzz</Typography>
                            </Tooltip>
                            <Tooltip title="Name"><Typography align="left" noWrap>By: Name</Typography></Tooltip>
                            <Typography align="left">Views:</Typography>
                            <Typography align="left">Likes: </Typography>
                            <Typography align="left">Uploaded On: </Typography>
                        </CardContent>
                    </Card>
                    <Card variant="outlined" sx={{width: '100%', height: 420}}>
                        <CardMedia sx={{maxHeight:200, overflowY:"clip", overflowX:'clip', backgroundColor: 'black'}}>
                            <img src="https://i.redd.it/b14cjci978na1.jpg" Height={200} width={'auto'}/>
                        </CardMedia>
                        <CardContent>
                            <Tooltip title="Wow">
                                <Typography align="left" variant="h6" gutterBottom sx={{display: '-webkit-box', overflow: "hidden",textOverflow: "ellipsis", WebkitLineClamp: "2", WebkitBoxOrient: "vertical"}}>Wow!  zzzzzz</Typography>
                            </Tooltip>
                            <Tooltip title="Name"><Typography align="left" noWrap>By: Name</Typography></Tooltip>
                            <Typography align="left">Views:</Typography>
                            <Typography align="left">Likes: </Typography>
                            <Typography align="left">Uploaded On: </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Home