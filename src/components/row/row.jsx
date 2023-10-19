import axios from "axios";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => setMovies(response.data.results));
  }, [fetchURL]);

  const truncate = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <section className="my-8">
      <h1 className="text-3xl ps-4 font-bold">{title}</h1>
      <div className="relative flex items-center group">
        <div className="relative w-full mt-4 ps-4">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper fill-none"
          >
            {movies.map((i, index) => {
              return (
                <React.Fragment key={i.id}>
                  <SwiperSlide>
                    <div className="flex flex-col w-[100%] ">
                      <img
                        alt={movies?.data?.title}
                        src={`https://image.tmdb.org/t/p/original/${i?.backdrop_path}`}
                        className="h-auto w-full"
                      />
                      <p className="text-white text-xl mt-1 w-[22rem]">
                        {i?.title}
                      </p>
                      <p className="text-gray-300 mt-2">
                        {truncate(i.overview, 120)}
                      </p>
                    </div>
                  </SwiperSlide>
                </React.Fragment>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Row;
