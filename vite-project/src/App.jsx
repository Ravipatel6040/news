import React from "react";
import { Routes, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NewsFeedPage from './pages/NewsFeedPage';

// Role-based dashboards
import DashboardReader from "./pages/dashboard/DashboardReader";
import DashboardReporter from "./pages/dashboard/DashboardReporter";
import DashboardMedia from "./pages/dashboard/DashboardMedia";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/explore" element={<NewsFeedPage />} />

        {/* Role-based dashboards */}
        <Route path="/dashboard/reader" element={<DashboardReader />} />
        <Route path="/dashboard/reporter" element={<DashboardReporter />} />
        <Route path="/dashboard/media" element={<DashboardMedia />} />
      </Routes>
    </>
  );
}
