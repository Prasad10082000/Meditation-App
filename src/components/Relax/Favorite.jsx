import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material';
import Relax from './Relax';
import { ThemeContext } from '../../context/Themeprovider';

const Favorite = () => {
  const {darkmode} = useContext(ThemeContext)
  return (
    <Box style={darkmode ? {background:"#000",height:"100vh"}:{}}>
    <Relax/>
    <Typography style={{margin:16,fontSize:20}}>Favorite Works</Typography>
    </Box>
  )
}

export default Favorite;