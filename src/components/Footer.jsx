import React from 'react';

const TwitterIcon = () => (
  <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ cursor: 'pointer' }}>
    <path d="M16.1497 3.64338C16.1612 3.80327 16.1612 3.9632 16.1612 4.12309C16.1612 8.99996 12.4493 14.6193 5.66497 14.6193C3.57486 14.6193 1.63325 14.0139 0 12.9632C0.296965 12.9974 0.582469 13.0089 0.890859 13.0089C2.61545 13.0089 4.20303 12.4264 5.4708 11.4327C3.84898 11.3985 2.48984 10.3363 2.02155 8.87435C2.25 8.90859 2.47841 8.93145 2.71828 8.93145C3.04949 8.93145 3.38073 8.88574 3.68909 8.80583C1.99874 8.46316 0.730934 6.97841 0.730934 5.18527V5.1396C1.22203 5.41371 1.79314 5.58503 2.39843 5.60784C1.40477 4.94539 0.753785 3.8147 0.753785 2.5355C0.753785 1.85024 0.936492 1.22207 1.25631 0.67384C3.0723 2.91241 5.80201 4.37432 8.86289 4.53424C8.8058 4.26013 8.77152 3.97463 8.77152 3.68909C8.77152 1.65607 10.4162 0 12.4606 0C13.5228 0 14.4822 0.44543 15.156 1.16497C15.9898 1.00508 16.7893 0.696691 17.4974 0.274113C17.2233 1.13073 16.6408 1.85027 15.8756 2.30709C16.618 2.22718 17.3375 2.02155 17.9999 1.73605C17.4975 2.46698 16.8693 3.11797 16.1497 3.64338Z" fill="white"/>
  </svg>
);

const Footer = () => {
  const instaImages = [0, 1, 2, 3, 4, 5];

  return (
    <footer className="!bg-[#1A1A1A] !text-white !pt-12 !pb-5 !w-full font-['Barlow']">
      {/* Mobilde sağ/sol boşluk için !px-10, tablet/desktop için !md:px-4 */}
      <div className="!max-w-[1065px] !mx-auto !px-10 md:!px-4 grid grid-cols-1 md:grid-cols-3 !pt-8 !pb-8 !gap-12">
        
        {/* Sol Bölüm */}
        <div className="flex flex-col !gap-8">
          <img 
            src="public/images/iteration-2-images/footer/logo-footer.svg" 
            alt="Logo" 
            className="!w-48"
          />
          <ul className="!space-y-6">
            <li className="flex items-start !gap-3">
              <img src="public/images/iteration-2-images/footer/icons/icon-1.png" alt="Konum" className="!mt-1" />
              <span className="!text-sm">341 Londonderry Road,<br />İstanbul Türkiye</span>
            </li>
            <li className="flex items-center !gap-3">
              <img src="public/images/iteration-2-images/footer/icons/icon-2.png" alt="Email" />
              <span className="!text-sm">aciktim@teknolojikyemekler.com</span>
            </li>
            <li className="flex items-center !gap-3">
              <img src="public/images/iteration-2-images/footer/icons/icon-3.png" alt="Telefon" />
              <span className="!text-sm">+90 216 123 45 67</span>
            </li>
          </ul>
        </div>

        {/* Orta Bölüm */}
        <div>
          <h4 className="!text-lg !font-semibold !mb-8">Hot Menu</h4>
          <ul className="!space-y-4 !text-gray-400 !text-sm">
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathlon Pizza</li>
            <li>useEffect Tavuklu Pizza</li>
            <li>Beyaz Console Frosty</li>
            <li>Testler Geçti Mutlu Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </div>

        {/* Sağ Bölüm: Instagram */}
        <div>
          <h4 className="!text-lg !font-semibold !mb-8">Instagram</h4>
          <div className="grid grid-cols-3 !gap-2">
            {instaImages.map((num) => (
              <img 
                key={num} 
                src={`public/images/iteration-2-images/footer/insta/li-${num}.png`} 
                className="!rounded-lg !w-full !aspect-square !object-cover" 
                alt={`Instagram post ${num}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Alt Şerit */}
      <div className="!border-t !border-gray-800 !max-w-[1065px] !mx-auto !px-10 md:!px-4 flex justify-between items-center !py-6">
        <p className="!text-xs !text-gray-500">© 2023 Teknolojik Yemekler.</p>
        <div className="flex !gap-4">
          <TwitterIcon />
        </div>
      </div>
    </footer>
  );
};

export default Footer;