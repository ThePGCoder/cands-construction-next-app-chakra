'use client';

import { useContext, useEffect } from "react";
import { ActiveRouteContext } from "@/lib/hooks/activeRouteContext";

export default function AboutRouteClientLogic() {
  const { changeActiveRoute } = useContext(ActiveRouteContext);

  useEffect(() => {
    changeActiveRoute("About Us");
  }, []);

  return null;
}
