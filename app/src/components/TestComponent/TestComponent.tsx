// @ts-nocheck
import { useEffect, useState } from 'react';
import {
  clusterApiUrl,
  Connection,
  // TransactionInstruction,
  // sendAndConfirmTransaction,
  // Transaction,
} from '@solana/web3.js';
import * as spl from '@solana/spl-token'; // eslint-disable-line
import programPrivatKey from '../../devnet/hello-program.json';
import adminPrivatKey from '../../devnet/admin.json';
import ronnyPrivatKey from '../../devnet/ronny.json';
import helgaPrivatKey from '../../devnet/helga.json';
import init from './init.ts';
import getBalances from './getBalances.ts';
import getTokenAccount from './getTokenAccount.ts';
import transferSenderRecipient from './transferSenderRecipient.ts';
import getMintInfo from './getMintInfo.ts';
import getAccountInfo from './getAccountInfo.ts';

const TestComponent = () => {
  const [connect, setConnect] = useState(null);
  const [mint, setMint] = useState(null);
  const [keys, setKeys] = useState(null);
  const [accs, setAccs] = useState(null);

  const url = clusterApiUrl('devnet');
  const connection = new Connection(url, 'confirmed');

  useEffect(() => {
    init(
      connection,
      programPrivatKey,
      adminPrivatKey,
      ronnyPrivatKey,
      helgaPrivatKey
    ).then((data: {}) => {
      setMint(data.mint);
      setKeys(data.keys);
      setAccs(data.accs);
    });
    setConnect(connection);
    // eslint-disable-next-line
  }, []);

  const transferConfigAH = keys && // eslint-disable-line
    accs && {
      connect,
      program: keys.programKeypair.publicKey,
      sender: {
        keypair: keys.adminKeypair,
        wallet: keys.adminKeypair.publicKey,
        account: accs.adminTokenPubkey,
      },
      recipient: { account: accs.helgaTokenPubkey },
    };

  const transferConfigHA = keys && // eslint-disable-line
    accs && {
      connect,
      program: keys.programKeypair.publicKey,
      sender: {
        keypair: keys.helgaKeypair,
        wallet: keys.helgaKeypair.publicKey,
        account: accs.helgaTokenPubkey,
      },
      recipient: { account: accs.adminTokenPubkey },
    };

  const getAllBalancesLog = async () => await getBalances(connect, keys, accs);

  const getSPLTokenAcc = async () => await getTokenAccount(connect, keys, accs);

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid #999',
        }}
      >
        <div style={{ padding: 40 }}>
          <button
            style={{
              padding: '5px 10px',
              color: '#fff',
              backgroundColor: 'teal',
              borderRadius: '3px',
            }}
            disabled={!keys && !accs}
            onClick={() => getAllBalancesLog()}
          >
            Get Balances
          </button>
        </div>
        <div style={{ padding: 40 }}>
          <span style={{ marginRight: '20px' }}>open your console</span>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid #999',
        }}
      >
        <div style={{ padding: 40 }}>
          <button
            style={{
              padding: '5px 10px',
              color: '#fff',
              backgroundColor: 'teal',
              borderRadius: '3px',
            }}
            disabled={!keys && !accs}
            onClick={() => getSPLTokenAcc()}
          >
            Get token acc
          </button>
        </div>
        <div style={{ padding: 40 }}>
          <span style={{ marginRight: '20px' }}>open your console</span>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid #999',
        }}
      >
        <div style={{ padding: 40 }}>
          <button
            style={{
              padding: '5px 10px',
              color: '#fff',
              backgroundColor: 'teal',
              borderRadius: '3px',
            }}
            disabled={!keys && !accs}
            onClick={() => transferSenderRecipient(transferConfigHA)}
            // onClick={() => transferSenderRecipient(transferConfigAH)}
          >
            Transfer from to
          </button>
        </div>
        <div style={{ padding: 40 }}>
          <span style={{ marginRight: '20px' }}>open your console</span>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid #999',
        }}
      >
        <div style={{ padding: 40 }}>
          <button
            style={{
              padding: '5px 10px',
              color: '#fff',
              backgroundColor: 'teal',
              borderRadius: '3px',
            }}
            disabled={!keys && !accs}
            onClick={() => getMintInfo(connect, mint)}
          >
            Get mint info
          </button>
        </div>
        <div style={{ padding: 40 }}>
          <span style={{ marginRight: '20px' }}>open your console</span>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid #999',
        }}
      >
        <div style={{ padding: 40 }}>
          <button
            style={{
              padding: '5px 10px',
              color: '#fff',
              backgroundColor: 'teal',
              borderRadius: '3px',
            }}
            disabled={!keys && !accs}
            onClick={() => getAccountInfo(connect, accs.adminTokenPubkey)}
          >
            Get acc info
          </button>
        </div>
        <div style={{ padding: 40 }}>
          <span style={{ marginRight: '20px' }}>open your console</span>
        </div>
      </div>
    </>
  );
};

export default TestComponent;
