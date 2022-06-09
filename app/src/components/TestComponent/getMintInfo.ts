import * as spl from '@solana/spl-token';
import { DECIMALS as dec } from '../../constants/TestComponent.js';

const getMintInfo = async (connect, mint) => {
  const mintInfo = await spl.getMint(connect, mint);

  console.log('mint address:', mintInfo.address.toBase58());
  console.log('mint decimals:', mintInfo.decimals);
  console.log('mint freezeAuthority:', mintInfo.freezeAuthority);
  console.log('mint isInitialized:', mintInfo.isInitialized);
  console.log('mint authority:', mintInfo.mintAuthority.toBase58());
  console.log(`mintInfo.supply: ${Number(mintInfo.supply) / dec} coins`);
  // console.log('mintInfo.supply:', mintInfo);
};

export default getMintInfo;
