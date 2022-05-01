import { useNavigate } from "react-router-dom";
import { Button, Container, Stack, Typography } from "@mui/material";

const PageNotFound = () => {
  const navigate = useNavigate();
  const handleNavigation = (link) => {
    navigate(link);
  };
  return (
    <>
      <Container className="topMargin10">
        <Stack alignItems="center" justify="center">
          <Typography variant="h2">404</Typography>
          <Typography variant="h2">Page Not Found!</Typography>
          <br />
          <Button onClick={() => handleNavigation("/")}>Back to Home</Button>
        </Stack>
      </Container>
    </>
  );
};

export default PageNotFound;
