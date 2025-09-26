import React from "react";

export default function DashboardMedia() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Media House Dashboard</h1>
      <p>Welcome, {localStorage.getItem("name")}! Your role is {localStorage.getItem("role")}.</p>
    </div>
  );
}
