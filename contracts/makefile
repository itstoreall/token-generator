.PHONY: devnet client

airdrop:
	solana airdrop 2 35eN68qh6z3eowxu6MKv9hGKDrvzNrAqCcH6AyETkbxW -u devnet

user-token-account:
	spl-token create-account 8s8kL6Xnry39bBj9JYhsqm9ojYNyp9ywzF23tif86G8h --owner devnet/user.json

state:
	spl-token account-info --address 43wDcVtvErc7XoP1cS2SPHoDVTBBZnGShCkGGkoyNb5a # admin

mint:
	spl-token mint 8s8kL6Xnry39bBj9JYhsqm9ojYNyp9ywzF23tif86G8h 410 43wDcVtvErc7XoP1cS2SPHoDVTBBZnGShCkGGkoyNb5a # mint to admin 300 SPL

fund-transfer:
	spl-token transfer 8s8kL6Xnry39bBj9JYhsqm9ojYNyp9ywzF23tif86G8h 10 35eN68qh6z3eowxu6MKv9hGKDrvzNrAqCcH6AyETkbxW --fund-recipient

build-bpf-helloProgram:
	cd helloProgram; cargo build-bpf

deploy-helloProgram:
	solana program deploy helloProgram/target/deploy/hello_program.so -u devnet --program-id devnet/hello-program.json