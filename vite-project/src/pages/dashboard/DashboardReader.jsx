import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

export default function DashboardReader() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState("");

  const articleData = [
    { month: "Jan", articles: 20 },
    { month: "Feb", articles: 35 },
    { month: "Mar", articles: 28 },
    { month: "Apr", articles: 45 },
    { month: "May", articles: 30 },
    { month: "Jun", articles: 50 },
  ];

  const engagementData = [
    { day: "Mon", views: 120 },
    { day: "Tue", views: 200 },
    { day: "Wed", views: 150 },
    { day: "Thu", views: 300 },
    { day: "Fri", views: 250 },
    { day: "Sat", views: 400 },
    { day: "Sun", views: 350 },
  ];

  const recentArticles = [
    { title: "Breaking News: Tech Update", category: "Technology", date: "2025-09-25" },
    { title: "Sports Highlights Today", category: "Sports", date: "2025-09-26" },
    { title: "World Politics Roundup", category: "Politics", date: "2025-09-27" },
    { title: "New Health Research", category: "Health", date: "2025-09-28" },
  ];

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden font-sans">
      {/* Mobile Sidebar Backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-gradient-to-b from-indigo-600 to-purple-600 text-white transition-transform duration-300 ease-in-out rounded-r-2xl shadow-lg
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:rounded-r-none`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="px-6 py-6 text-2xl font-bold border-b border-white/30">
            Reader Panel
          </div>
          <nav className="flex-1 px-2 py-4 space-y-1">
            {[
              { name: "Home", icon: "🏠" },
              { name: "My Feed", icon: "📰" },
              { name: "Bookmarks", icon: "🔖" },
              { name: "Notifications", icon: "🔔" },
              { name: "Messages", icon: "✉️" },
              { name: "Categories", icon: "📂", submenu: ["Tech", "Health", "Sports", "Politics"] },
              { name: "Settings", icon: "⚙️" },
            ].map((item) => (
              <div key={item.name}>
                <button
                  onClick={() =>
                    setActiveSubmenu(activeSubmenu === item.name ? "" : item.name)
                  }
                  className="flex items-center w-full px-4 py-2 text-left rounded-lg hover:bg-white/20 focus:outline-none transition"
                >
                  <span className="mr-3">{item.icon}</span>
                  <span className="flex-1 font-medium">{item.name}</span>
                  {item.submenu && (
                    <span className="text-white/70">
                      {activeSubmenu === item.name ? "▲" : "▼"}
                    </span>
                  )}
                </button>
                {item.submenu && activeSubmenu === item.name && (
                  <div className="ml-8 mt-1 space-y-1">
                    {item.submenu.map((sub) => (
                      <a
                        key={sub}
                        href="#"
                        className="block px-2 py-1 text-sm rounded hover:bg-white/30 transition"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        {/* Navbar */}
        <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200 px-6 shadow-sm">
          <div className="flex items-center space-x-4">
            <button
              className="text-gray-600 focus:outline-none md:hidden text-2xl"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              ☰
            </button>
            <div className="relative text-gray-600">
              <input
                className="border border-gray-300 h-10 w-64 md:w-80 px-4 pr-10 rounded-full text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                type="search"
                placeholder="Search news..."
              />
              <button
                type="submit"
                className="absolute right-3 top-2 text-gray-500 text-lg"
              >
                🔍
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-800 text-xl">🔔</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 text-xl">⚙️</a>
            <a
              href="#"
              className="flex items-center text-gray-600 hover:text-gray-800 font-semibold px-3 py-1 rounded-lg hover:bg-gray-100 transition"
            >
              Logout
            </a>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Welcome, Reader 🎉</h1>
            <p className="mt-2 text-gray-500">Stay updated with your personalized news dashboard.</p>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Articles Read", count: 320, color: "bg-indigo-100 text-indigo-700" },
              { title: "Bookmarked", count: 45, color: "bg-green-100 text-green-700" },
              { title: "Notifications", count: 12, color: "bg-yellow-100 text-yellow-700" },
              { title: "Following", count: 25, color: "bg-pink-100 text-pink-700" },
            ].map((card) => (
              <div
                key={card.title}
                className={`p-6 rounded-2xl shadow-lg ${card.color} hover:scale-105 transform transition`}
              >
                <h2 className="text-lg font-semibold">{card.title}</h2>
                <p className="text-3xl font-bold mt-2">{card.count}</p>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h2 className="text-lg font-semibold mb-4">Articles Read Per Month</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={articleData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="articles" fill="#6366F1" radius={[5, 5, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h2 className="text-lg font-semibold mb-4">Daily Engagement (Views)</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={engagementData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="views" stroke="#10B981" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Articles Table */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-lg font-semibold mb-4">Recent Articles</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left font-medium text-gray-700 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left font-medium text-gray-700 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left font-medium text-gray-700 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-center font-medium text-gray-700 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentArticles.map((article, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800">
                        {article.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                        {article.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                        {article.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <button className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
