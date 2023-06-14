import React, { useContext } from "react";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Fade,
  FormControlLabel,
  Menu,
  MenuItem,
  Snackbar,
  Switch,
  Toolbar,
  Tooltip,
  styled,
} from "@mui/material";
import welcome from "../../assets/welcome.jpeg";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/Themeprovider";

const Title = styled(Box)`
  font-weight: 700;
  margin-left: 8px;
  font-size: 20px;
`;
const Headerbar = styled(AppBar)`
  height: 64px;
  text-decoration: none;
  box-shadow: none;
  position: static;
`;

const Wrapperbox = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const IconWrap = styled(Box)`
  box-shadow: 1px 1px 5px 1px #878787;
  border-radius: 100%;
  width: 30px;
  padding: 8px;
  text-align: center;
  margin-right: 20px;
`;

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [state, setState] = React.useState({
    opens: false,
    vertical: "top",
    horizontal: "center",
  });
  const { opens } = state;

  const handleClicks = (newState) => () => {
    setState({ opens: true, ...newState });
  };

  const handleCloses = () => {
    setState({ ...state, opens: false });
  };

  const { darkmode, setDarkmode } = useContext(ThemeContext);

  const toggledark = () => {
    setDarkmode(!darkmode);
    localStorage.setItem("darkmode", !darkmode);
  };

  return (
    <Headerbar
      style={darkmode ? { background: "#002f5e" } : { background: "" }}
    >
      <Wrapperbox>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={welcome}
              width={35}
              height={35}
              style={{ borderRadius: "8px" }}
              alt="welcome"
            />
            <Title component="h3">Breathly</Title>
          </Link>
        </Box>
        <Box
          style={{ display: "flex", alignItems: "center", marginLeft: "8px" }}
        >
          <Tooltip title={darkmode ? "Enable Light Mode" : "Enable Dark Mode"}>
          <FormControlLabel
            control={
              <Switch color="default" checked={darkmode} onClick={toggledark} />
            }
            color="#fff"
          /></Tooltip>
          <Button>
            <Badge badgeContent={1} color="warning">
              <NotificationsIcon
                onClick={handleClicks({
                  vertical: "bottom",
                  horizontal: "right",
                })}
                style={{ fontSize: 28, color: "#fff" }}
                color="action"
              />
              <Snackbar
                open={opens}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                autoHideDuration={6000}
                onClose={handleCloses}
                sx={{
                  ".MuiSnackbarContent-root": {
                    backgroundColor: "rgb(170, 3, 170)",
                  },
                }}
                message="Meditation class is live! Click Here to Join!"
              />
            </Badge>
          </Button>
          <Button
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <AccountCircleIcon style={{ fontSize: 38, color: "#fff" }} />
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose}>
              <IconWrap component={"span"}>
                <PermIdentityIcon color="primary" />
              </IconWrap>
              Profile
            </MenuItem>
            <Link
              to="/account"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MenuItem onClick={handleClose}>
                <IconWrap component={"span"}>
                  <AccountBalanceIcon color="primary" />
                </IconWrap>
                My Acoount
              </MenuItem>
            </Link>
            <Link
              to="/firstpage"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MenuItem onClick={handleClose}>
                <IconWrap component={"span"}>
                  <LogoutIcon color="primary" />
                </IconWrap>
                Logout
              </MenuItem>
            </Link>
          </Menu>
        </Box>
      </Wrapperbox>
    </Headerbar>
  );
};

export default Navbar;
