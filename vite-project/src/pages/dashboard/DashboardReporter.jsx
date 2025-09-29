import React, { useState, useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function DashboardReporter() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const chartRef = useRef(null);

  const menuItems = [
    { name: "Dashboard", icon: "🏠" },
    { name: "Home", icon: "🏡" },
    { name: "Profile", icon: "👤" },
    { name: "Articles", icon: "📝" },
    { name: "Users", icon: "👥" },
    { name: "Comments", icon: "💬" },
    { name: "Settings", icon: "⚙️" },
  ];

  // Chart data with gradient fill
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "User Growth",
        data: [50, 100, 150, 200, 300, 400, 500],
        borderColor: "#3b82f6",
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return null;
          const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradient.addColorStop(0, "rgba(59, 130, 246, 0.05)");
          gradient.addColorStop(1, "rgba(59, 130, 246, 0.4)");
          return gradient;
        },
        tension: 0.4,
        fill: true,
        borderWidth: 3,
        pointBackgroundColor: "#3b82f6",
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: { font: { size: 14, weight: "500" }, color: "#1f2937" },
      },
      title: {
        display: true,
        text: "Monthly User Growth",
        font: { size: 20, weight: "600" },
        color: "#1f2937",
      },
      tooltip: {
        backgroundColor: "#1f2937",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        cornerRadius: 8,
        padding: 10,
      },
    },
    scales: {
      x: { grid: { color: "rgba(0,0,0,0.05)" }, ticks: { color: "#4b5563", font: { size: 13 } } },
      y: { grid: { color: "rgba(0,0,0,0.05)" }, ticks: { color: "#4b5563", font: { size: 13 } } },
    },
  };

  return (
    <div className="flex h-screen bg-gray-100 relative">
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-10 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-gray-100 rounded-2xl transform transition-transform duration-300 z-20 md:relative md:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="p-6 text-xl font-bold">MyDashboard</div>
          <nav className="flex flex-col flex-1 px-4 py-2 gap-2">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className="flex items-center px-4 py-2 rounded-2xl hover:bg-gray-700 transition"
              >
                <span className="mr-2 text-lg">{item.icon}</span>
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Topbar */}
        <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200 px-4">
          <div className="flex items-center space-x-4">
            <button
              className="md:hidden text-gray-600 hover:text-gray-800 text-2xl"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              ☰
            </button>
            <div className="relative w-64 sm:w-96">
              <input
                type="text"
                placeholder="Search..."
                className="w-full h-10 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              />
              <span className="absolute right-3 top-2 text-gray-500">🔍</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-800">🔔</button>
            <button className="text-gray-600 hover:text-gray-800">⚙️</button>
            <button className="flex items-center text-gray-600 hover:text-gray-800 font-bold">
              Logout
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Total Users", value: 1200, icon: "👥", bg: "from-blue-500 to-blue-400" },
            { title: "Articles", value: 340, icon: "📝", bg: "from-green-500 to-green-400" },
            { title: "Comments", value: 890, icon: "💬", bg: "from-purple-500 to-purple-400" },
            { title: "Revenue", value: "$12.5K", icon: "💰", bg: "from-yellow-500 to-yellow-400" },
          ].map((stat) => (
            <div
              key={stat.title}
              className={`flex items-center p-6 bg-gradient-to-r ${stat.bg} text-white rounded-2xl shadow-lg transform transition-transform hover:scale-105`}
            >
              <div className="text-4xl mr-5">{stat.icon}</div>
              <div>
                <div className="text-sm font-medium uppercase tracking-wider">{stat.title}</div>
                <div className="text-2xl font-bold mt-1">{stat.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="p-6">
          <div className="bg-white p-4 rounded-lg shadow h-80">
            <Line ref={chartRef} data={data} options={options} />
          </div>
        </div>

        {/* Main Panels */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Users Table */}
          <div className="bg-white p-6 rounded-2xl shadow-lg overflow-x-auto">
            <h2 className="text-xl font-bold mb-6 text-gray-800">Recent Users</h2>
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-t-lg">
                  <th className="py-3 px-6 text-left font-medium">Name</th>
                  <th className="py-3 px-6 text-left font-medium">Email</th>
                  <th className="py-3 px-6 text-left font-medium">Role</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "John Doe", email: "john@example.com", role: "Admin" },
                  { name: "Jane Smith", email: "jane@example.com", role: "Editor" },
                  { name: "Mike Johnson", email: "mike@example.com", role: "User" },
                ].map((user, i) => (
                  <tr
                    key={i}
                    className={`border-b transition hover:bg-gray-100 ${i % 2 === 0 ? "bg-gray-50" : "bg-white"
                      }`}
                  >
                    {/* Avatar + Name */}
                    <td className="py-3 px-6 text-gray-700 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold shadow">
                        {user.name.charAt(0)}
                      </div>
                      {user.name}
                    </td>

                    {/* Email */}
                    <td className="py-3 px-6 text-gray-600">{user.email}</td>

                    {/* Role Badge */}
                    <td className="py-3 px-6">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${user.role === "Admin"
                            ? "bg-red-100 text-red-600"
                            : user.role === "Editor"
                              ? "bg-yellow-100 text-yellow-600"
                              : "bg-green-100 text-green-600"
                          }`}
                      >
                        {user.role}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>


          {/* Recent Articles Table */}
          <div className="bg-white p-6 rounded-2xl shadow-lg overflow-x-auto">
            <h2 className="text-xl font-bold mb-6 text-gray-800">Recent Articles</h2>
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-green-500 to-green-400 text-white">
                  <th className="py-3 px-6 text-left font-medium">#</th>
                  <th className="py-3 px-6 text-left font-medium">Article Title</th>
                </tr>
              </thead>
              <tbody>
                {[
                  "How to Learn React in 2025",
                  "Understanding Tailwind CSS",
                  "JavaScript Tips & Tricks",
                  "Building Dashboards with React",
                  "Deploying Node.js Apps",
                ].map((article, i) => (
                  <tr
                    key={i}
                    className={`border-b transition hover:bg-gray-50 ${i % 2 === 0 ? "bg-gray-50" : "bg-white"
                      }`}
                  >
                    <td className="py-3 px-6 text-gray-700 font-medium">{i + 1}</td>
                    <td className="py-3 px-6 text-gray-700">{article}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}
