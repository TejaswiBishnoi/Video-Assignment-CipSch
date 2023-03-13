import { Button, Card, CardContent, CardHeader, Stack, Typography } from "@mui/material";
import React from "react";

function CommentCard2(props){
    return(
        <Card>
            <CardContent sx={{pt: 0.5, pb: 0.5, '&:last-child': { pb: 0 }}}>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Typography fontSize={'0.7rem'} color={'gray'}>
                        {props.data.author}
                    </Typography>
                    <Typography fontSize={'0.7rem'} color={'gray'}>
                        {props.data.date}
                    </Typography> 
                </Stack>
                <Typography align="justify" fontSize={'0.85rem'}>
                    {props.data.content}
                </Typography>
                <Stack direction={'row'} justifyContent={'left'}>
                    <Button sx={{textTransform: 'capitalize', fontSize:'0.7rem'}}>
                        Back
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    );
}
export default CommentCard2;