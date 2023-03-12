import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

function VideoDesc(props){
    const [views, setViews] = useState(props.views);
    const [likes, setLikes] = useState(props.likes);

    function likeHandler(){
        setLikes(likes + 1);
    }

    return(
        <Box sx={{width:'90%', mx:'auto'}}>
            <Typography variant="h3">

            </Typography>
        </Box>
    );
    
}
export default VideoDesc