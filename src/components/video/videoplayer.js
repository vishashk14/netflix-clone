import axios from "axios";
import React, { useEffect, useState, useRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const VideoPlayer = ({ fetchURL }) => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => setVideo(response.data.results));
  }, [fetchURL]);

  console.log(video);

  return <div>videoplayer</div>;
};

export default VideoPlayer;
