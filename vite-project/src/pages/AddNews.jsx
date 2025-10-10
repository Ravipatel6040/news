import React, { useState } from "react";

export default function AddNews() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("adminToken"); // ✅ Admin token
    if (!token) {
      alert("You are not logged in as admin!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title || ""); // allow empty
    formData.append("description", description || ""); // allow empty

    // Append image if selected, else send a placeholder (optional)
    if (image) {
      formData.append("image", image);
    } else {
      formData.append(
        "image",
        "https://via.placeholder.com/400x200.png?text=No+Image"
      );
    }

    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/news/add", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();
      setLoading(false);

      if (data.success) {
        alert("📰 News submitted successfully!");
        setTitle("");
        setDescription("");
        setImage(null);
        document.getElementById("imageInput").value = "";
      } else {
        alert(`❌ ${data.message}`);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error submitting news:", error);
      alert("Something went wrong. Try again later!");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-teal-700 mb-6">
        📰 Add News
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter news title (optional)"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter news description (optional)"
            className="border border-gray-300 rounded-lg px-4 py-2 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none"
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Image</label>
          <input
            id="imageInput"
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="block text-gray-700"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`mt-4 ${
            loading ? "bg-gray-400" : "bg-teal-600 hover:bg-teal-700"
          } text-white font-semibold py-2 rounded-lg transition-all duration-300`}
        >
          {loading ? "Submitting..." : "Add News"}
        </button>
      </form>
    </div>
  );
}
