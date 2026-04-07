
import React from 'react'
import { NumberField } from '@base-ui/react/number-field'
import styled from 'styled-components';
import { Button, Card, CardBody } from 'reactstrap';

// İkonlar tek bir genel bileşen üzerinden de yönetilebilir ama temiz durması için kalsın dedik:
const PlusIcon = () => (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M0 5H10M5 0V10" />
    </svg>
)

const MinusIcon = () => (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M0 5H10" />
    </svg>
)

const OrderSummaryWrapper = styled.div`
    display:flex;
    margin:0 auto;
    justify-content:flex-start;
    align-items:flex-start;
    gap:10px;
    justify-content:center;
    @media (max-width: 768px){
        flex-direction: column;
    }

`;
const WebCounterWrapper=styled.div`
     @media (max-width: 768px){
        display: none;
    }
`;

const MobileCounterWrapper=styled.div`
    display:none;

    @media(max-width: 768px){
    display:block;
    margin-right:10px;
    }
`;
const MobileActionWrapper =styled.div`
    display:flex;
    flex-direction:column;

    @media(max-width: 768px){
    flex-direction:row;
    width:100%;
    align-items:center;
    margin-top:20px;
    }
`;
const RightWrapper = styled.div`
    width:350px;

    @media(max-width: 768px){
        width:100%;
    }
`;



const IncrementDecrementButtonWithText = () => {
    return (
        <div className="flex justify-center items-center">
            <NumberField.Root defaultValue={1} min={1}>
                <NumberField.Group className="flex items-center rounded-md overflow-hidden border border-gray-200 shadow-sm bg-white">

                    <NumberField.Decrement className="flex size-14 items-center justify-center bg-[#FDC913] hover:bg-amber-500 active:bg-amber-600 transition-colors">
                        <MinusIcon />
                    </NumberField.Decrement>

                    <NumberField.Input className="h-10 w-12 text-center font-semibold tabular-nums focus:outline-none" />

                    <NumberField.Increment className="flex size-14 items-center justify-center bg-[#FDC913] hover:bg-amber-500 active:bg-amber-600 transition-colors">
                        <PlusIcon />
                    </NumberField.Increment>

                </NumberField.Group>
            </NumberField.Root>
        </div>
    )
};
const OrderSummaryCard = () => {
    return (
        <div>
            <Card className="border-0 shadow-sm" style={{ backgroundColor: '#FAF7F2' }}>
                <CardBody className="p-4">
                    <h5 className="fw-bold mb-4">Sipariş Toplamı</h5>

                    {/* Seçimler Satırı */}
                    <div className="d-flex justify-content-between mb-3 text-secondary">
                        <span>Seçimler</span>
                        <span>25.00₺</span>
                    </div>

                    {/* Toplam Satırı */}
                    <div className="d-flex justify-content-between fw-bold" style={{ color: '#D32F2F' }}>
                        <span>Toplam</span>
                        <span>110.50₺</span>
                    </div>
                </CardBody>
            </Card >
        </div>




    )
};
const PlaceOrderButton = ({className}) => {
    return (
        <Button
            className={`w-100 py-3 border-0 fw-bold ${className}`}
            style={{
                backgroundColor: '#FDC913',
                color: '#292929',
                fontSize: '18px'
            }}
        >
            SİPARİŞ VER
        </Button>
    )
}
const ResponsiveOrderButton = styled(PlaceOrderButton)`

    @media(max-width:768px){
        height:56px !important;
        border-radius:6px !important;
    }
`;


export default function OrderSummary() {
    return (

        <OrderSummaryWrapper>
            <WebCounterWrapper>
                <IncrementDecrementButtonWithText />
            </WebCounterWrapper>
            <RightWrapper>
                <OrderSummaryCard />
                <MobileActionWrapper>
                    <MobileCounterWrapper>
                         <IncrementDecrementButtonWithText />
                    </MobileCounterWrapper>
                    <ResponsiveOrderButton />
                </MobileActionWrapper>
            </RightWrapper>

        </OrderSummaryWrapper>

    )
}