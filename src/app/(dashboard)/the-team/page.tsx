"use client"

import Middle from "@/lib/components/Middle";
import { ActiveRouteContext } from "@/lib/hooks/activeRouteContext";
import React, { useContext, useEffect } from "react";

interface TheTeamProps {}

const TheTeam: React.FC<TheTeamProps> = () => {
  const { changeActiveRoute } = useContext(ActiveRouteContext);
  
    useEffect(() => {
      changeActiveRoute("The Team");
    }, []);
  return <Middle>TheTeam</Middle>;
};

export default TheTeam;
