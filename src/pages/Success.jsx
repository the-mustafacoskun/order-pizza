import React from 'react';
import { useLocation } from 'react-router-dom';
import OrderDetails from '../components/SuccessOptions/OrderDetails';
import PaymentSummary from '../components/SuccessOptions/PaymentSummary';


export default function Success() {
    const location = useLocation();
    // history.push ile gelen veriyi alıyoruz
    const orderData = location.state?.orderData;

    return (
        <div className="!min-h-screen !bg-[#CE2829] !flex !flex-col !items-center !py-20 !text-center !font-roboto !px-4">
            <h2 className="!text-white !text-6xl !font-light !tracking-widest  !mb-1 !border-b !border-white/30 !pb-10">
                SİPARİŞ ALINDI
            </h2>

            {orderData ? (
                <div className="!w-full !max-w-[400px] !space-y-6">
                    <OrderDetails orderData={orderData} />
                    <PaymentSummary orderData={orderData} />
                </div>
            ) : (
                <p className="!text-white">Sipariş verisi bulunamadı.</p>
            )}
        </div>
    );
}