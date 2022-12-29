import React from "react";
import {AppBar, Button, Toolbar, Typography} from '@mui/material';
import { Box } from "@mui/system";

const Header = ()=> {
    return (
    <AppBar position="stick">
        <Toolbar sx = {{background:"#f9f9f9"}}>
            <Typography variant="h4" color={"#333"}>
                LETU
            </Typography>
            <Box display="flex" marginLeft="auto">
                <Button variant="contained"  sx={{margin:1, borderRadius:10}} color="warning">
                    Login</Button>
                <Button variant="contained"  sx={{margin:1, borderRadius:10}} color="warning">
                    Signup</Button>
            </Box>
        </Toolbar>
    </AppBar>
    );
};

export default Header;