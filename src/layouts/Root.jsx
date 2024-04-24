import { Outlet, useNavigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

export const Root = () => {
  const { logout } = useAuthContext();

  const navigator = useNavigate();

  const handleLogout = () => {
    logout()
      .then(() => {
        console.log("Successfully Logout");
        navigator("/login");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <main className="grid place-items-center min-h-screen">
      <button
        onClick={handleLogout}
        className="btn btn-warning btn-wide btn-lg"
      >
        Logout
      </button>
      <div className="container mx-auto">
        <Outlet />
      </div>
    </main>
  );
};
