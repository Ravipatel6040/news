import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [admin, setAdmin] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("adminToken");
      try {
        const res = await fetch("http://localhost:5000/api/admin/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message);
        setAdmin(data.admin);
      } catch (err) {
        setError(err.message);
        localStorage.removeItem("adminToken");
        navigate("/");
      }
    };
    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/");
  };

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Admin Dashboard</h2>
      {admin ? (
        <div>
          <p><b>Email:</b> {admin.email}</p>
          <p><b>Created At:</b> {new Date(admin.createdAt).toLocaleString()}</p>
          <button onClick={handleLogout} style={{ padding: "8px", marginTop: "10px" }}>
            Logout
          </button>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
}
