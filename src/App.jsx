import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";

function AppRoutes() {
  const routes = useRoutes(PublicRoutes);
  return routes;
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;