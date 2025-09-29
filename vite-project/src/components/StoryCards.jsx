import placeholder from "../assets/images/placeholder.png";

export default function StoryCard({ story }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={story.image || placeholder}
        alt={story.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 hover:text-indigo-600">{story.title}</h2>
        <p className="text-gray-600 mt-2">{story.snippet}</p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">{story.reporter}</span>
            {story.verified && (
              <span className="text-xs bg-green-200 text-green-800 px-2 py-0.5 rounded-full">
                KYC Verified
              </span>
            )}
          </div>
          <div className="flex space-x-2 text-gray-500 text-sm">
            <span>👍 {story.likes}</span>
            <span>💬 {story.comments}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
