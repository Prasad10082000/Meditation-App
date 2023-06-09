  import React from "react";
  import { useParams } from "react-router-dom";
  import { data } from "../../Database/data";
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
      background-image: linear-gradient(64.3deg,rgba(254,122,152,.81) 17.7%,rgba(255,206,134,1) 64.7%,rgba(172,253,163,.64) 112.1%);
      margin-bottom: 20px;
      height: 100vh;
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

  const Songs = () => {
    const { id } = useParams();
    const itemId = parseInt(id);
    const item = data.find((item) => item.id === itemId);
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

  export default Songs;
