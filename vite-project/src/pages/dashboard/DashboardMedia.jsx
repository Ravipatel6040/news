import React, { useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  LayoutDashboard,
  Home,
  User,
  FileText,
  MessageSquare,
  LogOut,
} from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function DashboardMedia() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Chart Data
  const visitorsData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Visitors",
        data: [120, 190, 300, 500, 200, 300, 400],
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.3)",
        tension: 0.4,
      },
    ],
  };

  const engagementData = {
    labels: ["Articles", "Comments", "Shares", "Likes"],
    datasets: [
      {
        label: "Engagement",
        data: [500, 1200, 800, 1500],
        backgroundColor: "rgba(16, 185, 129, 0.6)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: { legend: { display: true, position: "bottom" } },
  };

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Home", icon: Home },
    { name: "Profile", icon: User },
    { name: "Articles", icon: FileText },
    { name: "Users", icon: User },
    { name: "Comments", icon: MessageSquare },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed md:static z-50 top-0 left-0 h-screen w-64 bg-gray-900 text-white transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 flex flex-col`}
      >
        <div className="p-6 text-2xl font-bold border-b border-gray-700">
          Media House
        </div>
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item, i) => (
            <a
              key={i}
              href="#"
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              <item.icon size={20} />
              {item.name}
            </a>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-700">
          <button className="w-full flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg">
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
  <div
    className="fixed inset-0 bg-black bg-opacity-20 z-40 md:hidden"
    onClick={() => setSidebarOpen(false)}
  ></div>
)}

      {/* Main Content */}
      <main className="flex flex-col flex-1 overflow-y-auto">
        {/* Navbar */}
        <header className="flex items-center justify-between h-16 bg-white shadow px-4">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden p-2 rounded-lg bg-gray-100"
              onClick={() => setSidebarOpen(true)}
            >
              ☰
            </button>
            <div className="relative w-full max-w-lg">
              <input
                className="w-full border rounded-lg py-2 px-4 pl-10 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
                type="search"
                placeholder="Search news, articles..."
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M17 10a7 7 0 1 1-14 0a7 7 0 0 1 14 0z"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-gray-100">🔔</button>
            <button className="p-2 rounded-full hover:bg-gray-100">⚙️</button>
            <img
              src="https://via.placeholder.com/40"
              alt="profile"
              className="rounded-full h-8 w-8"
            />
          </div>
        </header>

        {/* Dashboard Content */}
        <section className="p-6 space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "Articles", value: "1,240", icon: "📰", color: "from-blue-500 to-blue-600" },
              { title: "Users", value: "3,540", icon: "👤", color: "from-green-500 to-green-600" },
              { title: "Comments", value: "12,430", icon: "💬", color: "from-purple-500 to-purple-600" },
              { title: "Revenue", value: "$45,000", icon: "💰", color: "from-yellow-400 to-yellow-500" },
            ].map((stat, i) => (
              <div
                key={i}
                className="relative bg-gradient-to-r p-[2px] rounded-2xl shadow-lg hover:scale-[1.02] transition-transform"
              >
                <div className="bg-white rounded-2xl p-6 flex items-center gap-4">
                  <div
                    className={`flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${stat.color} text-white text-3xl shadow-md`}
                  >
                    {stat.icon}
                  </div>
                  <div>
                    <h3 className="text-gray-500 text-sm">{stat.title}</h3>
                    <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow">
              <h2 className="text-lg font-semibold mb-4">Weekly Visitors</h2>
              <Line data={visitorsData} options={chartOptions} />
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h2 className="text-lg font-semibold mb-4">User Engagement</h2>
              <Bar data={engagementData} options={chartOptions} />
            </div>
          </div>

          {/* Recent Articles Table */}
          <div className="bg-white p-6 rounded-2xl shadow-lg overflow-x-auto">
            <h2 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">Recent Articles</h2>
            <table className="min-w-full text-sm divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-gray-600 font-medium uppercase tracking-wider">Title</th>
                  <th className="px-6 py-3 text-center text-gray-600 font-medium uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-center text-gray-600 font-medium uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-center text-gray-600 font-medium uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  ["Breaking News Update", "Politics", "2025-09-28", "Published"],
                  ["Sports Highlights", "Sports", "2025-09-27", "Draft"],
                  ["Tech Trends 2025", "Technology", "2025-09-26", "Published"],
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="transition duration-200 hover:bg-gray-50 cursor-pointer"
                  >
                    <td className="px-6 py-4 text-gray-700 font-medium">{row[0]}</td>
                    <td className="px-6 py-4 text-center text-gray-500">{row[1]}</td>
                    <td className="px-6 py-4 text-center text-gray-500">{row[2]}</td>
                    <td className="px-6 py-4 text-center">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          row[3] === "Published"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {row[3]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
