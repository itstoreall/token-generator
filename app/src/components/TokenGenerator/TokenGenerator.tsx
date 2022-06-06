// @ts-nocheck
import { useState } from 'react';
import {
  Background,
  Wrapper,
  Column,
  ColumnBlock,
  BlockContent,
  BlockTitle,
  ColumnButton,
} from './TokenGenerator.styles';
import InputContext from './hooks/InputContext.jsx';
import Input from './Input';
import Select from './Select';
import Checkbox from './Checkbox';
import Switch from './Switch';

const TokenGenerator = () => {
  console.log('TokenGenerator render');
  const [tokenNameInputValue, setTokenNameInputValue] = useState('');
  const [tokenSymbolInputValue, setTokenSymbolInputValue] = useState('');
  const [tokenDecimalsInputValue, setTokenDecimalsInputValue] = useState('18');
  const [tokenSupplyInputValue, setTokenSupplyInputValue] = useState('');
  const [tokenSupplyMaxInputValue, setTokenSupplyMaxInputValue] = useState('');
  const [inputStatus, setInputStatus] = useState('input is empty');
  const [agreementIsChecked, setAgreementIsChecked] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <InputContext.Provider
      value={{
        tokenNameInputValue,
        setTokenNameInputValue,
        tokenSymbolInputValue,
        setTokenSymbolInputValue,
        tokenDecimalsInputValue,
        setTokenDecimalsInputValue,
        tokenSupplyInputValue,
        setTokenSupplyInputValue,
        tokenSupplyMaxInputValue,
        setTokenSupplyMaxInputValue,
        inputStatus,
        setInputStatus,
        agreementIsChecked,
        setAgreementIsChecked,
        isChecked,
        setIsChecked,
      }}
    >
      <Background className='Background'>
        <Wrapper className='Wrapper'>
          <Column className='ColumnTokenDetails'>
            <ColumnBlock className='ColumnBlock'>
              <BlockTitle className='BlockTitle'>Token Details</BlockTitle>
              <BlockContent className='BlockContent'>
                <Input
                  className='inputTokenName'
                  type={'text'}
                  subtitle={'Token Name *'}
                  name={'token_name'}
                  placeholder={'Your token name'}
                  description={'Choose a name for your token.'}
                />

                <Input
                  className='inputTokenSymbol'
                  type={'text'}
                  subtitle={'Token Symbol *'}
                  name={'token_symbol'}
                  placeholder={'Your token symbol'}
                  description={
                    'Choose a symbol for your token (usually 3-5 chars).'
                  }
                />

                <Input
                  className='inputTokenDecimals'
                  type={'number'}
                  subtitle={'Token decimals *'}
                  name={'token_decimals'}
                  placeholder={'18'}
                  disable
                  description={
                    "Insert the decimal precision of your token. If you don't know what to insert, use 18."
                  }
                />

                <Input
                  className='inputTokenInitialSupply'
                  type={'number'}
                  subtitle={'Initial Supply *'}
                  name={'token_supply'}
                  placeholder={'Your token initial supply'}
                  description={
                    'Insert the initial number of tokens available. Will be put in your account.'
                  }
                />

                <Input
                  className='inputTokenTotalSupply'
                  type={'number'}
                  subtitle={'Total Supply *'}
                  name={'token_supply'}
                  placeholder={'Your token max supply'}
                  disable
                  description={'Insert the maximum number of tokens available.'}
                />
              </BlockContent>
            </ColumnBlock>
          </Column>

          <Column className='ColumnTokenFeatures'>
            <ColumnBlock className='ColumnBlock'>
              <BlockTitle className='BlockTitle'>Token Features</BlockTitle>
              <BlockContent className='BlockContent'>
                <Switch
                  name='switch_verified'
                  text={'Verified Source Code'}
                  description={
                    'Your Token Source Code will be automatically verified on Etherscan.'
                  }
                />

                <Switch
                  name='switch_copyright'
                  text={'Remove Copyright'}
                  description={
                    'Remove the link pointing to this page from your contract.'
                  }
                />

                <Switch name='switch_burnable' text={'Burnable'} />
                <Switch name='switch_mintable' text={'Mintable'} />
                <Switch name='switch_recover' text={'Token Recover'} />
              </BlockContent>
            </ColumnBlock>
          </Column>

          <Column className='ColumnTokenTypeAndNetwork'>
            <ColumnBlock className='ColumnBlock' mb={'20px'}>
              <BlockTitle className='BlockTitle'>
                Token Type and Network
              </BlockTitle>
              <BlockContent className='BlockContent'>
                <Select
                  className='SelectProgram'
                  subtitle={'Token Type *'}
                  name={'select_program'}
                  options={[
                    'HelloProgram',
                    'SympleProgram',
                    'StandartProgram',
                    'BurnableProgram',
                  ]}
                  description={'Choose your Token Type.'}
                />

                <Select
                  className='SelectNetwork'
                  subtitle={'Network *'}
                  name={'select_network'}
                  options={[
                    'Mainnet Beta Network',
                    'Testnet Network',
                    'Devnet Network',
                  ]}
                  description={'Choose your Network.'}
                />
              </BlockContent>
            </ColumnBlock>

            <ColumnBlock className='ColumnBlock' mb={'20px'}>
              <BlockTitle className='BlockTitle'>Agreement</BlockTitle>
              <BlockContent className='BlockContent'>
                <Checkbox />
              </BlockContent>
            </ColumnBlock>

            <ColumnBlock className='ColumnBlock' mb={'20px'}>
              <BlockTitle className='BlockTitle'>Transaction</BlockTitle>
              <BlockContent className='BlockContent'>
                Transaction content
              </BlockContent>
            </ColumnBlock>

            <ColumnButton className='ColumnButton'>Confirm</ColumnButton>
          </Column>
        </Wrapper>
      </Background>
    </InputContext.Provider>
  );
};

export default TokenGenerator;
