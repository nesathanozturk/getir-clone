import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banners from "../api/banners.json";
import Title from "./ui/Title";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function NextBtn({ className, onClick }) {
  return (
    <button
      className={`!text-brand-color absolute top-1/2 -right-6 -translate-y-1/2`}
      onClick={onClick}
    >
      <IoIosArrowForward size={22} />
    </button>
  );
}

function PrevBtn({ className, onClick }) {
  return (
    <button
      className={` !text-brand-color absolute top-1/2 -left-6 -translate-y-1/2`}
      onClick={onClick}
    >
      <IoIosArrowBack size={22} />
    </button>
  );
}

function Campaigns() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
  };

  return (
    <div className="container mx-auto py-8">
      <Title>Kampanyalar</Title>
      <Slider className="-mx-2" {...settings}>
        {banners.length &&
          banners.map((banner, index) => (
            <div key={banner.id}>
              <picture className="px-2 block">
                <img src={banner.image} alt="Banner" className="rounded-lg" />
              </picture>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default Campaigns;
