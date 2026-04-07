import styled from "styled-components";
import OrderNote from "../components/FormOptions/OrderNote";
import SizeAndCrust from "../components/FormOptions/SizeAndCrust";
import Toppings from "../components/FormOptions/Toppings";
import OrderSummary from "../components/OrderSummary";
import PizzaHeader from "../components/PizzaHeader";

const ContainWarpper = styled.div`
    width: 100%;           /* Mobilde tam genişlik */
    max-width: 532px;      /* Masaüstünde Figma genişliği */
    margin: 0 auto;        /* Ortalamak için */
    padding: 0 15px;       /* Mobilde içeriğin ekran kenarına yapışmaması için */
    box-sizing: border-box; /* Padding'in genişliği bozmaması için */
    margin-bottom:50px;
`;

export default function OrderForm() {
    return (
        <ContainWarpper>
            <PizzaHeader />
            <SizeAndCrust />
            <Toppings />
            <OrderNote />
            <OrderSummary />
        </ContainWarpper>
    );
}