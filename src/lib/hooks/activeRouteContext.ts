import { createContext } from "react";

export const ActiveRouteContext = createContext({
    activeRoute: "",
    changeActiveRoute: (route: string | null) => {
      route;
    },
  });
