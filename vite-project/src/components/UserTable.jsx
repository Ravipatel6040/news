import React from "react";

export default function UserTable({ users, onBlockToggle, onDelete }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-md">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">
              Name
            </th>
            <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">
              Email
            </th>
            <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">
              Role
            </th>
            <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">
              Status
            </th>
            <th className="py-3 px-6 text-center text-sm font-semibold text-gray-700">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {users.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center py-6 text-gray-500">
                No users found
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <tr
                key={user._id}
                className="hover:bg-gray-50 transition-all duration-150"
              >
                <td className="py-4 px-6 text-gray-800">{user.name}</td>
                <td className="py-4 px-6 text-gray-800">{user.email}</td>
                <td className="py-4 px-6 text-gray-800 capitalize">{user.role}</td>
                <td
                  className={`py-4 px-6 font-medium ${
                    user.isBlocked ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {user.isBlocked ? "Blocked" : "Active"}
                </td>
                <td className="py-4 px-6 text-center space-x-3">
                  <button
                    onClick={() => onBlockToggle(user._id, user.isBlocked)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm ${
                      user.isBlocked
                        ? "bg-green-100 text-green-700 hover:bg-green-200"
                        : "bg-red-100 text-red-700 hover:bg-red-200"
                    }`}
                  >
                    {user.isBlocked ? "Unblock" : "Block"}
                  </button>
                  <button
                    onClick={() => onDelete(user._id)}
                    className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm font-medium transition-all duration-200 shadow-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
