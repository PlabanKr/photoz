import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import Navbar from "../components/Navbar";

const SigninPage = () => {
  return (
    <>
      <Navbar />
      <Container className="topMargin10">
        <Stack alignItems="center" justify="center">
          <Typography variant="h5">Sign in</Typography>
          <form noValidate>
            <TextField
              id="email"
              label="Email"
              type="email"
              variant="outlined"
              margin="normal"
              fullWidth
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              fullWidth
            />
          </form>
          <Button variant="contained" size="large">
            Sign in
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default SigninPage;
