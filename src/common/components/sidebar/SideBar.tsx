import React from "react";
import {
  Drawer,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  Carrot,
  ChevronDownIcon,
  ChevronRightIcon,
  Computer,
  Drumstick,
  QrCodeIcon,
  Sheet,
  ShoppingBagIcon,
} from "lucide-react";
import { useSideBar } from "./SideBar-model";
import { NavLink } from "react-router-dom";

export const SideBarComponent = ({ open, closeDrawer }) => {
  const model = useSideBar();
  return (
    <React.Fragment>
      <Drawer open={open} onClose={closeDrawer}>
        <div className="mb-2 flex items-center justify-between p-4">
          <h1 className="font-[600] text-[24px] flex items-center gap-2 text-[#514E4E]">
            <QrCodeIcon color="black" size={32} /> QRMenu
          </h1>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <List>
          <NavLink to={"/admin/dashboard"}>
            <ListItem>
              <ListItemPrefix>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </ListItemPrefix>
              Dashboard
            </ListItem>
          </NavLink>
          <Accordion
            open={model.products}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  model.products ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0" selected={model.products}>
              <AccordionHeader
                onClick={model.openProduct}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <Drumstick className="h-5 w-5" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  Products
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <NavLink to={"/admin/product/item"}>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Items
                  </ListItem>
                </NavLink>
                <NavLink to={"/admin/product/category"}>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Categories
                  </ListItem>
                </NavLink>
              </List>
            </AccordionBody>
          </Accordion>
          <NavLink to={"/admin/table"}>
            <ListItem>
              <ListItemPrefix>
                <Sheet size={20} />
              </ListItemPrefix>
              Tables
            </ListItem>
          </NavLink>
          <NavLink to={"/admin/order"}>
            <ListItem>
              <ListItemPrefix>
                <Computer size={20} />
              </ListItemPrefix>
              Orders
              <ListItemSuffix>
                <Chip
                  value="14"
                  size="sm"
                  variant="ghost"
                  color="green"
                  className="rounded-full"
                />
              </ListItemSuffix>
            </ListItem>
          </NavLink>
        </List>
      </Drawer>
    </React.Fragment>
  );
};
