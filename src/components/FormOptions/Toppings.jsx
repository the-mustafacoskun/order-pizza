import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import Box from '@mui/material/Box'
import CheckIcon from '@mui/icons-material/Check'
import FormControlLabel from '@mui/material/FormControlLabel'
import styled from 'styled-components'

const ToppingsWrapper = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    
    margin:20px auto;
    font-family:'Barlow', sans-serif;

`;
const ToppingsTitle = styled.span`
    
    justify-content:flex-start;
    font-size: 1.25rem;
    font-weight: 700;
`;
const ToppingsSubtitle = styled.span`
    font-size: rem;
    font-weight: 500;
    margin-top: 10px;

`;

const customIcon = (
    <Box
        sx={{
            width: 45,
            height: 45,
            backgroundColor: '#FAF7F2',
            borderRadius: 1,
            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)',
        }}
    />
)

const customCheckedIcon = (
    <Box
        sx={{
            width: 45,
            height: 45,
            backgroundColor: '#FDC913',
            borderRadius: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <CheckIcon sx={{ color: 'rgba(0, 0, 0, 0.8)', fontSize: 32 }} />
    </Box>
)

export default function Toppings() {
    const totalItems = 14;

    return (
        <ToppingsWrapper>
            <ToppingsTitle>Ek Malzemeler</ToppingsTitle>
            <ToppingsSubtitle>En Fazla 10 malzeme seçebilirsiniz. 5₺</ToppingsSubtitle>
            <Box sx={{ p: 4, px: 0, display: 'flex', justifyContent: 'center' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap', // Elemanlar sığmayınca alt satıra geçer
                        justifyContent: 'flex-start',
                        maxWidth: 900,
                        width: '100%',
                        gap: 2, // Elemanlar arası boşluk
                        pl: 0
                    }}
                >
                    {Array.from({ length: totalItems }).map((_, index) => (
                        <Box
                            key={index}
                            sx={{
                                // Mobil (xs): %100 (tek sütun)
                                // Tablet (sm): %48 (iki sütun)
                                // Masaüstü (md): %31 (üç sütun - gap hesabı dahil yaklaşık değer)
                                width: {
                                    xs: '100%',
                                    sm: 'calc(50% - 16px)',
                                    md: 'calc(33.33% - 11px)'
                                },
                                display: 'flex',
                                alignItems: 'flex-start'
                            }}
                        >
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        icon={customIcon}
                                        checkedIcon={customCheckedIcon}
                                        
                                        sx={{ padding: 0.5 }}
                                    />
                                }
                                label={`Checkbox ${index + 1}`}
                                sx={{
                                    ml: 0, // 1. ÖNEMLİ: Label'ın solundaki varsayılan margin'i sıfırlar
                                    mr: 2, // Sağ taraftaki yazı ile mesafe bırakır
                                    width: '100%', // Tıklama alanını genişletir
                                }}
                            />
                        </Box>
                    ))}
                    <Box
                        sx={{
                            width: 'calc(33.33% - 11px)',
                            display: { xs: 'none', md: 'block' }
                        }}
                    />
                </Box>
            </Box>
        </ToppingsWrapper>
    )
}