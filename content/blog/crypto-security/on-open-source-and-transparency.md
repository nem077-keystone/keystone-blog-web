---
title: "On Open Source and Transparency"
slug: "on-open-source-and-transparency-ba37fa1c1e8c"
summary: "By Patrick Kim"
publishedAt: "2021-06-22T05:30:53.811Z"
updatedAt: "2024-04-24T06:47:03.228Z"
heroImage: "/images/blog/crypto-security/on-open-source-and-transparency-ba37fa1c1e8c/hero.webp"
locale: "en"
---

## On Open Source and Transparency


*By [Patrick Kim](https://medium.com/@patrickkim_1991)*

We’ve come a long way toward making Keystone’s product as open source as possible. This article provides a full description of everything we have open sourced, Keystone’s methodology, and our philosophy on open source going forward.

### What Is Open Source and What You Can Learn from It

At Keystone, we have open-sourced the firmware of the Secure Element, hardware design (circuit diagram and BOM), hardware wallet application layer, and parts of the hardware wallet operating system layer. We have also **released a third-party [code audit report](https://github.com/KeystoneHQ/Keystone-developer-documents/tree/main/audit-report)**, which is the first-ever made public by a hardware wallet company.

The hardware design, which includes the device schematic (circuit diagram) and bill of materials (BOM), was released and can be found [here](https://github.com/KeystoneHQ/Keystone-developer-documents/tree/main/hardware). It provides a way for those interested in building their own hardware (BYOH) to reconstruct the Keystone hardware wallet from scratch as a way of verifying and observing the inner workings of the device.

We are the first hardware wallet company (and perhaps the first hardware manufacturer in any industry) to have an open-sourced [Secure Element firmware](https://github.com/KeystoneHQ/keystone-se-firmware). The [datasheet](https://github.com/KeystoneHQ/Keystone-developer-documents/blob/main/se/Keystone_Secure_Element_Datasheet.md) is also open-source but as with other hardware wallets, we aren’t able to open-source the design and base code of the Secure Element because it is the IP of the manufacturer (general purpose MCUs can’t open source these either). However, with the Secure Element firmware being open-source, you can verify the following important cryptographic operations:

* How the recovery phrase and master private key are generated from entropy

* How child private keys and public keys are generated/derived

* How the signing procedure happens entirely within the Secure Element

* How the private keys never leave the Secure Element

While the Secure Element firmware can’t tell you how random numbers are generated (TRNG), you don’t actually need to trust the Secure Element’s TRNG because the Keystone hardware wallet now supports [input from dice rolls to generate a recovery phrase](https://support.keyst.one/advanced-features/recovery-phrase/use-dice-to-generate-recovery-phrase). You can also find instructions for how to verify that result [here](https://blog.keyst.one/how-to-verify-the-recovery-phrase-created-by-dice-rolling-af01c16b765e). For any testers out there who may want to further verify the operations of the Secure Element, we are able to send you a development board under a non-disclosure agreement.

Keystone uses Android as its operating system because it provides a mature toolchain for critical applications such as the camera (QR code scanning), touchscreen (usability and error prevention), and other features for a user-friendly experience. An Android-Secure Element structure is commonly found in many payment and banking terminals today so we built a wallet application layer on top of the Android operating system which is [completely open source](https://github.com/KeystoneHQ/Keystone-cold-app). However, due to certain parts of the operating system layer belonging to the IP of various vendors, the hardware wallet can’t be completely open source. By viewing the [portion of the code](https://github.com/KeystoneHQ/Keystone-system) that is open-sourced, you can see that we limited the possible Android attack surface by:

* Closing adb and removing the adb daemon

* Removing unrelated system processes and apps

* Preventing installation of third-party apps

* Patching Linux kernel vulnerabilities

In order to provide more transparency, we have undergone a code audit from a credible third party and just [released it on Github](https://github.com/KeystoneHQ/Keystone-developer-documents/tree/main/audit-report). We chose one of the best code auditing vendors in China with experience in both blockchain-related products and Android hacking: an [auditing entity](https://peckshield.com/) led by the former head of 360 C0RE and 360 Super ROOT. We fixed all the problems they brought to our attention with the exception of two issues that ran contrary to our product philosophy:

* PVE010: Would preclude our aim of allowing users to authorize transactions by a TEE-stored fingerprint. This fix is non-critical because there are several other ways the recovery phrase is protected. One way is that the data in the Secure Element is encrypted by default. Another is that the only way to access the recovery phrase is to upgrade the Secure Element with malicious firmware, but we currently only allow firmware upgrades signed by us (Keystone). Additionally, each upgrade needs to be first authorized by verifying the user’s password.

* PVE011: Would negate our product principle of implementing a [self-destruct mechanism](https://blog.keyst.one/self-destruct-mechanisms-unique-defense-against-side-channel-attacks-4cfea3d4eff1) capable of thwarting physical attacks by overriding everything to delete the recovery phrase. An air-gapped hardware wallet with a very high deterrent against physical attacks is a potent combination. Requiring a password for the self-destruct mechanism to wipe the recovery phrase would negate this benefit.

### Minimizing Trust Dependency with Multi-signature

One of the most effective ways to minimize trust dependency is to support Bitcon's [PSBT multisignature](https://support.keyst.one/advanced-features/multi-signature).

As Michael Flaxman suggests [in this podcast](https://stephanlivera.com/episode/97/), each additional signature required to spend from a multisig PSBT wallet increases security by “orders of magnitude,” even if the additional signature is done by a hardware wallet that is not open-source or considered particularly trustworthy. This is because all hardware wallets that require signing of transactions would have to be compromised *simultaneously* in order for an attacker to steal the funds, which would be extremely hard to do if you use hardware wallets from different vendors.

Currently, we have finished integrating with a variety of bitcoin wallets like [BlueWallet](https://support.keyst.one/3rd-party-wallets/bitcoin-wallets/bluewallet), [Specter](https://support.keyst.one/3rd-party-wallets/bitcoin-wallets/specter), [Wasabi Wallet](https://support.keyst.one/3rd-party-wallets/bitcoin-wallets/wasabi), [Sparrow](https://support.keyst.one/3rd-party-wallets/bitcoin-wallets/sparrow), [BTCPay Server](https://support.keyst.one/3rd-party-wallets/bitcoin-wallets/btcpayserver), [Electrum Wallet](https://support.keyst.one/3rd-party-wallets/bitcoin-wallets/electrum) and [Fully Noded](https://fullynoded.app/) to support PSBT multi-signature. Doing so is considered [the best practice](https://twitter.com/mflaxman/status/1310580116808970240) within the Bitcoin community since users can reconstruct their multi-signature scheme with the Keystone hardware wallet to fully verify an unsigned multi-signature transaction. You can check out the importance of this feature in this [article](https://medium.com/shiftcrypto/the-pitfalls-of-multisig-when-using-hardware-wallets-9b0e98e4c19c).

A comprehensive hardware wallet PSBT multi-signature is unquestionably changing Bitcoin forever as it’s becoming more and more easy to use with the integration across different products.

### What’s Next?

Currently, Keystone only allows firmware upgrades that are signed by us to prevent phishing attacks. Ledger, Trezor, and Keepkey users have all recently been victims of phishing attacks. Warnings to caution users about installing third-party firmware aren’t sufficient to counter the threat because not all users have the necessary background knowledge to understand how they could lose all their bitcoin to a compromised firmware upgrade.

The disadvantage in transparency of having firmware upgrades signed only by us is that users have to trust our firmware upgrades as they are released. In order to reduce this trust burden and accommodate experienced users who want to customize their own firmware, we will release a Cyberpunk-version of Keystone. This version will be produced without any workable firmware so that the user has to compile their own firmware, which would be signed using a private key available on Github. This can be taken a step further by that users to change the key pair to their own choice so that only firmware signed by their own keys can be uploaded.

As part of [the best multi-signature solution](https://twitter.com/mflaxman/status/1310580116808970240) in the current Bitcoin community now, We proudly drafted [BIP129 (Bitcoin Secure Multisig Setup , BSMS)](https://github.com/bitcoin/bips/blob/master/bip-0129.mediawiki) with other developers from [Nunchuk](https://nunchuk.io/), [ColdCard](https://coldcardwallet.com/) and [BitBox](http://shiftcrypto.ch). This BIP significantly raises Bitcoin multi-signature’s security to a whole new level. We will implement this BIP in the near future.

### Why it Can’t All Be Done At Once

There are several reasons why releasing information has to be done gradually rather than all at once. First, we have a responsibility to protect our users from the increased threat of hacking that is inevitably part of exposing the source code and making it easier to find vulnerabilities, hence the saying: “security through obscurity.” Our decision to make the Keystone hardware wallet open -source led to a completely new threat modeling. Higher standards of our engineering and a reconception of vulnerabilities meant that it took some time to rewrite certain parts of code before they could be released.

We don’t live in a world of absolutes and no electronic product will ever be completely transparent, but open source remains incredibly important to the bitcoin community. Not only does open -source code make the insertion of a backdoor by a rogue engineer much more difficult, it also makes integration with other products, such as software wallets, a much smoother process. We are very optimistic about our growing compatibility with some of the best products and services the Bitcoin community has to offer, which will also help reduce trust dependencies on our products in the future.
