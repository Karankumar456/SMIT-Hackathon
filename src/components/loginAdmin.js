import React, { useState } from 'react'
import '../App.css'
import { useNavigate } from "react-router-dom";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import NavbarTop from './navbar';
import axios from 'axios'


const initalState = {
    email: "",
    password: ""
}



function LoginAdmin() {
    let navigate = useNavigate();

    const [fields, setFields] = useState(initalState)


    const onFormChange = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value,
        })
    }
    const onSubmit = (e) => {
        console.log(fields, "Admin----")
        e.preventDefault();
        axios.post('http://localhost:4000/api/user/Admin-login', fields).then((result) => {
            if (result?.data?.success) {
                console.log("result", result)
                navigate("/adminPortal");
            }
            console.log(result)
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
                        Admin Login
                    </h1>
                </div>
                <div className='formInput'>
                    <Paper className='paper' elevation={3} >
                        <form onSubmit={onSubmit}>
                            <TextField name="email" onChange={onFormChange} type="email" label="User Name" variant="outlined" required />
                            <TextField name="password" onChange={onFormChange} type="password" label="Password" variant="outlined" required />
                            {/* <TextField name='registrationNumber' label="Registration Number" variant="outlined" required />
                            <TextField name='password' label="Password" variant="outlined" type="password" required /> */}
                            <div className='div-button'>
                                <Button type='submit' style={{ backgroundColor: "#61aa79" }} variant="contained" defaultChecked >Login</Button>
                            </div>
                        </form>
                    </Paper>
                </div>
            </div >
        </div>

    )
}

export default LoginAdmin