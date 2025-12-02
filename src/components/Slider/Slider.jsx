import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { useNavigate } from "react-router";
import { sliderData } from "../../utilities/sliderData";
import { FaArrowRightLong } from "react-icons/fa6";
import MyButton from "../MyButton/MyButton";

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
        loop={true}
      >
        {sliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-full relative h-[60dvh] md:h-[70dvh] rounded-lg overflow-hidden">
              <img
                src={item.imageURL}
                alt={`Slider Image ${item.id}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-[#1111113f] grid place-items-center p-3">
                <div className="text-white text-center space-y-3.5 max-w-2xl">
                  <h1 className="font-bold md:font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    {item.title}
                  </h1>

                  <p>{item.subtitle}</p>

                  <MyButton
                    handleClick={() => navigate("explore-toys")}
                    className="btn-sm sm:btn-lg sm:px-8 group"
                  >
                    Explore All Toys
                    <FaArrowRightLong className="group-hover:ml-1.5 duration-300" />
                  </MyButton>
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
