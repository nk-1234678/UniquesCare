import ProtectedLayout from "../layouts/ProtectedLayout";
import Student from "../pages/Dashboard/Student";
import Technician from "../pages/Dashboard/Technician";

const PrivateRoutes = [
  {
    path: "/dashboard",
    element: <ProtectedLayout />,
    children: [
      { path: "student", element: <Student /> },
      { path: "Technician", element: <Technician /> },

    ],
  },
];

export default PrivateRoutes;