import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <main className="grid place-items-center min-h-screen">
      <div className="container mx-auto">
        <Outlet />
      </div>
    </main>
  );
};
