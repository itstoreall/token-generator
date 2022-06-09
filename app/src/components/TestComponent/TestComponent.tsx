// @ts-nocheck
import { useEffect, useState } from 'react';
import {
  clusterApiUrl,
  Connection,
  // TransactionInstruction,
  // sendAndConfirmTransaction,
  // Transaction,
} from '@solana/web3.js';
import adminPrivatKey from '../../devnet/admin.json';
import ronnyPrivatKey from '../../devnet/ronny.json';
import helgaPrivatKey from '../../devnet/helga.json';
import init from './init.ts';
import getBalances from './getBalances.ts';
import getTokenAccount from './getTokenAccount.ts';

const TestComponent = () => {
  const [connect, setConnect] = useState(null);
  const [token, setToken] = useState(null);
  const [keys, setKeys] = useState(null);
  const [accs, setAccs] = useState(null);

  const url = clusterApiUrl('devnet');
  const connection = new Connection(url, 'confirmed');

  useEffect(() => {
    init(connection, adminPrivatKey, ronnyPrivatKey, helgaPrivatKey).then(
      (data: {}) => {
        setToken(data.token);
        setKeys(data.keys);
        setAccs(data.accs);
      }
    );
    setConnect(connection);
    // eslint-disable-next-line
  }, []);

  const getAllBalancesLog = async () => await getBalances(connect, keys, accs);
  const getSPLTokenAccount = async () =>
    await getTokenAccount(connect, keys, accs);

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
            onClick={() => getSPLTokenAccount()}
          >
            Get token acc
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
