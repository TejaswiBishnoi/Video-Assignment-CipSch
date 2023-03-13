import { Box, Paper, Stack, TextField, TextareaAutosize, Typography} from "@mui/material";
import React from "react";

function Comments(props){
    return(
        <Stack height={'90vh'} direction={'column'} justifyContent={'space-between'} spacing={2} my={2} mx={2}>
            <Paper sx={{height:'60vh', overflowY:'scroll', display:"flex", flexGrow: 1}}>
                <Box>
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
                </Box>
            </Paper>
            <Paper sx={{height:100, backgroundColor:'whitesmoke'}}>
                <TextField multiline rows={2} color="success" sx={{backgroundColor:"white", display:"flex", flexGrow: 1}}/>
            </Paper>
        </Stack>
    );
}

export default Comments;