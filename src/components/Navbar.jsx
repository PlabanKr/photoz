import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Stack,
  Button,
} from "@mui/material";
import CameraOutlinedIcon from "@mui/icons-material/CameraOutlined";
import { account } from "../services/appwrite.config";

const Navbar = () => {
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    async function getUserData() {
      try {
        const userData = await account.get();
        setUserDetails(userData);
      } catch (error) {
        console.error(error);
      }
    }

    getUserData();
  }, []);

  const signOut = async () => {
    await account.deleteSession("current");
    handleNavigation("/");
  };
  const navigate = useNavigate();
  const handleNavigation = (link) => {
    navigate(link);
  };
  return (
    <AppBar>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          onClick={() => handleNavigation("/")}
        >
          <CameraOutlinedIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Photoz
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit" onClick={() => handleNavigation("/")}>
            Home
          </Button>
          {userDetails.email ? (
            <>
              <Button color="inherit" onClick={() => handleNavigation("/profile")}>
                Profile
              </Button>
              <Button color="inherit" onClick={signOut}>
                Sign out
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={() => handleNavigation("/signup")}>
                Sign up
              </Button>
              <Button color="inherit" onClick={() => handleNavigation("/signin")}>
                Sign in
              </Button>
            </>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
