// @ts-nocheck
import { BaseSelectArrow } from './Select.styles';
import sprite from '../../../svg/sprite.svg';

const SelectArrow = () => {
  return (
    <BaseSelectArrow>
      <svg width='18' height='18' fill='#343a40'>
        <use href={sprite + '#icon-arrow_down'}></use>
      </svg>
    </BaseSelectArrow>
  );
};

export default SelectArrow;
