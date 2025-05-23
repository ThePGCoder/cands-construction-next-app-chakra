import React, { useContext, useState } from "react";
import { Icon } from "@iconify/react";
import { Box, Collapse, HStack, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import { ActiveRouteContext } from "@/lib/hooks/activeRouteContext";
import {
  darkGradient,
  darkShadow,
  lightGradient,
  lightShadow,
  primary,
  secondary,
} from "@/lib/styles/constants";

interface NavItemProps {
  item: any;
  toggleDrawer: any;
}

const NavItem: React.FC<NavItemProps> = ({ item, toggleDrawer }) => {
  const { activeRoute } = useContext(ActiveRouteContext);
  const router = useRouter();
  const [expanded, setExpanded] = useState<boolean>(false);
  const pathname = usePathname();

  const scrollTarget = useBreakpointValue({
  base: item.scrollTo?.base,
  sm: item.scrollTo?.sm,
  md: item.scrollTo?.md,
  lg: item.scrollTo?.lg,
});

  return (
    <>
      <Box
        w={290}
        p={2}
        _hover={{
          boxShadow: lightShadow,
          _dark: { boxShadow: darkShadow },
        }}
        borderRadius={4}
        bg={activeRoute === item.title ? lightGradient : ""}
        _dark={{
          bg: activeRoute === item.title ? darkGradient : "",
          color: activeRoute != item.title ? "white" : "black",
        }}
        color={activeRoute === item.title ? "white" : "black"}
        onClick={() => {
          item.dropdown && setExpanded(!expanded);
          const samePage = pathname === item.link;

          if (item.link && item.scrollTo != null) {
            if (samePage) {
    window.scrollTo({ top: scrollTarget ?? 0, behavior: "smooth" });
  } else {
    sessionStorage.setItem("scrollTo", (scrollTarget ?? 0).toString());
    router.push(item.link);
  }
} else if (item.link) {
            router.push(item.link);
          } else if (item.scrollTo != null) {
  window.scrollTo({ top: scrollTarget ?? 0, behavior: "smooth" });
}

          if (item.action) item.action();
          if (!item.dropdown && toggleDrawer) toggleDrawer();
        }}
      >
        <HStack justifyContent="space-between">
          <HStack>
            <Box
              color={activeRoute === item.title ? "" : primary}
              _dark={{ color: activeRoute === item.title ? "" : secondary }}
            >
              <Icon icon={item.icon} height={20} />
            </Box>
            <Box>{item.title}</Box>
          </HStack>

          {item.dropdown && (
            <Box
              transition="transform 150ms ease"
              transform={expanded ? "rotate(180deg)" : ""}
            >
              <Icon icon={"mdi:chevron-down"} height={20} />
            </Box>
          )}
        </HStack>
      </Box>
      <Collapse startingHeight={1} in={expanded}>
        {item.subMenu?.map((item: any, index: any) => (
          <Box
            key={index}
            display="flex"
            alignItems="center"
            p={2}
            borderRadius={4}
            mb={2}
            mt={4}
            ml={6}
            mr={6}
            fontSize="sm"
            _hover={{
              boxShadow: lightShadow,
              _dark: { boxShadow: darkShadow },
            }}
            bg={activeRoute === item.title ? lightGradient : ""}
            _dark={{
              bg: activeRoute === item.title ? darkGradient : "",
              color: activeRoute != item.title ? "white" : "black",
            }}
            color={activeRoute === item.title ? "white" : "black"}
            onClick={() => {
              setExpanded(!expanded);
              !item.dropdown ? router.push(item.link) : {};

              !item.dropdown && toggleDrawer && toggleDrawer();
            }}
          >
            <HStack justifyContent="space-between">
              <HStack>
                <Box
                  color={activeRoute === item.title ? "" : primary}
                  _dark={{ color: activeRoute === item.title ? "" : secondary }}
                >
                  <Icon icon={item.icon} height={20} />
                </Box>
                <Box>{item.title}</Box>
              </HStack>
              {item.dropdown && <Icon icon="mdi:chevron-down" height={20} />}
            </HStack>
          </Box>
        ))}
      </Collapse>
    </>
  );
};

export default NavItem;
