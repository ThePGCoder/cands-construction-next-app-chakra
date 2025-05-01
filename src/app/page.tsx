"use client";

import Middle from "@/lib/components/Middle";
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
      <Middle>...loading</Middle>
    </>
  );
};

export default Splash;
