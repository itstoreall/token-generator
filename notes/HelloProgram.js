/*

wallet:
solana-keygen new --no-outfile
solana balance
solana airdrop 2

config:
solana config get
solana config set --url https://api.devnet.solana.com

---

mkdir solana-wallets
solana-keygen new --outfile solana-wallets/admin.json

admin.json
============================================================================
pubkey: 35eN68qh6z3eowxu6MKv9hGKDrvzNrAqCcH6AyETkbxW
token: 8s8kL6Xnry39bBj9JYhsqm9ojYNyp9ywzF23tif86G8h
associated token account: 43wDcVtvErc7XoP1cS2SPHoDVTBBZnGShCkGGkoyNb5a
solscan: https://solscan.io/account/43wDcVtvErc7XoP1cS2SPHoDVTBBZnGShCkGGkoyNb5a?cluster=devnet
============================================================================
oppose attitude pipe winner shove cake noise woman snow flavor stomach brick
============================================================================

---

solana-keygen new --outfile devnet/hello-program.json

hello-program.json
================================================================================
pubkey: 8zH8Q6vvqBnysfhYgF9XsKtwuTYsTU4Ae4DBQbzadFi5
solscan: https://solscan.io/account/8zH8Q6vvqBnysfhYgF9XsKtwuTYsTU4Ae4DBQbzadFi5?cluster=devnet
================================================================================
clinic relax segment figure machine foot output repair strong kit comfort august

---

show admin wallet address:
solana config set --keypair /Users/serhiistanislav/solana/token-generator/solana-wallets/admin.json

spl-token create-token

* token:
8s8kL6Xnry39bBj9JYhsqm9ojYNyp9ywzF23tif86G8h
*

spl-token create-account 8s8kL6Xnry39bBj9JYhsqm9ojYNyp9ywzF23tif86G8h

* account
43wDcVtvErc7XoP1cS2SPHoDVTBBZnGShCkGGkoyNb5a
*

mint:
spl-token mint 8s8kL6Xnry39bBj9JYhsqm9ojYNyp9ywzF23tif86G8h 100

supplly:
spl-token supply 8s8kL6Xnry39bBj9JYhsqm9ojYNyp9ywzF23tif86G8h

balance:
spl-token balance 8s8kL6Xnry39bBj9JYhsqm9ojYNyp9ywzF23tif86G8h

show account (token and amount):
spl-token accounts

*
Token                                         Balance
---------------------------------------------------------------
8s8kL6Xnry39bBj9JYhsqm9ojYNyp9ywzF23tif86G8h  100
*

---

transfer 10 sol and create recipient associated token account:
spl-token transfer 8s8kL6Xnry39bBj9JYhsqm9ojYNyp9ywzF23tif86G8h 10 k31vP9iEyj6z6VhzKkebyM73a4LqNEb3FLU6fTTiDo3 --fund-recipient

*
recipient associated token account: 
2cvZmCxi5oAdUJVGQpNTwQcXcBnfFcBgYXDKqFM9rfCb
*

---

get token account info:
spl-token account-info 8s8kL6Xnry39bBj9JYhsqm9ojYNyp9ywzF23tif86G8h

*
Address: 43wDcVtvErc7XoP1cS2SPHoDVTBBZnGShCkGGkoyNb5a
Balance: 90
Mint: 8s8kL6Xnry39bBj9JYhsqm9ojYNyp9ywzF23tif86G8h
Owner: 35eN68qh6z3eowxu6MKv9hGKDrvzNrAqCcH6AyETkbxW
State: Initialized
Delegation: (not set)
Close authority: (not set)
*

*/
