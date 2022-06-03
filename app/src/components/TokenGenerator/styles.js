import s from 'styled-components';

export const Background = s.div`
  padding: 20px;
  height: 100vh;

  @media screen and (min-width: 1000px) {
    padding: 30px;
  }
`;

export const Wrapper = s.div`
  display: flex;
  justify-content: space-between;
  min-width: 320px;

  @media screen and (max-width: 999px) {
    flex-wrap: wrap;
  }
`;

export const Column = s.div`
  width: 100%;
  background-color: pink;

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
    width: 31.6%;

    &:not(:last-child) {
      margin-bottom: 0px;
    } 
  }
`;

export const ColumnTitle = s.div`
  padding: 15px 15px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  background-color: #343a40;
`;

export const ColumnContent = s.div`
  padding: 15px 15px;
  height: 200px;
`;
