import { Link ,useLocation} from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';
import logoSvg from '../assets/logo.svg';

const HeaderContainer = styled.header`
    background-color:#CE2829;
    display:flex;
    justify-content:center;
    align-items : center;
    width: 100%;
    padding: ${props => props.$isHome ? '80px 0' : '25px 0'};
`;
const LogoImage = styled.img`
    width : ${props=>props.$isHome ? '300px' : '200px'};

`;

export default function Header() {
    const location=useLocation();
    const isHome = location.pathname === '/';
    return (
        <HeaderContainer $isHome={isHome}>
            <Link to='/'>
                <LogoImage
                    src={logoSvg}
                    alt='Teknolojik Yemekler Logo'
                    $isHome={isHome} //prop olarak geçtim ve styled component tanımı içinde kullanmak için
                >

                </LogoImage>
            </Link>
        </HeaderContainer>
    )
}