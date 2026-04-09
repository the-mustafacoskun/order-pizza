import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import SizeAndCrust from "../components/FormOptions/SizeAndCrust";
import Toppings from "../components/FormOptions/Toppings";
import OrderSummary from "../components/OrderSummary";
import PizzaHeader from "../components/PizzaHeader";

export default function OrderForm({ setOrder }) {
    const history = useHistory();

    const [boyut, setBoyut] = useState("");
    const [hamur, setHamur] = useState("");
    const [toppings, setToppings] = useState([]);
    const [orderNote, setOrderNote] = useState("");
    const [isim, setIsim] = useState("");
    const [pizzaAdet, setPizzaAdet] = useState(1);
    const [isValid, setIsValid] = useState(false);
    const [loading, setLoading] = useState(false);
    const [fiyatlar, setFiyatlar] = useState({ secimler: 0, toplam: 0 });

    const tabanFiyat = 100.00;
    const malzemeBirimFiyat = 5.00;
    {/* Form Validasyonları
        Her bir seçim için ayrı ayrı validasyon kuralları belirledik.
        Hataları errors objesinde saklıyoruz. Eğer bir hata yoksa değeri null oluyor. */ }
    const errors = {
        isim: isim.trim().length < 3 ? "Lütfen adınızı giriniz." : null,
        boyut: boyut === "" ? "Lütfen pizza boyutu seçiniz." : null,
        hamur: (hamur === "" || hamur === "Hamur Kalınlığı Seç") ? "Lütfen hamur tipi seçiniz." : null,
        toppings: toppings.length < 4 ? `En az 4 malzeme seçmelisiniz. (Şu an: ${toppings.length})` :
            toppings.length > 10 ? "En fazla 10 malzeme seçebilirsiniz." : null
    };
    {/* useEffect ile form verilerini ve hataları izleyerek formun geçerli olup olmadığını kontrol ediyoruz.
        fiyat hesaplama kısmınıda burada gerçekleştireceğiz */ }
    useEffect(() => {
        const formGecerliMi = !errors.boyut && !errors.hamur && !errors.toppings && !errors.isim;
        setIsValid(formGecerliMi);

        const malzemeToplami = toppings.length * malzemeBirimFiyat;
        setFiyatlar({
            secimler: malzemeToplami * pizzaAdet,
            toplam: (tabanFiyat + malzemeToplami) * pizzaAdet
        });
    }, [boyut, hamur, toppings, pizzaAdet, isim]);

    const handleDataChange = (type, value) => {
        if (type === "boyut") setBoyut(value);
        if (type === "hamur") setHamur(value);
        if (type === "toppings") {
            setToppings(prev =>
                prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
            );
        }
    };
    {/* Sipariş Verisini API'ye Gönderme Fonksiyonu
        2 li doğrulama yaptık sipariş butonu için validasyonlar geçerli ise ve api isteği sonuçlanınca buton aktif olur*/ }
    const handleSubmit = async (e) => {
        if (e) e.preventDefault();
        if (!isValid || loading) return;

        setLoading(true);
        const orderData = {
            boyut,
            hamur,
            malzemeler: toppings,
            not: orderNote,
            isim: isim,
            adet: pizzaAdet,
            toplam: fiyatlar.toplam,
            secimlerFiyat: fiyatlar.secimler
        };
        {/* API'ye sipariş verisini gönderiyoruz.
         API endpointi ve gerekli header bilgisi eklenmiştir. 
        consola giden veriyi yani orderData ve gelecek yanıtı yazdırdık
        await ile axios isteğinin sekron çalışmasını sağladık
        hata durumunda console.error ile hatayı yazdırdık
        finally bloğu ile yüklenme durumu sıfırlandı 
        bunu sipariş butonu için bir validasyon olarak kullandık  yanıt gelince tıklanabilir yapmak için */ }
        try {
            const response = await axios.post(
                "https://reqres.in/api/users",
                orderData,
                { headers: { "Content-Type": "application/json", "x-api-key": "pro_c59fbc687068826ffafc7753b4f25523bd4ed43488a5e6a1c7087cfb6fc0f53e" } }
            );
            setOrder(response.data);
            console.log("Gönderilen Veri:", orderData);
            history.push("/success");
            console.log("Sipariş Başarılı:", response.data);
        } catch (error) {
            console.error("API Hatası:", error);

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="!min-h-screen !bg-white !font-barlow !flex !flex-col">
            <header className="!bg-[#FAF7F2] !w-full">
                <div className="!max-w-[532px] !mx-auto">
                    <PizzaHeader />
                </div>
            </header>
            <main className="!flex-1 !w-full !bg-white">
                <form onSubmit={handleSubmit} className="!max-w-[532px] !mx-auto !px-4 !py-8">
                    {/* Hata Mesajları */}
                    {!isValid && (
                        <div className="!mb-8 !p-4 !bg-red-50 !border-l-4 !border-[#CE2829] !rounded">
                            <h4 className="!text-[#CE2829] !text-sm !font-bold">⚠️ Lütfen Seçimleri Tamamlayın</h4>
                            {/* Hataları liste şeklinde gösteriyoruz.
                             Object.values ile errors objesindeki tüm değerleri alıp map ile listeye dönüştürüyoruz.
                             key olarak indeks kullanıyoruz
                             (sakıncalı çünkü errors dizisinden birşey çıkarıp eklersek reactın kafası karışabilir). */ }
                            <ul className="!list-disc !ml-5 !text-[#CE2829] !text-xs">
                                {Object.values(errors).map((err, i) => err && <li key={i}>{err}</li>)}
                            </ul>
                        </div>
                    )}
                    {/* Malzeme,Boyut ve Hamur Seçimi
                        selectedToppings(Toppings componentine prop olarak olarak gönderdim)
                         selectedSize selectedCrust (SizeAndCrust componentine prop olarak gönderdim)
                        onChange fonksiyonu ile her iki componentten de verileri tek bir fonksiyonla handle edebiliyorum.
                        
                        const handleDataChange = (type, value) => {
                              if (type === "boyut") setBoyut(value);
                              if (type === "hamur") setHamur(value);
                              if (type === "toppings") {
                                    setToppings(prev =>
                                     prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
                             );
                        }
                    };
                    */ }
                    {/*state olarak tanımladığımız boyut ve hamur değişkenlerini 
                    paketleyip selectedSize ve selectedCrust prop olarak gönderiyoruz.
                    tanımladığımız handleDataChange fonksiyonunu onChange ile paketleyip verileri alıyoruz. */ }
                    <SizeAndCrust selectedSize={boyut} selectedCrust={hamur} onChange={handleDataChange} />
                    <div className="!mt-10">
                        <Toppings selectedToppings={toppings} onChange={(val) => handleDataChange("toppings", val)} />
                    </div>
                    <div className="!mt-10">
                        <h3 className="!text-xl !font-bold !mb-4">Adınız</h3>
                         {/* value ve onChange ile inputu kontrol altına alıyoruz. */}
                        <input
                            className="!w-full !p-4 !bg-[#FAF7F2] !border !rounded-md !outline-none focus:!border-[#FDC913]"
                            placeholder="Lütfen Adınızı Girin"
                            value={isim}
                            onChange={(e) => setIsim(e.target.value)}
                            data-cy="name-input"
                        />
                    </div>
                    <div className="!mt-10">
                        <h3 className="!text-xl !font-bold !mb-4">Sipariş Notu</h3>
                        {/* value ve onChange ile textarea'yı kontrol altına alıyoruz. */}
                        <textarea
                            className="!w-full !p-4 !bg-[#FAF7F2] !border !rounded-md !min-h-[100px] !outline-none focus:!border-[#FDC913]"
                            placeholder="Siparişine eklemek istediğin bir not var mı?"
                            value={orderNote}
                            onChange={(e) => setOrderNote(e.target.value)}
                        />
                    </div>
                    <hr className="!border-gray-200 !my-10" />
                    {/* OrderSummary componentine gerekli verileri prop olarak gönderiyoruz. */}
                    <OrderSummary
                        count={pizzaAdet} setCount={setPizzaAdet}
                        secimlerFiyat={fiyatlar.secimler} toplamFiyat={fiyatlar.toplam}
                        isActive={isValid} loading={loading}
                    />
                </form>
            </main>
        </div>
    );
}