import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { useNavigate } from "react-router";
import { sliderData } from "../../utilities/sliderData";
import { FaArrowRightLong } from "react-icons/fa6";

const Slider = () => {
  const navigate = useNavigate();
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (_, time) => {
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        {sliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-full relative max-h-[480px] rounded-lg overflow-hidden">
              <img
                src={item.imageURL}
                alt={`Slider Image ${item.id}`}
                className="w-full"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-[#11111186] grid place-items-center backdrop-blur-[2px]">
                <div className="text-primary-content text-center space-y-3.5 max-w-2xl">
                  <h1 className="font-extrabold text-5xl">{item.title}</h1>
                  <p>{item.subtitle}</p>
                  <button
                    onClick={() => navigate("explore-toys")}
                    className="btn btn-accent text-white group"
                  >
                    Explore Toys{" "}
                    <FaArrowRightLong className="group-hover:ml-1.5 duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div
          className="size-12 z-10 absolute bottom-4 right-4 flex items-center justify-center font-bold text-white"
          slot="container-end"
        >
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default Slider;
