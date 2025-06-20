import React from 'react';
import MovieCard from './MovieCard';

export default function MovieGrid({ videos }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {videos.map(video => (
        <MovieCard key={video.name} video={video} />
      ))}
    </div>
  );
}