import ThemeToggle from "@/lib/components/ThemeToggle";
import { lightBorder, darkBorder } from "@/lib/styles/constants";
import { Box, IconButton, Heading, useColorModeValue } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import LogoCompact from "./components/LogoCompact";
import Logo from "./components/Logo";

interface HeaderProps {
  toggleDrawer: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleDrawer }) => {
  return (
    <>
      <Box
        width={{ base: "100%", sm: "100%", md: "calc(100% - 320px)" }}
        position="fixed"
        zIndex={1000}
        bg={useColorModeValue("#e9e9e9", "#1a202c")}
        height={50}
        display="flex"
        justifyContent={{
          base: "space-between",
          sm: "space-between",
          md: "flex-end",
        }}
        alignItems="center"
        borderBottomWidth={1}
        borderColor={useColorModeValue(lightBorder, darkBorder)}
        marginLeft={{ base: 0, sm: 0, md: 320 }}
        pl={4}
        pr={4}
      >
        <Box display={{ md: "none" }}>
          <IconButton
            aria-label="drawer-button"
            onClick={toggleDrawer}
            size="sm"
          >
            <Icon icon="ri:menu-3-line" height={20} />
          </IconButton>
        </Box>
        <Box
          alignItems="center"
          display={{ base: "flex", sm: "flex", md: "none" }}
        >
          <Logo size="xs" />
        </Box>

        <ThemeToggle />
      </Box>
    </>
  );
};

export default Header;
