import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material';
import Meditation from './Meditation';
import { ThemeContext } from '../../context/Themeprovider';

const Musical = () => {
  const {darkmode} = useContext(ThemeContext)
  return (
    <Box style={darkmode ? {background:"#000",height:"100vh"}:{}}>
    <Meditation/>
    <Typography style={{margin:16,fontSize:20}}>Musical Works</Typography>
    </Box>
  )
}

export default Musical;