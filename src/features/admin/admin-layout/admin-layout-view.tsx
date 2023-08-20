import { NavbarComponent } from "@common/components/navbar/Navbar";
import { useAdminLayout } from "./admin-layout-view-model";
import { SideBarComponent } from "@common/components/sidebar/SideBar";
import { Outlet } from "react-router-dom";

export const AdminLayoutView = () => {
  const model = useAdminLayout();
  return (
    <>
      <main>
        <NavbarComponent closeDrawer={model.onSideBar} />
        <SideBarComponent
          open={model.openSideBar}
          closeDrawer={model.onSideBar}
        />
        <div className="w-full h-full overflow-y-scroll">
          <Outlet />
        </div>
      </main>
    </>
  );
};
