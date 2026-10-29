---
title: "Keystone has Integrated with MetaMask"
slug: "keystone-has-integrated-with-metamask-d3906547069d"
summary: "We are thrilled to announce that Keystone has integrated with MetaMask."
publishedAt: "2021-12-30T05:30:53.811Z"
updatedAt: "2024-04-24T06:45:29.748Z"
heroImage: "/images/blog/partnerships/keystone-has-integrated-with-metamask-d3906547069d/hero.webp"
locale: "en"
---

We are thrilled to announce that Keystone has integrated with MetaMask.

Be sure to upgrade your MetaMask to the latest version ([10.8.0 on Chrome](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/) and [Edge](https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm?hl=en-US); Add-ons will be available later) and Keystone to the latest [multi-coin M-5.0 firmware ](https://support.keyst.one/getting-started/firmware-upgrading)for a seamless user experience exploring NFTs, DeFi, DAOs, and the metaverse with top-notch 100% air-gapped security.

## Keystone’s Journey towards Web3

We have been very focused on Bitcoin security for the last 3 years and have been consistently promoting secure air-gapped signing as one of the core members of [the Air-gapped Wallet Community](https://github.com/BlockchainCommons/Airgapped-Wallet-Community). Our product has been considered a part of [the most robust Bitcoin multi-signature scheme](https://btcguide.github.io/) and our CTO (Aaron) is one of the co-authors of [BIP 129](https://github.com/bitcoin/bips/blob/master/bip-0129.mediawiki) which strongly enhances Bitcoin multi-signature. We also implemented features like [Shamir Backups](https://blog.keyst.one/why-keystone-implemented-shamir-backups-71e319f972a6) to address any potential security paranoia within the Bitcoin community.

We started to explore what we can do to improve security for the Web3 community since late spring of 2021. The first security hole we were trying to cover was [Blind Signing](https://blog.keyst.one/blind-signing-a-security-black-hole-for-the-ethereum-community-13f909b848b6). Since then, with the help from the [Blocknative](https://www.blocknative.com/) team ([Onboard.js](https://www.blocknative.com/onboard)), we were able to successfully integrate with [Sushi](https://twitter.com/KeystoneWallet/status/1426195615524933635), [Yearn](https://twitter.com/KeystoneWallet/status/1430183753008119808), [Zapper](https://twitter.com/KeystoneWallet/status/1433094163101204481) and [Gnosis Safe](https://twitter.com/KeystoneWallet/status/1435625231255621635). These were the first implementations in solving the issue with Blind Signing.

In late August, with the help from the [ENS (Ethereum Naming Service)](https://ens.domains/) team (special thanks to [Nick Johnson](https://twitter.com/nicksdjohnson)), Keystone successfully became the first hardware wallet fully integrated with ENS, addressing any broken user experience of ENS on hardware wallets in the past.

After the integration with ENS, we were still driven forward by our desire to improve the UX and security for the Web3 community. This resulted in us working along with the MetaMask team for further integration. With help from [Dan Miller](https://github.com/danjm), [David Walsh](https://github.com/darkwing) and [kumavis](https://github.com/kumavis), we were able to successfully add the capability of QR code-based signing into MetaMask.

Here is a quick demo video demonstrating how whole process using Keystone with MetaMask looks like- [https://youtu.be/lr_Y9cqyiAM](https://youtu.be/lr_Y9cqyiAM)

## Keystone’s Pursuit for Improvement

There is a long history for USB-reliant hardware wallets in the crypto community.

There are 2 specific upgrades available that we offer over these older USB-reliant hardware wallets:.

 1. QR code data transmission between software and hardware wallet has a smaller attack surface ([example1](https://twitter.com/krakenfx/status/1280866992497491973) [example2](https://www.youtube.com/watch?v=oARxLV_vnh0)) and all the data transmitted is [transparent and verifiable](https://twitter.com/KeystoneWallet/status/1409938516579164160).

 2. Keystone has a 4-inch touch screen that significantly boosts user experience. It is a very similar user experience as your mobile device and lowers the possibility of human error, which is [the biggest reason for crypto loss](https://medium.com/@Kyle.May/blockchain-issues-2-human-error-breeds-catastrophe-679948072da4).

![0BStM9dxoM6grvRMW.webp](/images/blog/partnerships/keystone-has-integrated-with-metamask-d3906547069d/0-b-st-m9dxo-m6grv-rmw-5dc237264f.webp)

In the case with our MetaMask integration, we have 2 upgrades specifically for Web3 users.

 1. QR code data transmissions won’t have connectivity issues like USB connections. Users no longer need to suffer from the frustration of disconnected USB cables or multiple password inputs during a transaction(additionally, Keystone hardware wallet users can authorize a transaction via the fingerprint reader).

 2. The 4-inch touch screen not only clearly displays [ENS information](https://twitter.com/KeystoneWallet/status/1429819426296111112) and [detailed DeFi smart contract functions](https://blog.keyst.one/blind-signing-a-security-black-hole-for-the-ethereum-community-13f909b848b6) to make the signing process more secure, it also allows the user to review with ease by [simply scrolling up and down](https://youtu.be/VQKMoT-6XSg?t=974) the screen. Users no longer need to suffer from a dozen clicks of small buttons just to authorize a transaction.

These improvements are paramount if we want to improve UX and provide a more secure signing device to the community so new users to the crypto space won’t be plagued by such old inconveniences.

## Compatibility Matters

We really love the idea of [Composable Wallets by Andrew Hong](https://medium.com/coinmonks/1the-importance-of-composable-wallets-for-users-and-developers-accb2aadff49). Andrew abstracted “wallet(s)” into 4 layers. Keystone perfectly matches the “security” layer in the article, building up the 4 access legos of security: “key pair generation”, “wallet recovery”, “transaction and message signing” and “ABI decoding” to solve [Blind Signing](https://blog.keyst.one/blind-signing-a-security-black-hole-for-the-ethereum-community-13f909b848b6). he other 3 remaining layers can easily be fulfilled elegantly through maximizing compatibility between Keystone and other software wallets.

![0HkaSBtUIfsfbepgu.webp](/images/blog/partnerships/keystone-has-integrated-with-metamask-d3906547069d/0-hka-s-bt-u-ifsfbepgu-0c2990e026.webp)

When we were helping the Bitcoin community with secure signings, we were one of the strongest advocates for compatibility by integrating with [a wide range of software wallets](https://support.keyst.one/3rd-party-wallets/bitcoin-wallets). Doing so has allowed us to effortlessly support full features for Bitcoin like full node connections, coinjoin, multi-sig and Tor network.

MetaMask is the first Ethereum software wallet that we have integrated with. This opens the door for our users to take full advantage of ETH multisig, DeFi, staking, NFT minting, participation in decentralized governance and much more.

Additionally, this integration also makes Keystone compatible with all the EVM chains. Please check out this [example](https://support.keyst.one/3rd-party-wallets/eth-and-web3-wallets-keystone/bind-metamask-with-keystone/configure-evm-chains-on-metamask) on how to set up your MetaMask so you can use your Keystone with Polygon. For other EVM chains, please refer to their official tutorials.

Another ultimate benefit of maximizing compatibility is it allows our team to strictly focus on making Keystone the best and most secure signing device in the hardware wallet market.

## Beyond the Integration

This integration with the MetaMask extension wallet marks a milestone for our team’s journey in supporting Web3. We plan to continue our contribution to Web3 in the next coming months with the following actions:

 1. Propose an EIP for the QR protocol so that other software wallets can utilize it to maximize wallet compatibility.

 2. Onboard other QR solutions to fulfil compatibility with MetaMask. Examples include how [Airgap.it](https://airgap.it/) can turn your old mobile phone into a QR signer with the airplane mode turned on.

 3. Cooperate with more DeFi and NFT projects to better address the issue of [Blind Signing](https://blog.keyst.one/blind-signing-a-security-black-hole-for-the-ethereum-community-13f909b848b6).

If you have any feature requests or product suggestions, please kindly contact us at support@keyst.one. We are very keen on user feedback and pursue continuous and frequent improvements and updates for our products.

![0k8gojDhjxQGzg4Jf.webp](/images/blog/partnerships/keystone-has-integrated-with-metamask-d3906547069d/0k8goj-dhjx-q-gzg4-jf-50efd440fa.webp)

## About Keystone

Keystone is a 100% air-gapped open source hardware wallet that leverages QR codes to transmit unsigned and signed data between software wallets and hardware wallets.

Website: [https://keyst.one/](https://keyst.one/)

Blog: [https://blog.keyst.one/](https://blog.keyst.one/)

Github: [https://github.com/KeystoneHQ](https://github.com/KeystoneHQ)

Twitter: [https://twitter.com/KeystoneWallet](https://twitter.com/KeystoneWallet)

Telegram: [https://t.me/KeystoneWallet](https://t.me/KeystoneWallet)

Discord: [https://keyst.one/discord](https://keyst.one/discord)

## About MetaMask

MetaMask is the largest non-custodial wallet trusted by thousands of developers and millions of users worldwide as the most secure wallet and gateway to Web3. With MetaMask people have control over their own data, identity, and assets. We now have over [21M monthly active users](https://consensys.net/blog/press-release/metamask-surpasses-21-million-maus-as-consensys-raises-200-million-to-make-web3-universally-easy-to-use-access-and-build-on/) across the world using MetaMask to [swap tokens](https://consensys.net/blog/metamask/the-most-trusted-way-to-buy-store-and-swap-tokens-just-went-mobile/), borrow, lend, mint and [buy NFTs](https://consensys.net/blog/metamask/how-to-buy-nfts-on-foundation-using-metamask/), play games, and much more. Get started with MetaMask [here](http://metamask.io/download).
