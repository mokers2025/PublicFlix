import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import MovieGrid from './components/MovieGrid';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/videos')
      .then(res => setVideos(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <MovieGrid videos={videos} />
      </div>
    </div>
  );
}
export default App;