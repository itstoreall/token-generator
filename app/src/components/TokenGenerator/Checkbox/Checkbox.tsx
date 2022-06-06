import { useContext } from 'react';
import InputContext from '../hooks/InputContext.jsx';
import {
  BaseCheckboxLabel,
  BaseCheckboxInput,
  BaseCheckboxTextWrap,
  BaseCheckboxText,
  BaseCheckboxLink,
} from './Checkbox.styles';

const Checkbox = () => {
  const { agreementIsChecked, setAgreementIsChecked } =
    useContext(InputContext);

  return (
    <BaseCheckboxLabel>
      <BaseCheckboxInput
        type='checkbox'
        onChange={() => {
          setAgreementIsChecked(!agreementIsChecked);
        }}
      />

      <BaseCheckboxTextWrap>
        <BaseCheckboxText>{` I have read, understood and agreed to Token Generator's `}</BaseCheckboxText>
        <BaseCheckboxLink
          href='https://google.com'
          target='_blank'
          rel='noreferrer'
        >
          Terms of Use
        </BaseCheckboxLink>
      </BaseCheckboxTextWrap>
    </BaseCheckboxLabel>
  );
};

export default Checkbox;
