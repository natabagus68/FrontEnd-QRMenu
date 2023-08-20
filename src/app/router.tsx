import { Error404 } from "@common/components/error";
import { AdminLayoutView } from "@features/admin/admin-layout/admin-layout-view";
import { AuthLayoutView } from "@features/auth/auth-layout/auth-layout-view";
import { LoginView } from "@features/auth/login/login-view";
import { RegisterUserView } from "@features/auth/register-user/register-user-view";
import { Outlet, createBrowserRouter } from "react-router-dom";
const Root = () => {
  return <Outlet />;
};
export const router = createBrowserRouter([
  {
    path: "",
    element: <AuthLayoutView />,
    children: [
      {
        path: "",
        element: <LoginView />,
      },
      {
        path: "register",
        element: <RegisterUserView />,
      },
    ],
  },
  {
    path: "admin",
    element: <AdminLayoutView />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
