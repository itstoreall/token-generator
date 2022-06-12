/*

# Hello Solana

---

## Client configuration:

solana-keygen new --force

.config/solana/id.json
===================================================================================
pubkey: 5e9u4EmXAM2XNZ5SGn6SSKzsZjQJ8cxiMoGByFPACZ7v
===================================================================================
present quality hole maze account figure husband swing chuckle crumble liquid stove
===================================================================================

solana config set --keypair /Users/serhiistanislav/.config/solana/id.json
solana config set --url https://api.devnet.solana.com

---

## Rust (hello-solana)

touch package.json
mkdir src
cd src
cargo new --lib program

-

enter in Cargo.toml:

[package]
name = "hello-solana"
version = "0.1.0"
edition = "2021"

[dependencies]
solana-program = "1.9.9"

[dev-dependencies]
solana-program-test = "1.9.9"
solana-sdk = "1.9.9"

[lib]
crate-type = ["cdylib", "lib"]

-

enter in lib.rs

use solana_program::{
    account_info::AccountInfo, 
    entrypoint, 
    entrypoint::ProgramResult, 
    msg, 
    pubkey::Pubkey,
};


entrypoint!(process_instruction);


fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    
    msg!("Hello Solana! (From Rust!)");
    Ok(())
}

-

### build and deploy

cd program (hello-solana/src/program)
cargo build-bpf (bytecode)

solana program deploy ./target/deploy/hello_solana.so

*
Program Id: wZy6MruKCdmkKE2g4EZkvT89tcJPyaqr2S4H3iVeYnw
*

solana program show --programs

*
Program Id                                   | Slot      | Authority                                    | Balance
wZy6MruKCdmkKE2g4EZkvT89tcJPyaqr2S4H3iVeYnw  | 140387670 | 5e9u4EmXAM2XNZ5SGn6SSKzsZjQJ8cxiMoGByFPACZ7v | 0.27615192 SOL
*

---

## Client (node.js)

enter in the package.json:
{
  "name": "hello-solana",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "start": "ts-node src/client/main.ts",
    "clean": "npm run clean:program",
    "build:program": "cargo build-bpf --manifest-path=./src/program/Cargo.toml --bpf-out-dir=dist/program",
    "clean:program": "cargo clean --manifest-path=./src/program/Cargo.toml && rm -rf ./dist",
    "test:program": "cargo test-bpf --manifest-path=./src/program/Cargo.toml"
  },
  "dependencies": {
    "@solana/web3.js": "^1.37.1",
    "mz": "^2.7.0"
  },
  "devDependencies": {
    "@tsconfig/recommended": "^1.0.1",
    "@types/mz": "^2.7.2",
    "ts-node": "^10.0.0",
    "typescript": "^4.0.5"
  },
  "engines": {
    "node": ">=14.0.0"
  }
}

mkdir client (in hello-sollana/src)
touch client/main.ts (enter the code from this file)
yarn (in hello-solana)
yarn build:program
solana program deploy ./dist/program/hello_solana.so

*
Program Id: Cu5V88i3AZ1oC8q7JKfbT3Z32iyvnwEMRPfksc36VvwY
*

solana program show --programs

*
Program Id                                   | Slot      | Authority                                    | Balance
wZy6MruKCdmkKE2g4EZkvT89tcJPyaqr2S4H3iVeYnw  | 140387670 | 5e9u4EmXAM2XNZ5SGn6SSKzsZjQJ8cxiMoGByFPACZ7v | 0.27615192 SOL
Cu5V88i3AZ1oC8q7JKfbT3Z32iyvnwEMRPfksc36VvwY | 140401901 | 5e9u4EmXAM2XNZ5SGn6SSKzsZjQJ8cxiMoGByFPACZ7v | 0.27615192 SOL
*

yarn start

---

## Logs

solana logs | grep "Cu5V88i3AZ1oC8q7JKfbT3Z32iyvnwEMRPfksc36VvwY invoke" - A 3

---

sources:
https://solanacookbook.com/#contributing
https://docs.solana.com/developing/programming-model/overview

*/
