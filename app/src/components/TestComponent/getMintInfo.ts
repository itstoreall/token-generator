// @ts-nocheck
import * as spl from '@solana/spl-token';
import { DECIMALS as dec } from '../../constants/TestComponent.js';

const getMintInfo = async (label: string, connect: {}, mint: {}) => {
  const mintInfo = await spl.getMint(connect, mint);

  // console.log('mintInfo:', mintInfo);

  // Token:
  label === 'mint' && console.log('Token:', mintInfo.address.toBase58());

  // Decimals
  label === 'decimals' &&
    console.log(
      'Decimals:',
      mintInfo.decimals,
      `(token: ${mintInfo.address.toBase58().slice(0, 7)}..)`
    );

  // Freeze authority
  label === '' &&
    console.log('mint freezeAuthority:', mintInfo.freezeAuthority);

  // Initialized (bool)
  label === 'init' &&
    console.log(
      'Initialized:',
      mintInfo.isInitialized,
      `(token: ${mintInfo.address.toBase58().slice(0, 7)}..)`
    );

  // Authority
  label === 'authority' &&
    console.log(
      'Authority:',
      mintInfo.mintAuthority.toBase58(),
      `(token: ${mintInfo.address.toBase58().slice(0, 7)}..)`
    );

  // Supply:
  label === 'supply' &&
    console.log(
      'Supply:',
      Number(mintInfo.supply) / dec,
      `coins`,
      `(token: ${mintInfo.address.toBase58().slice(0, 7)}..)`
    );
};

export default getMintInfo;
