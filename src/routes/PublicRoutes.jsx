// src/routes/PublicRoutes.jsx
import React from "react";
import PublicLayout from "../layouts/PublicLayout";
import LandingPage from "../pages/LandingPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";

const PublicRoutes = [
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { path: "", element: <LandingPage /> }, 
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage/> },
      
    ],
  },
];

export default PublicRoutes;