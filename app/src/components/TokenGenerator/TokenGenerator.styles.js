import s from 'styled-components';

export const Background = s.div`
  padding: 20px;

  @media screen and (min-width: 1000px) {
    padding: 30px;
  }
`;

export const Wrapper = s.div`
  display: flex;
  justify-content: space-between;
  min-width: 320px;
  max-width: 1200px;

  @media screen and (max-width: 999px) {
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1000px) {
    margin: 0 auto;
  }
`;

export const Column = s.div`
  width: 100%;
  height: 100%;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 600px) {
    @media screen and (max-width: 999px) {

      &:not(:last-child) {
        width: 48.6%;
      }
    }
  }

  @media screen and (min-width: 1000px) {
    // width: 31.8%;
    width: 31.8%;

    &:not(:last-child) {
      margin-bottom: 0px;
    } 
  }
`;

export const ColumnBlock = s.div`
  margin-bottom: ${({ mb }) => mb};
  background-color: #fff;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const BlockContent = s.div`
  padding: 25px 15px;
  border-radius: 0 0 4px 4px;
`;

export const BlockTitle = s.h2`
  padding: 15px 15px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  background-color: ${({ bg }) => (bg ? bg : '#343a40')};
  border-radius: 4px 4px 0 0;
`;

export const ColumnButton = s.button`
  padding: 20px;
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  text-transform: uppercase;
  background-color: #28a745;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  &:hover{
    background-color: #218838;
  }
`;

export const TransactionRowWrap = s.div`
  display: flex;
`;

export const TransactionRow = s.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ padding }) => padding};

  &:first-child {
    border-bottom: 1px solid rgb(170, 170, 170);
  }
`;

export const TransactionRowText = s.span`
  margin-right: 3px;
`;

export const TransactionFee = s.span`
  padding: 3px 7px;
  font-weight: 600;
  color: #fff;
  background-color: ${({ bg }) => bg};;
  border-radius: 4px;
`;
