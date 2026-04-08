import React from 'react';

// --- Checkbox İçin Özel İkon Bileşeni ---
const CustomCheckbox = ({ id, label, checked, onChange }) => {
  return (
    <label className="!flex !items-center !gap-3 !cursor-pointer !group !w-full !m-0 !p-0">
      <div className="!relative !flex !items-center !justify-center !flex-shrink-0">
        <input
          type="checkbox"
          id={id}
          className="!sr-only" // Standart checkbox'ı gizle
          checked={checked}
          onChange={onChange}
        />
        {/* Tasarımdaki Kutu */}
        <div className={`
          !w-10 !h-10 !rounded-lg !transition-all !duration-200 !flex !items-center !justify-center
          ${checked 
            ? "!bg-[#FDC913] !shadow-none" 
            : "!bg-[#FAF7F2] !shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)]"
          }
        `}>
          {/* Check İkonu */}
          {checked && (
            <svg 
              className="!w-6 !h-6 !text-[#292929]" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </div>
      <span className="!text-[#5F5F5F] !font-bold !text-base !font-barlow">{label}</span>
    </label>
  );
};

export default function Toppings({ selectedToppings, onChange }) {
  const toppingsList = [
    "Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Soğan", 
    "Domates", "Mısır", "Sucuk", "Jalepeno", "Sarımsak", 
    "Biber", "Ananas", "Patlıcan", "Kabak"
  ];

  const handleToggle = (topping) => {
    // 10'dan fazla seçimi engelleme kuralı
    if (!selectedToppings.includes(topping) && selectedToppings.length >= 10) {
      alert("En fazla 10 malzeme seçebilirsiniz.");
      return;
    }
    onChange(topping); // OrderForm'daki handleChange'e gönderir
  };

  return (
    <section className="!flex !flex-col !w-full !font-barlow">
      
      {/* Başlık Alanı */}
      <div className="!mb-6">
        <h3 className="!text-xl !font-bold !text-[#292929] !mb-1">Ek Malzemeler</h3>
        <p className="!text-sm !font-medium !text-[#5F5F5F]">
          En az 4, en fazla 10 malzeme seçebilirsiniz. 5₺
        </p>
      </div>

      {/* Grid Yapısı (Her Zaman 3 Sütun - Figma Uyumlu) */}
      <div className="!grid !grid-cols-2 md:!grid-cols-3 !gap-y-4 !gap-x-2">
        {toppingsList.map((topping, index) => (
          <div key={index} className="!flex !items-start">
            <CustomCheckbox
              id={`topping-${index}`}
              label={topping}
              checked={selectedToppings.includes(topping)}
              onChange={() => handleToggle(topping)}
            />
          </div>
        ))}
      </div>

    </section>
  );
}