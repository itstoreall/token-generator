use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::{
    account_info::{next_account_info, AccountInfo},
    entrypoint,
    entrypoint::ProgramResult,
    msg,
    program::invoke,
    pubkey::Pubkey,
};

entrypoint!(process_instruction);

#[derive(Debug, BorshSerialize, BorshDeserialize)]
pub enum Instruction {
    Transfer { amount: u64 },
}

/// Accounts expected:
/// 0. `[signer]` from authority (sender wallet address)
/// 1. `[writable]` from_token (sender token account)
/// 2. `[writable]` to_token (recipient token account)
/// 3. `[]` token program (spl-token program)
pub fn process_instruction(
    _program_id: &Pubkey,
    accounts: &[AccountInfo],
    input: &[u8],
) -> ProgramResult {
    msg!("input: {:?}", input);
    let acc_iter = &mut accounts.iter();
    let from_info = next_account_info(acc_iter)?; // sender wallet
    let from_token_info = next_account_info(acc_iter)?; // sender token acc
    let to_token_info = next_account_info(acc_iter)?; // recipient token acc
    let token_info = next_account_info(acc_iter)?; // token program

    match Instruction::try_from_slice(input)? {
        Instruction::Transfer { amount } => {
            msg!("transfer: {}", amount);
            let ix = spl_token::instruction::transfer(
                token_info.key, // token program key
                from_token_info.key, // sender token acc
                to_token_info.key, // recipient token acc
                from_info.key, // sender wallet
                &[from_info.key], // sender wallet
                amount,
            )?;
            invoke(
                &ix, // instruction
                &[
                    from_token_info.clone(), // sender token acc
                    to_token_info.clone(), // recipient token acc
                    from_info.clone(), // sender wallet
                    token_info.clone(), // token program
                ],
            )?;
            msg!(
                "transfer from {} to {} amount {}: done",
                from_token_info.key, // sender token acc
                to_token_info.key, // recipient token acc
                amount
            );
        }
    }

    Ok(())
}