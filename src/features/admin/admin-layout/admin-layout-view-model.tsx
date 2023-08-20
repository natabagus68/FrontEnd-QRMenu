import { useState } from "react";

export const useAdminLayout = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const onSideBar = () => {
    console.log("klik");
    setOpenSideBar(!openSideBar);
  };
  return {
    openSideBar,
    onSideBar,
  };
};
