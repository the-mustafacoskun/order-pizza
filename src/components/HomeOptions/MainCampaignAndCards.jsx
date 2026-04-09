import React from 'react';
import MiddleNavbar from './MiddleNavbar';
import { useHistory } from "react-router-dom";

const MainCampaignAndCards = () => {
  const history = useHistory();
  const handleButtonClick = () => history.push('/pizza');

  const foodItems = [
    { name: "Terminal Pizza", rating: 4.9, count: 200, price: 60, img: "food-1.png" },
    { name: "Position Absolute Acı Pizza", rating: 4.9, count: 120, price: 60, img: "food-2.png" },
    { name: "useEffect Tavuklu Burger", rating: 4.8, count: 150, price: 75, img: "food-3.png" },
  ];

  const buttonClass = "!bg-white !text-[#CE2829] !px-10 !py-3 !rounded-full !font-bold !uppercase !text-xs !border-none !cursor-pointer md:!w-auto !text-center";

  return (
    <main className="!bg-[#FAF7F2] !w-full !py-16 !font-['Barlow']">
      <div className="!max-w-[1065px] !mx-auto !px-4">

        <section className="!grid !grid-cols-1 md:!grid-cols-2 !gap-4 !mb-20">

          {/* KART 1: ANA KART (Buton yerini değiştirmedik, orijinal hali) */}
          <div
            className="!bg-[#CE2829] !bg-cover !bg-center !rounded-2xl !p-10 !min-h-[400px] !flex !flex-col !justify-start !items-start !text-white"
            style={{ backgroundImage: "url('/images/iteration-2-images/cta/kart-1.png')" }}
          >
            <h2 className="!font-['Quattrocento'] !text-4xl md:!text-5xl !font-bold !leading-[1.1] !mb-4">
              Özel<br />Lezzetus
            </h2>
            <p className="!text-lg md:!text-xl !font-medium !mb-8">
              Position:Absolute Acı Burger
            </p>
            <button className={buttonClass} onClick={handleButtonClick}>SİPARİŞ VER</button>
          </div>

          {/* SAĞ TARAF KAPSAYICI */}
          <div className="!flex !flex-col !gap-4 md:!h-[400px]">

            {/* KART 2 */}
            <div className="!bg-[#292929] !bg-cover !bg-center !rounded-2xl !p-10 !flex-1 !min-h-[400px] md:!min-h-0 !flex !flex-col !justify-start !items-start !text-white"
              style={{ backgroundImage: "url('/images/iteration-2-images/cta/kart-2.png')" }}>

              {/* DEĞİŞİKLİK: !mb-28 (Mobilde butonu aşağı iter), 
         md:!mb-6 (Webde eski haline döndürür) 
      */}
              <h3 className="!text-3xl md:!text-2xl !font-bold !leading-[1.2] !mb-28 md:!mb-6">
                Hackathlon<br />Burger Menü
              </h3>

              <button className={buttonClass} onClick={handleButtonClick}>SİPARİŞ VER</button>
            </div>

            {/* KART 3 */}
            <div className="!bg-[#FDC913] !bg-cover !bg-center !rounded-2xl !p-10 !flex-1 !min-h-[400px] md:!min-h-0 !flex !flex-col !justify-start !items-start"
              style={{ backgroundImage: "url('/images/iteration-2-images/cta/kart-3.png')" }}>

              {/* Kart 2 ile aynı boşluğu verdik */}
              <h3 className="!text-3xl md:!text-2xl !font-bold !leading-[1.2] !mb-28 md:!mb-6 !text-black">
                <span className="!text-[#CE2829]">Çoooook</span> hızlı<br />npm gibi kurye
              </h3>

              <button className={buttonClass} onClick={handleButtonClick}>SİPARİŞ VER</button>
            </div>

          </div>
        </section>
        <div className="!text-center !mb-12">
          <p className="!font-['Satisfy'] !text-[#CE2829] !text-3xl !mb-4">en çok paketlenen menüler</p>
          <h2 className="!text-4xl !font-bold !text-[#292929]">Acıktıran Kodlara Doyuran Lezzetler</h2>
        </div>

        <MiddleNavbar />

        <section className="!grid !grid-cols-1 md:!grid-cols-3 !gap-8">
          {foodItems.map((food, i) => (
            <div key={i} className="!bg-white !p-8 !rounded-3xl !shadow-sm hover:!shadow-md !transition-shadow !cursor-pointer">
              <img src={`/images/iteration-2-images/pictures/${food.img}`} alt={food.name} className="!w-full !rounded-2xl !mb-6" />
              <h4 className="!text-xl !font-bold !mb-6 !text-[#292929]">{food.name}</h4>
              <div className="!flex !justify-between !items-center !text-gray-500 !font-bold">
                <span>{food.rating}</span>
                <div className="!flex !gap-6">
                  <span className="!text-gray-400">({food.count})</span>
                  <span className="!text-black !text-xl">{food.price}₺</span>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default MainCampaignAndCards;