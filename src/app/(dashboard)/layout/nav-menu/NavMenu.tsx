import React from "react";
import { navItemData } from "../../../../lib/data/NavItemData";
import NavItem from "./components/NavItem";
import { Box } from "@chakra-ui/react";

interface NavMenuProps {
  toggleDrawer?: any;
}

const NavMenu: React.FC<NavMenuProps> = ({toggleDrawer}) => {
  return (
    <>
      <Box>
        {navItemData.map((item, index) => (
          <Box key={index} margin={3}>
            <NavItem item={item} toggleDrawer={toggleDrawer}/>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default NavMenu;
