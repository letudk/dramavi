import { TextField, Typography,Box,Button} from "@mui/material";
import React, {useState} from "react";
import axios from 'axios';

const Login = () =>{
    const [inputs, setInputs] = useState({
        name:"", email:"", password:""
    });
    const [isSignup, setIsSignup] = useState(false);
    const handleChange = (e) =>{
        setInputs( (prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }

    const sendRequest = async() => {
       const res = await axios.post("http://localhost:8000/api/user/login",{
            email: inputs.email,
            password: inputs.password
        }).catch( err => console.log(err) );

        const data = await res.data;

        return data;
    }



    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log(inputs);
        sendRequest();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Box display="flex" 
                    flexDirection="column" 
                    alignItems="center" 
                    justifyContent="center"
                    boxShadow="10px 10px 20px #ccc"
                    padding={3}
                    margin="auto"
                    marginTop={10} 
                    borderRadius = {10}
                    maxWidth={300}>
                    <Typography padding={3} 
                                variant="h2"
                                textAlign="center">{isSignup ? "Signup":"Login"}
                    </Typography>
                    { isSignup && 
                        <TextField 
                            name="name"
                            onChange={handleChange}
                            value={inputs.name}
                            margin="normal" 
                            placeholder="Name"  
                            type="text"/> }
                    <TextField 
                        name="email"
                        onChange={handleChange}
                        value={inputs.email}
                        margin="normal" 
                        placeholder="Email"  
                        type="email"/>
                    <TextField
                        name="password"  
                        onChange={handleChange}
                        value={inputs.password}
                        margin="normal" 
                        placeholder="Password" 
                        type="password"/>
                    <Button sx = {{borderRadius:3, marginTop: 5}}
                            color="warning"
                            variant="outlined"
                            type="submit">Submit</Button>
                    <Button sx = {{borderRadius:3}} onClick = {() =>setIsSignup(!isSignup)}>Change To {isSignup ? "Login":"Signup"}</Button>
                </Box>
            </form>
        </div>
    );
};

export default Login;