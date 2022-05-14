import React from 'react'
import New from '../assests/new.jpeg'
import NavbarTop from './navbar'


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



function NewCourses() {
  return (
    <div className='newCourses'>
      <NavbarTop />
      <div>
        <img style={{ width: "100%" }} src={New} alt="New Courses" />
      </div>
      <h1>
        Available Programs
      </h1>
      <div className='cardClass'>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography >
              Web and Mobile App
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography >
              Graphic Designing
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography >
              CCO
            </Typography>
          </CardContent>
        </Card>
        <Card className='cardDisabled' sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography >
              CCA
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default NewCourses