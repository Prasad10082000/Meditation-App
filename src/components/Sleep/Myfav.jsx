import React, { useContext } from 'react'
import Sleep from './Sleep';
import { Box, Typography } from '@mui/material';
import { ThemeContext } from '../../context/Themeprovider';

const Myfav = () => {
  const {darkmode} = useContext(ThemeContext)
  return (
    <Box style={darkmode ? {background:"#000",height:"100vh"}:{}}>
    <Sleep/>
    <Typography style={{margin:16,fontSize:20}}>Myfav works!</Typography>
    </Box>
  )
}

export default Myfav;