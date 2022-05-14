import React, { useState } from 'react'
import '../App.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import NavbarTop from './navbar';


const initalState = {
    cnic: "",
    registrationNumber: "",
    password: ""
}



function SignUpStudent() {
    let navigate = useNavigate();
    const [fields, setFields] = useState(initalState)
    const onFormChange = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value,
        })
    }
    const onSubmit = (e) => {
        console.log(fields, "----")
        axios.post('http://localhost:4000/api/user/signup', fields).then((result) => {
            if (result?.data?.success) {
                console.log("result", result)

                navigate("/studentLogin");
            }
        }).catch((err) => {
            console.log("err", err)
        })
        e.preventDefault();
    }
        return (
        <div>
            <NavbarTop />
            <div className='form'>
                <div>
                    <h1>
                        Student Sign Up
                    </h1>
                </div>
                <div className='formInput'>
                    <Paper className='paper' elevation={3} >
                        <form onSubmit={onSubmit}>
                            <TextField name="cnic" type="text" onChange={onFormChange} label="CNIC" variant="outlined" required />
                            <TextField name="registrationNumber" onChange={onFormChange} type="text" label="Registration Number" variant="outlined" required />
                            <TextField name="password" onChange={onFormChange} type="password" label="Password" variant="outlined" required />
                            <div className='div-button'>
                                <Button type='submit' style={{ backgroundColor: "#61aa79" }} variant="contained" defaultChecked >Sign up</Button>
                            </div>
                        </form>
                        <div style={{ marginTop: '10px' }}>
                            If you have account then &nbsp;
                            <a href='/studentLogin'>Login</a>
                        </div>
                    </Paper>
                </div>
            </div >
        </div>

    )
}

export default SignUpStudent