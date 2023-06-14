import React, { useContext } from "react";
import { Box, List, ListItem, Switch, styled } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LoginIcon from '@mui/icons-material/Login';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SyncIcon from '@mui/icons-material/Sync';


import { Link } from "react-router-dom";
import FormDialog from "./AccountDialog";
import { ThemeContext } from "../../context/Themeprovider";

const Heading = styled(ListItem)`
  display: flex;
  align-items: center;
`;

const Account = () => {
  const {darkmode} =useContext(ThemeContext);
  return (
    <Box style={darkmode? {background:"#000",height:"100vh"}:{}}>
      <List style={{ padding: "16px",marginBottom:50,lineHeight:1}}>
        <Link to="/setting" style={{textDecoration:"none",color:"inherit"}}>
                <Heading>
          <ArrowBackIosIcon />
          <Box
            component="span"
            style={darkmode?{ color: "#fff", fontSize: "20px", fontWeight: 600}:{ color: "#696767", fontSize: "20px", fontWeight: 600 }}
          >
            Account
          </Box>
        </Heading>
        </Link>

        <ListItem style={{display:"flex",justifyContent:"space-between"}}>
          <Box style={{display:"flex",alignItems:"center"}}>
            <PersonOutlineIcon color="primary" style={{padding:"8px",boxShadow:"1px 1px 5px 1px #878787",borderRadius:"50%"}}/>
            <Box component="span" style={{margin:16}}>Your Name</Box>
          </Box>
          <Box style={{display:"flex",alignItems:"center"}}><Box style={{margin:16}} component="span"> The gamer </Box><ArrowForwardIosIcon fontSize="16px"/></Box>
        </ListItem>
        <ListItem style={{display:"flex",justifyContent:"space-between"}}>
          <Box style={{display:"flex",alignItems:"center"}}>
            <LoginIcon color="primary" style={{padding:"8px",boxShadow:"1px 1px 5px 1px #878787",borderRadius:"50%"}}/>
            <Box component="span" style={{margin:16}}>You'r signed in as</Box>
          </Box>
          <Box style={{display:"flex",alignItems:"center"}}><Box style={{margin:16}} ><FormDialog/></Box><ArrowForwardIosIcon fontSize="16px"/></Box>
        </ListItem>
        <ListItem style={{display:"flex",justifyContent:"space-between"}}>
          <Box style={{display:"flex",alignItems:"center"}}>
            <LockOpenOutlinedIcon color="primary" style={{padding:"8px",boxShadow:"1px 1px 5px 1px #878787",borderRadius:"50%"}}/>
            <Box component="span" style={{margin:16}}>Change your password</Box>
          </Box>
          <Box><ArrowForwardIosIcon  fontSize="16px"/></Box>
        </ListItem>
        <ListItem style={{display:"flex",justifyContent:"space-between"}}>
          <Box style={{display:"flex",alignItems:"center"}}>
            <SyncIcon color="primary" style={{padding:"8px",boxShadow:"1px 1px 5px 1px #878787",borderRadius:"50%"}}/>
            <Box component="span" style={{margin:16}}>Sync with Google Fit</Box>
          </Box>
          <Box><Switch defaultChecked/></Box>
        </ListItem>
      </List>
    </Box>
  );
};

export default Account;
