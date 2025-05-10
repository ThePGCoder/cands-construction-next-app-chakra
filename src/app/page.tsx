"use client";

import Middle from "@/lib/components/Middle";
import { Spinner } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

interface SplashProps {}

const Splash: React.FC<SplashProps> = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/home");
  });
  return (
    <>
      <Middle><Spinner w="100px"height="100px" thickness={"10px"} color="yellow.500" _dark={{color: "yellow.300"}}/></Middle>
    </>
  );
};

export default Splash;
