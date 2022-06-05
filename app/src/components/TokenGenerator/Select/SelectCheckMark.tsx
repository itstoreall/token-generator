// @ts-nocheck
import { BaseSelectCheckMark } from './Select.styles';
import sprite from '../../../svg/sprite.svg';

const SelectCheckMark = () => {
  return (
    <BaseSelectCheckMark>
      <svg width='13' height='13' fill='#fff'>
        <use href={sprite + '#icon-check_mark'}></use>
      </svg>
    </BaseSelectCheckMark>
  );
};

export default SelectCheckMark;
