---
title: "From EVM to Solana: How to Avoid Phishing Scams"
slug: "from-evm-to-solana-how-to-avoid-phishing-scams"
summary: "Recently, a user shared a story about losing millions of USD on Solana due to a phishing scam. The incident happened when the user mistakenly clicked a link left by a phishing group in the replies..."
publishedAt: "2024-10-22T09:53:20.769Z"
updatedAt: "2025-03-26T02:27:50.750Z"
heroImage: "/images/blog/crypto-security/from-evm-to-solana-how-to-avoid-phishing-scams/hero.jpg"
locale: "en"
---

Recently, a user shared a story about losing millions of USD on Solana due to a phishing scam. The incident happened when the user mistakenly clicked a link left by a phishing group in the replies of a tweet from the Maneki project, leading them to a malicious website.

The user was puzzled because, during the interaction, the website did not seem to require any token authorization. Yet, the hacker managed to steal the assets. When the user realized something was wrong and attempted to transfer the tokens out of the wallet to prevent further theft, all their efforts failed as the transactions would not go through.

Although we can’t fully recreate the details of the incident, it is evident that the user lost control over their Maneki token account, which is why they couldn’t transfer the assets out of their wallet. For users more familiar with EVM, the concept of “account control” on Solana might be confusing. 

This is because Solana operates differently from EVM chains. Approaching Solana with the same habits as on EVM is like trying to solve modern challenges with outdated tools—doing so could expose users to serious risks.

To help you navigate Solana safely, it’s important to understand its unique features and the common fraud techniques. We’ve outlined some Solana-specific attack methods that differ from EVM, hoping this helps users avoid falling into common traps.

# **Account Ownership Transfer: Stealing Control of Token Accounts**

The case we opened with is a classic example of this attack. In Solana wallets, each token has a separate account (Token Account), similar to having different bank accounts for various currencies (e.g., RMB, USD). Each token account has an “owner” attribute that determines control.
By default, the owner is set to the current wallet, but this can be changed using the createSetAuthorityInstruction command, which allows the token account’s ownership to be transferred. Hackers exploit this by tricking users into transferring ownership of a token account to the hacker’s wallet.
Once successful, even if the tokens remain visible in the user’s wallet, they can’t be moved ????, which is essentially the same as having them stolen.

![image3.png](/images/blog/crypto-security/from-evm-to-solana-how-to-avoid-phishing-scams/image3-c54aeb96f0.png)

Because of the high risk involved, wallets like Phantom and Backpack intercept such operations and issue warnings, requiring double confirmation unless the user forces the transaction through.

# **No Need for Authorization Before Transactions on Solana**

On EVM, a phishing contract would need the victim to authorize the contract on the token’s smart contract before it could steal tokens from the victim’s wallet. Only after gaining authorization can the phishing contract initiate transactions to transfer assets.
On Solana, however, “approve” is not an authorization but rather an approval of the transaction itself. If users mistake this for the usual token authorization and approve it, the phishing transaction goes through, and it’s hard to undo the damage.
Unlike EVM, where authorization is limited to a specific token, Solana doesn’t require such pre-approval. This means a single approval can lead to the transfer of multiple tokens, which can result in significant losses.

# **Be Cautious of Multiple Token Transfers in One Transaction**

Solana’s design allows a single transaction to include multiple sub-transactions, each capable of carrying out a separate action, such as transferring a token. Unlike on EVM, where each token transfer requires a separate transaction, this feature offers convenience on Solana.
For instance, users might want to send small, low-value tokens (worth less than $1) in bulk to convert them back into SOL using services like sol-incinerator, saving on gas fees and time.
But this feature also benefits hackers. If they trick a user into approving just one transaction, they can drain tokens, NFTs, and even SOL from the user’s wallet. Be cautious if you see a transaction involving multiple token transfers; it could be a hacker’s attempt to empty your wallet.

![image1.png](/images/blog/crypto-security/from-evm-to-solana-how-to-avoid-phishing-scams/image1-61a128d5e3.png)

# **Stealing Transaction Signatures**

On EVM, “permit” signatures are popular with phishing groups due to their subtlety, as they don’t appear directly in the authorizer’s wallet. This makes them ideal for phishing. More than half of phishing attacks use this method. Solana has a similar feature: Durable Nonce.
Durable Nonce works like a permit. If users unknowingly sign such a transaction, they won’t lose assets immediately, nor will they see it in their wallet. Instead, the signed transaction is sent to the phishing group, who can broadcast it to the blockchain whenever they want. This offline feature makes it as dangerous as EVM permits.
While Solana’s Durable Nonce is slightly more readable, making it easier to detect than EVM permits, phishing groups have learned to combine it with contract upgrades to bypass wallet simulation warnings.
Phishing websites often start by using a legitimate, non-malicious contract for interaction. The wallet’s transaction simulation will show no issues. After they get the user’s signature, they wait, upgrade the contract to a malicious version, and then broadcast the transaction, leading to asset loss. The user may find their assets missing without realizing the signed transaction was from days earlier.
This upgraded attack method is very subtle and dangerous, and current transaction simulations can’t always catch the risk. Therefore, users should remain cautious, not overly rely on wallet warnings, and thoroughly verify transaction details.

# **Conclusion**

Many of these features were originally designed to make transactions simpler and more convenient. However, like a double-edged sword, new technologies can also provide more ways for phishing groups to attack.

Just before this article was written, Solana introduced two new features, “Action” and “Blink.” While these new functions have sparked excitement, there are already concerns that phishing groups could use them to their advantage .

Phishing on Solana is known for its ease of execution and stealth. Transaction simulations might not always work due to unstable RPC connections, so relying solely on these features is unwise.

For added security, consider using a hardware wallet like [Keystone](https://keyst.one/). This introduces an extra layer of confirmation, reducing the chance of accidentally approving a phishing transaction. [Keystone hardware wallets](https://keyst.one/shop/products/keystone-3-pro) can parse transactions independently, offering a final line of defense if software wallet simulations fail.

![image.png](/images/blog/crypto-security/from-evm-to-solana-how-to-avoid-phishing-scams/image-989d961982.png)

Blockchain technology continues to evolve, and with new advancements come new risks. However, that shouldn’t stop us from moving forward. Phishing groups are a threat, but industry players, including hardware wallets and security companies, constantly work to address new dangers. As everyday users, staying vigilant and not getting lured by “too good to be true” deals is critical. Carefully reviewing transaction details remains one of the best ways to guard against phishing .
