import { Accordion, AccordionDetails, AccordionSummary, Box,  Slider,  Typography,  styled } from "@mui/material";
import React, { useState, useRef } from "react";
import { audioset } from "../../Database/data";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Mainbox = styled(Box)`
  background-image: linear-gradient(
    1.8deg,
    rgba(0, 116, 117, 1) 50.2%,
    rgba(232, 232, 232, 1) 100%
  );
  height: 100%;
  padding: 50px;
`;

const Subbox = styled(Box)(({theme})=>({
  width:"80%",
  margin:"auto",
  display:"flex",
  justifyContent:"space-around",
  alignItems:"center",
  flexWrap:"wrap",
  padding:"50px",
  [theme.breakpoints.down("sm")]:{
    width:"60%"
  }
}))


const Wrapper = styled(Box)`
  height: 16vh;
  width: 16vh;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid #fff;
  margin: 16px;
`;
const AudioPlayer = () => {
  const audioRefs = useRef([]);
  const [isPlaying, setIsPlaying] = useState([]);

  const toggleAudio = (index) => {
    const audioRef = audioRefs.current[index];
    const updatedIsPlaying = [...isPlaying];
    updatedIsPlaying[index] = !updatedIsPlaying[index];

    if (updatedIsPlaying[index]) {
      audioRef.play();
    } else {
      audioRef.pause();
    }

    setIsPlaying(updatedIsPlaying);
  };

  return (
    <Mainbox>
      <Subbox>
        {audioset.map((song, index) => (
          <Wrapper
            key={index}
            className={`song-box ${isPlaying[index] ? "active" : ""}`}
            onClick={() => toggleAudio(index)}
            style={{ cursor: "pointer" }}
          >
            <Box style={{marginTop:40,color:"#000",fontWeight:700}}>{song.audiotitle}</Box>
            <audio
              ref={(ref) => (audioRefs.current[index] = ref)}
              src={song.audio}
            />
          </Wrapper>
        ))}
      </Subbox>
      <Box style={{padding:16,marginTop:"100px"}}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{marginLeft:"50%",fontWeight:700,fontSize:25}}>Mixer</Typography>
        </AccordionSummary>
        <AccordionDetails style={{display:"flex",justifyContent:"space-evenly"}}>
      <Slider defaultValue={20} aria-label="Default" valueLabelDisplay="auto" style={{width:"500px"}} />    
      <Slider defaultValue={20} aria-label="Default" valueLabelDisplay="auto" style={{width:"500px"}} />    
        </AccordionDetails>
      </Accordion>
      </Box>
    </Mainbox>
  );
};

export default AudioPlayer;
