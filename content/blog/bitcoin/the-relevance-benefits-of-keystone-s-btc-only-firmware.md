---
title: "The relevance & benefits of Keystone’s BTC-only firmware"
slug: "the-relevance-benefits-of-keystones-btc-only-firmware-8965ebb42e48"
summary: "“Why are you offering a BTC-only firmware and what’s the benefit of upgrading the hardware wallet with it?” This is a question we frequently receive and this article explains all the reasoning behi..."
publishedAt: "2021-10-19T05:30:53.811Z"
updatedAt: "2024-04-30T06:10:32.757Z"
heroImage: "/images/blog/bitcoin/the-relevance-benefits-of-keystones-btc-only-firmware-8965ebb42e48/hero.jpg"
locale: "en"
---

“Why are you offering a BTC-only firmware and what’s the benefit of upgrading the hardware wallet with it?” This is a question we frequently receive and this article explains all the reasoning behind this availability.

## Security First!

The ultimate reason for choosing a hardware wallet is the security it provides. The Keystone team perceives security as a paramount concern in this new bitcoin era. Our reasoning behind offering a BTC-only firmware is derived from this core perspective.

As you may be aware, bitcoin has many [forks](https://forkdrop.io/how-many-bitcoin-forks-are-there) such as Litecoin and Dogecoin. These forks might be a threat to your precious bitcoin. In this [article](https://thecharlatan.ch/Coin-Isolation/), it describes a potential attack called the “Hardware Wallet Coin Isolation Bypass” (it has been fixed by affected hardware wallet vendors). It is a method of attack where the attacker hacks your companion app and when you try to sign a litecoin transaction, the hacked companion app will construct a bitcoin transaction and your hardware wallet will then sign with the Litecoin app on your hardware wallet, resulting in you losing your precious bitcoin. This is why removing altcoin support from the firmware will generally increase security for your bitcoin and is one of the primary reasons why we offer a BTC-only firmware for your Keystone hardware wallet.

## Additional Security Features

After we released the BTC-only firmware, it was positively welcomed by the bitcoin community along with our other features such as QR code air-gapped signing. This resulted in more requests submitted by the bitcoin community. In response to these needs, we added [PSBT (BIP-174)](https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki) support to the BTC-only firmware and made your Keystone hardware wallet compatible with [BlueWallet, Sparrow, Specter, Electrum, Casa and other bitcoin wallets](https://support.keyst.one/3rd-party-wallets/bitcoin-wallets).

With these integrations, Keystone users have additional access to a variety of useful security features and benefits:

1. All 3 types of Bitcoin addresses (legacy, nested segwit and native segwit) are supported.
2. The ability to connect your wallet to your own Bitcoin node.
3. Bitcoin multi-sig support.
4. Privacy features like coinjoin.

Additional Bitcoin features for the BTC-only firmware are currently being considered such as Taproot support and other software bitcoin wallet integrations like Caravan.

## Final Note

The code base of the BTC-only firmware is completely and uniquely different from the multi-coin firmware. Due to this reason, there are 2 things to note:

1. The BTC-only firmware CANNOT be changed back to the multi-coin firmware once it is applied. This irreversibility is because switching back-and-forth between these 2 firmwares will cause serious unforeseen errors.
2. We currently don’t have any plans to add these Bitcoin features to the multi-coin firmware. Because adding those features is not a simple copy-and-paste of the code blocks. We strongly suggest upgrading to the BTC-only firmware if you want the best security for your bitcoin.

Keystone team has always and will continue to aim to offer the most secure and user-friendly hardware wallet for the bitcoiners.
