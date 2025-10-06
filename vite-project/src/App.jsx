import React from "react";
import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next"; // ✅ Import translation hook

// Components & Pages
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NewsFeedPage from "./pages/NewsFeedPage";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Role-based dashboards
import DashboardReader from "./pages/dashboard/DashboardReader";
import DashboardReporter from "./pages/dashboard/DashboardReporter";
import DashboardMedia from "./pages/dashboard/DashboardMedia";

export default function App() {
  const { i18n } = useTranslation(); // ✅ Hook to switch language

  // ✅ Function to change language dynamically
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      {/* 🌐 Language Switch Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "10px 20px",
          background: "#f5f5f5",
        }}
      >
        <button
          onClick={() => changeLanguage("en")}
          style={{
            marginRight: "10px",
            background: i18n.language === "en" ? "#007bff" : "#ddd",
            color: i18n.language === "en" ? "#fff" : "#000",
            border: "none",
            borderRadius: "5px",
            padding: "5px 10px",
            cursor: "pointer",
          }}
        >
          English
        </button>
        <button
          onClick={() => changeLanguage("hi")}
          style={{
            background: i18n.language === "hi" ? "#007bff" : "#ddd",
            color: i18n.language === "hi" ? "#fff" : "#000",
            border: "none",
            borderRadius: "5px",
            padding: "5px 10px",
            cursor: "pointer",
          }}
        >
          हिन्दी
        </button>
      </div>

      {/* 🔝 Navbar */}
      <Navbar />

      {/* 🧭 Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/explore" element={<NewsFeedPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* 🧩 Role-based dashboards */}
        <Route path="/dashboard/reader" element={<DashboardReader />} />
        <Route path="/dashboard/reporter" element={<DashboardReporter />} />
        <Route path="/dashboard/media" element={<DashboardMedia />} />
      </Routes>
    </>
  );
}
