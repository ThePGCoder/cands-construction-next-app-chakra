import {
  Box,
  Center,
  Drawer,
  Heading,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import NavMenu from "./nav-menu/NavMenu";
import Logo from "./components/Logo";

interface DrawerProps {
  isOpen: any;
  onClose: any;
  toggleDrawer: any;
}

const MobileDrawer: React.FC<DrawerProps> = ({
  onClose,
  isOpen,
  toggleDrawer,
}) => {
  return (
    <>
      <Drawer onClose={onClose} isOpen={isOpen} placement="left">
        <DrawerOverlay />
        <DrawerContent
          bg={useColorModeValue("#fff", "#1a202c")}
          alignItems="center"
        >
          <Box pt={6} pb={6}>
          <Logo size="s"/>
          </Box>

          <Divider width="90%" />

          <NavMenu toggleDrawer={toggleDrawer} />
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileDrawer;
