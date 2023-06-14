import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material';
import Meditation from './Meditation';
import { ThemeContext } from '../../context/Themeprovider';

const Catagory = () => {
  const {darkmode} = useContext(ThemeContext)
  return (
    <Box style={darkmode ? {background:"#000",height:"100vh"}:{}}>
    <Meditation/>
    <Typography style={{margin:16,fontSize:20}}>Catagory Works</Typography>
    </Box>
  )
}

export default Catagory;