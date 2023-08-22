import {
  Navbar,
  SpeedDial,
  SpeedDialAction,
  SpeedDialContent,
  SpeedDialHandler,
  Typography,
} from "@material-tailwind/react";
import { HomeIcon, MenuIcon, Power, QrCodeIcon, Settings } from "lucide-react";

export const NavbarComponent = ({ closeDrawer }) => {
  return (
    <>
      <Navbar className="mx-auto max-w-full px-4 py-3 pr-16 rounded-none bg-[#005aec] border-none">
        <div className="flex flex-wrap items-center justify-between gap-y-4">
          <div className="flex items-center gap-4">
            <MenuIcon
              size={29}
              onClick={closeDrawer}
              className="cursor-pointer "
            />

            <Typography
              variant="h6"
              className="mr-4 ml-2 cursor-pointer py-1.5  flex items-center gap-2 text-[25px] text-white"
            >
              <QrCodeIcon size={32} /> QRMenu
            </Typography>
          </div>
          <div>
            <SpeedDial placement="right">
              <SpeedDialHandler>
                <Settings
                  size={24}
                  color="white"
                  className="transition-transform group-hover:rotate-45"
                />
              </SpeedDialHandler>
              <SpeedDialContent className="flex-row">
                <SpeedDialAction>
                  <HomeIcon size={24} color="black" />
                </SpeedDialAction>
                <SpeedDialAction>
                  <Power size={24} color="black" />
                </SpeedDialAction>
              </SpeedDialContent>
            </SpeedDial>
          </div>
        </div>
      </Navbar>
    </>
  );
};
