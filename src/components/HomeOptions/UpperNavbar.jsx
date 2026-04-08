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
    // DÜZELTME: !py-8 ile mobilde daha ferah bir alan sağlandı, !bg-white ile arka plan sabitlendi
    <nav className="!bg-white !border-b !border-gray-100 !py-8 !z-50">
      <div className="!max-w-[1065px] !mx-auto !px-4">
        {/* DÜZELTME: 
          - Mobilde 2'li dizilim için !grid !grid-cols-2 eklendi.
          - Masaüstünde yan yana dizilim için md:!flex kullanıldı.
          - Satır arası boşluk için !gap-y-8, sütun arası için !gap-x-4 eklendi.
        */}
        <ul className="!grid !grid-cols-2 md:!flex !flex-wrap !justify-between !items-center !gap-y-8 !gap-x-4 !list-none !p-0 !m-0">
          {navItems.map((item, index) => (
            <li key={index} className="!m-0 !p-0 !flex !justify-center md:!block">
              {/* DÜZELTME: !no-underline ile a etiketindeki varsayılan çizgiler her durumda kaldırıldı */}
              <a 
                href="#" 
                className="!flex !items-center !gap-3 !text-[#292929] !font-semibold !no-underline hover:!text-[#CE2829] !transition-colors !w-full md:!w-auto !justify-start md:!justify-center"
              >
                {/* DÜZELTME: İkon boyutu mobilde daha net görünmesi için !w-10 yapıldı */}
                <img 
                  src={`/images/iteration-2-images/icons/${item.icon}`} 
                  alt={item.name} 
                  className="!w-10 !h-10 !object-contain" 
                />
                {/* DÜZELTME: Metinlerin alt satıra kaymaması için !whitespace-nowrap eklendi */}
                <span className="!text-sm md:!text-base !whitespace-nowrap">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}