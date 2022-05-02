import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { account } from "../services/appwrite.config";
import Navbar from "../components/Navbar";

const SignupPage = () => {
  const [userDetail, setUserDetail] = useState({
    name: "",
    email: "",
    password: "",
  });

  const signUp = async () => {
    try {
      await account.create(
        "unique()",
        userDetail.email,
        userDetail.password,
        userDetail.name
      );
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
          <Typography variant="h5">Sign up</Typography>
          <form noValidate>
            <TextField
              id="name"
              label="Name"
              type="text"
              variant="outlined"
              margin="normal"
              fullWidth
              onChange={(event) => {
                setUserDetail({
                  ...userDetail,
                  name: event.target.value,
                });
              }}
            />
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
          <Button variant="contained" size="large" onClick={signUp}>
            Sign up
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default SignupPage;
