import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import logoSvg from '../assets/logo.svg';

export default function Header() {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <header 
            className={`
                bg-[#CE2829] 
                flex justify-center items-center 
                w-full h-[138.2px] 
                relative z-50 
                m-0 border-none box-border
                ${isHome ? 'py-10' : 'py-[25px]'}
            `}
        >
            <Link to="/">
                <img
                    src={logoSvg}
                    alt="Teknolojik Yemekler Logo"
                    className="w-[360px] h-[46px] block"
                />
            </Link>
        </header>
    );
}