import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import BannerPhoto from '../assets/pizza-banner.png';

export default function PizzaHeader() {
    const pizzaData = {
        title: 'Position Absolute Acı Pizza',
        price: '85.50₺',
        score: '4.9',
        reviews: '(200)',
        description: 'Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.'
    };

    return (
        <div className="flex flex-col w-full items-start mx-auto font-barlow gap-4 !mb-10 !px-4">

            {/* Banner - Dikey Çevrilmiş */}
            <img
                src={BannerPhoto}
                alt="Breadcrumb Banner"
                className="!w-full !h-auto !transform !-scale-y-100 !block !mx-auto"
            />

            {/* Breadcrumb Alanı - Alt çizgi ve renkler zorlandı */}
            <div className="flex w-full mb-5 gap-2 text-base mt-8 items-center">
                <Link
                    to="/"
                    className="!no-underline !text-[#5F5F5F] !font-medium hover:!text-gray-800"
                >
                    Anasayfa
                </Link>
                <span className="text-[#5F5F5F] mx-1"> - </span>
                <NavLink
                    to="/pizza"
                    className="!no-underline !text-[#CE2829] !font-medium hover:!text-red-700"
                >
                    Sipariş Oluştur
                </NavLink>
            </div>

            {/* Pizza Başlığı - Figma Değerlerine Göre Tam Ayarlı */}
            <h2 className="font-barlow text-[22px] font-semibold leading-[29.44px] text-[#292929] text-left mb-[15px] align-middle">
                {pizzaData.title}
            </h2>

            {/* Fiyat Satırı - Aynı Font Ailesi ve Orta Hizalama */}
            <div className="flex justify-between w-full items-center">
                <span className="font-barlow text-[28px] font-bold text-[#292929] leading-[29.44px] align-middle">
                    {pizzaData.price}
                </span>

                <div className="flex items-center gap-4 md:gap-[30px]">
                    <span className="text-base font-normal text-[#5F5F5F]">
                        {pizzaData.score}
                    </span>
                    <span className="text-base font-normal text-[#5F5F5F]">
                        {pizzaData.reviews}
                    </span>
                </div>
            </div>

            {/* Açıklama Metni */}
            <p className="text-base font-normal text-[#5F5F5F] my-5 leading-relaxed">
                {pizzaData.description}
            </p>
        </div>
    );
}