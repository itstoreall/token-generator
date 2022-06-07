import { useContext } from 'react';
import InputContext from '../hooks/InputContext.jsx';
import {
  BaseSwitchWrap,
  BaseSwitchCheckboxWrap,
  BaseSwitch,
  Checkbox,
  CheckboxLabel,
  BaseSwitchText,
  BaseSwitchDescription,
} from './Switch.styles.js';

const Switch = ({ name, text, description }) => {
  const {
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
  } = useContext(InputContext);

  // console.log('isChecked', isChecked, name);
  // console.log('isChecked', isChecked, text);

  const toggleHandler = () => {
    name === 'switch_verified' &&
      setIsCheckedSwitchVerified(!isCheckedSwitchVerified);
    name === 'switch_copyright' &&
      setIsCheckedSwitchCopyright(!isCheckedSwitchCopyright);
    name === 'switch_burnable' &&
      setIsCheckedSwitchBurnable(!isCheckedSwitchBurnable);
    name === 'switch_mintable' &&
      setIsCheckedSwitchMintable(!isCheckedSwitchMintable);
    name === 'switch_burnable' &&
      setIsCheckedSwitchRecover(!isCheckedSwitchRecover);
  };

  return (
    <BaseSwitchWrap className={`BaseSwitchWrap-${name}`}>
      <BaseSwitchCheckboxWrap
        className={`BaseSwitchCheckboxWrap-${name}`}
        description={description}
      >
        <BaseSwitch className={`BaseSwitch-${name}`}>
          <Checkbox
            className={`Checkbox-${name}`}
            id={`checkbox-${name}`}
            type='checkbox'
            onChange={() => {
              toggleHandler();
            }}
          />
          <CheckboxLabel
            className={`CheckboxLabel-${name}`}
            htmlFor={`checkbox-${name}`}
          />
        </BaseSwitch>

        <BaseSwitchText className={`BaseSwitchText-${name}`}>
          {text}
        </BaseSwitchText>
      </BaseSwitchCheckboxWrap>

      <BaseSwitchDescription className={`BaseSwitchDescription-${name}`}>
        {description}
      </BaseSwitchDescription>
    </BaseSwitchWrap>
  );
};

export default Switch;
