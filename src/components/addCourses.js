import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const initalState = {
    name: "",
    description: "",
    enrollStudent: ""
}


function AddCourses() {
    let navigate = useNavigate();

    const [fields, setFields] = useState(initalState)
    const onFormChange = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value,
        })
    }
    const onSubmit = (e) => {
        console.log(fields, "add course----")
        // http://localhost:4000/api/post/courses
        e.preventDefault();
        axios.post('http://localhost:4000/api/post/courses', fields).then((result) => {
            if (result?.data?.success) {
                console.log("result", result)
                alert('Create Course Succesfully')
            }
            console.log(result)
        }).catch((err) => {
            console.log("err", err)
        })
    }

    return (
        <div>
            <div className='form'>
                <div className='formInput'>
                    <Paper className='paper' elevation={3} >
                        <form onSubmit={onSubmit}>
                            <TextField name="name" type="text" onChange={onFormChange} label="Course Name" variant="outlined" required />
                            <TextField
                                name="description"
                                id="outlined-multiline-static"
                                label="Course Description"
                                multiline
                                rows={10}
                                onChange={onFormChange}
                            />
                            <TextField name="enrollStudent" onChange={onFormChange} type="number" label="Capactiy Of Students" variant="outlined" required />
                            <div className='div-button'>
                                <Button type='submit' style={{ backgroundColor: "#61aa79" }} variant="contained" defaultChecked >Submit</Button>
                            </div>
                        </form>
                    </Paper>
                </div>
            </div >
        </div>

    )
}

export default AddCourses