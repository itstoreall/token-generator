import s from 'styled-components';

export const BaseSelectInfoBlock = s.div`
position: absolute;
bottom: 30px;
left: -109px;
display: none;
padding: 15px;
width: 220px;
font-size: 14px;
color: #856404;
background-color: #fff3cd;
border-radius: 4px;
`;

export const BaseSelectInfoSmallSquare = s.div`
position: absolute;
bottom: -7px;
left: 110px;
width: 15px;
height: 15px;
color: #856404;
background-color: #fff3cd;
transform: rotate(45deg);
`;

export const TransactionInfoIcon = s.div`
  position: relative;
  width: 18px;
  height: 18px;

  &:hover ${BaseSelectInfoBlock} {
    display: block;
  }
`;
