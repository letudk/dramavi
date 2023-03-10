import React, { useState } from "react";
import {AppBar, Button, Tabs, Tab,  Toolbar, Typography} from '@mui/material';
import { Box } from "@mui/system";
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

const Header = ()=> {
    const isLoggedIn = useSelector(state =>state.isLoggedIn );
    console.log(isLoggedIn);
    const [value, setValue] = useState();
    return (
    <AppBar position="sticky">
        <Toolbar sx = {{background:"#f9f9f9"}}>
            <Typography variant="h4" color={"#333"}>
                LETU
            </Typography>
           { isLoggedIn && <Box display= "flex" marginLeft="auto" marginRight ="auto">
                <Tabs color={"#222222"} value={value} onChange={(e,val) => setValue(val)}>
                    <Tab LinkComponent={Link} to="/blog" label ="All Blog"/>
                    <Tab LinkComponent={Link} to="/blog/add" label ="Add Blog"/>
                    <Tab LinkComponent={Link} to="/profile" label ="Profile"/>
                </Tabs>
            </Box> }
            
            <Box display="flex" marginLeft="auto">
            { !isLoggedIn && <Button LinkComponent={Link} to="/login" variant="contained"  sx={{margin:1, borderRadius:10}} color="warning">
                    Login</Button> }
                <Button variant="contained"  sx={{margin:1, borderRadius:10}} color="warning">
                    Signup</Button>
                { isLoggedIn &&<Button variant="contained"  sx={{margin:1, borderRadius:10}} color="warning">
                    Logout</Button> }
            </Box>
        </Toolbar>
    </AppBar>
    );
};

export default Header;