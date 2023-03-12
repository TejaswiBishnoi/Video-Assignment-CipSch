import { Box, Paper, Stack, Typography} from "@mui/material";
import React from "react";

function Comments(props){
    return(
        <Stack direction={'column'} justifyContent={'space-between'} spacing={2}>
            <Paper sx={{height:'110vh', overflowY:'scroll'}}>
                <Typography fontSize={40}>Hello</Typography>
                <Typography fontSize={40}>Hello</Typography>
                <Typography fontSize={40}>Hello</Typography>
                <Typography fontSize={40}>Hello</Typography>
                <Typography fontSize={40}>Hello</Typography>
                <Typography fontSize={40}>Hello</Typography>
                <Typography fontSize={40}>Hello</Typography>
                <Typography fontSize={40}>Hello</Typography>
                <Typography fontSize={40}>Hello</Typography>
                <Typography fontSize={40}>Hello</Typography>
                <Typography fontSize={40}>Hello</Typography>
                <Typography fontSize={40}>Hello</Typography>
            </Paper>
            <Paper sx={{height:'10vh'}}></Paper>
        </Stack>
    );
}

export default Comments;