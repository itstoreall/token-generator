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
import getMintInfo from './getMintInfo.ts';
import getAccountInfo from './getAccountInfo.ts';
import transferSenderRecipient from './transferSenderRecipient.ts';
import approve from './approve.ts';
import mintTo from './mintTo.ts';
// import encodeAmount from './encodeAmount.ts';

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

  const transferConfigAR = keys && // eslint-disable-line
    accs && {
      connect,
      program: keys.programKeypair.publicKey,
      sender: {
        keypair: keys.adminKeypair,
        wallet: keys.adminKeypair.publicKey,
        account: accs.adminTokenPubkey,
      },
      recipient: { account: accs.ronnyTokenPubkey },
    };

  const transferConfigRA = keys && // eslint-disable-line
    accs && {
      connect,
      program: keys.programKeypair.publicKey,
      sender: {
        keypair: keys.ronnyKeypair,
        wallet: keys.ronnyKeypair.publicKey,
        account: accs.ronnyTokenPubkey,
      },
      recipient: { account: accs.adminTokenPubkey },
    };

  const getAllBalancesLog = async () => await getBalances(connect, keys, accs);

  // const getSPLTokenAcc = async () => await getTokenAccount(connect, keys, accs);

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
            onClick={() => getMintInfo('mint', connect, mint)}
          >
            Token
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
            onClick={() => getMintInfo('decimals', connect, mint)}
          >
            Decimals
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
            onClick={() => getMintInfo('init', connect, mint)}
          >
            Initialized
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
            onClick={() => getMintInfo('supply', connect, mint)}
          >
            Supply
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
            onClick={() => getMintInfo('authority', connect, mint)}
          >
            Authority
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
            onClick={() =>
              getAccountInfo('owner', connect, accs.adminTokenPubkey)
            }
          >
            Owner
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
            onClick={() =>
              getAccountInfo('balance', connect, accs.adminTokenPubkey)
            }
          >
            Balance
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
            onClick={() => getAllBalancesLog()}
          >
            Get all Balances
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
            onClick={() => transferSenderRecipient(transferConfigAH)} // *
            // onClick={() => transferSenderRecipient(transferConfigHA)} // *
            // onClick={() => transferSenderRecipient(transferConfigAR)} // *
            // onClick={() => transferSenderRecipient(transferConfigRA)} // *
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
            onClick={() => mintTo(transferConfigAH, mint)} // *
          >
            Mint
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
            onClick={() => approve(transferConfigAH)} // *
          >
            Approve
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
