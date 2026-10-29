---
title: "Should You Enable Passphrase Protection?"
slug: "should-you-enable-passphrase-protection-5aba38b92613"
summary: "By Patrick Kim"
publishedAt: "2021-08-10T05:30:53.811Z"
updatedAt: "2024-04-24T06:47:41.242Z"
heroImage: "/images/blog/crypto-security/should-you-enable-passphrase-protection-5aba38b92613/hero.webp"
locale: "en"
---

*By [Patrick Kim](undefined)*

The Trezor hack [publicized](https://blog.kraken.com/post/3662/kraken-identifies-critical-flaw-in-trezor-hardware-wallets/) by Kraken Security Labs showed that it is possible to steal private keys from a Trezor in just 15 minutes with a few hundred dollars of equipment. The fact that a power analysis attack can accomplish this highlighted the importance of [Secure Elements](https://blog.keyst.one/secure-elements-the-last-line-of-defense-4669012d4edc) in protecting hardware wallet owners against situations in which an attacker has physical access to the device. Trezor followed up by highly recommending their users enable the Passphrase feature, pointing out that it effectively renders this attack toothless if the attacker doesn’t have your passphrase.

Passphrase is a second-factor protection that comes at some cost to usability and also runs the risk that users who aren’t careful could lose everything if it is forgotten. To give you a better idea if passphrase is right for you, we’ll explain what passphrases are and how they work, before giving you an idea of whether you should enable this feature and what the potential dangers are if you do.

### What Are Passphrases?

According to BIP 39, the definition of passphrase is as follows:
> *A user may decide to protect their mnemonic with a passphrase. If a passphrase is not present, an empty string “” is used instead.*

It helps to think of a passphrase as an extra word or string of characters added to your 12, 18 or 24-word recovery phrase. So if you have a 24-word recovery phrase, with a passphrase, you effectively have a 25-word recovery phrase. You will need both the passphrase and the recovery phrase to enter a passphrase protected wallet. However, with respect to storing your passphrase securely, you won’t want to keep it in the same location as your recovery phrase if you are concerned about theft as this will negate its second-factor security.

When you use a hardware wallet to generate private keys and are your recovery phrase to write down, the passphrase field is automatically set as empty (“”). Each unique passphrase you set, whether it be for your default wallet or additional hidden wallets under the same private keys, is needed to enter that wallet. You can create a virtually unlimited number of hidden wallets with passphrases, but remember you will have to have a system for keeping track of each passphrase.

Passphrase protected funds are not vulnerable to side-channel attacks because even if an attacker with physical access to your device is able to steal your private keys, they still need the passphrase to access them. Unlike the private keys, the passphrase is not stored anywhere on the device, and instead is manually entered every time either from memory (not advisable) or an offline storage method.

Using a passphrase can also protect you from duress situations like the $5 wrench attack. Say you have 10 bitcoins and want to have a small portion quickly available for trading, while making the rest more inaccessible with passphrases. You store one of them in the default wallet, then divide up the remaining 9 bitcoins into three separate hidden wallets. If you are the victim of a $5 wrench attack, by exposing your default wallet to your attackers, it will appear to them as if you only have 1 bitcoin. If your attackers know that you might have hidden wallets, there is still a chance you could salvage your hidden funds with some convincing acting skills because they wouldn’t know exactly how many hidden wallets you have.

Passphrase can also protect you if your hardware wallet is pickpocketed or swapped out for a fake. If your hardware wallet is stolen, attackers might try to brute force the device PIN. They may also have been watching you over your shoulder or from a security camera or even a drone. Because you do not have to enter your recovery phrase every time you use your default wallet, the funds in it are vulnerable to such situations. This is why you might want to keep only the funds you need readily accessible in the default wallet, while hiding the bulk of your crypto in passphrase protected wallets.

How to enable passphrase on the Keystone:

 1. Tap the [Menu] button on the top left of the main page of the Keystone Wallet.

 2. Go to [Settings] - [Passphrase Wallet]

![](/images/blog/crypto-security/should-you-enable-passphrase-protection-5aba38b92613/passphrase-wallet-in-settings-89b5893572.webp)

3. Enter password > tap [Confirm]. Then input your passphrase > tap [Confirm]

![](/images/blog/crypto-security/should-you-enable-passphrase-protection-5aba38b92613/enter-password-ae91f1bc06.webp)

4. Tap [Confirm] to create a passphrase wallet, which will appear over the default wallet.

![](/images/blog/crypto-security/should-you-enable-passphrase-protection-5aba38b92613/create-passphrase-wallet-f12ce0b949.webp)

5. Select the Assets you want to manage in the passphrase wallet and sync with the mobile app.

![](/images/blog/crypto-security/should-you-enable-passphrase-protection-5aba38b92613/select-assets-in-passphrase-wallet-3fc7c602b6.webp)

6. To exit the passphrase wallet, repeat steps (1), (2) and (3), but do not enter a passphrase and instead leave it blank. Then it will get back to the default wallet.

### Should You Enable Passphrase?

Passphrase was originally designed as a mechanism to protect you from $5 wrench attacks and as a method for hiding crypto from prying eyes. However, because of the recent Trezor hack, it is being toted as a strongly recommended solution for users to protect themselves from side-channel attacks.

Passphrase is ultimately a manual tool that each user has to develop their own way of handling safely. There is no recourse if you lose or forget it because no third-party will ever be able to retrieve it for you. While storing a passphrase is almost the same as [storing a recovery phrase](https://blog.keyst.one/deep-cold-storage-how-beginners-can-swim-in-the-deep-end-430af49d03bd), storing them together may negate the effect of the additional security, while storing them separately adds complication. Trezor is recommending activating at least two passphrases for protection against side-channel attacks, which would further increase the probability something could go wrong. Better education is needed before passphrase should see mass adoption. However, for those who are well informed and prepared to handle it, Passphrase can offer plausible deniability in situations of duress and viable protection for hardware wallets without a Secure Element.
