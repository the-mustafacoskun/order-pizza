import React from 'react';

export default function OrderNote({ value, onChange }) {
    return (
        <div className="flex flex-col my-5 mx-auto font-barlow border-b border-dotted border-[#5F5F5F80] pb-5">
            {/* Başlık Kısmı (Eski OrderNotTitle) */}
            <span className="text-xl font-bold mb-5 text-[#292929] text-left">
                Sipariş Notu
            </span>

            {/* Input Kısmı (Eski Reactstrap Input) */}
            <textarea
                id="order-note"
                name="orderNote"
                placeholder="Siparişine eklemek istediğin bir not var mı?"
                rows="1"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="
                    w-full 
                    h-[56px] 
                    min-h-[56px] 
                    pt-[15px] 
                    px-4 
                    bg-[#FAF7F2] 
                    border 
                    border-gray-200 
                    rounded-md 
                    resize-none 
                    outline-none 
                    text-[#5F5F5F]
                    placeholder:text-[#5F5F5F]
                    focus:border-[#FDC913]
                    transition-colors
                "
            />
        </div>
    );
}