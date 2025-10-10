import React, { useEffect, useState } from "react";
import { IoHeartOutline, IoPersonOutline, IoPricetagsOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";

export default function TrendingStories() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [userNews, setUserNews] = useState([]);

  // Fetch approved user news from backend
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

  const rightStories = [
    { img: "...", titleKey: "story1Title" },
    { img: "...", titleKey: "story2Title" },
    { img: "...", titleKey: "story3Title" },
    { img: "...", titleKey: "story4Title" },
    { img: "...", titleKey: "story5Title" },
    { img: "...", titleKey: "story6Title" },
  ];

  const sideNews = [
    { color: "bg-yellow-500", titleKey: "sideNews1Title", descKey: "sideNews1Desc" },
    { color: "bg-teal-500", titleKey: "sideNews2Title", descKey: "sideNews2Desc" },
    { color: "bg-red-500", titleKey: "sideNews3Title", descKey: "sideNews3Desc" },
  ];

  return (
    <div className="w-full">
      {/* ===================== Main Trending Section ===================== */}
      <div className="max-w-screen-xl mx-auto p-5 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Big Story */}
          <div className="md:col-span-5">
            <a href="#">
              <div
                className="bg-cover bg-center h-64 md:h-80 rounded-lg overflow-hidden"
                style={{ backgroundImage: "url('https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg')" }}
                title={t("bigStoryTitle")}
              />
            </a>
            <div className="mt-3 bg-white rounded-b-lg p-4 shadow">
              <a href="#" className="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900">
                {t("bigStoryCategory")}
              </a>
              <a href="#" className="block text-gray-900 font-bold text-2xl my-2 hover:text-indigo-600">
                {t("bigStoryTitle")}
              </a>
              <p className="text-gray-700">{t("bigStoryDesc")}</p>
            </div>
          </div>

          {/* Right Stories */}
          <div className="md:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-5">
            {rightStories.map((story, index) => (
              <div key={index} className="group">
                <a href="#">
                  <div
                    className="h-40 bg-cover bg-center rounded-lg overflow-hidden group-hover:scale-105 transition-transform"
                    style={{ backgroundImage: `url(${story.img})` }}
                    title={t(story.titleKey)}
                  />
                </a>
                <a href="#" className="block text-gray-900 font-semibold mt-2 hover:text-indigo-600">
                  {t(story.titleKey)}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===================== News Feed Section ===================== */}
      <div className="w-full py-10 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-6 md:px-16">
          <span className="text-md md:text-lg font-bold text-teal-700 flex items-center gap-2">
            <IoHeartOutline /> {t("ourInsights")}
          </span>
          <h2 className="text-4xl md:text-6xl text-center font-bold text-teal-700 mb-16">
            {t("newsFeeds")}
          </h2>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main Article */}
            <div className="lg:w-2/3 xl:w-3/5 bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src="https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg"
                alt="main news"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="p-6 flex flex-col gap-4">
                <div className="flex gap-4 text-gray-700 text-sm font-semibold">
                  <span className="flex items-center gap-1"><IoPersonOutline /> {t("byAdmin")}</span>
                  <span className="flex items-center gap-1"><IoPricetagsOutline /> {t("siteNews")}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-teal-900">{t("latestUpdatesTitle")}</h3>
                <p className="text-gray-600">{t("latestUpdatesDesc")}</p>
              </div>
            </div>

            {/* Side News */}
            <div className="lg:w-1/3 flex flex-col gap-6">
              {sideNews.map((news, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
                  <div className={`p-4 sm:p-6 text-white flex flex-col items-center justify-center ${news.color}`}>
                    <span className="text-3xl md:text-5xl font-bold">03</span>
                    <span className="font-semibold">October</span>
                  </div>
                  <div className="p-4 flex flex-col justify-between">
                    <div className="flex gap-4 text-sm text-gray-700 font-semibold mb-2">
                      <span className="flex items-center gap-1"><IoPersonOutline /> {t("byAdmin")}</span>
                      <span className="flex items-center gap-1"><IoPricetagsOutline /> {t("siteNews")}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-teal-900">{t(news.titleKey)}</h3>
                    <p className="text-gray-600">{t(news.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===================== User Added News ===================== */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-teal-700 text-center mb-10">📰 {t("userAddedNews")}</h2>
            {userNews.length === 0 ? (
              <p className="text-center text-gray-500">{t("noUserNews")}</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {userNews.map((item) => (
                  <div key={item._id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col">
                    {item.image && (
                      <div className="relative w-full h-56">
                        <img src={item.image} alt={item.title[lang] || "News"} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      </div>
                    )}
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-teal-600 transition">
                        {item.title[lang] || item.title.en || item.title.hi}
                      </h3>
                      <p className="text-gray-600 flex-grow">
                        {item.description[lang] || item.description.en || item.description.hi}
                      </p>
                      <div className="mt-3 flex justify-between items-center text-gray-400 text-sm">
                        <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                        <span className="font-medium text-teal-600">{item.createdBy?.name || "User"}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
