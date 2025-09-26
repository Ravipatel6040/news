import React from 'react'


export default function StoryCard({story}){
return (
<article className="bg-white rounded-lg shadow hover:shadow-md overflow-hidden">
<a href={`/story/${story.id}`} className="block">
<div className="h-44 w-full hero-bg" style={{backgroundImage:`url('${story.img}')`}} />
</a>
<div className="p-4">
<a href={`/story/${story.id}`} className="text-lg font-semibold block hover:text-indigo-600">{story.title}</a>
<div className="mt-3 flex items-center justify-between text-sm text-gray-500">
<div className="flex items-center gap-4">
<span>❤ {story.meta.likes}</span>
<span>💬 {story.meta.comments}</span>
<span>🔁 {story.meta.shares}</span>
</div>
<span className="text-xs">2h ago</span>
</div>
</div>
</article>
)
}