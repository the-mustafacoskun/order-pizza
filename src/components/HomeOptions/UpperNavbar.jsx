import React from 'react';

export default function UpperNavbar() {
  const navItems = [
    { name: "YENİ! Kore", icon: "1.svg" },
    { name: "Pizza", icon: "2.svg" },
    { name: "Burger", icon: "3.svg" },
    { name: "Kızartmalar", icon: "4.svg" },
    { name: "Fast Food", icon: "5.svg" },
    { name: "Gazlı İçecek", icon: "6.svg" },
  ];

  return (
    <nav className="!bg-white !border-b !border-gray-100 !py-10 !z-50 !w-full">
      <div className="!max-w-[1065px] !mx-auto !px-4">
        {/* !grid-cols-2: Mobilde iki sütun yapar.
            !pl-10: Öğeleri sayfanın soluna yanaştırmak için sol tarafa boşluk ekledik.
            !gap-x-2: Sütunlar arası minimum grid boşluğu.
        */}
        <ul className="!grid !grid-cols-2 md:!flex !flex-wrap !justify-between !items-center !gap-y-12 !gap-x-2 !list-none !p-0 !m-0 !w-full !pl-10 md:!pl-0">
          {navItems.map((item, index) => (
            <li key={index} className="!m-0 !p-0 !flex !justify-start !w-full md:!w-auto">
              <a 
                href="#" 
                /* !w-[140px]: Bu genişlik ikonların dikeyde aynı hizada kalmasını sağlar. 
                   Görüntüdeki genişliğe göre 140px-160px arası idealdir.
                */
                className="!flex !items-center !gap-4 !text-[#292929] !font-semibold !no-underline hover:!text-[#CE2829] !transition-colors !w-[140px] md:!w-auto"
              >
                <img 
                  src={`/images/iteration-2-images/icons/${item.icon}`} 
                  alt={item.name} 
                  /* İkon boyutları görüntüdeki gibi net ve belirgin */
                  className="!w-12 !h-12 !object-contain" 
                />
                <span className="!text-sm md:!text-base !whitespace-nowrap">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}