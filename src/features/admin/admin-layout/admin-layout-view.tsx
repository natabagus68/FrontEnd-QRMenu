import { NavbarComponent } from "@common/components/navbar/Navbar";
import { useAdminLayout } from "./admin-layout-view-model";
import { SideBarComponent } from "@common/components/sidebar/SideBar";
import { Outlet } from "react-router-dom";
import { Footer } from "@common/components/Footer";

export const AdminLayoutView = () => {
  const model = useAdminLayout();
  return (
    <>
      <main className="w-full">
        <NavbarComponent closeDrawer={model.onSideBar} />
        <SideBarComponent
          open={model.openSideBar}
          closeDrawer={model.onSideBar}
        />
        <div
          className={`flex flex-col flex-1 ${
            // eslint-disable-next-line no-extra-boolean-cast
            !!model.openSideBar ? "overflow-y-hidden" : "overflow-auto "
          }  `}
        >
          <div className="flex-grow p-12 mb-8">
            <Outlet />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};
