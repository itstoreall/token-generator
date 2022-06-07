// @ts-nocheck
import { BaseSelectArrow } from './Select.styles';
import sprite from '../../../svg/sprite.svg';

const SelectArrow = ({ disable }) => {
  return (
    <BaseSelectArrow>
      <svg
        width='18'
        height='18'
        fill={disable ? 'rgb(170, 170, 170)' : '#343a40'}
      >
        <use href={sprite + '#icon-arrow_down'}></use>
      </svg>
    </BaseSelectArrow>
  );
};

export default SelectArrow;
