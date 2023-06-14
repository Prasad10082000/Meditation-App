import { Box, Button, styled } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import welcome from "../../assets/welcome.jpeg";
import { ThemeContext } from "../../context/Themeprovider";

const UserMsg = styled(Box)`
  /* padding-top: 40px; */
  font-weight: 400;
  font-size: 39px;
`;

const Rotateimg = styled("img")`
  height: 35vh;
  border-radius: 50%;
  margin-top: 16px;
  transition: 2s;
  &:hover {
    transform: rotateY(180deg);
  }
`;

const MidSection = () => {
  const today = new Date();
  const dayNumber = today.getDay();
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = weekdays[dayNumber];

  const day = today.getDate();
  const month = today.getMonth();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = months[month];
  const Datenew = dayName + ", " + day + "  " + monthName;

  const hours = today.getHours();
  const minutes = today.getMinutes();
  const meridiem = hours >= 12 ? "PM" : "AM";
  const hours12 = hours % 12 || 12;
  const formattedTime =
    hours12 + ":" + addLeadingZero(minutes) + " " + meridiem;

  function addLeadingZero(time) {
    return time < 10 ? "0" + time : time;
  }

  const [userMsg, setUsermsg] = useState("");

  useEffect(() => {
    const currentTime = new Date();
    const hours = currentTime.getHours();

    if (hours >= 5 && hours < 12) {
      setUsermsg("Good Morning");
    } else if (hours >= 12 && hours < 17) {
      setUsermsg("Good Afternoon");
    } else {
      setUsermsg("Good Evening");
    }
  }, [userMsg]);

  const {darkmode} = useContext(ThemeContext);

  return (
    <Box>
      <UserMsg component={"h1"}>{userMsg}, User</UserMsg>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button variant={darkmode ? "contained" : "outlined"}>{Datenew}</Button>
        <Button variant={darkmode ? "contained" : "outlined"} style={{ padding: "5px 15px", margin: 8 }}>
          {formattedTime}
        </Button>
      </Box>
      <Box>
        <Rotateimg src={welcome} alt="welcome" />
      </Box>
    </Box>
  );
};

export default MidSection;
