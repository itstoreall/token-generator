/*

# NFT Marketplace

---

## Rust (nft-marketplace)

cd contracts
anchor init nft-marketplace

add two dependencies to the nft-marketplace/programs/nft-marketplace/Cargo.toml:
mpl-token-metadata = { version="1.2.5", features = [ "no-entrypoint" ] }
anchor-spl = "0.24.2"

---

## Client

touch nft-marketplace/app/app.ts
enter the code

---

## Deploy

anchor build
anchor deploy

---

## Logs

solana logs | grep "86UbSLXhvcAE6WcgyWAeMXZi58J7WHW5NvNqFdeTPPUx invoke" -A 20

---

## Run

anchor run app

*
Program 86UbSLXhvcAE6WcgyWAeMXZi58J7WHW5NvNqFdeTPPUx invoke [1]
Program log: Instruction: MintNft
Program log: Initializing Mint NFT program...
Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [2]
Program log: Instruction: MintTo
Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 3024 of 1391664 compute units
Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success
Program log: Your NFT has been minted!
Program log:   Token ID: DJDjzfGdKDMC6MWReipKPmcZ2PxMFfaM1NbPZmUhVhrL
Program metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s invoke [2]
Program log: Instruction: Create Metadata Accounts v2
Program log: Transfer 5616720 lamports to the new account
Program 11111111111111111111111111111111 invoke [3]
Program 11111111111111111111111111111111 success
Program log: Allocate space for the account
Program 11111111111111111111111111111111 invoke [3]
Program 11111111111111111111111111111111 success
Program log: Assign the account to the owning program
Program 11111111111111111111111111111111 invoke [3]
Program 11111111111111111111111111111111 success
Program metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s consumed 40859 of 1371767 compute units
*

---

## Sources:

https://docs.metaplex.com/about/terminology

---

*/
