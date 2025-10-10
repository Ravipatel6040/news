import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserTable from "../../components/UserTable";
import NewsTable from "../../components/NewsTable";

export default function DashboardAdmin() {
  const [users, setUsers] = useState([]);
  const [news, setNews] = useState([]);
  const [activeTab, setActiveTab] = useState("users"); // users | news
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    if (!token) return navigate("/admin/login");
    fetchUsers();
    fetchNews();
  }, []);

  // ✅ Fetch users
  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/admin/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setUsers(data.users || []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // ✅ Fetch pending news
  const fetchNews = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/news/pending", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setNews(data.news || []);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  // ✅ Approve or Reject news
  const handleApprove = async (id) => {
    await fetch(`http://localhost:5000/api/news/approve/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ action: "approved" }),
    });
    fetchNews();
  };

  const handleReject = async (id, reason = "") => {
    await fetch(`http://localhost:5000/api/news/approve/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ action: "rejected", rejectionReason: reason }),
    });
    fetchNews();
  };

  // ✅ Block/unblock users
  const handleBlockToggle = async (userId, isBlocked) => {
    const url = `http://localhost:5000/api/admin/users/${userId}/${isBlocked ? "unblock" : "block"}`;
    await fetch(url, {
      method: "PATCH",
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchUsers();
  };

  // ✅ Delete users
  const handleDelete = async (userId) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    await fetch(`http://localhost:5000/api/admin/users/${userId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchUsers();
  };

  // ✅ Logout
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-r border-gray-200 shadow-md md:h-screen sticky top-0">
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">Admin Panel</h2>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          <button
            onClick={() => setActiveTab("users")}
            className={`text-left px-4 py-2 rounded-lg font-medium transition ${
              activeTab === "users"
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            Registered Users
          </button>
          <button
            onClick={() => setActiveTab("news")}
            className={`text-left px-4 py-2 rounded-lg font-medium transition ${
              activeTab === "news"
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            News Management
          </button>
          <button
            onClick={handleLogout}
            className="text-left px-4 py-2 rounded-lg font-medium hover:bg-red-100 text-red-600 transition"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6">
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-6">
          {activeTab === "users" ? (
            <>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Registered Users
              </h3>
              <UserTable
                users={users}
                onBlockToggle={handleBlockToggle}
                onDelete={handleDelete}
              />
            </>
          ) : (
            <>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Pending News
              </h3>
              <NewsTable
                news={news}
                onApprove={handleApprove}
                onReject={handleReject}
              />
            </>
          )}
        </div>
      </main>
    </div>
  );
}
