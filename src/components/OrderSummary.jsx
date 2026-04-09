import React from 'react';

// --- İkon Bileşenleri ---
const PlusIcon = () => (
  <svg width="12" height="12" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M0 5H10M5 0V10" />
  </svg>
);

const MinusIcon = () => (
  <svg width="12" height="12" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M0 5H10" />
  </svg>
);

// --- Sayaç Bileşeni ---
const IncrementDecrementButton = ({ value, setValue }) => {
  return (
    <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden h-12 md:h-14">
      <button
        type="button"
        onClick={() => setValue(Math.max(1, value - 1))}
        className="flex items-center justify-center w-12 md:w-14 h-full bg-[#FDC913] hover:bg-amber-500 active:bg-amber-600 transition-all"
      >
        <MinusIcon />
      </button>
      <input
        type="text"
        value={value}
        readOnly
        className="w-10 md:w-14 text-center font-bold text-lg text-[#292929] bg-transparent focus:outline-none select-none tabular-nums"
      />
      <button
        type="button"
        onClick={() => setValue(value + 1)}
        className="flex items-center justify-center w-12 md:w-14 h-full bg-[#FDC913] hover:bg-amber-500 active:bg-amber-600 transition-all"
      >
        <PlusIcon />
      </button>
    </div>
  );
};

// --- Sipariş Özeti Kartı (Artık Propları Alıyor) ---
const OrderSummaryCard = ({ secimlerFiyat, toplamFiyat }) => {
  return (
    <div className="w-full bg-[#FAF7F2] border border-gray-200 shadow-sm rounded-lg md:rounded-b-none p-8 flex flex-col justify-between min-h-[200px] !p-[15px]">
      <h5 className="text-xl font-bold mb-8 text-[#292929] font-barlow">
        Sipariş Toplamı
      </h5>
      <div className="space-y-4">
        <div className="flex justify-between text-gray-500 font-semibold font-barlow">
          <span>Seçimler</span>
          <span>{secimlerFiyat.toFixed(2)}₺</span>
        </div>
        <div className="flex justify-between font-bold text-[#CE2829] text-xl font-barlow">
          <span>Toplam</span>
          <span>{toplamFiyat.toFixed(2)}₺</span>
        </div>
      </div>
    </div>
  );
};

// --- Ana Bileşen ---
export default function OrderSummary({ count, setCount, secimlerFiyat, toplamFiyat, isActive, loading }) {
  // NOT: Kendi içindeki state'i sildik, artık her şey prop'tan geliyor.


  return (
    <div className="w-full bg-white ">
      <div className="flex flex-col md:flex-row justify-center items-start gap-4 mx-auto max-w-4xl px-4">

        {/* Masaüstü Sayacı */}
        <div className="hidden md:block">
          <IncrementDecrementButton value={count} setValue={setCount} />
        </div>

        {/* Sağ Taraf: Kart ve Buton */}
        <div className="w-full md:w-[380px] flex flex-col gap-0">

          <OrderSummaryCard
            secimlerFiyat={secimlerFiyat}
            toplamFiyat={toplamFiyat}
          />

          <div className="flex flex-row md:flex-col items-center mt-4 md:mt-0 gap-3">

            {/* Mobil Sayacı */}
            <div className="block md:hidden">
              <IncrementDecrementButton value={count} setValue={setCount} />
            </div>

            {/* Sipariş Butonu - KRİTİK DÜZELTMELER YAPILDI */}
            <button
              data-cy="submit-order-button"
              type="submit"
              disabled={!isActive || loading} // Şartlar sağlanmazsa TIKLANAMAZ yapar
              className={`
                !flex-1 md:!w-full !font-bold !py-4 !px-8 
                !rounded-lg md:!rounded-t-none md:!rounded-b-lg 
                !transition-all !text-lg !shadow-md !font-barlow !uppercase !h-[56px] md:!h-auto !border-none
                ${isActive && !loading
                  ? "!bg-[#FDC913] !text-[#292929] !cursor-pointer hover:!bg-amber-500 active:!scale-[0.98]"
                  : "!bg-gray-300 !text-gray-500 !cursor-not-allowed !opacity-60"
                }
              `}
            >
              {loading ? "Gönderiliyor..." : "Sipariş Ver"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}