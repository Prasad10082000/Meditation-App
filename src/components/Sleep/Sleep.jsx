import { Box, Button, Paper, Typography, styled } from '@mui/material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { ThemeContext } from '../../context/Themeprovider';


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
  const {darkmode} = useContext(ThemeContext);
  return (
    <>
    <Paper elevation={5} style={darkmode ? {background:"#000",color:"#fff",borderBottom:"1px solid #fff"}:{}}>
            <Box style={{display:"flex",justifyContent:"space-between"}}>
            <Title style={darkmode ? {color:"#fff"}:{}}><ArrowBackIosIcon/></Title>
            <Title component="h4" style={darkmode ? {color:"#fff"}:{}}>Sleep</Title>
          <Title style={darkmode ? {color:"#fff"}:{}}><AccessAlarmIcon/></Title>
        </Box>
        <BtnWrapper>
            <Link to="/sleep"><Sleepbtns style={darkmode ? {color:"#fff"}:{}}>All</Sleepbtns></Link>
            <Link to="/sleep/myfav"><Sleepbtns style={darkmode ? {color:"#fff"}:{}}>MyFavorite</Sleepbtns></Link>
            <Link to="/sleep/stories"><Sleepbtns style={darkmode ? {color:"#fff"}:{}}>Stories</Sleepbtns></Link>
            <Link to="/sleep/music"><Sleepbtns style={darkmode ? {color:"#fff"}:{}}>Music</Sleepbtns></Link>
        </BtnWrapper>
    </Paper>
    </>
  )
}

export default Sleep;