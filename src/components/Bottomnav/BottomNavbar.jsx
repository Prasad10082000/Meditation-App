import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React, { useContext } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import {  useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/Themeprovider";

const BottomNavbar = () => {
  const [value, setValue] = React.useState("Home");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate();

  const handlenavigate = () =>{
    navigate("/sleep")
  }
  
  const handlenavigate0 = () =>{
    navigate("/")
  }
  const handlenavigat1 = () =>{
    navigate("/relax")
  }

  const handlenavigate2 = () =>{
    navigate("/meditation")
  }
  const handlenavigate3 = () =>{
    navigate("/setting")
  }

  const {darkmode} = useContext(ThemeContext);

  return (
    <BottomNavigation
      showLabels
      sx={{ width: "100%", position: "fixed", bottom: 0, left: 0, right: 0 }}
      value={value}
      onChange={handleChange}
      style={darkmode ? {background:"#002f5e" , borderTop:"1px solid #fff"}:{}}
    >
      <BottomNavigationAction
      onClick={handlenavigate0}
        label="Home"
        icon={
            <HomeOutlinedIcon />
        }
        style={darkmode ? {color:"#FFF"} :{}}
      />
      <BottomNavigationAction
      onClick={handlenavigate}
        label="Sleep"
        icon={
            <BedtimeOutlinedIcon />
        }
        style={darkmode ? {color:"#FFF"} :{}}
      />
      <BottomNavigationAction
        label="Meditation"
        onClick={handlenavigate2}
        icon={
            <SpaOutlinedIcon />
        }
        style={darkmode ? {color:"#FFF"} :{}}
      />
      <BottomNavigationAction
        label="Relax"
        onClick={handlenavigat1}
        icon={
            <MusicNoteOutlinedIcon />
        }
        style={darkmode ? {color:"#FFF"} :{}}
      />
      <BottomNavigationAction
        label="Settings"
        onClick={handlenavigate3}
        icon={
            <SettingsOutlinedIcon />
        }
        style={darkmode ? {color:"#FFF"} :{}}
      />
    </BottomNavigation>
  );
};

export default BottomNavbar;
