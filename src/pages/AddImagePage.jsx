import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { account } from "../services/appwrite.config";
import { createImage } from "../services/database.api";

const AddImagePage = () => {
  const navigate = useNavigate();
  const handleNavigation = (link) => {
    navigate(link);
  };

  const [userDetails, setUserDetails] = useState({});
  const [imageDetails, setImageDetails] = useState({
    title: "",
    url: "",
  });

  async function getUserData() {
    try {
      const userData = await account.get();
      setUserDetails(userData);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  const addImage = () => {
    createImage(imageDetails.title, imageDetails.url, userDetails.$id);
    handleNavigation("/profile");
  };
  return (
    <>
      <Container className="topMargin10">
        <Stack alignItems="end">
          <IconButton
            color="inherit"
            aria-label="close"
            onClick={() => handleNavigation("/profile")}
          >
            <CloseOutlinedIcon />
          </IconButton>
        </Stack>
        <Stack alignItems="center" justify="center">
          <Typography variant="h5">Add Image</Typography>
          <form noValidate>
            <TextField
              id="title"
              label="Image Title"
              type="text"
              variant="outlined"
              margin="normal"
              fullWidth
              onChange={(event) => {
                setImageDetails({
                  ...imageDetails,
                  title: event.target.value,
                });
              }}
            />
            <TextField
              id="url"
              label="Image Url"
              type="text"
              variant="outlined"
              margin="normal"
              fullWidth
              onChange={(event) => {
                setImageDetails({
                  ...imageDetails,
                  url: event.target.value,
                });
              }}
            />
          </form>
          <Button variant="contained" size="large" onClick={addImage}>
            Add Image
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default AddImagePage;
