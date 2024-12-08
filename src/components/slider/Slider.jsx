import "./Slider.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <div className="h-[80vh]">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          // autoplay={{
          //   delay: 4500,
          //   disableOnInteraction: false,
          // }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="relative">
            <div>
              <img
                src="https://images.pexels.com/photos/5902919/pexels-photo-5902919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <p className="absolute bottom-4 left-4 text-black bg-gray-100 brightness-50 p-2 rounded-lg">
              Help other business by donate in our campaign{" "}
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/3277808/pexels-photo-3277808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <p className="absolute bottom-4 left-4 text-black bg-gray-100 brightness-50 p-2 rounded-lg">
              Help other business by donate in our campaign{" "}
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <p className='absolute bottom-4 left-4 text-black bg-gray-100 brightness-50 p-2 rounded-lg'>Help other business by donate in our campaign </p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/6694950/pexels-photo-6694950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <p className='absolute bottom-4 left-4 text-black bg-gray-100 brightness-50 p-2 rounded-lg'>Help other business by donate in our campaign </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
