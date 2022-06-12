/*

# Advanced Math

---

## Rust (calculatir)

touch package.json
mkdir src
cd src
cargo new --lib calculator

---

## Client

touch client/calculator.ts
touch client/math.ts
touch client/util.ts
enter the code in these files

---

## Build and Deploy

yarn build
yarn deploy
or
cargo build-bpf --manifest-path=./src/calculator/Cargo.toml --bpf-out-dir=./dist/program
solana program deploy dist/program/calculator.so

*
Program Id: BxwAcebYe7LhFEToRgdfjM8dEjiCrrEhZa6aVN55rHYv
*

solana program show --programs

*
Program Id                                   | Slot      | Authority                                    | Balance
BxwAcebYe7LhFEToRgdfjM8dEjiCrrEhZa6aVN55rHYv | 140664593 | 5e9u4EmXAM2XNZ5SGn6SSKzsZjQJ8cxiMoGByFPACZ7v | 0.69787224 SOL
*

---

## Logs

solana logs | grep "BdAvuwQRFVSUHw6at6ETWZLzjEJfAK9BBqiWuCupyHeR invoke" -A 10

---

## Run the client

yarn example
or
ts-node ./src/client/calculator.ts

*
Successfully connected to Solana dev net.
Local account loaded successfully.
Local account's address is:
   5e9u4EmXAM2XNZ5SGn6SSKzsZjQJ8cxiMoGByFPACZ7v
We're going to ping the calculator program.
It's Program ID is:
   BxwAcebYe7LhFEToRgdfjM8dEjiCrrEhZa6aVN55rHYv
For simplicity's sake, we've created an address using a seed.
That seed is just the string "test(num)".
The generated address is:
   4WGF9cLftE48yUAcBhRA5n9pSsWR8KJ7LRcteGy3CWEL
Looks like that account does not exist. Let's create it.
Client account created successfully.
All right, let's run it.
Pinging our calculator program...
We're going to add: 4
Ping successful.
All right, let's run it.
Pinging our calculator program...
We're going to subtract: 1
Ping successful.
All right, let's run it.
Pinging our calculator program...
We're going to multiply by: 2
Ping successful.
*

solana account 4WGF9cLftE48yUAcBhRA5n9pSsWR8KJ7LRcteGy3CWEL

*
Public Key: 4WGF9cLftE48yUAcBhRA5n9pSsWR8KJ7LRcteGy3CWEL
Balance: 1 SOL
Owner: BxwAcebYe7LhFEToRgdfjM8dEjiCrrEhZa6aVN55rHYv
Executable: false
Rent Epoch: 325
Length: 4 (0x4) bytes
0000:   12 00 00 00
*        

---

*/
