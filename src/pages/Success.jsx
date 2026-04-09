import React from 'react';
import { useLocation } from 'react-router-dom';
import OrderDetails from '../components/SuccessOptions/OrderDetails';
import PaymentSummary from '../components/SuccessOptions/PaymentSummary';

export default function Success({order}) {
    

    return (
        <div className="!min-h-screen !bg-[#CE2829] !flex !flex-col !items-center !py-20 !text-center !font-roboto !px-4">
             <span className="!font-normal text-[2rem] !ml-2 text-[#FDC913] mb-2" style={{ fontFamily: 'Satisfy, cursive' }}>lezzetin yolda</span>
            <h2 className="!text-white !text-6xl !font-light !tracking-widest !mb-1 !border-b !border-white/30 !pb-10">
                SİPARİŞ ALINDI
            </h2>
            <h5 className="!text-white !text-2xl !font-light !mb-12 !mt-10 !font-roboto !text-center !mb-10 !border-b !border-white/50 !pb-10">
                {order?.isim}
            </h5>
            {/* App.jsx'dan gelen order verisini karşılıyoruz.
                Eğer order verisi varsa OrderDetails ve PaymentSummary bileşenlerini render ediyoruz ve order verisini prop olarak gönderiyoruz.
                Eğer order verisi yoksa kullanıcıya "Sipariş verisi bulunamadı." mesajı gösteriyoruz. */}
            {order ? (
                <div className="!w-full !max-w-[400px] !space-y-6">
                    <OrderDetails orderData={order} />
                    <PaymentSummary orderData={order} />
                </div>
            ) : (
                <p className="!text-white">Sipariş verisi bulunamadı.</p>
            )}
        </div>
    );
}