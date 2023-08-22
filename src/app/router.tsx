import { Error404 } from "@common/components/error";
import { AdminLayoutView } from "@features/admin/admin-layout/admin-layout-view";
import { ItemFormView } from "@features/admin/products/items/form/item-form-view";
import { ItemView } from "@features/admin/products/items/items/items-view";
import { TableFormView } from "@features/admin/tables/form/table-form-view";
import { TableView } from "@features/admin/tables/table/table-view";
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
    children: [
      {
        path: "product",
        element: <Root />,
        children: [
          {
            path: "item",
            element: <Root />,
            children: [
              {
                path: "",
                element: <ItemView />,
              },
              {
                path: "add",
                element: <ItemFormView />,
              },
              {
                path: ":id/edit",
                element: <ItemFormView />,
              },
            ],
          },
        ],
      },
      {
        path: "table",
        element: <Root />,
        children: [
          {
            path: "",
            element: <TableView />,
          },
          {
            path: "add",
            element: <TableFormView />,
          },
          {
            path: ":id/edit",
            element: <TableFormView />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
