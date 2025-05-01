"use client";

import FadeIn from "@/lib/components/FadeIn";
import HomeLarge from "@/lib/components/HomeLarge";
import HomeSmall from "@/lib/components/HomeSmall";
import Middle from "@/lib/components/Middle";
import { ActiveRouteContext } from "@/lib/hooks/activeRouteContext";
import { Box } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const { changeActiveRoute } = useContext(ActiveRouteContext);

  useEffect(() => {
    changeActiveRoute("Home");
  }, []);

  return (
    <>
      <FadeIn>
        <Box display={{ xl: "none" }} pt="calc((100vh - 100px)* 0.2)">
          <HomeSmall />
        </Box>

        
          <Box
            display={{
              base: "none",
              sm: "none",
              md: "none",
              lg: "none",
              xl: "flex",
            }}
          >
            <Middle><HomeLarge /></Middle>
          </Box>
        
      </FadeIn>
    </>
  );
};

export default Home;
