// @ts-nocheck
import { TransactionInfoIcon } from './TokenGenerator.styles';
import sprite from '../../svg/sprite.svg';

const TransactionInfo = () => {
  return (
    <TransactionInfoIcon>
      <svg width='18' height='18' fill={'inherit'}>
        <use href={sprite + '#icon-info'}></use>
      </svg>
    </TransactionInfoIcon>
  );
};

export default TransactionInfo;
