import { useMemo } from "react";
import { Route } from "react-router-dom";
import Basket from "./Pages/Basket";
import DetailedPage from "./Pages/DetailedPage";
import Favorit from "./Pages/Favorit";
import Home from "./Pages/Home";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/karzina",
    name: "Basket",
    component: Basket,
  },
  {
    path: "/favorit",
    name: "Favorit",
    component: Favorit,
  },
  {
    path: "/detailed-page/:id",
    name: "Detailed-Page",
    component: DetailedPage,
  },
];

export const renderRoutes = (routeProps) => {
  return routes.map((route) => {
    return (
      <Route
        key={`route-${route.name}`}
        path={route.path}
        Component={route.component}
      />
    );
  });
};

export const useRoutes = () => useMemo(() => renderRoutes(), []);
