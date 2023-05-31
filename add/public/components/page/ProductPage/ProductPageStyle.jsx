import styled from 'styled-components';

const productPage = styled.div `
display: flex;
flex-direction: column ;
height: 100vh;
width: 100%;
`


const productPage__main = styled.main `
padding: 0 70px 0px 140px;
display: flex;
align-items: center;
height: 100%;
text-align: left;
;

& > div {
width: 50%;
}

`

const Title = styled.h1 `
font-style: normal;
font-weight: 500;
font-size: 30px;
line-height: 37px;
color: #D58C51;
`;

const Text = styled.p`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #FFFFFF;
`;

const Image = styled.img`
width: 100%;
max-width: 500px;
height: auto;
`;

const Price = styled.span`
font-style: normal;
font-weight: 500;
font-size: 23px;
line-height: 28px;
color: #FFFFFF;
white-space: pre;
`;

const Weight = styled.span`
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #FFFFFF;
white-space: pre;


`
const Divider = styled.span`
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
margin: 0 8px;
color: #FFFFFF;
`

const PriceWrap = styled.div `
display: flex;
align-items: center;
`

const BtnWrap = styled.div `
margin-left: 68px;
margin-right: auto;
max-width: 200px;
width: 100%;
`
const ProductHeader = styled.div`
display: flex;
flex-direction: row;
padding: 56px 70px 0px 68px;
align-items: center;
`

const TotalAmount = styled.div`
display: flex;
flex-direction: row;
gap: 20px;
margin-left: auto;
margin-right: 22px;

`

const PriceSum = styled.div `
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 21px;
text-align: right;
color: #FFFFFF;
`
const BtnExit = styled.div `
max-width: 200px;
width: 100%;
`
export default {
productPage,
productPage__main,
Title,
Text,
Image,
Price,
Weight,
Divider,
PriceWrap,
BtnWrap,
ProductHeader,
TotalAmount,
PriceSum,
BtnExit
}
