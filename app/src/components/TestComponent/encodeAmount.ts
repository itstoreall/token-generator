import lo from 'buffer-layout';
import BN from 'bn.js';

const encodeAmount = (value: number) => {
  const amount = Buffer.alloc(8); // 8 (number)
  // lo.ns64('value').encode(new BN(value), amount);
  lo.ns64('value').encode(new BN(1000000000), amount); // 1 sol (number)
  // lo.ns64('value').encode(new BN(130), amount); // 130 lamports (number)
  // lo.ns64('value').encode(new BN(1200000000), amount); // 1000000000 lamports (number)
  // lo.ns64('value').encode(new BN(1052), amount); // 0.000001052 lamports (number)
  // lo.ns64('value').encode(new BN(1000001052), amount); // 1.000001052 lamports (number)

  return amount;
};

export default encodeAmount;
