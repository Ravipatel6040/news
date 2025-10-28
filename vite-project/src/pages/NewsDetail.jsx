import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newsItem, setNewsItem] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/news/${id}`);
        const data = await res.json();
        if (data.success) setNewsItem(data.news);
      } catch (err) {
        console.error("Error fetching news detail:", err);
      }
    };
    fetchNews();
  }, [id]);

  if (!newsItem) return <p className="text-center mt-10 text-gray-500">Loading...</p>;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden">
        {newsItem.image && (
          <img
            src={
              newsItem.image.startsWith("http")
                ? newsItem.image
                : `http://localhost:5000/${newsItem.image}`
            }
            alt={newsItem.title}
            className="w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-in-out"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        {/* Title overlay */}
        <div className="absolute bottom-10 left-0 w-full px-6 md:px-20 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
            {newsItem.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-gray-200 mt-4 text-sm">
            <span>🕒 {new Date(newsItem.createdAt).toLocaleDateString()}</span>
            <span>✍️ {newsItem.createdBy?.name || "Anonymous"}</span>
          </div>
        </div>

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 bg-white/90 hover:bg-white text-gray-800 px-4 py-2 rounded-full shadow-md flex items-center gap-2 transition"
        >
          ← Back
        </button>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg -mt-10 md:-mt-20 relative z-10 p-6 sm:p-10">
        <p className="text-lg leading-relaxed text-gray-800 whitespace-pre-line">
          {newsItem.description}
        </p>
      </div>

      {/* Footer CTA */}
      <div className="max-w-4xl mx-auto text-center mt-10 mb-16 px-4 text-gray-600">
        <hr className="mb-6 border-gray-300" />
        <p className="text-sm">
          📢 Stay updated with the latest headlines —{" "}
          <span
            onClick={() => navigate("/")}
            className="text-teal-600 font-medium hover:underline cursor-pointer"
          >
            visit our homepage
          </span>{" "}
          for more news.
        </p>
      </div>
    </div>
  );
}
