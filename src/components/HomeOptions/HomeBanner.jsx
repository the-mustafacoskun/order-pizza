import { useHistory } from "react-router-dom";

export default function HomeBanner() {
    const h1Style = {
        fontFamily: "'Roboto Condensed', sans-serif",
        fontWeight: 300,
        fontSize: '86px',
        lineHeight: '92px',
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        textAlign: 'center',
        color: 'white',
        margin: '20px 0'
    };

 const history = useHistory();

    const handleButtonClick = () => {
        history.push('/pizza');
    }

   return (
        <div 
            className="relative flex flex-col items-center w-full min-h-[85vh] overflow-hidden" 
            style={{ 
                backgroundColor: '#CE2829', // Header ile bütünleşmesi için aynı kırmızı
                backgroundImage: "url('/images/iteration-1-images/home-banner.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            {/* Yazı ve Buton Alanı */}
            <div className="relative z-10 flex flex-col items-center pt-20">
                <h1 style={h1Style}>
                    KOD ACIKTIRIR<br />PİZZA, DOYURUR
                </h1>

                <button 
                    className="btn border-none !rounded-full !px-16 !py-3 font-bold text-lg mt-10 transition-transform active:scale-95"
                    style={{ backgroundColor: '#FDC913', color: '#292929' , marginTop: '30px'}}
                    onClick={handleButtonClick}
                >
                    ACIKTIM
                </button>
            </div>
        </div>
    );
}
