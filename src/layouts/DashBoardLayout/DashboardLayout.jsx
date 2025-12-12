import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";

const DashboardLayout = () => {
  const { user } = useAuth();

  // Theme
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  if (!user) return <LoadingSpinner />;

  return (
    <div
      className={`flex min-h-screen ${
        theme === "dark"
          ? "dark bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Sidebar */}
      <aside
        className={`${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        } w-72 shadow-md p-6 fixed lg:static top-0 left-0 h-auto z-40 transform transition-transform duration-300
        ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Close button only mobile */}
        <button
          className="lg:hidden mb-4 text-xl"
          onClick={() => setSidebarOpen(false)}
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold mb-6">AssetVerse Dashboard</h2>

        {/* HR Menu */}
        {user?.role === "hr" && (
          <>
            <h3 className="text-lg font-semibold mb-2">HR MANAGER</h3>
            <nav className="space-y-3 mb-6 flex flex-col">
              <Link to="/dashboard/asset-list" className="hover:text-blue-500">
                📦 Asset List
              </Link>
              <Link to="/dashboard/add-asset" className="hover:text-blue-500">
                ➕ Add an Asset
              </Link>
              <Link
                to="/dashboard/employee-list"
                className="hover:text-blue-500"
              >
                👥 My Employee List
              </Link>
              <Link
                to="/dashboard/all-requests"
                className="hover:text-blue-500"
              >
                📄 All Requests
              </Link>
              <Link
                to="/dashboard/upgrade-package"
                className="hover:text-blue-500"
              >
                🚀 Upgrade Package
              </Link>
              <Link
                to="/dashboard/payment-history"
                className="hover:text-blue-500"
              >
                💳 Payment History
              </Link>
            </nav>
          </>
        )}

        {/* Employee Menu */}
        {user?.role === "employee" && (
          <>
            <h3 className="text-lg font-semibold mb-2">EMPLOYEE</h3>
            <nav className="space-y-3 flex flex-col">
              <Link to="/dashboard/my-assets" className="hover:text-blue-500">
                📁 My Assets
              </Link>
              <Link
                to="/dashboard/request-assets"
                className="hover:text-blue-500"
              >
                📝 Request an Asset
              </Link>
              <Link to="/dashboard/my-team" className="hover:text-blue-500">
                🏢 My Team
              </Link>
              <Link to="/dashboard/profile" className="hover:text-blue-500">
                🙍 Profile
              </Link>
            </nav>
          </>
        )}

        {/* Dark/Light Toggle */}
        <button
          onClick={toggleTheme}
          className="mt-10 w-full py-2 bg-[#00e5ff] hover:bg-[#00bcd4] text-white rounded font-medium"
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-0">
        {/* Header */}
        <header
          className={`${
            theme === "dark" ? "bg-gray-800" : "bg-white"
          } p-4 shadow flex justify-between items-center`}
        >
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>

          <h1 className="text-lg font-semibold">Dashboard Overview</h1>

          <div
            className={`${
              theme === "dark" ? "bg-gray-700" : "bg-gray-300"
            } w-10 h-10 rounded-full`}
          ></div>
        </header>

        <main className="p-6 space-y-8 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
