import React, { useState } from 'react';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import styled from 'styled-components';

const SizeSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-family:'Barlow', sans-serif;
   /* Yanındaki hamur seçimiyle eşit alan kaplaması için */
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: #292929;
  span { color: #CE2829; }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px; /* Butonlar arası boşluk */
`;

const RoundButton = styled(Button)`
  width: 56px;
  height: 56px;
  border-radius: 50% !important; /* Tam yuvarlak */
  border: none !important;
  font-weight: 600 !important;
  font-size: 1rem !important;
  color: #292929 !important;
  
  /* Seçili olmayan (default) hali */
  background-color: #faf7f2 !important;

  /* Seçili (active) hali */
  &.active {
    background-color: #FDC913 !important; /* Sarı renk */
  }

  &:hover {
    background-color: #ebebeb !important;
  }
`;
const CrustSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items:flex-end;

`;
const SizeAndCrustWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
    margin: 10px auto;

`;

export default function SizeAndCrust() {
    const [selectedSize, setSelectedSize] = useState('M'); // Varsayılan orta boy
    const [selectedCrust, setSelectedCrust] = useState('');


    const [dropDownOpen, setDropDownOpen] = useState(false);

    const toggleDrowDown = () => setDropDownOpen(prevState => !prevState);


    const handleSizeChange = (size) => {
        setSelectedSize(size);
        console.log("Seçilen Boyut:", size); // Test için
    };

    return (
        <SizeAndCrustWrapper>
            <SizeSection>
                <SectionTitle>Boyut Seç <span>*</span></SectionTitle>
                <ButtonContainer>
                    <RoundButton
                        active={selectedSize === 'S'}
                        onClick={() => handleSizeChange('S')}
                    >
                        S
                    </RoundButton>
                    <RoundButton
                        active={selectedSize === 'M'}
                        onClick={() => handleSizeChange('M')}
                    >
                        M
                    </RoundButton>
                    <RoundButton
                        active={selectedSize === 'L'}
                        onClick={() => handleSizeChange('L')}
                    >
                        L
                    </RoundButton>
                </ButtonContainer>
            </SizeSection>
            <CrustSection>
                <SectionTitle>Hamur Seç <span>*</span></SectionTitle>
                <Dropdown isOpen={dropDownOpen} toggle={toggleDrowDown}>
                    <DropdownToggle caret size='lg' color='#FAF7F2' className="border border-bej text-dark">
                        {selectedCrust === '' ? 'Hamur Kalınlığı Seç' : selectedCrust}
                    </DropdownToggle>
                    <DropdownMenu end>
                       
                        <DropdownItem onClick={() => setSelectedCrust('İnce Kenar')} >İnce Kenar</DropdownItem>
                        <DropdownItem onClick={() => setSelectedCrust('Normal Kenar')} >Normal Kenar</DropdownItem>
                        <DropdownItem onClick={() => setSelectedCrust('Kalın Kenar')} >Kalın Kenar</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </CrustSection>
        </SizeAndCrustWrapper>
    );
}