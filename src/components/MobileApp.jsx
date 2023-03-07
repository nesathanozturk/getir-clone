function MobileApp() {
  return (
    <div className="bg-primary-brand-color flex items-center justify-between bg-mobile-app md:rounded-lg text-white">
      <div className="flex flex-col gap-y-3 p-10">
        <h3 className="text-2xl font-bold tracking-tight">Getir'i indirin</h3>
        <p className="font-semibold mt-4">
          İstediğiniz ürünleri dakikalar içinde kapınıza <br />
          getirelim.
        </p>
        <nav className="mt-5 flex flex-col gap-2 md:flex-row">
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
      </div>
      <picture className="pt-6 hidden md:block md:self-end">
        <img
          src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png"
          alt="Mobile App Landing"
        />
      </picture>
    </div>
  );
}

export default MobileApp;
