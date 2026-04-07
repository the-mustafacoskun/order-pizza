import Header from "../components/Header";
import OrderForm from "../pages/OrderForm";

export default function MainLayout({children}){
    return (
        <>
            <Header/>
            <OrderForm/>
            <main>
                {children}
            </main>
            
        </>
    )
}