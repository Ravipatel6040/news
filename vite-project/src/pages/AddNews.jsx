import React, { useState } from "react";

export default function AddNews() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Please fill all fields");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const newNews = {
        id: Date.now(),
        title,
        description,
        image: reader.result,
        date: new Date().toLocaleString(),
      };

      // Save to localStorage
      const existing = JSON.parse(localStorage.getItem("newsList")) || [];
      localStorage.setItem("newsList", JSON.stringify([newNews, ...existing]));

      alert("News added successfully!");
      setTitle("");
      setDescription("");
      setImage(null);
      document.getElementById("imageInput").value = "";
    };

    if (image) {
      reader.readAsDataURL(image);
    } else {
      reader.onloadend();
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
            placeholder="Enter news title"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter news description"
            className="border border-gray-300 rounded-lg px-4 py-2 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition resize-none"
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
          className="mt-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 rounded-lg transition-all duration-300"
        >
          Add News
        </button>
      </form>
    </div>
  );
}
