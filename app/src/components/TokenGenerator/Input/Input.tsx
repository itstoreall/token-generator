// @ts-nocheck
import { useContext } from 'react';
import InputContext from '../hooks/InputContext.jsx';
import {
  BaseInputWrap,
  BaseInput,
  BaseInputSubtitle,
  BaseInputDescription,
} from './Input.styles.js';

const Input = ({ subtitle, type, name, placeholder, disable, description }) => {
  const {
    tokenNameInputValue,
    setTokenNameInputValue,
    tokenSymbolInputValue,
    setTokenSymbolInputValue,
    tokenDecimalsInputValue,
    // setTokenDecimalsInputValue,
    tokenSupplyInputValue,
    setTokenSupplyInputValue,
    tokenSupplyMaxInputValue,
    setTokenSupplyMaxInputValue,
    inputStatus,
    setInputStatus,
  } = useContext(InputContext);

  console.log(`Input render (${inputStatus})`);

  const max = 30;

  const inputHandler = (value: String) => {
    value.length <= max && name === 'token_name'
      ? setTokenNameInputValue(value)
      : name === 'token_symbol'
      ? setTokenSymbolInputValue(value)
      : name === 'token_supply'
      ? setTokenSupplyInputValue(value)
      : name === 'token_supply_max' && setTokenSupplyMaxInputValue(value);

    setInputStatus(value);
  };

  return (
    <BaseInputWrap>
      <BaseInputSubtitle>{subtitle}</BaseInputSubtitle>
      <BaseInput
        type={type}
        name={name}
        placeholder={placeholder}
        disabled={disable}
        autoComplete='off'
        value={
          name === 'token_name'
            ? tokenNameInputValue
            : name === 'token_symbol'
            ? tokenSymbolInputValue
            : name === 'token_decimals'
            ? tokenDecimalsInputValue
            : name === 'token_supply'
            ? tokenSupplyInputValue
            : name === 'token_supply_max' && tokenSupplyMaxInputValue
        }
        onChange={(e: {}) => {
          inputHandler(e.target.value);
        }}
      />
      <BaseInputDescription>{description}</BaseInputDescription>
    </BaseInputWrap>
  );
};

export default Input;
