// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { MainProductStyled } from "./MainProducts.style";

const MainProducts = () => {
  return (
    <MainProductStyled>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >

        <SwiperSlide>
          <div className="slideone">
bir
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slidetwo">
okki
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="slideuch">
            uc
          </div>
        </SwiperSlide>
        <SwiperSlide>
          tort
        </SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
    
      </Swiper>
    </MainProductStyled>
  );
};

export default MainProducts;
