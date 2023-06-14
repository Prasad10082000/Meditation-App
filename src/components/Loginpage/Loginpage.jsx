import styled from "@emotion/styled";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/Themeprovider";

const LogoImg = styled("img")`
  height: 10vh;
  width: 10vh;
  margin-bottom: 2vh;
  border-radius: 50%;
  border: 2px solid blue;
  padding: 10px;
`;

const OrWrap = styled(Typography)`
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  font-weight: bolder;
  color: gray;
  margin: 16px;
`;

const Loginpage = () => {
  const Logo = "https://breathlly.netlify.app/assets/logo.png";
  const FBlogo = "https://breathlly.netlify.app/assets/facebbok.png";
  const Googlelogo = "https://breathlly.netlify.app/assets/google.png";
  const {darkmode} =useContext(ThemeContext);
  return (
    <>
      <Box style={darkmode? {background:"#000",height:"100vh"}:{}}>
        <Box
          style={{
            maxWidth: "444px",
            display: "flex",
            flexDirection: "column",
            margin:"auto",
            padding:"16px"
          }}
        > 
       <Link to="/firstpage" style={{textDecoration:"none",color:"inherit"}}><Box style={{padding:"8px",boxShadow:"1px 1px 5px 1px #878787",borderRadius:"50%",width:30}}>
        <ArrowBackIcon/>
        </Box></Link>  
          <Box>
            <LogoImg src={Logo} alt="logo" />
            <Typography
              component="h1"
              style={{ fontSize: "1.5rem", fontWeight: "bolder" }}
            >
              Welcome Back!
            </Typography>
          </Box>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <Button variant="contained" style={{ marginBottom: 16,borderRadius:"25px" }}>
              <img
                src={FBlogo}
                alt="fb"
                style={{ height: "30px", marginRight: 15 }}
              />
              Continue With Facebook
            </Button>
            <Button variant="outlined" style={{ marginBottom: 16,borderRadius:"25px" }}>
              <img
                src={Googlelogo}
                alt="google"
                style={{ height: "30px", marginRight: 15 }}
              />
              Continue With Google
            </Button>
          </Box>
          <Box>
            <OrWrap>OR LOG IN WITH EMAIL</OrWrap>
          </Box>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <TextField
              id="outlined-basic"
              label="Email Address *"
              variant={darkmode ?"filled":"outlined"}
              style={darkmode ? { marginBottom: 16,width:"100%" , background:"#FFF" } : { marginBottom: 16,width:"100%" }}
            />
            <TextField
              id="outlined-basic"
              label="Password *"
              variant={darkmode ?"filled":"outlined"}
              style={darkmode ? { marginBottom: 16,width:"100%" , background:"#FFF" } : { marginBottom: 16,width:"100%" }}
            />
          </Box>
          <Box>
            <Box>
              <Link to="/"><Button variant="contained" style={{ marginBottom: 16,width:"100%",borderRadius:"25px",padding:12 }}>Log In</Button></Link>
            </Box>
          </Box>
            <Link style={{marginBottom:16}}>Forgot Password</Link>
          <Box style={{marginBottom:16}}>
            New user? <Link to="/signup">SIGN UP</Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Loginpage;
