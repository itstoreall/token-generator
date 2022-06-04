import {
  Background,
  Wrapper,
  Column,
  ColumnBlock,
  BlockTitle,
  BlockContent,
  ColumnButton,
} from './styles';

const TokenGenerator = () => {
  return (
    <Background>
      <Wrapper>
        <Column>
          <ColumnBlock>
            <BlockTitle>Token Details</BlockTitle>
            <BlockContent>Token Details content</BlockContent>
          </ColumnBlock>
        </Column>

        <Column>
          <ColumnBlock>
            <BlockTitle>Token Features</BlockTitle>
            <BlockContent>Token Features content</BlockContent>
          </ColumnBlock>
        </Column>

        <Column>
          <ColumnBlock mb={'20px'}>
            <BlockTitle>Token Type and Network</BlockTitle>
            <BlockContent>Token Type and Network content</BlockContent>
          </ColumnBlock>

          <ColumnBlock mb={'20px'}>
            <BlockTitle>Agreement</BlockTitle>
            <BlockContent>Agreement content</BlockContent>
          </ColumnBlock>

          <ColumnBlock mb={'20px'}>
            <BlockTitle>Transaction</BlockTitle>
            <BlockContent>Transaction content</BlockContent>
          </ColumnBlock>

          <ColumnButton>Confirm</ColumnButton>
        </Column>
      </Wrapper>
    </Background>
  );
};

export default TokenGenerator;
