import {
  Background,
  Wrapper,
  Column,
  ColumnTitle,
  ColumnContent,
} from './styles';

const TokenGenerator = () => {
  return (
    <Background>
      <Wrapper>
        <Column>
          <ColumnTitle>Token Details</ColumnTitle>
          <ColumnContent>Token Details</ColumnContent>
        </Column>
        <Column>
          <ColumnTitle>Token Features</ColumnTitle>
          <ColumnContent>Token Features</ColumnContent>
        </Column>
        <Column>
          <ColumnTitle>Token Type and Network</ColumnTitle>
          <ColumnContent>Token Type and Network</ColumnContent>
        </Column>
      </Wrapper>
    </Background>
  );
};

export default TokenGenerator;
