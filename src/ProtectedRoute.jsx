import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { account } from "./services/appwrite.config";
import SignupPage from "./pages/SignupPage";

const ProtectedRoute = () => {
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

  return userDetails.email ? <Outlet /> : <SignupPage />;
};

export default ProtectedRoute;
