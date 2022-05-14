import React, { useState } from 'react'
import '../App.css'
import axios from 'axios'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import NavbarTop from './navbar';
import { useNavigate } from "react-router-dom";

const initalState = {
    registrationNumber: "",
    password: ""
}



function SignupStudent() {
    let navigate = useNavigate();

    const [fields, setFields] = useState(initalState)


    const onFormChange = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value,
        })
    }
    const onSubmit = (e) => {
        console.log(fields, "login----")
        e.preventDefault();
        axios.post('http://localhost:4000/api/user/login', fields).then((result) => {
            if (result?.data?.success) {
                console.log("result", result)
                navigate("/");
            }
        }).catch((err) => {
            console.log("err", err)
        })
    }
    return (
        <div>
            <NavbarTop />
            <div className='form'>
                <div>
                    <h1>
                        Student Login
                    </h1>
                </div>
                <div className='formInput'>
                    <Paper className='paper' elevation={3} >
                        <form onSubmit={onSubmit}>
                            <TextField name="registrationNumber" onChange={onFormChange} type="text" label="Registration Number" variant="outlined" required />
                            <TextField name="password" onChange={onFormChange} type="password" label="Password" variant="outlined" required />
                            <div className='div-button'>
                                <Button type='submit' style={{ backgroundColor: "#61aa79" }} variant="contained" defaultChecked >Login</Button>
                            </div>
                        </form>
                        <div style={{ marginTop: '10px' }}>
                            If you have not account then &nbsp;
                            <a href='/studentSignup'>Signup</a>
                        </div>
                    </Paper>
                </div>
            </div >
        </div>

    )
}

export default SignupStudent