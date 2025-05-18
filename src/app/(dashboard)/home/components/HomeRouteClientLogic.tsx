'use client';

import { useContext, useEffect } from "react";
import { ActiveRouteContext } from "@/lib/hooks/activeRouteContext";

export default function HomeRouteClientLogic() {
  const { changeActiveRoute } = useContext(ActiveRouteContext);
  
    useEffect(() => {
      changeActiveRoute("Home");
      const scrollTo = sessionStorage.getItem("scrollTo");
      if (scrollTo) {
        window.scrollTo({ top: parseInt(scrollTo), behavior: "smooth" });
        sessionStorage.removeItem("scrollTo");
      }
    }, []);

  return null;
}
