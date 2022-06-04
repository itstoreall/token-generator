// @ts-nocheck
import { useState } from 'react';
import {
  Background,
  Wrapper,
  Column,
  ColumnBlock,
  BlockContent,
  BlockTitle,
  // BlockSubtitle,
  // BlockInputDescription,
  ColumnButton,
} from './TokenGenerator.styles';
import InputContext from './hooks/InputContext.jsx';
import Input from './Input';

const TokenGenerator = () => {
  console.log('TokenGenerator render');
  const [tokenNameInputValue, setTokenNameInputValue] = useState('');
  const [tokenSymbolInputValue, setTokenSymbolInputValue] = useState('');
  const [tokenDecimalsInputValue, setTokenDecimalsInputValue] = useState('18');
  // const [inputStatus, setInputStatus] = useState('input is empty');

  return (
    <InputContext.Provider
      value={{
        tokenNameInputValue,
        setTokenNameInputValue,
        tokenSymbolInputValue,
        setTokenSymbolInputValue,
        tokenDecimalsInputValue,
        setTokenDecimalsInputValue,
        // inputStatus,
        // setInputStatus,
      }}
    >
      <Background>
        <Wrapper>
          <Column>
            <ColumnBlock>
              <BlockTitle>Token Details</BlockTitle>
              <BlockContent>
                <Input
                  subtitle={'Token Name *'}
                  name={'token_name'}
                  placeholder={'Your token name'}
                  description={'Choose a name for your token.'}
                />

                <Input
                  subtitle={'Token Symbol *'}
                  name={'token_symbol'}
                  placeholder={'Your token symbol'}
                  description={
                    'Choose a symbol for your token (usually 3-5 chars).'
                  }
                />

                <Input
                  subtitle={'Token decimals *'}
                  name={'token_decimals'}
                  placeholder={'18'}
                  disable
                  description={
                    "Insert the decimal precision of your token. If you don't know what to insert, use 18."
                  }
                />
              </BlockContent>
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
    </InputContext.Provider>
  );
};

export default TokenGenerator;
