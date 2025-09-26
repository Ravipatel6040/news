import React from "react";

export default function DashboardReporter() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Reporter Dashboard</h1>
      <p>Welcome, {localStorage.getItem("name")}! Your role is {localStorage.getItem("role")}.</p>
    </div>
  );
}
