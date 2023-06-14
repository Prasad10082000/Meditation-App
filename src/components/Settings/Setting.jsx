import React, { useContext } from "react";
import { Box, List, ListItem, Switch, styled } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import DoNotDisturbOutlinedIcon from "@mui/icons-material/DoNotDisturbOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/Themeprovider";

const Heading = styled(ListItem)`
  display: flex;
  align-items: center;
`;

const Setting = () => {
  const { darkmode, setDarkmode } = useContext(ThemeContext);

  const toggledark = () => {
    setDarkmode(!darkmode);
    localStorage.setItem("darkmode", !darkmode);
  };

  return (
    <Box>
      <List style={{ padding: "16px", marginBottom: 50, lineHeight: 1 }}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Heading>
            <ArrowBackIosIcon />
            <Box
              component="span"
              style={
                darkmode
                  ? { color: "#fff", fontSize: "20px", fontWeight: 600 }
                  : { color: "#696767", fontSize: "20px", fontWeight: 600 }
              }
            >
              Settings
            </Box>
          </Heading>
        </Link>

        <ListItem style={{ display: "flex", justifyContent: "space-between" }}>
          <Link
            to="/account"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Box style={{ display: "flex", alignItems: "center" }}>
              <PersonOutlineIcon
                color="primary"
                style={{
                  padding: "8px",
                  boxShadow: "1px 1px 5px 1px #878787",
                  borderRadius: "50%",
                }}
              />
              <Box component="span" style={{ margin: 16 }}>
                Account
              </Box>
            </Box>
          </Link>
          <Box>
            <ArrowForwardIosIcon fontSize="16px" />
          </Box>
        </ListItem>
        <ListItem style={{ display: "flex", justifyContent: "space-between" }}>
          <Link
            to="/subscription"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Box style={{ display: "flex", alignItems: "center" }}>
              <SubscriptionsOutlinedIcon
                color="primary"
                style={{
                  padding: "8px",
                  boxShadow: "1px 1px 5px 1px #878787",
                  borderRadius: "50%",
                }}
              />
              <Box component="span" style={{ margin: 16 }}>
                Manage Subscription
              </Box>
            </Box>
          </Link>
          <Box>
            <ArrowForwardIosIcon fontSize="16px" />
          </Box>
        </ListItem>
        <ListItem style={{ display: "flex", justifyContent: "space-between" }}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <DateRangeOutlinedIcon
              color="primary"
              style={{
                padding: "8px",
                boxShadow: "1px 1px 5px 1px #878787",
                borderRadius: "50%",
              }}
            />
            <Box component="span" style={{ margin: 16 }}>
              Reminders{" "}
            </Box>
          </Box>
          <Box>
            <ArrowForwardIosIcon fontSize="16px" />
          </Box>
        </ListItem>
        <ListItem style={{ display: "flex", justifyContent: "space-between" }}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <DownloadOutlinedIcon
              color="primary"
              style={{
                padding: "8px",
                boxShadow: "1px 1px 5px 1px #878787",
                borderRadius: "50%",
              }}
            />
            <Box component="span" style={{ margin: 16 }}>
              Download over cellular
            </Box>
          </Box>
          <Box>
            <Switch defaultChecked />
          </Box>
        </ListItem>
        <ListItem style={{ display: "flex", justifyContent: "space-between" }}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <DarkModeOutlinedIcon
              color="primary"
              style={{
                padding: "8px",
                boxShadow: "1px 1px 5px 1px #878787",
                borderRadius: "50%",
              }}
            />
            <Box component="span" style={{ margin: 16 }}>
              {darkmode ? "Enable Light Mode" : "Enable Dark Mode"}
            </Box>
          </Box>
          <Box>
            <Switch color="default" checked={darkmode} onClick={toggledark} />
          </Box>
        </ListItem>
        <ListItem style={{ display: "flex", justifyContent: "space-between" }}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <DoNotDisturbOutlinedIcon
              color="primary"
              style={{
                padding: "8px",
                boxShadow: "1px 1px 5px 1px #878787",
                borderRadius: "50%",
              }}
            />
            <Box component="span" style={{ margin: 16 }}>
              Do not disturb
            </Box>
          </Box>
          <Box>
            <Switch />
          </Box>
        </ListItem>
        <ListItem style={{ display: "flex", justifyContent: "space-between" }}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <NotificationsOutlinedIcon
              color="primary"
              style={{
                padding: "8px",
                boxShadow: "1px 1px 5px 1px #878787",
                borderRadius: "50%",
              }}
            />
            <Box component="span" style={{ margin: 16 }}>
              Push Notification
            </Box>
          </Box>
          <Box>
            <Switch />
          </Box>
        </ListItem>
        <ListItem style={{ display: "flex", justifyContent: "space-between" }}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <SupportAgentOutlinedIcon
              color="primary"
              style={{
                padding: "8px",
                boxShadow: "1px 1px 5px 1px #878787",
                borderRadius: "50%",
              }}
            />
            <Box component="span" style={{ margin: 16 }}>
              Support
            </Box>
          </Box>
          <Box>
            <ArrowForwardIosIcon fontSize="16px" />
          </Box>
        </ListItem>
        <ListItem style={{ display: "flex", justifyContent: "space-between" }}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <InfoOutlinedIcon
              color="primary"
              style={{
                padding: "8px",
                boxShadow: "1px 1px 5px 1px #878787",
                borderRadius: "50%",
              }}
            />
            <Box component="span" style={{ margin: 16 }}>
              About
            </Box>
          </Box>
          <Box>
            <ArrowForwardIosIcon fontSize="16px" />
          </Box>
        </ListItem>
        <ListItem style={{ display: "flex", justifyContent: "space-between" }}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <LockOpenOutlinedIcon
              color="primary"
              style={{
                padding: "8px",
                boxShadow: "1px 1px 5px 1px #878787",
                borderRadius: "50%",
              }}
            />
            <Box component="span" style={{ margin: 16 }}>
              Privacy Policy
            </Box>
          </Box>
          <Box>
            <ArrowForwardIosIcon fontSize="16px" />
          </Box>
        </ListItem>
        <ListItem style={{ display: "flex", justifyContent: "space-between" }}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <GavelOutlinedIcon
              color="primary"
              style={{
                padding: "8px",
                boxShadow: "1px 1px 5px 1px #878787",
                borderRadius: "50%",
              }}
            />
            <Box component="span" style={{ margin: 16 }}>
              Terms & Conditions
            </Box>
          </Box>
          <Box>
            <ArrowForwardIosIcon fontSize="16px" />
          </Box>
        </ListItem>
        <ListItem
          style={{
            display: "flex",
            justifyContent: "center",
            color: "#1976d2",
          }}
        >
          Version 1.0
        </ListItem>
      </List>
    </Box>
  );
};

export default Setting;
