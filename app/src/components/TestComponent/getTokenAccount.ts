// @ts-nocheck
import * as spl from '@solana/spl-token';

const getTokenAccount = async (connect: {}, keys: {}, accs: {}) => {
  const adminAccount = await spl.getAccount(connect, accs.adminTokenPubkey);

  // console.log('spl -->', spl);

  console.log('admin spl-acc -->', adminAccount);
  console.log('address:', adminAccount.address.toBase58());
  console.log('mint:', adminAccount.mint.toBase58());
  console.log('owner:', adminAccount.owner.toBase58());
};

export default getTokenAccount;
