import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/404Page";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import "./App.css";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import AddImagePage from "./pages/AddImagePage";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="signin" element={<SigninPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="add-img" element={<AddImagePage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
