import React from "react";

export default function NewsTable({ news, onApprove, onReject }) {
  const handleRejectClick = (id) => {
    const reason = prompt("Enter rejection reason (optional):", "");
    onReject(id, reason);
  };

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-md">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">
              Title
            </th>
            <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">
              Submitted By
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
          {news.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center py-6 text-gray-500">
                No pending news
              </td>
            </tr>
          ) : (
            news.map((item) => (
              <tr
                key={item._id}
                className="hover:bg-gray-50 transition-all duration-150"
              >
                <td className="py-4 px-6 text-gray-800">
                  {item.title?.en || item.title?.hi || "N/A"}
                </td>
                <td className="py-4 px-6 text-gray-800">
                  {item.createdBy?.name || "Anonymous"}
                </td>
                <td className="py-4 px-6 text-gray-800 capitalize">
                  {item.status}
                </td>
                <td className="py-4 px-6 text-center space-x-3">
                  <button
                    onClick={() => onApprove(item._id)}
                    className="px-4 py-2 rounded-lg bg-green-100 text-green-700 hover:bg-green-200 text-sm font-medium transition-all duration-200 shadow-sm"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleRejectClick(item._id)}
                    className="px-4 py-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 text-sm font-medium transition-all duration-200 shadow-sm"
                  >
                    Reject
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
