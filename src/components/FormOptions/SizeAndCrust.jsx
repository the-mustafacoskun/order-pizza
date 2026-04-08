import React, { useState } from 'react';

export default function SizeAndCrust({ selectedSize, selectedCrust, onChange }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Seçenekler
  const sizes = [
    { id: 'S', label: 'Küçük' },
    { id: 'M', label: 'Orta' },
    { id: 'L', label: 'Büyük' }
  ];
  
  const crusts = ['İnce Kenar', 'Normal Kenar', 'Kalın Kenar'];

  // Boyut değiştiğinde ana state'i günceller
  const handleSizeClick = (sizeId) => {
    onChange('boyut', sizeId);
  };

  // Hamur seçildiğinde ana state'i günceller ve menüyü kapatır
  const handleCrustClick = (crustName) => {
    onChange('hamur', crustName);
    setIsDropdownOpen(false);
  };

  return (
    <div className="!flex !flex-row !justify-between !items-start !w-full !gap-6 !font-barlow">
      
      {/* --- BOYUT SEÇİMİ (SOL) --- */}
      <div className="!flex !flex-col !gap-4 !flex-1">
        <h3 className="!text-xl !font-bold !text-[#292929]">
          Boyut Seç <span className="!text-[#CE2829]">*</span>
        </h3>
        <div className="!flex !gap-3">
          {sizes.map((size) => (
            <button
              key={size.id}
              type="button"
              onClick={() => handleSizeClick(size.id)}
              className={`
                !w-14 !h-14 !rounded-full !font-bold !text-base !transition-all !duration-200 !flex !items-center !justify-center
                ${selectedSize === size.id 
                  ? "!bg-[#FDC913] !text-[#292929] !shadow-md !scale-105" 
                  : "!bg-[#FAF7F2] !text-[#292929] hover:!bg-gray-200"
                }
              `}
            >
              {size.id}
            </button>
          ))}
        </div>
      </div>

      {/* --- HAMUR SEÇİMİ (SAĞ) --- */}
      <div className="!flex !flex-col !gap-4 !flex-1 !relative">
        <h3 className="!text-xl !font-bold !text-[#292929]">
          Hamur Seç <span className="!text-[#CE2829]">*</span>
        </h3>
        
        <div className="!relative !w-full">
          {/* Dropdown Tetikleyici */}
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="!w-full !bg-[#FAF7F2] !border !border-gray-200 !rounded-md !px-4 !py-4 !flex !justify-between !items-center !text-[#292929] !font-medium focus:!outline-none active:!bg-gray-100 !transition-colors"
          >
            <span className={!selectedCrust ? "!text-gray-400" : "!text-[#292929]"}>
              {selectedCrust || "Hamur Kalınlığı Seç"}
            </span>
            <svg 
              className={`!w-5 !h-5 !transition-transform !duration-300 ${isDropdownOpen ? "!rotate-180" : ""}`} 
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Açılır Menü */}
          {isDropdownOpen && (
            <>
              {/* Sayfa geneline yayılan görünmez bir alan (Menü dışına tıklandığında kapatmak için) */}
              <div 
                className="!fixed !inset-0 !z-[998]" 
                onClick={() => setIsDropdownOpen(false)}
              ></div>
              
              <div className="!absolute !top-full !left-0 !right-0 !mt-2 !bg-white !border !border-gray-200 !rounded-md !shadow-2xl !z-[999] !overflow-hidden !animate-in !fade-in !slide-in-from-top-2">
                {crusts.map((crust) => (
                  <div
                    key={crust}
                    onClick={() => handleCrustClick(crust)}
                    className={`
                      !px-4 !py-4 !cursor-pointer !transition-colors !font-medium
                      ${selectedCrust === crust 
                        ? "!bg-[#FDC913] !text-[#292929]" 
                        : "!text-[#292929] hover:!bg-[#FAF7F2]"
                      }
                    `}
                  >
                    {crust}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

    </div>
  );
}