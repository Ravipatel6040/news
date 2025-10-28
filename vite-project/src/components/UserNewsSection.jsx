import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserNewsSection() {
  const [userNews, setUserNews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApprovedNews = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/news/approved");
        const data = await res.json();
        if (data.success) setUserNews(data.news);
      } catch (err) {
        console.error("Error fetching approved news:", err);
      }
    };
    fetchApprovedNews();
  }, []);

  if (userNews.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-10">No news available yet.</p>
    );
  }

  const [mainNews, ...otherNews] = userNews;

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 md:px-10">
        <h2 className="text-3xl font-bold text-center text-teal-700 mb-12">
          🗞️ Trending User News
        </h2>

        {/* ===================== MAIN HEADLINE SECTION ===================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT - Main Headline */}
          <div
            className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            onClick={() => navigate(`/news/${mainNews._id}`)}
          >
            {mainNews.image && (
              <img
                src={
                  mainNews.image.startsWith("http")
                    ? mainNews.image
                    : `http://localhost:5000/${mainNews.image}`
                }
                alt={mainNews.title}
                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 p-6 text-white">
              <span className="bg-teal-600 text-xs uppercase font-semibold px-3 py-1 rounded">
                Top Story
              </span>
              <h3 className="text-3xl md:text-4xl font-bold mt-3 mb-2 leading-tight group-hover:text-teal-300 transition-colors">
                {mainNews.title}
              </h3>
              <p className="text-sm text-gray-200 line-clamp-2">
                {mainNews.description || "Read more about this latest story..."}
              </p>
            </div>
          </div>

          {/* RIGHT - Side Headlines */}
          <div className="flex flex-col gap-5">
            {otherNews.slice(0, 4).map((item) => (
              <div
                key={item._id}
                onClick={() => navigate(`/news/${item._id}`)}
                className="flex gap-4 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all cursor-pointer"
              >
                {item.image && (
                  <img
                    src={
                      item.image.startsWith("http")
                        ? item.image
                        : `http://localhost:5000/${item.image}`
                    }
                    alt={item.title}
                    className="w-28 h-24 object-cover flex-shrink-0"
                  />
                )}
                <div className="p-3 flex flex-col justify-center">
                  <p className="text-xs text-gray-500 mb-1">User Story</p>
                  <h4 className="text-sm font-semibold text-gray-800 leading-snug hover:text-teal-600 transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===================== MORE NEWS GRID ===================== */}
        {otherNews.length > 4 && (
          <div className="mt-14">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-teal-600 pl-3">
              More Stories
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherNews.slice(4).map((item) => (
                <article
                  key={item._id}
                  onClick={() => navigate(`/news/${item._id}`)}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col cursor-pointer"
                >
                  {item.image && (
                    <img
                      src={
                        item.image.startsWith("http")
                          ? item.image
                          : `http://localhost:5000/${item.image}`
                      }
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-5 flex flex-col flex-grow">
                    <p className="text-xs text-gray-400 mb-1">User News</p>
                    <h3 className="text-lg font-semibold text-gray-800 hover:text-teal-600 transition line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                      {item.description || "Click to read full story..."}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
