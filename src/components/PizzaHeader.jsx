import styled from 'styled-components';
import React from 'react';
const PizzaHeaderContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    align-items:flex-start;
    margin: 0 auto;
    margin-top: 30px;
`;
const PizzaTitle = styled.h2`
    font-size:22px;
    font-family:'Barlow', sans-serif;
    font-weigth:900;
    text-align:left;
    margin-bottom:15px;
`;
const PizzaHeaderInfoContainer = styled.div`
    display:flex;
    justify-content:space-between;
    width:100%;
    align-items:baseline;

`;

const PriceText = styled.span`
    font-size: 28px;
    font-family: 'Barlow', sans-serif;
    font-weigth: 700;
`;
const RatingGroup = styled.div`
    display:flex;
    align-items:baseline;
    gap:30px;
`;
const RatingScore = styled.span`
    font-size: 16px;
    font-family: 'Barlow', sans-serif;
    font-weigth: 400;
    color: #5F5F5F;
    margin-left:100px;
`;
const RatingCount = styled.span`
    font-size: 16px;
    font-family: 'Barlow', sans-serif;
    font-weigth: 400;
    color: #5F5F5F;
`;
const PizzaDescription = styled.p`
    font-size:16px;
    font-family: 'Barlow', sans-serif;
    font-weigth: 400;
    color: #5F5F5F;

`;

export default function PizzaHeader() {
    const pizzaData = {
        title: 'Position Absolute Acı Pizza',
        price: '85.50₺',
        score: '4.9',
        reviews: '(200)',
        description: 'pizza açıklama'
    };
    return (
        <PizzaHeaderContainer>
            <PizzaTitle>{pizzaData.title}</PizzaTitle>
            <PizzaHeaderInfoContainer>
                <PriceText>{pizzaData.price}</PriceText>
                <RatingGroup>
                    <RatingScore>{pizzaData.score}</RatingScore>
                    <RatingCount>{pizzaData.reviews}</RatingCount>
                </RatingGroup>
            </PizzaHeaderInfoContainer>
            <PizzaDescription>{pizzaData.description }</PizzaDescription>

        </PizzaHeaderContainer>


    );
}