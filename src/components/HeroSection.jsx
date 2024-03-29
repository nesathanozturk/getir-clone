import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactFlagsSelect from "react-flags-select";
import { useWindowWidth } from "@react-hook/window-size";

function HeroSection() {
  const [selected, setSelected] = useState("TR");

  const windowWidth = useWindowWidth();

  const phones = {
    US: "+1",
    DE: "+49",
    TR: "+90",
    IT: "+39",
    IN: "+91",
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
  };

  return (
    <div className="relative h-auto md:h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      {windowWidth > 768 && (
        <Slider {...settings}>
          <div>
            <img
              src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg"
              alt="Slider Poster"
              className="hero-image"
            />
          </div>
          <div>
            <img
              src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg"
              alt="Slider Poster"
              className="hero-image"
            />
          </div>
          <div>
            <img
              src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg"
              alt="Slider Poster"
              className="hero-image"
            />
          </div>
          <div>
            <img
              src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"
              alt="Slider Poster"
              className="hero-image"
            />
          </div>
        </Slider>
      )}
      <div className="md:container flex justify-between items-center relative md:absolute top-0 left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full z-20">
        <div className="hidden md:block md:ml-4">
          <img
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            alt="Getir"
          />
          <h3 className="mt-8 text-4xl font-semibold text-white">
            Dakikalar içinde <br />
            kapınızda
            <br />
          </h3>
        </div>
        <div className="w-full md:w-[400px] md:rounded-lg md:mr-4 bg-gray-50 p-6">
          <h4 className="text-primary-brand-color mb-4 text-center font-semibold">
            Giriş yap veya kayıt ol
          </h4>
          <div className="grid gap-y-3">
            <div className="flex gap-x-2">
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                placeholder="Select Language"
                onSelect={(code) => setSelected(code)}
                selected={selected}
                className="flag-select"
              />
              <label className="flex-1 relative cursor-pointer group block">
                <input
                  required
                  className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors group-hover:border-primary-brand-color focus:border-primary-brand-color outline-none peer text-sm pt-2"
                  type="text"
                />
                <span className="absolute top-0 left-0 h-full px-4 flex items-center text-gray-700 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">
                  Telefon Numarası
                </span>
              </label>
            </div>
            <button className="bg-brand-yellow text-primary-brand-color transition-colors hover:bg-primary-brand-color hover:text-brand-yellow h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold">
              Telefon numarası ile devam et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
