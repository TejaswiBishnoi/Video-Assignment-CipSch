import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Tooltip, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function HomeCard(props){
    return(
        <Card variant="elevation" sx={{width: '95%', height: 420, mx:'auto', my:1}}>
            <CardActionArea LinkComponent={Link} to={"/video/"+props.data._id}>
                <CardMedia sx={{maxHeight:200, overflowY:"clip", overflowX:'clip', backgroundColor: 'black'}}>
                    <img src={props.data.thumbnail} Height={200} width={'auto'}/>
                </CardMedia>
                <CardContent>
                    <Tooltip title={props.data.title}>
                        <Typography align="left" variant="h6" gutterBottom sx={{display: '-webkit-box', overflow: "hidden",textOverflow: "ellipsis", WebkitLineClamp: "2", WebkitBoxOrient: "vertical"}}>{props.data.title}</Typography>
                    </Tooltip>
                    <Tooltip title="Name"><Typography align="left" noWrap>By: {props.data.by}</Typography></Tooltip>
                    <Typography align="left">Views: {props.data.views}</Typography>
                    <Typography align="left">Likes: {props.data.likes}</Typography>
                    <Typography align="left">Uploaded On: {props.data.date}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
export default HomeCard;