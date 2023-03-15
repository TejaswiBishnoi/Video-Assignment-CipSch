import { Card, Typography } from "@mui/material";

function LoginErrCard(){
    return(
        <Card sx={{my:2}}>
            <Typography color={'red'} align="center">To perform that action, please Login or Signup!</Typography>                
        </Card>
    );
}
export default LoginErrCard