"use client";
export default function RelatedVideos() {
  const videos = [
    {
      title: "How Gautam Adani Plans To Overcome His US Indictment |...",
      channel: "The Deshbhakt",
      views: "270K views",
      time: "4 hours ago"
    },
    {
      title: "এরশাদের শাসনামল ১৯৮২ থেকে ১৯৯০। দশের দশকের রাজনীতি ও উত্থান...",
      channel: "চলন কৃষক শাহেদিন",
      views: "34K views",
      time: "8 hours ago"
    },
    {
      title: "'Worst of the worst': Go inside El Salvador's fortress prison for...",
      channel: "CNN",
      views: "2.5M views",
      time: "6 days ago"
    },
    {
      title: "Illegal, they go through hell to come and live in Europe -...",
      channel: "Imineo Documentaries",
      views: "3.9M views",
      time: "9 months ago"
    }
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Related Videos</h2>
      <div className="space-y-4">
        {videos.map((video, index) => (
          <div key={index} className="flex space-x-2">
            <div className="w-40 h-24 bg-gray-300 rounded-lg flex-shrink-0"></div>
            <div>
              <h3 className="font-semibold">{video.title}</h3>
              <p className="text-sm text-gray-500">{video.channel}</p>
              <p className="text-sm text-gray-500">
                {video.views} • {video.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
