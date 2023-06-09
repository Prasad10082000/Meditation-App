import { Box, Button, Paper, Typography, styled } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';


const Title = styled(Typography)`
    padding:  1.5vh;
    text-align: center;
    color: #00008b;
    font-weight: 700;
    font-size: 22px;
`
const BtnWrapper = styled(Box)`
    display: flex;
    justify-content: space-around;
`
const Sleepbtns=styled(Button)`
text-transform: inherit;
color: #000;
padding: 8px 16px;
`
const Meditation = () => {
  return (
    <>
    <Paper elevation={5}>
        <Box style={{display:"flex",justifyContent:"space-between"}}>
            <Title><ArrowBackIosIcon/></Title>
            <Title component="h4">Meditation</Title>
          <Title><AccessAlarmIcon/></Title>
        </Box>
        <BtnWrapper>
            <Link to="/meditation"><Sleepbtns>All</Sleepbtns></Link>
            <Link to="/meditation/nature"><Sleepbtns>Nature</Sleepbtns></Link>
            <Link to="/meditation/musical"><Sleepbtns>Musical</Sleepbtns></Link>
            <Link to="/meditation/catagory"><Sleepbtns>Catagory</Sleepbtns></Link>
        </BtnWrapper>
    </Paper>
    </>
  )
}

export default Meditation;