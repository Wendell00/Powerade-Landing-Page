import { SectionStyles } from "./styles";
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Pagination, Autoplay} from 'swiper'

import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Import Swiper styles
import "swiper/css";

export const SectionProducts = () => {

  const [bottle50, setBottle50] = useState('./bottle50/mountainberryblast.png')  
  const [bottleZero, setBottleZero] = useState('./productZero/zswhitecherry.png')  
  const [power500, setPower500] = useState('./power500ml/powerLime.png')  

  function handleClick(url: string, product: string){
    if(product == '50') setBottle50(url)
    else if(product == 'zero') setBottleZero(url)
    else if(product =='power500') setPower500(url)
  }

  return (
    <SectionStyles>
      <div className="productsContainer" id="products">
        <div className="title-products">
          <h1>
            {" "}
            <b>FEATURED</b> PRODUCTS{" "}
          </h1>
        </div>
        <div className="section-products-container">
          <div className="section-1">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              grabCursor={true}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              autoplay={{
                delay: 15000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              loop
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <div className="p1">
                  <img src={bottle50} alt="" />
                </div>
                <div className="p2 blueBg">
                  <div className="textContainer">
                    <div className="containerContent">
                        <h1>POWERADE 50% MORE ELECTROLYTES</h1>
                        <p className="description colorWhite">
                        The ION4 Advanced Electrolyte System helps replenish four
                        electrolytes lost in sweat. Powerade is formulated with a
                        6% carbohydrate solution to help provide energy to working
                        muscles, and vitamins B3, B6 and B12.Powerade
                        </p>

                        <div className="changeBottleContainer">
                        <div className="circles-p1">
                            <button className="blueCircle" onClick={() =>{handleClick('./bottle50/mountainberryblast.png', '50')}}></button>
                            <button className="orangeCircle" onClick={() =>{handleClick('./bottle50/orange.png', '50')}}></button>
                            <button className="whiteCircle" onClick={() =>{handleClick('./bottle50/whitecherry.png', '50')}}></button>
                            <button className="greenCircle" onClick={() =>{handleClick('./bottle50/melon.png', '50')}}></button>
                            <button className="purpleCircle" onClick={() =>{handleClick('./bottle50/grape.png', '50')}}></button>
                        </div>
                        </div>

                        <div>
                        <button className="btn-Learn">LEAN MORE</button>
                        </div>
                        <p className="ingredients">
                        *Per 12 fl oz: POWERADE • 240mg (Sodium), 80mg
                        (Potassium); Leading Sports Drink - 160mg (Sodium), 50mg
                        (Potassium), © 2023 The Coca-Cola Company.
                        </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="p1">
                  <img src={bottleZero} alt="" />
                </div>
                <div className="p2 whiteBg">
                  <div className="textContainer">
                    <div className="containerContent">
                        <h1>POWERADE ZERO</h1>
                        <p className="description colorBlack">
                        POWERADE Zero is a zero-calorie sports drink that provides advanced hydration for players who are serious about their game. A 6% carbohydrate solution provides energy to working muscles, plus vitamins B3, B6, and B12. It's the only nationally available sports drink with the ION4 advanced electrolyte system that replenishes four electrolytes lost in sweat.
                        </p>

                        <div className="changeBottleContainer">
                        <div className="circles-p1">
                            <button className="whiteCircle" onClick={() =>{handleClick('./productZero/zswhitecherry.png', 'zero')}}></button>
                            <button className="blueCircle" onClick={() =>{handleClick('./productZero/zsmixedberry.png', 'zero')}}></button>
                            <button className="orangeCircle" onClick={() =>{handleClick('./productZero/zsorange.png', 'zero')}}></button>
                            <button className="redCircle" onClick={() =>{handleClick('./productZero/zsfruitpunch.png', 'zero')}}></button>
                            <button className="purpleCircle" onClick={() =>{handleClick('./productZero/zsgrape.png', 'zero')}}></button>
                        </div>
                        </div>

                        <div>
                        <button className="btn-Learn">LEAN MORE</button>
                        </div>
                        <p className="ingredients">
                        water, less than 1% of: citric acid, salt and mono-potassium phosphate and magnesium chloride and calcium chloride (electrolyte sources), natural flavors, sucralose, acesulfame potassium, vitamin b3 (niacinamide), vitamin b6 (pyridoxine hydrochloride), vitamin b12 (cyanocobalamin), blue 1, ascorbic acid (to protect taste), calcium disodium edta (to protect color).
                        </p>
                    </div>
                    
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="p1">
                  <img src="./productBars.png" alt="" className="barsProduct"/>
                </div>
                <div className="p2 blackBg">
                  <div className="textContainer">
                    <div className="containerContent">
                        <h1 className="colorWhite">POWERADE® SPORTS FREEZER BARS</h1>
                        <p className="description colorWhite">
                        Powerade Sports Freezer Bars are the perfect way to refuel after playing sports, exercising or enjoying outdoor activities so you can keep going strong.
                        </p>

                        <div className="mt-20">
                          <button className="btn-Learn">LEAN MORE</button>
                        </div>
                        <p className="ingredients colorWhite mt-20">
                        water, high fructose corn syrup, contains 2% or less of the following: natural flavors, citric acid, sodium citrate, sodium benzoate and potassium sorbate (preservatives), monopotassium phosphate, calcium lactate, calcium gluconate, magnesium oxide, dicalcium phosphate, niacinamide (vitamin b3), pyridoxine hydrochloride (vitamin b6), cyanocobalamin (vitamin b12), red 40, blue 1.
                        </p>
                    </div>
                    
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="p1">
                  <img src={power500} alt="" />
                </div>
                <div className="p2 greenBg">
                <div className="textContainer">
                    <div className="containerContent">
                        <h1>POWERADE ISOTONIC 500ML</h1>
                        <p className="description colorBlack">                     
                          Isotonic Powerade Pro 500ml each Powerade replenishes liquids, minerals and carbohydrates. Helps you perform at your best during prolonged or high-intensity physical activity (e.g., running). Now, to help you render your best, we've brought you the new ION4 formula. Provides sodium, potassium, calcium and magnesium, 4 of the two electrolytes we lose when we use them.
                        </p>

                        <div className="changeBottleContainer">
                        <div className="circles-p1">
                            <button className="limeCircle" onClick={() =>{handleClick('./power500ml/powerLime.png', 'power500')}}></button>
                            <button className="orangeCircle" onClick={() =>{handleClick('./power500ml/powerOrange.png', 'power500')}}></button>
                            <button className="purpleCircle" onClick={() =>{handleClick('./power500ml/powerPurple.png', 'power500')}}></button>
                            <button className="blueCircle" onClick={() =>{handleClick('./power500ml/powerBlue.png', 'power500')}}></button>
                            <button className="redCircle" onClick={() =>{handleClick('./power500ml/powerRed.png', 'power500')}}></button>
                        </div>
                        </div>

                        <div>
                        <button className="btn-Learn">LEAN MORE</button>
                        </div>
                        <p className="ingredients">
                        Water, dextrose, acidity regulators (citric acid, malic acid, trisodium citrate, tripotassium citrate), fructose, stabilizers (Action Gum, E445), sweeteners (aspartame, acesulfame K), flavoring agents, vitamin B6.
                        </p>
                    </div>
                    
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </SectionStyles>
  );
};