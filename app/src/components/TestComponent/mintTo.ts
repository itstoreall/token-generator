// @ts-nocheck
import // TransactionInstruction,
// sendAndConfirmTransaction,
// Transaction,
'@solana/web3.js';
import * as spl from '@solana/spl-token';
// import encodeAmount from './encodeAmount.ts';

const mintTo = async (config: {}, mint: {}) => {
  // const { connect, program, sender, recipient } = config;

  console.log('spl.TOKEN_PROGRAM_ID', spl.TOKEN_PROGRAM_ID.toString());
  // console.log('mint', mint);
  // console.log('mint', mint.toString());
  // console.log('program', program);
  // console.log('sender keypair', sender.keypair);
  // console.log('sender account', sender.account);
  // console.log('sender account', sender.account.toString());
  // console.log('sender wallet', sender.wallet);
  // console.log('sender wallet', sender.wallet.toString());
  // console.log('recipient', recipient);

  // const amount = encodeAmount(100000000000);

  try {
    const signature = await spl.mintTo(
      connect, // connection,
      sender.keypair, // payer,
      spl.TOKEN_PROGRAM_ID,
      sender.account, // tokenAccount.address,
      sender.wallet, // mintAuthority,
      100000000000 // because decimals for the mint are set to 9
    );

    console.log('mintTo', signature);

    // const mintIx = new TransactionInstruction({
    //   programId: program,
    //   keys: [
    //     { pubkey: sender.wallet, isSigner: true, isWritable: false },
    //     { pubkey: sender.account, isSigner: false, isWritable: true },
    //     { pubkey: recipient.account, isSigner: false, isWritable: true },
    //     { pubkey: spl.TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
    //   ],
    //   data: Buffer.of(0, ...encodeAmount()),
    // });

    // const tx = new Transaction().add(mintIx);

    // tx.feePayer = sender.wallet;
    // tx.recentBlockhash = await connect.getLatestBlockhash().blockhash;

    // const hash = await sendAndConfirmTransaction(connect, tx, [sender.keypair]);

    // console.log('transfer tx', hash);
  } catch (err) {
    console.log('ERROR in mintTo:', err.message);
  }
};

export default mintTo;
