import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

const navItems = [
  { label: "Dashboard", icon: "📊" },
  { label: "Profile", icon: "👤" },
  { label: "Reports", icon: "📑" },
  { label: "Alerts", icon: "🔔" },
  { label: "Settings", icon: "⚙️" },
];

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div className="flex h-screen bg-[#FAF6F6] overflow-hidden">
      
      {/* Sidebar */}
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        navItems={navItems}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />

      {/* Main Section */}
      <div className="flex flex-col flex-1">

        {/* Topbar */}
        <Topbar title={navItems[activeItem]?.label} />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default DashboardLayout;