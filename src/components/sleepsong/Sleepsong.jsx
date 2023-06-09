import React from "react";
import { useParams } from "react-router-dom";
import {  sleepdata } from "../../Database/data";
import { Box, Typography, styled } from "@mui/material";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Mainbox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: radial-gradient(circle,rgba(238,174,202,1) 0%,rgba(236,175,203,1) 3%,rgba(233,175,204,1) 6%,rgba(233,175,204,1) 6%,rgba(148,187,233,1) 100%);
    margin-bottom: 40px;
`

const AudioWrap = styled(Box)`
display: flex;
flex-direction: column;
`
const Title = styled(Typography)`
  color: #00008b;
  font-size: 28px;
  font-weight: 700;
  display: flex;
  align-items: center;
`;

const Imground = styled("img")`
  height: 25vh;
  width: 25vh;
  padding: 16px;
  border-radius: 50%;
  transition: 2s;
  &:hover {
    transform: rotate(360deg);
  }
`;

const Sleepsongs = () => {
  const { id } = useParams();
  const itemId = parseInt(id);
  const item = sleepdata.find((item) => item.id === itemId);
  return (
    <>
      <Mainbox>
        <Box>
          <Title>
            <SelfImprovementIcon style={{ fontSize: 35 }} />
            &nbsp;&nbsp;{item.title}
          </Title>
          <Imground src={item.imgUrl} alt="img" />
        </Box>
        <AudioWrap>
            <Typography style={{fontSize:24}}>Live From Space</Typography>
            <Typography style={{fontSize:16,color:"rgba(0, 0, 0, 0.6)"}}>Mr. The gamer</Typography>
            <audio style={{padding:16}} src={item.audio1} controls></audio>
            <audio style={{padding:16}} src={item.audio2} controls></audio>
            <audio style={{padding:16}} src={item.audio3} controls></audio>
        </AudioWrap>
        <Box style={{padding:16}}>
            <Box style={{padding:16}} component="span"><FavoriteBorderIcon/></Box>
            <Box style={{padding:16}} component="span"><PlaylistAddIcon/></Box>
            <Box style={{padding:16}} component="span"><AccessAlarmIcon/></Box>
            <Box style={{padding:16}} component="span"><MoreVertIcon/></Box>
        </Box>
      </Mainbox>
    </>
  );
};

export default Sleepsongs;
