import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  CircularProgress,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { account } from "../services/appwrite.config";
import Navbar from "../components/Navbar";

const SigninPage = () => {
  const [userDetail, setUserDetail] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    setLoading(true);
    try {
      await account.createSession(userDetail.email, userDetail.password);
      handleNavigation("/profile");
    } catch (error) {
      console.error(error);
    }
  };

  const navigate = useNavigate();
  const handleNavigation = (link) => {
    navigate(link);
  };

  return (
    <>
      <Navbar />
      <Container className="topMargin10">
        <Stack alignItems="center" justify="center">
          {loading ? (
            <CircularProgress />
          ) : (
            <>
              <Typography variant="h5">Sign in</Typography>
              <form noValidate>
                <TextField
                  id="email"
                  label="Email"
                  type="email"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  onChange={(event) => {
                    setUserDetail({
                      ...userDetail,
                      email: event.target.value,
                    });
                  }}
                />
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  onChange={(event) => {
                    setUserDetail({
                      ...userDetail,
                      password: event.target.value,
                    });
                  }}
                />
              </form>
              <Button variant="contained" size="large" onClick={signIn}>
                Sign in
              </Button>{" "}
            </>
          )}
        </Stack>
      </Container>
    </>
  );
};

export default SigninPage;
