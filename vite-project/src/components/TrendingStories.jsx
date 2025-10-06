import React from "react";
import { IoHeartOutline, IoPersonOutline, IoPricetagsOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next"; 

export default function TrendingStories() {
  const { t } = useTranslation();

  const rightStories = [
    {
      img: "https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&w=364&h=204&crop=1",
      titleKey: "story1Title",
    },
    {
      img: "https://api.time.com/wp-content/uploads/2020/06/GettyImages-1222922545.jpg?quality=85&w=364&h=204&crop=1",
      titleKey: "story2Title",
    },
    {
      img: "https://api.time.com/wp-content/uploads/2020/07/American-Flag.jpg?quality=85&w=364&h=204&crop=1",
      titleKey: "story3Title",
    },
    {
      img: "https://api.time.com/wp-content/uploads/2020/06/GettyImages-1222922545.jpg?quality=85&w=364&h=204&crop=1",
      titleKey: "story4Title",
    },
    {
      img: "https://api.time.com/wp-content/uploads/2020/07/American-Flag.jpg?quality=85&w=364&h=204&crop=1",
      titleKey: "story5Title",
    },
    {
      img: "https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&w=364&h=204&crop=1",
      titleKey: "story6Title",
    },
  ];

  const sideNews = [
    {
      color: "bg-yellow-500",
      titleKey: "sideNews1Title",
      descKey: "sideNews1Desc",
    },
    {
      color: "bg-teal-500",
      titleKey: "sideNews2Title",
      descKey: "sideNews2Desc",
    },
    {
      color: "bg-red-500",
      titleKey: "sideNews3Title",
      descKey: "sideNews3Desc",
    },
  ];

  return (
    <div>
      {/* Trending Stories Section */}
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
          {/* Left big story */}
          <div className="sm:col-span-5">
            <a href="#">
              <div
                className="bg-cover text-center overflow-hidden"
                style={{
                  minHeight: "300px",
                  backgroundImage:
                    "url('https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&w=1201&h=676&crop=1')",
                }}
                title={t("bigStoryTitle")}
              ></div>
            </a>
            <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
              <div>
                <a
                  href="#"
                  className="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                >
                  {t("bigStoryCategory")}
                </a>
                <a
                  href="#"
                  className="block text-gray-900 font-bold text-2xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out"
                >
                  {t("bigStoryTitle")}
                </a>
                <p className="text-gray-700 text-base mt-2">
                  {t("bigStoryDesc")}
                </p>
              </div>
            </div>
          </div>

          {/* Right side stories */}
          <div className="sm:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-5">
            {rightStories.map((story, index) => (
              <div key={index}>
                <a href="#">
                  <div
                    className="h-40 bg-cover text-center overflow-hidden"
                    style={{ backgroundImage: `url(${story.img})` }}
                    title={t(story.titleKey)}
                  ></div>
                </a>
                <a
                  href="#"
                  className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out"
                >
                  {t(story.titleKey)}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* News Feeds Section */}
      <div className="w-full min-h-screen flex flex-col items-center justify-center py-10">
        <span className="text-md md:text-lg font-bold text-[#117278] flex items-center gap-1">
          <IoHeartOutline /> {t("ourInsights")}
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-7xl text-center chelsea-market-regular font-bold text-[#117278] md:mb-16 mb-10">
          {t("newsFeeds")}
        </h2>

        <div className="px-4 md:px-[2rem] xl:px-[6rem] flex flex-col lg:flex-row gap-10">
          {/* Main News Article */}
          <div className="lg:w-[80%] xl:w-[60%]">
            <img
              className="w-full object-cover h-[12rem] md:h-[18rem] aspect-square"
              src="https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&w=364&h=204&crop=1"
              alt="main news"
            />

            <div className="flex flex-col px-6 py-8 border-l border-r border-b">
              <div className="flex gap-4 text-sm text-gray-700 font-semibold">
                <span className="flex gap-1 items-center">
                  <IoPersonOutline /> {t("byAdmin")}
                </span>
                <span className="flex gap-1 items-center">
                  <IoPricetagsOutline /> {t("siteNews")}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-teal-900 chelsea-market-regular">
                {t("latestUpdatesTitle")}
              </h3>
              <p className="text-md text-gray-500">{t("latestUpdatesDesc")}</p>
            </div>
          </div>

          {/* Side News Articles */}
          <div className="w-full flex flex-col items-stretch justify-center">
            {sideNews.map((news, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-6 pb-6 border-b-2 border-gray-100"
              >
                <div className={`px-6 py-2 text-white flex flex-col items-center justify-center ${news.color}`}>
                  <span className="text-7xl font-semibold">03</span>
                  <span className="font-semibold">October</span>
                </div>

                <div className="flex flex-col justify-between">
                  <div className="flex md:gap-4 gap-2 text-sm text-gray-700 font-semibold">
                    <span className="flex gap-1 items-center">
                      <IoPersonOutline /> {t("byAdmin")}
                    </span>
                    <span className="flex gap-1 items-center">
                      <IoPricetagsOutline /> {t("siteNews")}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-teal-900 capitalize chelsea-market-regular">
                    {t(news.titleKey)}
                  </h3>
                  <p className="text-md text-gray-500">{t(news.descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
