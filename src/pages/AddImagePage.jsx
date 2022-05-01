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

const AddImagePage = () => {
  const navigate = useNavigate();
  const handleNavigation = (link) => {
    navigate(link);
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
            />
            <TextField
              id="url"
              label="Image Url"
              type="text"
              variant="outlined"
              margin="normal"
              fullWidth
            />
          </form>
          <Button variant="contained" size="large">
            Add Image
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default AddImagePage;
