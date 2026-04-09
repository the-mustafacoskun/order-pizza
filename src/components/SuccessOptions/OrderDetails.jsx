import React from 'react';

export default function OrderDetails({ orderData }) {
    const {
        boyut = "-",
        hamur = "-",
        malzemeler = [],
        not = ""
    } = orderData || {};

    return (
        <div className="block text-white font-barlow w-full max-w-[400px] !mx-auto">
            
            {/* Pizza İsmi - Resimdeki gibi ortalı */}
            <h5 className="text-2xl font-bold mb-12 font-roboto text-center !mb-8">
                Position Absolute Acı Pizza
            </h5>
            
            {/* Detay Bloğu - İçerik sola hizalı */}
            <div className="flex flex-col items-start justify-start  space-y-5 text-sm gap-4 max-w-[230px] !mx-auto">
                
                {/* Boyut Satırı */}
                <p className="m-0">
                    <span className="font-normal opacity-90 !mr-3">Boyut:</span> 
                    <span className="font-bold ml-2">{boyut}</span>
                </p>

                {/* Hamur Satırı */}
                <p className="m-0">
                    <span className="font-normal opacity-90 !mr-3">Hamur:</span> 
                    <span className="font-bold ml-2">{hamur}</span>
                </p>

                {/* Ek Malzemeler Satırı */}
                <div className="text-left max-w-[300px]">
                    <span className="font-normal opacity-90 !mr-3">Ek Malzemeler:</span> 
                    <span className="font-bold ml-2 leading-relaxed">
                        {orderData?.malzemeler ? orderData.malzemeler.join(", ") : "Malzeme Seçilmedi"}
                    </span>
                </div>

                {/* Sipariş Notu */}
                {not && (
                    <div className="mt-4 text-left opacity-80 max-w-[280px]">
                        <p className="text-sm italic break-words">
                            "{not}"
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}