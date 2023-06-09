import { Box, Divider, Typography, styled } from "@mui/material";
import React from "react";

const Title = styled(Typography)`
    font-size: 16px;
    font-weight: bolder;
    margin: 0 0 16px;
` 
const Subelemnts=styled(Typography)`
    font-size: 16px;
    margin: 0 0 16px;
`

const Footer = () => {
  return (
    <Box style={{ backgroundColor: "#024", margin: 16,padding:20 ,marginBottom:50 }}>
      <Box
        style={{
          display: "flex",
          flexWrap:"wrap",
          justifyContent: "space-evenly",
          color: "#fff",
        }}
      >
        <Box style={{textAlign:"left"}}>
          <Title>Daily Meditation</Title>
          <Divider style={{ background: "#fff",margin:"16px 0" }} />
          <Subelemnts>Sleep</Subelemnts>
          <Subelemnts>Relax</Subelemnts>
          <Subelemnts>Calm</Subelemnts>
          <Subelemnts>Mental Health</Subelemnts>
        </Box>
        <Box style={{textAlign:"left"}}>
          <Title>Sleep Meditation</Title>
          <Divider style={{ background: "#fff",margin:"16px 0"  }} />
          <Subelemnts>Peaceful Sleep</Subelemnts>
          <Subelemnts> Gratitude sleep</Subelemnts>
          <Subelemnts>Night Gratitude</Subelemnts>
          <Subelemnts>Deep Sleep</Subelemnts>
        </Box>
        <Box style={{textAlign:"left"}}>
          <Title>Relax Meditation</Title>
          <Divider style={{ background: "#fff",margin:"16px 0"  }} />
          <Subelemnts>Sleep Relaxation</Subelemnts>
          <Subelemnts>Mental Relax</Subelemnts>
          <Subelemnts>Nature Relax</Subelemnts>
          <Subelemnts>Sky Walk</Subelemnts>
        </Box>
        <Box style={{textAlign:"left"}}>
          <Title>Calm Meditation</Title>
          <Divider style={{ background: "#fff",margin:"16px 0"  }} />
          <Subelemnts>Mental Health</Subelemnts>
          <Subelemnts>Mind Therapy</Subelemnts>
          <Subelemnts>Heaven</Subelemnts>
          <Subelemnts>Mentally Relax</Subelemnts>
        </Box>
      </Box>
      <Divider style={{background:"#fff",margin:"16px 0"}}/>
      <Box style={{color:'#fff'}}>
        <Typography style={{margin:"0 0 16px",textAlign:"center"}}>&copy; 2023 Breathings. All Rights Reserved!</Typography>
        <Box style={{display:"flex",justifyContent:"center"}}>
            <Typography>Privacy Policy</Typography>
            <Typography style={{marginLeft:16}}>Cookie Policy</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
