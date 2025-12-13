import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";

// Public Pages
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login/Login";
import JoinEmployee from "../pages/Auth/JoinEmployee/JoinEmployee";
import JoinHR from "../pages/Auth/JoinHR/JoinHR";

// 404 Page
import ErrorPage from "../pages/ErrorPage";
//DashBoard
import DashboardLayout from "../layouts/DashBoardLayout/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import AddAsset from "../pages/Dashboard/AddAsset/AddAsset";
import AssetList from "../pages/Dashboard/AssetList/AssetList";
import EmployeeList from "../pages/Dashboard/EmployeeList/EmployeeList";
import UpgradePackage from "../pages/Dashboard/UpgradePackage/UpgradePackage";
import PaymentSuccess from "../pages/Dashboard/PaymentSuccess/PaymentSuccess";
import AllRequests from "../pages/Dashboard/AllRequest/AllRequest";
import RequestAsset from "../pages/Dashboard/RequestAsset/RequestAsset";
import HRRoute from "./HRRout";
import EmployeeRoute from "./EmployeeRoute";
import MyAssets from "../pages/Dashboard/AllRequest/MyAssets/MyAssets";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import MyTeam from "../pages/Dashboard/MyTeam/MyTeam";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";
import AboutUs from "../components/Shared/Footer/AboutUs";
import Services from "../components/Shared/Footer/Services";
import Contact from "../components/Shared/Footer/Contact";
import HRAnalytics from "../pages/Dashboard/HR AnalyTics/HrAnalytics";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      // Public Auth Routes
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/join-employee",
        element: <JoinEmployee />,
      },
      {
        path: "/join-hr",
        element: <JoinHR />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <DashboardLayout></DashboardLayout>
          </PrivateRoute>
        ),
        children: [
          {
            path: "add-asset",
            element: (
              <HRRoute>
                <AddAsset></AddAsset>
              </HRRoute>
            ),
          },
          {
            path: "asset-list",
            element: (
              <HRRoute>
                <AssetList></AssetList>
              </HRRoute>
            ),
          },
          {
            path: "employee-list",
            element: (
              <HRRoute>
                <EmployeeList></EmployeeList>
              </HRRoute>
            ),
          },
          {
            path: "all-requests",
            element: (
              <HRRoute>
                <AllRequests></AllRequests>
              </HRRoute>
            ),
          },
          {
            path: "upgrade-package",
            element: (
              <HRRoute>
                <UpgradePackage></UpgradePackage>
              </HRRoute>
            ),
          },
          {
            path: "payment-success",
            element: (
              <HRRoute>
                <PaymentSuccess></PaymentSuccess>
              </HRRoute>
            ),
          },
          {
            path: "payment-history",
            element: (
              <HRRoute>
                <PaymentHistory></PaymentHistory>
              </HRRoute>
            ),
          },
          {
            path: "hr-analytics",
            element: (
              <HRRoute>
                <HRAnalytics></HRAnalytics>
              </HRRoute>
            ),
          },
          // Employee Routes
          {
            path: "my-assets",
            element: (
              <EmployeeRoute>
                <MyAssets></MyAssets>
              </EmployeeRoute>
            ),
          },
          {
            path: "request-assets",
            element: (
              <EmployeeRoute>
                <RequestAsset></RequestAsset>
              </EmployeeRoute>
            ),
          },
          {
            path: "my-team",
            element: (
              <EmployeeRoute>
                <MyTeam></MyTeam>
              </EmployeeRoute>
            ),
          },
          {
            path: "profile",
            element: (
              <EmployeeRoute>
                <MyProfile></MyProfile>
              </EmployeeRoute>
            ),
          },
        ],
      },
    ],
  },
]);
