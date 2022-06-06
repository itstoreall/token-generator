import { useContext } from 'react';
import InputContext from '../hooks/InputContext.jsx';
import {
  BaseCheckboxLabel,
  BaseCheckboxInput,
  BaseCheckboxDescriptionWrap,
  BaseCheckboxDescription,
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

      <BaseCheckboxDescriptionWrap>
        <BaseCheckboxDescription>{` I have read, understood and agreed to Token Generator's `}</BaseCheckboxDescription>
        <BaseCheckboxLink
          href='https://google.com'
          target='_blank'
          rel='noreferrer'
        >
          Terms of Use
        </BaseCheckboxLink>
      </BaseCheckboxDescriptionWrap>
    </BaseCheckboxLabel>
  );
};

export default Checkbox;
