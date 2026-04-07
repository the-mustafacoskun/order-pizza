import { FormGroup, Input, Label } from "reactstrap";
import styled from "styled-components";
const OrderNotWrapper = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    margin:20px auto;
    font-family:'Barlow', sans-serif;
    border-bottom: 1px dotted #5F5F5F80;

`;
const OrderNotTitle = styled.span`
    
    justify-content:flex-start;
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 20px;
`;

export default function OrderNote() {

    return (
        <OrderNotWrapper>
             <OrderNotTitle>
                  Sipariş Notu
                </OrderNotTitle>
            <FormGroup>

                <Input
                    id="exampleText"
                    name="text"
                    type="textarea"
                    placeholder="Siparişine eklemek istediğin bir not var mı?"
                    rows="1"
                    style={{
                        height:'56px',
                        resize:'none',
                        minHeight:'56px',
                        paddingTop:'15px',
                        backgroundColor:'#FAF7F2'
                    }}
                />
            </FormGroup>
        </OrderNotWrapper>
    );
}