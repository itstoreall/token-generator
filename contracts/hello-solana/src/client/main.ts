import {
  Keypair,
  Connection,
  PublicKey,
  LAMPORTS_PER_SOL,
  TransactionInstruction,
  Transaction,
  sendAndConfirmTransaction,
} from '@solana/web3.js';
import fs from 'mz/fs';
import path from 'path';

const PROGRAM_KEYPAIR_PATH = path.join(
  path.resolve(__dirname, '../../dist/program'),
  'hello_solana-keypair.json'
); // /Users/serhiistanislav/Solana/token-generator/contracts/hello-solana/dist/program/hello_solana-keypair.json

console.log('PROGRAM_KEYPAIR_PATH', PROGRAM_KEYPAIR_PATH);

const main = async () => {
  console.log('Launching client...');

  let connection = new Connection('https://api.devnet.solana.com', 'confirmed');

  const secretKeyString = await fs.readFile(PROGRAM_KEYPAIR_PATH, {
    encoding: 'utf8',
  });
  const secretKey = Uint8Array.from(JSON.parse(secretKeyString));
  const programKeypair = Keypair.fromSecretKey(secretKey);
  let programId: PublicKey = programKeypair.publicKey;

  console.log('secretKeyString', secretKeyString); // string: [92,163,141, ...]
  console.log('secretKey', secretKey); // Uint8Array(64) [92, 163, 141, ...]
  console.log('programKeypair', programKeypair); // Keypair
  console.log('programId', programId); // PublicKey {_bn: <BN: b0c7d44f02bddbfdb318afff6e16f745abb08b667a9774056af7df82c0e0d47f>}
  console.log('programId', programId.toBase58()); // Cu5V88i3AZ1oC8q7JKfbT3Z32iyvnwEMRPfksc36VvwY

  const triggerKeypair = Keypair.generate();
  const airdropRequest = await connection.requestAirdrop(
    triggerKeypair.publicKey,
    LAMPORTS_PER_SOL
  );
  // await connection.confirmTransaction(airdropRequest); // @deprecated

  console.log('triggerKeypair', triggerKeypair); // Keypair
  console.log('airdropRequest', airdropRequest); // hash: 4paG9Af5tTVzswzBnggvCt1FbVNirH8pxxCnpAjfRNMwWYZ...

  const latestBlockHash = await connection.getLatestBlockhash();

  await connection.confirmTransaction({
    blockhash: latestBlockHash.blockhash,
    lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
    signature: airdropRequest,
  });

  console.log('--Pinging Program ', programId.toBase58()); // Cu5V88i3AZ1oC8q7JKfbT3Z32iyvnwEMRPfksc36VvwY

  const instruction = new TransactionInstruction({
    keys: [
      { pubkey: triggerKeypair.publicKey, isSigner: false, isWritable: true },
    ],
    programId,
    data: Buffer.alloc(0),
  });

  const hash = await sendAndConfirmTransaction(
    connection,
    new Transaction().add(instruction),
    [triggerKeypair]
  );

  console.log('hash', hash); // hash: 5L9w3GsGv7p8b3bu4bE2i7FBJwLejAkK9Y1...
};

main().then(
  () => process.exit(),
  err => {
    console.error(err);
    process.exit(-1);
  }
);
