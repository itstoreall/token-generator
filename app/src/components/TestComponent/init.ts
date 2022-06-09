// @ts-nocheck
import { PublicKey } from '@solana/web3.js';
import getOrCreateAssociatedTokenAccount from './getOrCreateAssociatedTokenAccount.ts';
import createKeypair from './createKeypair.ts';

const init = async (
  connect: {},
  programPrivatKey: [],
  adminPrivatKey: [],
  ronnyPrivatKey: [],
  helgaPrivatKey: []
) => {
  const mint = new PublicKey('8s8kL6Xnry39bBj9JYhsqm9ojYNyp9ywzF23tif86G8h');

  const programKeypair = createKeypair(programPrivatKey);
  const adminKeypair = createKeypair(adminPrivatKey);
  const ronnyKeypair = createKeypair(ronnyPrivatKey);
  const helgaKeypair = createKeypair(helgaPrivatKey);

  const adminTokenPubkey = await getOrCreateAssociatedTokenAccount(
    connect,
    mint,
    adminKeypair
  );
  const ronnyTokenPubkey = await getOrCreateAssociatedTokenAccount(
    connect,
    mint,
    ronnyKeypair
  );
  const helgaTokenPubkey = await getOrCreateAssociatedTokenAccount(
    connect,
    mint,
    helgaKeypair
  );

  // console.log('mint -->', mint.toBase58());
  // console.log('programKeypair -->', programKeypair.publicKey.toBase58());
  // console.log('adminKeypair -->', adminKeypair.publicKey.toBase58());
  // console.log('ronnyKeypair -->', ronnyKeypair.publicKey.toBase58());
  // console.log('helgaKeypair -->', helgaKeypair.publicKey.toBase58());

  // console.log('adminTokenPubkey -->', adminTokenPubkey.toBase58());
  // console.log('ronnyTokenPubkey -->', ronnyTokenPubkey.toBase58());
  // console.log('helgaTokenPubkey -->', helgaTokenPubkey.toBase58());

  return {
    keys: {
      programKeypair,
      adminKeypair,
      ronnyKeypair,
      helgaKeypair,
    },
    accs: {
      adminTokenPubkey,
      ronnyTokenPubkey,
      helgaTokenPubkey,
    },
    mint,
  };
};

export default init;
