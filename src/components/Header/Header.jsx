import React from "react";
import { StyledHeader } from "./Header.style";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const Header = () => {
  return (
    <StyledHeader>

      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="one">
            {/* <div className="firs"> */}
            <div className="oll">
              <h2 className="pr">Нам исполнилось 17 лет!🎉</h2>
              {/* <img src="FaHamburger" alt="" />
           <img src="FaHotdog" alt="" /> */}

              <h3 className="hi">
                <div className="asab">
                  Ровно столько времени мы готовим ваши любимые блюда, <br />
                  проводим с вами завтраки, обеды и ужины, разделяем радостные{" "}
                  <br />
                  моменты и горим делом нашей жизни.Благодарим за то, что вы{" "}
                  <br />
                  остаетесь с нами на протяжении стольких лет 💚
                </div>
              </h3>
              <div className="buttons">
                <button className="but">Наше меню</button>
                <button className="button">APP Evos</button>
              </div>
              {/* </div> */}
        
            <div className="opshiyy">

            <div className="imagess">
                <img src="https://evos.uz/images/svg/user1.svg" alt="" className="br" />
                <img src="	https://evos.uz/images/svg/user2.svg" alt="" className="iki" />
                <img src="https://evos.uz/images/svg/user3.svg" alt="" className="uc" />
                

            {/* <div className="write"> */}
             200K+ положительных отзывов <br />
                 каждый месяц
                 {/* </div> */}
                 </div>
            </div>
          
            
            </div>
            {/* second voshlandi !!!!  */}
            <div className="second">
              <img
                className="zet"
                src="https://admin.evos.uz/uploads/photo_2023_07_14_16_58_26_b9b636b4c4.jpg"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="two">
            <div className="one">
              <div className="firs">
                <div className="oll">
                  <h2 className="pr">Новинка сезона!</h2>
                  {/* <img src="FaHamburger" alt="" />
           <img src="FaHotdog" alt="" /> */}

                  <h3 className="hi">
                    <div className="asab">
                      Выбирайте ваш любимый вкус мороженого!
                    </div>
                  </h3>
                  <div className="buttons">
                    <button className="but">Наше меню</button>
                    <button className="button">APP Evos</button>
                  </div>
                </div>
            <div className="opshy">

            <div className="imags">
                <img src="https://evos.uz/images/svg/user1.svg" alt="" className="br" />
                <img src="	https://evos.uz/images/svg/user2.svg" alt="" className="iki" />
                <img src="https://evos.uz/images/svg/user3.svg" alt="" className="uc" />
                </div>

            <div className="write">
             200K+ положительных отзывов <br />
                 каждый месяц
                 </div>
                 </div>
            
          



              </div>
              {/*  */}
              <div className="second">
                <img
                  className="bet"
                  src="	https://admin.evos.uz/uploads/morojenoe_1000x1000_bb189c3012.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="uch">
            
          <div className="one">
            {/* <div className="firs"> */}
            <div className="oll">
              <h2 className="pr">Идеальная формула аппетита!</h2>
              {/* <img src="FaHamburger" alt="" />
           <img src="FaHotdog" alt="" /> */}

              <h3 className="hi">
                <div className="asab">
                Нежное мясо-гриль с сыром и помидорами под ароматным соусом <br />
                 мягкой тортилье!
                </div>
              </h3>
              <div className="buttons">
                <button className="but">Наше меню</button>
                <button className="button">APP Evos</button>
              </div>
              {/* </div> */}
        
            <div className="opsiyy">

            <div className="imgess">
                <img src="https://evos.uz/images/svg/user1.svg" alt="" className="br" />
                <img src="	https://evos.uz/images/svg/user2.svg" alt="" className="iki" />
                <img src="https://evos.uz/images/svg/user3.svg" alt="" className="uc" />
                

            <div className="rite">
             200K+ положительных отзывов <br />
                 каждый месяц
                 </div>
                 </div>
            </div>
          
            
            </div>
            {/* second voshlandi !!!!  */}
            <div className="second">
              <img
                className="get"
                src="	https://admin.evos.uz/uploads/trindwich_1000x1000_2c4179670a.jpg"
                alt=""
              />
            </div>
          </div>

          </div>
        </SwiperSlide>
   

    
     
       
      </Swiper>

      <div className="bekor">
      <h2>  Hitlar  Burger Lavash Trindvich Sandvich Shaurma Xot-dog Combo Desert Salat Kofe</h2>
      </div>
    </StyledHeader>
  );
};

export default Header;
