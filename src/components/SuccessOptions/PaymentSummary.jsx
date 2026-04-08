import React from 'react';

export default function PaymentSummary({ orderData }) {
    // OrderForm'dan gelen veriyi karşılıyoruz. 
    // Eğer veriler direkt orderData içinde geliyorsa (ki bir önceki adımda öyle gönderdik):
    const secimler = orderData?.secimlerFiyat || 0;
    const toplam = orderData?.toplam || orderData?.toplamFiyat || 0;

    return (
        <div className="!block !p-8 !border !border-white/20 !rounded-lg !bg-[#CE2829] !text-white !font-barlow !w-full !max-w-[350px] !mx-auto !my-5">
            
            <h5 className="!text-xl !font-bold !mb-8 !text-white !text-left">
                Sipariş Toplamı
            </h5>

            <div className="!space-y-4">
                {/* Seçimler Satırı */}
                <div className="!flex !justify-between !items-center !text-base !font-semibold">
                    <span className="!opacity-80">Seçimler</span>
                    <span>{Number(secimler).toFixed(2)}₺</span>
                </div>

                {/* Toplam Satırı */}
                <div className="!flex !justify-between !items-center !text-lg !font-bold !pt-2">
                    <span className="!text-white">Toplam</span>
                    <span className="!text-white">
                        {/* Verinin sayı olduğundan emin olarak toFixed kullanıyoruz */}
                        {Number(toplam).toFixed(2)}₺
                    </span>
                </div>
            </div>

            {/* Tasarımda varsa bir separator çizgisi eklenebilir */}
            <div className="!mt-4 !border-t !border-white/10"></div>
        </div>
    );
}