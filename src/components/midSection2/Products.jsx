import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import React, { useContext } from "react";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import { data } from "../../Database/data";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/Themeprovider";

const Title = styled(Box)`
  font-size: 25px;
  color: #00008b;
  margin: 24px;
`;

const Products = () => {
  const {darkmode} = useContext(ThemeContext);
  return (
    <Box>
      <Title component={"h4"} sx={{ textAlign: "left" }} style={darkmode ? {color:"#fff"}:{color:""}}>
        <SpaOutlinedIcon /> Meditation
      </Title>
      <Divider style={darkmode?{ margin: 16, background: "#fff" }:{ margin: 16, background: "#0E00A0" } } />
      <Grid container spacing={1}>
        {data.map((item) => (
          <Grid item xl={3} lg={3} md={4} sm={6} xs={6} key={item.id}>
            <Link
              to={`/song/${item.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card
                sx={{
                  maxWidth: 340,
                  height: {
                    xs: "270px",
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
                <audio src={item.audio1}></audio>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
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

export default Products;
