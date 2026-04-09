import React, { useState } from 'react';

export default function SizeAndCrust({ selectedSize, selectedCrust, onChange }) {
  {/*order form'daki handleChange fonksiyonunu kullanarak boyut ve hamur seçimlerini yönetiyoruz.
    proplar karşılanıyor burada orderform dan gelen*/}

  {/* Hamur seçimi için basit bir dropdown yapısı oluşturduk.
     Dropdown'un açık/kapalı durumunu yönetmek için useState kullandık.
    Dropdown açıldığında seçenekler görünür hale gelir ve bir seçenek seçildiğinde 
    hem hamur bilgisi güncellenir hem de dropdown kapanır. */}
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  {/*boyut ve hamur seçeneklerini sabit bir array olarak tanımladık.
  Bu sayede yeni bir seçenek eklemek istediğimizde sadece bu array'e ekleme yapmamız yeterli olur.
  map kullanacağımız için elemanlara id değerleri veriyoruz. 
  key attribute'unda kullanacağız aynı zamanda radio buttonlarda bu keyleri gösterdik. */}
  const sizes = [{ id: 'S', label: 'Küçük' }, { id: 'M', label: 'Orta' }, { id: 'L', label: 'Büyük' }];
  const crusts = [{ id: 'İnce-Kenar', label: 'İnce Kenar' }, { id: 'Normal-Kenar', label: 'Normal Kenar' }, { id: 'Kalin-Kenar', label: 'Kalın Kenar' }];

  return (
    <div className="!flex !justify-between !w-full !gap-6">
      <div className="!flex-1">
        <h3 className="!text-xl !font-bold">Boyut Seç *</h3>
        <div className="!flex !gap-3 !mt-4">
           {/* Boyut seçenekleri için basit butonlar kullanıyoruz. Seçili olan butonun arka plan rengini değiştiriyoruz. 
           aynı zamanda radio buttonlarda bu keyleri gösterdik. 
           cypress id'leri içine dinamik olarak ekliyoruz. */ }
          {sizes.map((s) => (
            <button key={s.id} type="button" onClick={() => onChange('boyut', s.id)}
              className={`!w-14 !h-14 !rounded-full !font-bold ${selectedSize === s.id ? "!bg-[#FDC913]" : "!bg-[#FAF7F2]"}`}
              data-cy={`size-button-${s.id}`}
            >{s.id}</button>
          ))}
        </div>
      </div>
      <div className="!flex-1 !relative">
        <h3 className="!text-xl !font-bold">Hamur Seç *</h3>
        <button type="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)} data-cy="crust-dropdown"
          className="!w-full !bg-[#FAF7F2] !border !rounded-md !px-4 !py-4 !mt-4 !flex !justify-between">
          <span>{selectedCrust || "Hamur Kalınlığı Seç"}</span>
          <span className={isDropdownOpen ? "!rotate-180" : ""}>▼</span>
        </button>
        {/* Dropdown Açıkken Görünen Seçenekler
            Dropdown'un açık/kapalı durumunu yönetmek için isDropdownOpen state'ini kullanıyoruz.
            Dropdown açıldığında crusts array'ini map ile render ediyoruz.
            Bir seçenek seçildiğinde onChange fonksiyonunu çağırarak hamur bilgisini güncelliyoruz ve dropdown'u kapatıyoruz. */}
        {isDropdownOpen && (
          <div className="!absolute !w-full !bg-white !border !z-50">
            {crusts.map((c) => (
              <div key={c.id} onClick={() => { onChange('hamur', c.id); setIsDropdownOpen(false); }}
                className="!p-3 hover:!bg-[#FAF7F2] !cursor-pointer" data-cy={`crust-option-${c.id}`}
              >{c.label}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}