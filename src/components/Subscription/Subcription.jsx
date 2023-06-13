import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, ListItem, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";


const Heading = styled(ListItem)`
  display: flex;
  align-items: center;
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>

<Link to="/setting" style={{textDecoration:"none",color:"inherit"}}>
                <Heading>
          <ArrowBackIosIcon />
          <Box
            component="span"
            style={{ color: "#696767", fontSize: "20px", fontWeight: 600 }}
          >
            Manage Subscription
          </Box>
        </Heading>
        </Link>


      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="community" {...a11yProps(0)} sx={{pl:{md:20,sm:2},pr:{md:20,sm:2},fontWeight:"bold",color:"#000"}}/>
          <Tab label="Pro" {...a11yProps(1)} sx={{pl:{md:20,sm:2},pr:{md:20,sm:2},fontWeight:"bold",color:"#000"}}/>
          <Tab label="Premium" {...a11yProps(2)} sx={{pl:{md:20,sm:2},pr:{md:20,sm:2},fontWeight:"bold",color:"#000"}}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Typography>Get started with community. Enjoy free meditation at zero cost.</Typography>
        <Typography sx={{display:"flex",justifyContent:"center",alignItems:"center",color:"#2CA24D",marginTop:5}}><Box component="span" sx={{fontSize:"30px",fontWeight:"bold",marginRight:5}}>$0</Box> -Free forever</Typography>
       <Link to="/"><Button variant='contained' sx={{padding:"6px 24px",marginTop:5}}>Explore Now</Button></Link> 
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Typography>Get started with breathly pro and enjoy lots of more features of meditation.</Typography>
        <Typography sx={{display:"flex",justifyContent:"center",alignItems:"center",color:"#3990FF",marginTop:5}}><Box component="span" sx={{fontSize:"30px",fontWeight:"bold",marginRight:5}}>$15</Box> -/Month</Typography>
        <Button variant='contained' sx={{padding:"6px 24px",marginTop:5}}>Buy Pro</Button>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Typography>Get started with breathly premium & enjoy the most advanced features of meditation, as well as the highest priority for support.</Typography>
        <Typography sx={{display:"flex",justifyContent:"center",alignItems:"center",color:"#3990FF",marginTop:5}}><Box component="span" sx={{fontSize:"30px",fontWeight:"bold",marginRight:5}}>$25</Box> -/Month</Typography>
        <Button variant='contained' sx={{padding:"6px 24px",marginTop:5}}>Buy Premium</Button>
      </TabPanel>
    </Box>
  );
}