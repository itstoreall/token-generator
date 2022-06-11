// @ts-nocheck
import * as spl from '@solana/spl-token';
import { DECIMALS as dec } from '../../constants/TestComponent.js';

const getAccountInfo = async (label: string, connect: {}, account: {}) => {
  const tokenAccountInfo = await spl.getAccount(connect, account);

  // console.log('tokenAccountInfo:', tokenAccountInfo);

  // Address
  label === '' &&
    console.log('acc address:', tokenAccountInfo.address.toBase58());

  // Balance
  label === 'balance' &&
    console.log(
      'Balance:',
      Number(tokenAccountInfo.amount) / dec,
      `(acc: ${account.toBase58().slice(0, 7)}..)`
    );

  // Close authority
  label === '' &&
    console.log('acc closeAuthority:', tokenAccountInfo.closeAuthority);

  // Delegate (null)
  label === '' && console.log('acc delegate:', tokenAccountInfo.delegate);

  // Delegated amount (0n)
  label === '' &&
    console.log(
      'acc d amount:',
      Number(tokenAccountInfo.delegatedAmount) / dec
    );

  // Is frozen (bool)
  label === '' && console.log('Is frozen:', tokenAccountInfo.isFrozen);

  // Initialized (bool)
  label === 'init' &&
    console.log(
      'initialized:',
      tokenAccountInfo.isInitialized,
      `(acc: ${account.toBase58().slice(0, 7)}..)`
    );

  // Native (bool)
  label === '' && console.log('acc isNative:', tokenAccountInfo.isNative);

  // Get token address
  label === 'mint' &&
    console.log('Token address:', tokenAccountInfo.mint.toBase58());

  // Owner
  label === 'owner' &&
    console.log(
      'Owner:',
      tokenAccountInfo.owner.toBase58(),
      `(acc: ${account.toBase58().slice(0, 7)}..)`
    );

  // Rent exempt reserve
  label === '' &&
    console.log('acc rentExemptReserve:', tokenAccountInfo.rentExemptReserve);
};

export default getAccountInfo;
