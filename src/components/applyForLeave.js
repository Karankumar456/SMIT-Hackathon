import React, { useState } from 'react'


import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const initalState = {
    reason: "",
    startDate: "",
    endDate: "",
    status: "pending"
}


function ApplyForLeave() {
    const [fields, setFields] = useState(initalState)


    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const onFormChange = (e) => {
        setFields({
            ...fields,
            startDate: startDate.toDateString(),
            endDate: endDate.toDateString(),
            [e.target.name]: e.target.value,
        })
    }
    const onSubmit = (e) => {
        console.log(fields, "----")
        e.preventDefault();
    }
    return (
        <div>
            <div >
                <div >
                    <Paper className='paper' elevation={3} >
                        <form onSubmit={onSubmit}>
                            <DatePicker

                                dateFormat="yyyy/MM/dd"
                                selectsRange={true}
                                startDate={startDate}
                                placeholderText="Select date"
                                endDate={endDate}
                                onChange={(update) => {
                                    setDateRange(update);
                                }}
                                withPortal
                            />
                            <TextField
                                id="outlined-multiline-static"
                                label="Reason"
                                name="reason"
                                multiline
                                rows={10}
                                onChange={onFormChange}
                            />
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

export default ApplyForLeave