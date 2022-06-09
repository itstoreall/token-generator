// @ts-nocheck
import * as spl from '@solana/spl-token';
import { DECIMALS as dec } from '../../constants/TestComponent.js';

const getAccountInfo = async (connect: {}, account: {}) => {
  const tokenAccountInfo = await spl.getAccount(connect, account);

  console.log('acc address:', tokenAccountInfo.address.toBase58());
  console.log('acc amount:', Number(tokenAccountInfo.amount) / dec);
  console.log('acc closeAuthority:', tokenAccountInfo.closeAuthority);
  console.log('acc delegate:', tokenAccountInfo.delegate);
  console.log('acc d amount:', Number(tokenAccountInfo.delegatedAmount) / dec);
  console.log('acc isFrozen:', tokenAccountInfo.isFrozen);
  console.log('acc isInitialized:', tokenAccountInfo.isInitialized);
  console.log('acc isNative:', tokenAccountInfo.isNative);
  console.log('acc mint:', tokenAccountInfo.mint.toBase58());
  console.log('acc owner:', tokenAccountInfo.owner.toBase58());
  console.log('acc rentExemptReserve:', tokenAccountInfo.rentExemptReserve);
};

export default getAccountInfo;
