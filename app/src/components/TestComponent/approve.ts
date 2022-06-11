// @ts-nocheck
import {
  TransactionInstruction,
  sendAndConfirmTransaction,
  Transaction,
} from '@solana/web3.js';
import * as spl from '@solana/spl-token';
import encodeAmount from './encodeAmount.ts';

const approve = async (config: {}) => {
  const { connect, program, sender, recipient } = config;

  console.log('connect', connect);
  console.log('program', program);
  console.log('sender', sender);
  console.log('recipient', recipient);

  try {
    const approveIx = new TransactionInstruction({
      programId: program, // keys.programKeypair.publicKey
      keys: [
        {
          pubkey: sender.wallet, // keys.capKeypair.publicKey
          isSigner: true,
          isWritable: true,
        },
        {
          pubkey: sender.account, // accs.capTokenPubkey
          isSigner: false,
          isWritable: true,
        },
        {
          pubkey: recipient.account, // accs.ronnyTokenPubkey
          isSigner: false,
          isWritable: true,
        },
        { pubkey: TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      ],
      data: Buffer.of(1, ...amount),
    });

    const tx = new Transaction().add(approveIx);

    tx.feePayer = keys.capKeypair.publicKey;
    tx.recentBlockhash = await connect.getLatestBlockhash().blockhash;

    const resApprove = await sendAndConfirmTransaction(connect, tx, [
      keys.capKeypair,
    ]);

    console.log('approve tx', resApprove);
  } catch (err) {
    console.log('ERROR in approve:', err.message);
  }
};

// ---

const approve2 = async (config: {}) => {
  const { connect, program, sender, recipient } = config;

  // console.log('connect', connect);
  // console.log('program', program);
  // console.log('sender', sender);
  // console.log('recipient', recipient);

  try {
    const transferIx = new TransactionInstruction({
      programId: program,
      keys: [
        { pubkey: sender.wallet, isSigner: true, isWritable: false },
        { pubkey: sender.account, isSigner: false, isWritable: true },
        { pubkey: recipient.account, isSigner: false, isWritable: true },
        { pubkey: spl.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      ],
      data: Buffer.of(0, ...encodeAmount()),
    });

    const tx = new Transaction().add(transferIx);

    tx.feePayer = sender.wallet;
    tx.recentBlockhash = await connect.getLatestBlockhash().blockhash;

    const hash = await sendAndConfirmTransaction(connect, tx, [sender.keypair]);

    console.log('transfer tx', hash);
  } catch (err) {
    console.log('ERROR in transfer:', err.message);
  }
};

export default approve;
