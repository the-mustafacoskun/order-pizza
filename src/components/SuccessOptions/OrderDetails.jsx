import React from 'react';

export default function OrderDetails({ orderData }) {
    // OrderForm'dan gelen property isimlerine göre (malzemeler, not vb.) karşılayalım
    const {
        boyut = "-",
        hamur = "-",
        malzemeler = [], // OrderForm'da "malzemeler" olarak gönderdik
        adet = 1,
        not = ""
    } = orderData || {};

    return (
        <div className="!block !p-6 !bg-[#CE2829] !text-white !rounded-lg !shadow-lg !font-barlow !w-full !max-w-[300px] !mx-auto !my-5">
            
            <h5 className="!text-xl !font-bold !mb-6 !border-b !border-white/20 !pb-2 !text-left">
                Sipariş Detayı
            </h5>
            
            <div className="!space-y-4 !text-base">
                <p className="!flex !justify-between !items-center !gap-4">
                    <span className="!font-semibold">Boyut:</span> 
                    <span className="!font-light !capitalize">{boyut}</span>
                </p>

                <p className="!flex !justify-between !items-center !gap-4">
                    <span className="!font-semibold">Hamur:</span> 
                    <span className="!font-light">{hamur}</span>
                </p>

                <p className="!flex !justify-between !items-center !gap-4">
                    <span className="!font-semibold">Miktar:</span> 
                    <span className="!font-light">{adet} Adet</span>
                </p>

                {/* Ek Malzemeler */}
                <div className="!mt-4 !pt-4 !border-t !border-white/10">
                    <p className="!font-semibold !mb-2">Ek Malzemeler:</p>
                    <p className="!text-sm !font-light !leading-relaxed !opacity-90">
                        {malzemeler.length > 0 
                            ? malzemeler.join(", ") 
                            : "Malzeme seçilmedi"}
                    </p>
                </div>

                {/* Sipariş Notu (Eğer varsa gösterilir) */}
                {not && (
                    <div className="!mt-4 !pt-2">
                        <p className="!font-semibold !text-sm">Not:</p>
                        <p className="!text-xs !italic !opacity-80 !break-words">
                            "{not}"
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}