// @ts-nocheck
import { useContext } from 'react';
import InputContext from '../hooks/InputContext.jsx';
// import { BlockSubtitle, BlockInputDescription } from '../TokenGenerator.styles';
import {
  BaseInputWrap,
  BaseInput,
  BaseInputSubtitle,
  BaseInputDescription,
} from './Input.styles.js';

const Input = ({ subtitle, name, placeholder, disable, description }) => {
  console.log('Input render');

  // const [inputValue, setInputValue] = useState('');
  // const [inputStatus, setInputStatus] = useState('input is empty');
  const {
    tokenNameInputValue,
    setTokenNameInputValue,
    tokenSymbolInputValue,
    setTokenSymbolInputValue,
    tokenDecimalsInputValue,
    // setTokenDecimalsInputValue,
    // inputStatus,
    // setInputStatus,
  } = useContext(InputContext);

  const max = 30;

  const inputHandler = (value: String) => {
    value.length <= max && name === 'token_name'
      ? setTokenNameInputValue(value)
      : name === 'token_symbol' && setTokenSymbolInputValue(value);
    // : setTokenSymbolInputValue(inputValue === null ? '' : inputValue);

    // setInputStatus(value);
  };

  /*
  const inputHandler = (value: String) => {
    value.length <= max
      ? setTokenSymbolInputValue(value)
      : setTokenSymbolInputValue(inputValue === null ? '' : inputValue);

    setInputStatus(value);
  };
  */

  return (
    <BaseInputWrap>
      <BaseInputSubtitle>{subtitle}</BaseInputSubtitle>
      <BaseInput
        type='text'
        name={name}
        placeholder={placeholder}
        disabled={disable}
        autoComplete='off'
        value={
          name === 'token_name'
            ? tokenNameInputValue
            : name === 'token_symbol'
            ? tokenSymbolInputValue
            : name === 'token_decimals' && tokenDecimalsInputValue
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
