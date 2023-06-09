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
const Sleep = () => {
  return (
    <>
    <Paper elevation={5}>
            <Box style={{display:"flex",justifyContent:"space-between"}}>
            <Title><ArrowBackIosIcon/></Title>
            <Title component="h4">Sleep</Title>
          <Title><AccessAlarmIcon/></Title>
        </Box>
        <BtnWrapper>
            <Link to="/sleep"><Sleepbtns>All</Sleepbtns></Link>
            <Link to="/sleep/myfav"><Sleepbtns>MyFavorite</Sleepbtns></Link>
            <Link to="/sleep/stories"><Sleepbtns>Stories</Sleepbtns></Link>
            <Link to="/sleep/music"><Sleepbtns>Music</Sleepbtns></Link>
        </BtnWrapper>
    </Paper>
    </>
  )
}

export default Sleep;