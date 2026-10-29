---
title: "A Potential Solution to Fee Attacks"
slug: "a-potential-solution-to-fee-attacks-2d6109601083"
summary: "The latest Trezor firmware update addresses a corner attack vulnerability with SegWit transactions. The vulnerability is inherent in the design of SegWit transactions and affects all hardware walle..."
publishedAt: "2021-07-30T05:30:53.811Z"
updatedAt: "2024-04-24T06:48:16.169Z"
heroImage: "/images/blog/crypto-security/a-potential-solution-to-fee-attacks-2d6109601083/hero.webp"
locale: "en"
---

The latest [Trezor firmware update](https://blog.trezor.io/latest-firmware-updates-correct-possible-segwit-transaction-vulnerability-266df0d2860) addresses a corner attack vulnerability with SegWit transactions. The vulnerability is inherent in the design of SegWit transactions and affects all hardware wallets. I will quickly go through the vulnerability mostly with Trezor’s description, adding some of my extended explanation and share one potential solution for this attack.

To put this attack into some simple words:

As SegWit transaction signing doesn’t require a full previous transaction, the signer (hardware wallet) can’t verify whether the UTXO being signed has the right value.

Trezor [describes the attack](https://blog.trezor.io/details-of-firmware-updates-for-trezor-one-version-1-9-1-and-trezor-model-t-version-2-3-1-1eba8f60f2dd) very well in the following way so I will quote them here:
> 1. The victim has two SegWit/BIP-143 UTXOs of 15 BTC and 20 BTC.
> 2. The malware asks the user to confirm a transaction with input 1 as 15 BTC and input 2 as 5.00000001 BTC, with the user’s chosen outputs and a valid change output, if necessary. *Here the input 2 is INVALID but the hardware wallet CANNOT verify this because SegWit transaction doesn’t include the full previous transaction. What the hacker really needs is the signature of the input 1.*
> 3. The user confirms the transaction, spending 20 BTC plus a 0.00000001 BTC fee.
> 4. The malware brings up an error message and tells the user to confirm the transaction again (e.g. “Uh, oh! Something went wrong. Please try again.”).
> 5. The malware asks the user to confirm a transaction with input 1 as 0.00000001 BTC and input 2 as 20 BTC, with exactly the same outputs as before. *Here input 1 is INVALID but the hardware wallet CANNOT verify this because SegWit transaction doesn’t include the full previous transaction. What the hacker really needs is the signature of input 2.*
> 6. The user sees a transaction that is apparently identical, and again confirms spending 20 BTC plus a 0.00000001 BTC fee.
> 7. The malware uses the signature for input 1 from the first transaction and the signature for input 2 from the second transaction, creating a new transaction where input equals 15 BTC plus 20 BTC, and output equals 20 BTC plus a 15 BTC fee.
> 8. The user ends up paying a transaction fee of just over 15 BTC.

The interesting part is how the hacker can get the 15 BTC.

 1. As he has control over the victim’s companion app, he won’t send this transaction to mempool. He will try to mine a block himself and put this transaction into that block.

 2. Let’s assume he uses an Ant S19 Pro to mine that block. ?Each S19’s computing power is 110TH/s and currently, the computing power for the whole bitcoin network is 105EH/s.

 3. If he wants to mine this block within 24 hours (the longer it takes, the higher possibility the victim will find it), he needs 6,600 Ant S19 Pro devices (2800 USD each).

 4. That would cost around 19M USD.

 5. Here I didn’t take luck or collusion with a mining pool into consideration.

*Update: [@LazyNinja](https://twitter.com/FreedomIsntSafe/status/1268572922911887360) found a more likely way for hackers to turn this into a ransom attack.*

Trezor’s solution is to include the full previous transaction corresponding to all inputs in the SegWit transaction. That does solve this problem but may cause other problems with PSBT and other wallet apps. It also negates some advantages of SegWit.

Considering that this is a corner attack vulnerability with a very high attack cost, I am thinking maybe we can take another approach which will significantly increase the attack cost for hackers.

This attack requires the hardware wallet to sign 2 transactions in a row with the same output, and on the hardware wallet side, we can store users’ recent signing history. When the hardware wallet receives new signing requests, it can go through the signing history to check if this signing requirement matches with a recent output. If so, a strong warning can be pushed to the user, prompting them to halt the signing process. It can also give a hint on further information about vulnerabilities.

This may not 100% cover this issue but it may be a solution or an add-on solution for the issue. I am very curious about what the community thinks.

It seems any comprehensive solution would be not a small fix and might involve changes to PSBT or even SegWit. Keystone has implemented the solution mentioned above to minimize not only the attack surface, but also compatibility problems between thirty-party wallets and Keystone.

References:

[https://blog.trezor.io/latest-firmware-updates-correct-possible-segwit-transaction-vulnerability-266df0d2860](https://blog.trezor.io/latest-firmware-updates-correct-possible-segwit-transaction-vulnerability-266df0d2860)

[https://blog.trezor.io/details-of-firmware-updates-for-trezor-one-version-1-9-1-and-trezor-model-t-version-2-3-1-1eba8f60f2dd](https://blog.trezor.io/details-of-firmware-updates-for-trezor-one-version-1-9-1-and-trezor-model-t-version-2-3-1-1eba8f60f2dd)
