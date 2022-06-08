// @ts-nocheck
import {
  TransactionInfoIcon,
  BaseSelectInfoBlock,
  BaseSelectInfoSmallSquare,
} from './TransactionInfo.styles';
import sprite from '../../../svg/sprite.svg';

const TransactionInfo = ({ content }) => {
  return (
    <div>
      <TransactionInfoIcon>
        <svg width='18' height='18' fill={'inherit'}>
          <use href={sprite + '#icon-info'}></use>
        </svg>
        <BaseSelectInfoBlock className={`BaseSelectInfoBlock-${'k'}`}>
          {/* <b>{`You selected a ${selectedOption}.`}</b> */}
          {<p>{content}</p>}
          <BaseSelectInfoSmallSquare />
        </BaseSelectInfoBlock>
      </TransactionInfoIcon>
    </div>
  );
};

export default TransactionInfo;
