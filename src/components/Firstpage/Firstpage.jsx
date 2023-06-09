import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


const Wrapper = styled(Box)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 50px;
`
const Logoimg = styled("img")`
  height: 10vh;
  width: 10vh;
  margin-top: "5vh";
  border-radius: 50%;
  border: 2px solid blue;
  padding: 5px;
`;

const BannerImg = styled("img")`
  height: 40vh;
  width: 40vh;
  border-radius: 50%;
  margin: 3vh;
`;

const Signupbtn = styled(Button)`
  padding: 1vh;
  font-weight: bolder;
  font-size: 18px;
  border-radius: 45px;
  margin: 3vh 0vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Firstpage= () => {
  const Logo = "https://breathlly.netlify.app/assets/logo.png";
  const Banner = "https://breathlly.netlify.app/assets/relax5.webp";
  return (
    <Box style={{ backgroundColor: "#b4cde6", height: "100vh" }}>
      <Wrapper>
        <Box>
          <Logoimg src={Logo} alt="" />
        </Box>
        <Box>
          <BannerImg src={Banner} alt="" />
          <Typography
            component="h1"
            style={{ fontSize: "2.5rem", fontWeight: "bolder" }}
          >
            Breathings
          </Typography>
          <Typography component="h6">Mindful Breathing app</Typography>
        </Box>
        <Box>
          <Link style={{textDecoration:"none",color:"inherit"}} to="/signup"><Signupbtn variant="contained">SIGN UP</Signupbtn></Link>
          <Typography>Already have an account? <Link to="/loginpage">LOG IN</Link></Typography>
        </Box>
      </Wrapper>
    </Box>
  );
};

export default Firstpage;
