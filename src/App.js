import { Routes } from "react-router-dom";
import { useRoutes } from "./router";
import Nav from "./Navigation/Nav";
import "./index.css";

function App() {
  const routes = useRoutes();
  return (
    <>
      <Nav />
      <Routes>{routes}</Routes>
    </>
  );
}

export default App;
