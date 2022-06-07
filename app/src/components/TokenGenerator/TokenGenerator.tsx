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
  TransactionRowWrap,
  TransactionRow,
  TransactionRowText,
  TransactionFee,
} from './TokenGenerator.styles';
import InputContext from './hooks/InputContext.jsx';
import Input from './Input';
import Select from './Select';
import Checkbox from './Checkbox';
import Switch from './Switch';
import TransactionInfo from './TransactionInfo.tsx';

const TokenGenerator = () => {
  console.log('TokenGenerator render');
  const [tokenNameInputValue, setTokenNameInputValue] = useState('');
  const [tokenSymbolInputValue, setTokenSymbolInputValue] = useState('');
  const [tokenDecimalsInputValue, setTokenDecimalsInputValue] = useState('18');
  const [tokenSupplyInputValue, setTokenSupplyInputValue] = useState('');
  const [tokenSupplyMaxInputValue, setTokenSupplyMaxInputValue] = useState('');
  const [inputStatus, setInputStatus] = useState('input is empty');
  const [agreementIsChecked, setAgreementIsChecked] = useState(false);
  const [isCheckedSwitchVerified, setIsCheckedSwitchVerified] = useState(false);
  const [isCheckedSwitchCopyright, setIsCheckedSwitchCopyright] =
    useState(false);
  const [isCheckedSwitchBurnable, setIsCheckedSwitchBurnable] = useState(false);
  const [isCheckedSwitchMintable, setIsCheckedSwitchMintable] = useState(false);
  const [isCheckedSwitchRecover, setIsCheckedSwitchRecover] = useState(false);

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
        isCheckedSwitchVerified,
        setIsCheckedSwitchVerified,
        isCheckedSwitchCopyright,
        setIsCheckedSwitchCopyright,
        isCheckedSwitchBurnable,
        setIsCheckedSwitchBurnable,
        isCheckedSwitchMintable,
        setIsCheckedSwitchMintable,
        isCheckedSwitchRecover,
        setIsCheckedSwitchRecover,
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
                  disable={false}
                />

                <Input
                  className='inputTokenDecimals'
                  type={'number'}
                  subtitle={'Token decimals *'}
                  name={'token_decimals'}
                  placeholder={'18'}
                  description={
                    "Insert the decimal precision of your token. If you don't know what to insert, use 18."
                  }
                  disable={true}
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
                  disable={false}
                />

                <Input
                  className='inputTokenTotalSupply'
                  type={'number'}
                  subtitle={'Total Supply *'}
                  name={'token_supply'}
                  placeholder={'Your token max supply'}
                  description={'Insert the maximum number of tokens available.'}
                  disable={true}
                />
              </BlockContent>
            </ColumnBlock>
          </Column>

          <Column className='ColumnTokenFeatures'>
            <ColumnBlock className='ColumnBlock'>
              <BlockTitle className='BlockTitle'>Token Features</BlockTitle>
              <BlockContent className='BlockContent'>
                <Select
                  subtitle={'Supply Type'}
                  name={'select_supply'}
                  options={['10K', 'Fixed', 'Capped', 'Unlimited']}
                  description={'10k, Fixed, Unlimited, Capped'}
                  disable={true}
                  bg={'#e9ecef'}
                />

                <Select
                  subtitle={'Access Type'}
                  name={'select_access'}
                  options={['None', 'Ownable', 'Role', 'Based']}
                  description={'None, Ownable, Role Based'}
                  disable={true}
                  bg={'#e9ecef'}
                />

                <Select
                  subtitle={'Transfer Type'}
                  name={'select_transfer'}
                  options={['Unstoppable', 'Pausable']}
                  description={'Unstoppable, Pausable'}
                  disable={true}
                  bg={'#e9ecef'}
                />

                <Switch
                  checked={isCheckedSwitchVerified}
                  name='switch_verified'
                  text={'Verified Source Code'}
                  description={
                    'Your Token Source Code will be automatically verified on Etherscan.'
                  }
                />

                <Switch
                  checked={isCheckedSwitchCopyright}
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
                  subtitle={'Token Type *'}
                  name={'select_program'}
                  options={[
                    'HelloProgram',
                    'SympleProgram',
                    'StandartProgram',
                    'BurnableProgram',
                  ]}
                  description={'Choose your Token Type.'}
                  disable={false}
                />

                <Select
                  subtitle={'Network *'}
                  name={'select_network'}
                  options={[
                    'Mainnet Beta Network',
                    'Testnet Network',
                    'Devnet Network',
                  ]}
                  description={'Choose your Network.'}
                  disable={false}
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
              <BlockTitle className='BlockTitle' bg={'#17a2b8'}>
                Transaction
              </BlockTitle>
              <BlockContent className='BlockContent'>
                <TransactionRow padding={'0 0 20px 0'}>
                  <TransactionRowWrap>
                    <TransactionRowText>Commission Fee:</TransactionRowText>
                    <TransactionInfo />
                  </TransactionRowWrap>
                  <TransactionFee bg={'#28a745'}>0 SOL</TransactionFee>
                </TransactionRow>

                <TransactionRow padding={'20px 0 0 0'}>
                  <TransactionRowWrap>
                    <TransactionRowText>Gas Fee:</TransactionRowText>
                    <TransactionInfo />
                  </TransactionRowWrap>
                  <TransactionFee bg={'#17a2b8'}>Variable</TransactionFee>
                </TransactionRow>
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
