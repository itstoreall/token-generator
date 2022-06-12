/*

# Math Stuff

---

## Rust (math-stuff)

touch package.json
mkdir src
cd src
cargo new --lib sum
cargo new --lib square

---

## Client

mkdir client
cd client
touch math.ts square.ts sum.ts util.ts
enter the code in these files

---

## Build and Deploy

yarn build
yarn deploy
or
cargo build-bpf --manifest-path=./src/sum/Cargo.toml --bpf-out-dir=./dist/program
cargo build-bpf --manifest-path=./src/square/Cargo.toml --bpf-out-dir=./dist/program
solana program deploy dist/program/sum.so
solana program deploy dist/program/square.so

*
Program Id: BdAvuwQRFVSUHw6at6ETWZLzjEJfAK9BBqiWuCupyHeR
Program Id: Dody9Dux8Br2LLB4Zo7hDmTchoDZbUwvwSp7gvisdctv
*

solana program show --programs

*
Program Id                                   | Slot      | Authority                                    | Balance
Dody9Dux8Br2LLB4Zo7hDmTchoDZbUwvwSp7gvisdctv | 140600726 | 5e9u4EmXAM2XNZ5SGn6SSKzsZjQJ8cxiMoGByFPACZ7v | 1.01101656 SOL
BdAvuwQRFVSUHw6at6ETWZLzjEJfAK9BBqiWuCupyHeR | 140600695 | 5e9u4EmXAM2XNZ5SGn6SSKzsZjQJ8cxiMoGByFPACZ7v | 1.01079384 SOL
*

---

## Logs

solana logs | grep "BdAvuwQRFVSUHw6at6ETWZLzjEJfAK9BBqiWuCupyHeR invoke" -A 10

---

## Run the client

yarn example:sum
or
ts-node ./src/client/sum.ts

*
Successfully connected to Solana dev net.
Local account loaded successfully.
Local account's address is:
   5e9u4EmXAM2XNZ5SGn6SSKzsZjQJ8cxiMoGByFPACZ7v
We're going to ping the sum program.
It's Program ID is:
   BdAvuwQRFVSUHw6at6ETWZLzjEJfAK9BBqiWuCupyHeR
For simplicity's sake, we've created an address using a seed.
That seed is just the string "test(num)".
The generated address is:
   EZk58TB1h5rRoY11okjEkMVpifawqSUfg3cH3SjgnWGJ
Looks like that account does not exist. Let's create it.
Client account created successfully.
All right, let's run it.
Pinging sum program...
Ping successful.
*

solana account EZk58TB1h5rRoY11okjEkMVpifawqSUfg3cH3SjgnWGJ

*
Public Key: EZk58TB1h5rRoY11okjEkMVpifawqSUfg3cH3SjgnWGJ
Balance: 1 SOL
Owner: BdAvuwQRFVSUHw6at6ETWZLzjEJfAK9BBqiWuCupyHeR
Executable: false
Rent Epoch: 325
Length: 4 (0x4) bytes
0000:   02 00 00 00
*        

---

*/
