import { useEffect } from "react";
import { useProfile } from "../features/authentication/useProfile";
import Spinner from "./Spinner";
import { useNavigate } from "react-router";

function ProtectedRoute({children}) {
  const navigate = useNavigate()
  // Load the authenticated user
  const { isPending, isAuthenticated } = useProfile();

  // 2 Check if user is authenticated, if NO redirect user to login page
  useEffect(() => {
    if (!isAuthenticated && !isPending) {
      navigate("/signin");
    }
  }, [isAuthenticated, isPending, navigate]);

  // 3. While loading, show spinner/loader
  if (isPending) return <Spinner />;

  // 3

  if (isAuthenticated) return children;

  return;
}

export default ProtectedRoute;
