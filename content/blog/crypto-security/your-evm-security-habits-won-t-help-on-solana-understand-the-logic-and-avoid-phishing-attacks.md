---
title: "Your EVM Security Habits Won't Help on Solana: Understand the Logic and Avoid Phishing Attacks"
slug: "your-evm-security-habits-won-t-help-on-solana-understand-the-logic-and-avoid-phishing-attacks"
summary: "Recently, a disturbing scam incident on the Solana blockchain caught our attention and prompted us to share this crucial narrative. Imagine losing millions in a phishing attack—a scenario that seem..."
publishedAt: "2024-07-18T07:07:32.910Z"
updatedAt: "2024-07-18T07:07:32.919Z"
heroImage: "/images/blog/crypto-security/your-evm-security-habits-won-t-help-on-solana-understand-the-logic-and-avoid-phishing-attacks/hero.jpg"
locale: "en"
---

Recently, a disturbing scam incident on the Solana blockchain caught our attention and prompted us to share this crucial narrative. Imagine losing millions in a phishing attack—a scenario that seems almost too dreadful to comprehend. Yet, this is precisely what happened to an unsuspecting user, and his ordeal could radically change your perspective on online security.

It all began with a seemingly benign click on a malicious link below a crypto project’s tweet. This action led the user to a phishing site, setting off a chain of events that locked his funds irretrievably in his wallet. This incident illustrates a stark reality: losing control of your digital assets can happen swiftly and silently.

For those familiar with Ethereum Virtual Machine (EVM) chains, such an event might seem puzzling. Solana operates under a different mechanism, one that, if approached with EVM habits, poses significant risks. Understanding these distinctions is crucial for anyone navigating the Solana ecosystem.

![SVM vs EVM](/images/blog/crypto-security/your-evm-security-habits-won-t-help-on-solana-understand-the-logic-and-avoid-phishing-attacks/download-011ac9f85c.png)

## Understanding Solana’s Unique Security Challenges

To assist new Solana users and seasoned veterans alike, we've detailed some of the most prevalent attack vectors on this blockchain. Recognising these can be the key to safeguarding your digital treasures.

### 1. Token Account Ownership Transfer
 
One of Solana's foundational features is the concept of separate token accounts, akin to having individual bank accounts for different types of currency within your digital wallet. Normally, you, the wallet owner, control these accounts. However, attackers can exploit this by using a command called "createSetAuthorityInstruction" , which reassigns the ownership of these token accounts. 
 
![Transaction error](/images/blog/crypto-security/your-evm-security-habits-won-t-help-on-solana-understand-the-logic-and-avoid-phishing-attacks/untitled-32107707a8.png)
 
Once the attackers gain control, they can lock you out, leaving your tokens in place but inaccessible, much like having money in a bank account without the ability to withdraw it. This attack doesn't just steal tokens; it transfers ownership, making recovery exceptionally challenging. Alerts from wallets like Phantom and Backpack can sometimes prevent such mishaps, but only if the user diligently verifies and double-checks every transaction before approval.
 
### 2. Direct Authorization Not Required
Solana’s operational model does not require the user to authorise each token contract individually before transactions can proceed. Instead, transaction approval is a one-step process where once you approve a transaction, it is executed immediately. This differs significantly from EVM platforms, where each contract interaction requires a separate authorisation. This means if you inadvertently approve a malicious transaction on Solana, all associated actions are processed instantly, leading to immediate and potentially irrecoverable losses. The simplicity of Solana's transaction approval can thus be a double-edged sword, facilitating user experience but also increasing risk if misused.

### 3. Multiple Token Transfers in a Single Transaction
Solana’s ability to handle multiple sub-transactions within a single transaction framework is designed for user convenience, allowing for efficient batch processing of transactions. However, this feature is also susceptible to abuse. Hackers can construct a transaction that, on the surface, appears benign but contains several hidden instructions aimed at draining multiple assets from your wallet. 
 
![Bulk transaction](/images/blog/crypto-security/your-evm-security-habits-won-t-help-on-solana-understand-the-logic-and-avoid-phishing-attacks/untitled-1-cae0e74b92.png)
 
For example, a single approved transaction could apparently redeem small-value tokens while transferring high-value assets like SOL or NFTs. The apparent simplicity and benignity of such transactions can deceive users into approving large-scale thefts.
 
### 4. Fraudulent Transaction Signatures
The 'Durable Nonce' feature in Solana mirrors the 'PERMIT' signature used in EVMs but with a potentially more deceptive twist. By signing a transaction with a Durable Nonce, users might not see immediate changes in their wallets, leading to a false sense of security. Attackers exploit this by waiting to execute the transaction until they can do the most damage, often after modifying the underlying contract to include malicious code. 
 
This upgraded attack method is particularly covert, as it can occur days or weeks after the initial interaction, bypassing the usual cues that alert users to unauthorised activity. Therefore, it is still necessary to raise awareness of prevention, not rely too much on the wallet software reminders and blindly trust the results of the transaction simulation.
 

## Keystone Advantage in Combating Phishing Scams

Keystone’s hardware wallets offer a crucial layer of security in this high-stakes environment. By requiring physical confirmation for every transaction, Keystone wallets ensure that users have a tangible moment to verify and reflect on the transaction details. This additional step is vital in preventing the quick, impulse decisions that often lead to phishing successes. Moreover, our hardware wallets independently parse and decode transaction details, providing a critical backup verification mechanism that remains reliable even when software simulations fail.

![Verify your transaction on Keystone](/images/blog/crypto-security/your-evm-security-habits-won-t-help-on-solana-understand-the-logic-and-avoid-phishing-attacks/i-screen-shoter-brave-browser-240718122416-a6ba70a5ac.jpg)

## Ongoing Battle Against Digital Threats

The blockchain is dynamic and ever-changing, but so are the tactics of those who wish to exploit its vulnerabilities. As phishing techniques become more sophisticated, the need for comprehensive security strategies becomes more critical. On the eve of writing this article, Solana released two new features, Action and Blink. While we have unlimited thoughts about these two features, some people have warned that phishing groups may use the new features to cheat.

Educating yourself about the specific features and potential vulnerabilities of the blockchain you are using is imperative. For Solana users, understanding and anticipating the unique challenges discussed can significantly enhance security. Always scrutinise transactions closely, utilise the tools at your disposal, and remember that when it comes to security, vigilance is your best defence.

By combining informed caution with advanced security tools like Keystone's hardware wallets, users can protect themselves against evolving threats in the cryptocurrency world. Remember, the goal is not just to survive in this digital ecosystem but to thrive securely and confidently.
