import React from 'react';

export default function MovieCard({ video }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <video
        className="w-full h-48 object-cover"
        src={`http://localhost:4000${video.url}`}
        controls
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold truncate">{video.name}</h2>
        <a
          href={`http://localhost:4000${video.url}`}
          download
          className="mt-2 inline-block bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
        >
          Download
        </a>
      </div>
    </div>
  );
}