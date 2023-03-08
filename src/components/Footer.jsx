import Menu from "./ui/Menu";
import menus from "../api/menus.json";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

function Footer() {
  return (
    <div className="bg-white px-2 md:px-4 mt-10">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid md:grid-cols-4 gap-y-4 pt-5 md:pt-10">
          <section>
            <h6 className="text-lg text-primary-brand-color mb-4">
              Getir'i indirin!
            </h6>
            <nav className="grid gap-y-4">
              <a href="https://apps.apple.com/app/id995280265">
                <img
                  src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
                  alt="App Store"
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.getir">
                <img
                  src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
                  alt="Google Play Store"
                />
              </a>
              <a href="https://appgallery.huawei.com/#/app/C100954039">
                <img
                  src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
                  alt="Huawei App Gallery"
                />
              </a>
            </nav>
          </section>
          {menus.map((menu, index) => (
            <Menu key={index} {...menu} />
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-y-4 justify-between items-center border-t border-gray-100 mt-6 py-6">
          <div className="text-xs text-center md:text-left text-gray-700 flex flex-col md:flex-row gap-x-8">
            <h6 className="mb-2 md:mb-0">&copy; 2023 Getir</h6>
            <a
              href="https://e-sirket.mkk.com.tr/esir/Dashboard.jsp#/sirketbilgileri/18806"
              className="text-primary-brand-color relative before:w-[3px] before:h-[3px] md:before:text-white md:before:bg-black before:absolute before:-left-4 before:top-1/2 before:translate-y-1/2 before:rounded-full md:before:w-[5px"
            >
              Bilgi Toplumu Hizmetleri
            </a>
          </div>
          <nav className="flex flex-col md:flex-row justify-center items-center gap-y-2 md:gap-y-0  gap-x-3">
            <div className="flex">
              <a
                href="https://www.facebook.com/getir"
                className="footer-social"
              >
                <FaFacebook size={21} />
              </a>
              <a href="https://twitter.com/getir" className="footer-social">
                <FaTwitter size={21} />
              </a>
              <a
                href="https://www.instagram.com/getir/"
                className="footer-social"
              >
                <FaInstagram size={21} />
              </a>
            </div>
            <a
              href="#"
              className="h-8 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color hover:border-transparent flex items-center px-2 text-sm gap-x-2 rounded text-gray-500 border border-gray-100"
            >
              <FiGlobe size={18} />
              Türkçe (TR)
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Footer;
