import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider";

const useAuthContext = () => {
  return useContext(AuthContext);
};

export default useAuthContext;
