import React, { useContext } from 'react'
import Sleep from './Sleep';
import { Box, Typography } from '@mui/material';
import { ThemeContext } from '../../context/Themeprovider';

const Music = () => {
  const {darkmode} = useContext(ThemeContext)
  return (
    <Box style={darkmode ? {background:"#000",height:"100vh"}:{}}>
    <Sleep/>
    <Typography style={{margin:16,fontSize:20}}>Music Works</Typography>
    </Box>
  )
}

export default Music;