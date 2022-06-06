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
  const { isChecked, setIsChecked } = useContext(InputContext);

  console.log('isChecked', isChecked, name);
  console.log('isChecked', isChecked, text);

  return (
    <BaseSwitchWrap className={`BaseSwitchWrap-${name}`}>
      <BaseSwitchCheckboxWrap
        className={`BaseSwitchCheckboxWrap-${name}`}
        description={description}
      >
        <BaseSwitch className={`BaseSwitch-${name}`}>
          <Checkbox
            className={`Checkbox-${name}`}
            id='checkbox'
            type='checkbox'
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          <CheckboxLabel
            className={`CheckboxLabel-${name}`}
            htmlFor='checkbox'
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
