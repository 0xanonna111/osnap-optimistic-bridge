# oSnap Optimistic Bridge

This repository provides the "Enforcer" logic for a DAO. It allows a Snapshot vote to directly trigger on-chain transactions (like funding a grant) without relying on humans to click "execute."

## The Optimistic Workflow
1. **Proposal**: A proposal is created on Snapshot with an "Execution Payload" (the target contract and function).
2. **Voting**: Users vote for free on Snapshot.
3. **Assertion**: Once the vote passes, a "Proposer" asserts the result on-chain and posts a bond.
4. **Challenge Period**: A 2-3 day window exists where anyone can dispute the result if it doesn't match the Snapshot vote.
5. **Settlement**: If no dispute occurs, the `oSnap` module executes the transactions.

## Security
* **Bond Requirement**: Proposers must stake collateral (e.g., 2 WETH) to assert a result.
* **UMA Oracle**: Disputes are resolved by UMA's decentralized oracle (DVM).
* **Emergency Disconnect**: The DAO multisig retains the power to "Pause" the module in case of a bug.
