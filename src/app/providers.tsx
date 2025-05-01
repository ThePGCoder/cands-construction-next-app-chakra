// app/providers.tsx
"use client";

import { ActiveRouteContext } from "@/lib/hooks/activeRouteContext";
import { theme } from "@/lib/styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import React, { ReactNode, useState } from "react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  const [activeRoute, setActiveRoute] = useState<any>();
  const changeActiveRoute = (route: string | null) => {
    setActiveRoute(route);
  };
  
  return (
    <ChakraProvider theme={theme}>
      <ActiveRouteContext.Provider value={{ activeRoute, changeActiveRoute }}>
        {children}
      </ActiveRouteContext.Provider>
    </ChakraProvider>
  );
};

export default Providers;
