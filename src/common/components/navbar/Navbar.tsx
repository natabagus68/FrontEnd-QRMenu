import { Navbar, Typography } from "@material-tailwind/react";
import { QrCodeIcon, Settings } from "lucide-react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
export const NavbarComponent = ({ closeDrawer }) => {
  return (
    <>
      <Navbar className="mx-auto max-w-full px-4 py-3 pr-16 rounded-none bg-[#005aec] border-none">
        <div className="flex flex-wrap items-center justify-between gap-y-4">
          <div onClick={closeDrawer}>
            <Typography
              variant="h6"
              className="mr-4 ml-2 cursor-pointer py-1.5  flex items-center gap-2 text-[25px] text-white"
            >
              <QrCodeIcon size={32} /> QRMenu
            </Typography>
          </div>

          <Menu>
            <MenuHandler>
              <Settings size={22} />
            </MenuHandler>
            <MenuList>
              <MenuItem>Setting</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Navbar>
    </>
  );
};
