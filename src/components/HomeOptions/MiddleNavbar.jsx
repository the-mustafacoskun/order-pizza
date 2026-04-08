import React from 'react';

export default function MiddleNavbar() {
  const navItems = [
    { name: "Ramen", icon: "1.svg" },
    { name: "Pizza", icon: "2.svg" },
    { name: "Burger", icon: "3.svg" },
    { name: "French fries", icon: "4.svg" },
    { name: "Fast food", icon: "5.svg" },
    { name: "Soft drinks", icon: "6.svg" },
  ];

  return (
    // DÜZELTME: Mobilde butonların arasındaki dikey boşluğu yönetmek için padding güncellendi
    <nav className="!bg-[#FAF7F2] !py-10 !w-full !flex !justify-center">
      <div className="!max-w-[1065px] !w-full !px-4">
        {/* DÜZELTME: 
            - Mobilde 2 sütunlu grid yapısı (!grid !grid-cols-2) eklendi.
            - Masaüstünde (md:) yan yana dizilim (!flex) korundu.
            - Elemanlar arası boşluk !gap-4 ile sağlandı.
        */}
        <ul className="!grid !grid-cols-2 md:!flex !flex-wrap !justify-center !items-center !gap-4 !list-none !p-0 !m-0">
          {navItems.map((item, index) => {
            const isActive = item.name === "Pizza";
            
            return (
              <li key={index} className="!m-0 !p-0">
                <button
                  className={`
                    !flex !items-center !gap-3 !px-6 !py-3 !rounded-full !font-bold !transition-all !cursor-pointer !border-none !text-sm !w-full !justify-center md:!w-auto
                    ${isActive 
                      ? "!bg-[#292929] !text-white !shadow-md" 
                      : "!bg-white !text-[#292929] hover:!bg-gray-50" 
                    }
                  `}
                >
                  {/* DÜZELTME: İkon boyutu sabitlendi */}
                  <img 
                    src={`/images/iteration-2-images/icons/${item.icon}`} 
                    alt={item.name} 
                    className="!w-6 !h-6 !object-contain"
                  />
                  <span className="!no-underline !whitespace-nowrap">{item.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}