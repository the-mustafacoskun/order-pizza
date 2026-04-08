import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import SizeAndCrust from "../components/FormOptions/SizeAndCrust";
import Toppings from "../components/FormOptions/Toppings";
import OrderSummary from "../components/OrderSummary";
import PizzaHeader from "../components/PizzaHeader";

export default function OrderForm() {
    const history = useHistory();

    const [boyut, setBoyut] = useState("");
    const [hamur, setHamur] = useState("");
    const [toppings, setToppings] = useState([]);
    const [orderNote, setOrderNote] = useState("");
    const [pizzaAdet, setPizzaAdet] = useState(1);
    const [isValid, setIsValid] = useState(false);
    const [loading, setLoading] = useState(false);
    const [fiyatlar, setFiyatlar] = useState({ secimler: 0, toplam: 0 });

    const tabanFiyat = 100.00;
    const malzemeBirimFiyat = 5.00;

    const errors = {
        boyut: boyut === "" ? "Lütfen pizza boyutu seçiniz." : null,
        hamur: (hamur === "" || hamur === "Hamur Kalınlığı Seç") ? "Lütfen hamur tipi seçiniz." : null,
        toppings: toppings.length < 4 ? `En az 4 malzeme seçmelisiniz. (Şu an: ${toppings.length})` :
            toppings.length > 10 ? "En fazla 10 malzeme seçebilirsiniz." : null
    };

    useEffect(() => {
        const formGecerliMi = !errors.boyut && !errors.hamur && !errors.toppings;
        setIsValid(formGecerliMi);

        const malzemeToplami = toppings.length * malzemeBirimFiyat;
        setFiyatlar({
            secimler: malzemeToplami * pizzaAdet,
            toplam: (tabanFiyat + malzemeToplami) * pizzaAdet
        });
    }, [boyut, hamur, toppings, pizzaAdet]);

    const handleDataChange = (type, value) => {
        if (type === "boyut") setBoyut(value);
        if (type === "hamur") setHamur(value);
        if (type === "toppings") {
            setToppings(prev =>
                prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
            );
        }
    };

    const handleSubmit = async (e) => {
        if (e) e.preventDefault();
        if (!isValid || loading) return;

        setLoading(true);
        const orderData = {
            boyut,
            hamur,
            malzemeler: toppings,
            not: orderNote,
            adet: pizzaAdet,
            toplam: fiyatlar.toplam,
            secimlerFiyat: fiyatlar.secimler
        };

        try {
            const response = await axios.post(
                "https://reqres.in/api/users",
                orderData,
                { headers: { "Content-Type": "application/json", "x-api-key": "pro_c59fbc687068826ffafc7753b4f25523bd4ed43488a5e6a1c7087cfb6fc0f53e" } }
            );
            console.log("Gönderilen Veri:", orderData);
            history.push("/success", { orderData: response.data });
            console.log("Sipariş Başarılı:", response.data);
        } catch (error) {
            console.error("API Hatası:", error);
            
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="!min-h-screen !bg-white !font-barlow !flex !flex-col !m-0 !p-0 !overflow-x-hidden">
            <header className="!bg-[#FAF7F2] !w-full !m-0 !p-0 !border-none !shadow-none !leading-[0]">
                <div className="!max-w-[532px] !mx-auto !m-0 !p-0">
                    <PizzaHeader />
                </div>
            </header>

            <main className="!flex-1 !w-full !bg-white !m-0 !p-0">
                <form
                    onSubmit={handleSubmit}
                    className="!max-w-[532px] !mx-auto !px-4 !py-8 !bg-white !mt-0 !border-none"
                >
                    {!isValid && (
                        <div className="!mb-8 !p-4 !bg-red-50 !border-l-4 !border-[#CE2829] !rounded">
                            <h4 className="!text-[#CE2829] !text-sm !font-bold !mb-2">⚠️ Lütfen Seçimleri Tamamlayın</h4>
                            <ul className="!list-disc !ml-5 !text-[#CE2829] !text-xs !font-semibold">
                                {errors.boyut && <li>{errors.boyut}</li>}
                                {errors.hamur && <li>{errors.hamur}</li>}
                                {errors.toppings && <li>{errors.toppings}</li>}
                            </ul>
                        </div>
                    )}

                    <SizeAndCrust selectedSize={boyut} selectedCrust={hamur} onChange={handleDataChange} />

                    <div className="!mt-10">
                        <Toppings selectedToppings={toppings} onChange={(val) => handleDataChange("toppings", val)} />
                    </div>

                    <div className="!mt-10 !mb-4">
                        <h3 className="!text-xl !font-bold !text-[#292929] !mb-4">Sipariş Notu</h3>
                        <textarea
                            className="!w-full !p-4 !bg-[#FAF7F2] !border !border-gray-200 !rounded-md !min-h-[100px] !outline-none focus:!border-[#FDC913]"
                            placeholder="Siparişine eklemek istediğin bir not var mı?"
                            value={orderNote}
                            onChange={(e) => setOrderNote(e.target.value)}
                        />
                    </div>

                    <hr className="!border-gray-200 !my-10" />

                    <OrderSummary
                        count={pizzaAdet}
                        setCount={setPizzaAdet}
                        secimlerFiyat={fiyatlar.secimler}
                        toplamFiyat={fiyatlar.toplam}
                        isActive={isValid}
                        loading={loading}
                    />
                </form>
            </main>
        </div>
    );
}