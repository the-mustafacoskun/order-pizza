import React from 'react';

// --- Checkbox İçin Özel İkon Bileşeni ---
const CustomCheckbox = ({ id, label, checked, onChange }) => {
  return (
    <label className="flex items-center gap-3 cursor-pointer group w-full m-0 p-0">
      <div className="relative flex items-center justify-center flex-shrink-0">
        <input
          type="checkbox"
          id={id}
          className="!sr-only" // Standart checkbox'ı gizle
          checked={checked}
          onChange={onChange}
          data-cy={`checkbox-${id}`}
        />
        
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
      <span className="text-[#5F5F5F] font-bold text-base font-barlow">{label}</span>
    </label>
  );
};

export default function Toppings({ selectedToppings, onChange }) {
  const toppingsList = [
    {id: 1, name: "Pepperoni" },
    {id: 2, name: "Sosis" },
    {id: 3, name: "Kanada Jambonu" },
    {id: 4, name: "Tavuk Izgara" },
    {id: 5, name: "Soğan" },
    {id: 6, name: "Domates" },
    {id: 7, name: "Mısır" },
    {id: 8, name: "Sucuk" },
    {id: 9, name: "Jalepeno" },
    {id: 10, name: "Sarımsak" },
    {id: 11, name: "Biber" },
    {id: 12, name: "Ananas" },
    {id: 13, name: "Patlıcan" },
    {id: 14, name: "Kabak" }
  ];

  const handleToggle = (toppingName) => {
    // 10'dan fazla seçimi engelleme kuralı
    if (!selectedToppings.includes(toppingName) && selectedToppings.length >= 10) {
      return;
    }
    onChange(toppingName); // OrderForm'daki handleChange'e gönderir
  };

  return (
    <section className="flex flex-col w-full font-barlow">
      
      {/* Başlık Alanı */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-[#292929] mb-1">Ek Malzemeler</h3>
        <p className="text-sm font-medium text-[#5F5F5F] !mb-2 !pb-3 !mt-3">
          En az 4, en fazla 10 malzeme seçebilirsiniz. 5₺
        </p>
      </div>

      {/* Grid Yapısı (Her Zaman 3 Sütun - Figma Uyumlu) */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-2">
        {toppingsList.map((topping) => (
          <div key={topping.id} className="flex items-start">
            <CustomCheckbox
              id={`${topping.id}`}
              label={topping.name}
              checked={selectedToppings.includes(topping.name)}
              onChange={() => handleToggle(topping.name)}
            />
          </div>
        ))}
      </div>

    </section>
  );
}