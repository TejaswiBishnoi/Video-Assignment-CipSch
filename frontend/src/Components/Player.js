import { useState } from "react";
import {Box} from "@mui/material"

function Player(props){
    //const[id, setId] = useState(props.id);
    return(
        <Box sx={{height: "100%", width:"100%"}}>
            <video controls muted autoPlay style={{backgroundColor: "black", objectFit: "contain", width:"100%", height:"100%"}}>
                <source src={'https://upload.wikimedia.org/wikipedia/commons/transcoded/a/a7/How_to_make_video.webm/How_to_make_video.webm.720p.vp9.webm'} ></source>
            </video>
        </Box>
    )
}
export default Player;