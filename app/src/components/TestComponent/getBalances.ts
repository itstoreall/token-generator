// @ts-nocheck
import { getAccount } from '@solana/spl-token';
import { DECIMALS as dec } from '../../constants/TestComponent';

const getBalances = async (connect: {}, keys: {}, accs: {}) => {
  // --- wallets:
  const adminWalletBalance = await connect?.getBalance(
    keys.adminKeypair.publicKey
  );
  const ronnyWalletBalance = await connect?.getBalance(
    keys.ronnyKeypair.publicKey
  );
  const helgaWalletBalance = await connect?.getBalance(
    keys.helgaKeypair.publicKey
  );

  // --- accounts:
  const { amount: adminTokenBalance } = await getAccount(
    connect,
    accs.adminTokenPubkey
  );
  const adminAccount = await getAccount(connect, accs.adminTokenPubkey);
  const { amount: ronnyTokenAccInfo } = await getAccount(
    connect,
    accs.ronnyTokenPubkey
  );
  const { amount: helgaTokenAccInfo } = await getAccount(
    connect,
    accs.helgaTokenPubkey
  );

  console.log('adminAccount:', adminAccount);
  console.log('adm:', adminWalletBalance / dec);
  console.log('ron:', ronnyWalletBalance / dec);
  console.log('hel:', helgaWalletBalance / dec);
  console.log('adm:', Number(adminTokenBalance) / dec);
  console.log('ron:', Number(ronnyTokenAccInfo) / dec);
  console.log('hel:', Number(helgaTokenAccInfo) / dec);
  // console.log('hel:', helgaTokenAccInfo.toString().toFixed(9));

  return {
    wallet: {
      admin: adminWalletBalance,
      ronny: ronnyWalletBalance,
      helga: helgaWalletBalance,
    },
    token: {
      admin: adminTokenBalance.toString(),
      ronny: ronnyTokenAccInfo.toString(),
      helga: helgaTokenAccInfo.toString(),
    },
  };
};

export default getBalances;
