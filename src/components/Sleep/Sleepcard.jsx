import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { sleepdata } from "../../Database/data";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/Themeprovider";


const Sleepcard = () => {
  const {darkmode} = useContext(ThemeContext);

  return (
    <Box>
      <Grid container spacing={1}>
        {sleepdata.map((item) => (
          <Grid item xl={3} lg={3} md={4} sm={6} xs={6}  key={item.id}>
             <Link to={`/sleepsong/${item.id}`} style={{textDecoration:"none",color:"inherit"}}>
            <Card sx={{
                  maxWidth: 340,
                  height: {
                    xs: "285px",
                    xl:"250px"
                  },
                  margin:"16px"
                }}
                style={darkmode? {background:"#000",color:"#fff",border:"1px solid #fff",boxShadow:" 0 0 10px 0 white"} : {}}
                >
              <CardMedia
                sx={{ height: 140 }}
                image={item.imgUrl}
                title={item.title}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  style={{ textAlign: "left" }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={darkmode? { textAlign: "left",color:"#fff" } :{textAlign: "left"}}
                >
                  {item.subTitle}
                </Typography>
              </CardContent>
            </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Sleepcard;
