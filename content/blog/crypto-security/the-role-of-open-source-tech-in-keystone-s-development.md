---
title: "The Role of Open Source Tech in Keystone’s Development"
slug: "the-role-of-open-source-tech-in-keystones-development-4dd77faea752"
summary: "As technology evolves, so do the approaches and philosophies behind its development. 2 years ago, we penned down our thoughts on the open-source approach for the Keystone Pro. Now, with the launch..."
publishedAt: "2023-10-02T05:30:53.811Z"
updatedAt: "2024-04-30T07:13:18.082Z"
heroImage: "/images/blog/crypto-security/the-role-of-open-source-tech-in-keystones-development-4dd77faea752/hero.jpg"
locale: "en"
---

As technology evolves, so do the approaches and philosophies behind its development. 2 years ago, we [**penned down our thoughts on the open-source approach for the Keystone Pro**](/on-open-source-and-transparency-ba37fa1c1e8c). Now, with the launch of the [**Keystone 3 Pro**](/keystone-3-the-ultimate-protector-of-your-digital-assets-122144288fad), we see this as the perfect time to share our updated perspective and insights on open source.

## Open Source: More than Just Publishing and Sharing Code

![193CTXz7IaX8XbzazhzbASA.webp](/images/blog/crypto-security/the-role-of-open-source-tech-in-keystones-development-4dd77faea752/193-ct-xz7-ia-x8-xbzazhzb-asa-2170e4039f.webp)

The true essence of open source goes beyond releasing code to the public

Many misconstrue open source as merely “making the code public”. However, at Keystone, we view it as a philosophy that drives our commitment to code transparency, security, and product excellence. Let’s take a look at some examples below:

**Technical Hurdles:** Transitioning to an open-source model isn’t just about sharing the code; it’s also equally about adapting the product’s technical architecture. For instance, protecting chip communication channels in the Keystone device became paramount for us. With proprietary closed source software, we could easily use asymmetric cryptography with a private key to safeguard the channels. But in an open source setting, the visibility and transparency of our code would compromise and make this solution vulnerable. As a result, we decided to adopt a different approach where every Keystone device, upon initialization, would generate its own unique set of communication keys exclusive to that device only.

**Product Execution:** Code quality is synonymous with software quality. Well-structured, flawlessly written code leads to superior, reliable software. Conversely, poor code can cause myriad issues from bugs to complete system failures. Many software wallets, in their haste to outpace competitors, may compromise on code quality, opting for closed-source to shield their intellectual property. Keystone, however, believes in the integral value of open source code. Moreover, we understand that our prowess isn’t restricted to software code as well. Our strength as a company also lies in supply chain management, global fulfillment, and managing diverse channels, including e-commerce.

**Setting Audit Standards:** Embracing open source nudges us towards rigorous code auditing. Our commitment is evident in how we treated the audit reports for the Keystone Pro; we open-sourced them, ensuring transparency. We also meticulously addressed all issues and concerns raised. At present, the Keystone 3 Pro’s firmware is under scrutiny by [**SlowMist**](https://www.slowmist.com/), and [**Keylabs**](https://keylabs.io/) (formerly [**Wallet.fail**](https://wallet.fail/)) is overseeing the hardware design. The reports will be made avaliable to the public once the audits are completed.

## The Pitfalls of Closed Source Tech

![1V0J6xx2r8BN_W_sKXKtUwA.webp](/images/blog/crypto-security/the-role-of-open-source-tech-in-keystones-development-4dd77faea752/1-v0-j6xx2r8-bn-w-s-kx-kt-uw-a-0f2eab000d.webp)
The spike in hacking incidents have jeopardized many users

Recent hacks of prominent software wallet projects highlight the risks associated with closed-source systems. Incidents include:

[**Slope Wallet**](https://decrypt.co/106680/solana-hack-blamed-slope-mobile-wallet-exploit)**:** [**Solana**](https://solana.com/) users faced a setback with a massive hack that resulted in a loss of approximately $4.5 million in $SOL tokens and other crypto tokens. The exploit was linked to a vulnerability in the [**Slope mobile wallet app**](https://slope.finance/). Assessments from Solana’s developers hint that a private key mismanagement led to the “accidental transfer” of these keys to an external party. Users who were compromised had utilized Slope mobile wallet to generate their wallet address.

[**MyAlgo Wallet**](https://cointelegraph.com/news/myalgo-users-urged-to-withdraw-as-cause-of-9-2m-hack-remains-unknown)**:** The leading software wallet provider for the [**Algorand Network**](https://algorand.com/), [**MyAlgo**](https://wallet.myalgo.com/access), urged its users to take immediate action to withdraw their crypto assets from any MyAlgo wallet generated using a seed phrase. That came in the wake of a mysterious hack, which has baffled even the MyAlgo team and other experts. The breach drained an estimated $9.2 million in $ALGO, the native token of the Algorand Network.

[**Atomic Wallet**](https://cointelegraph.com/news/atomic-wallet-exploited-users-report-loss-of-entire-portfolios)**:** Renowned for its decentralized and noncustodial attributes, **t**he team behind [**Atomic wallet**](https://atomicwallet.io/) had to issue warnings across their social media platforms and temporarily suspend their app downloads during the hack. Users of Atomic Wallet reported losses exceeding $35 million. While the team evaluated numerous potential security risks, ranging from malware code injection and man-in-the-middle attacks to viruses targeting individual devices, they couldn’t precisely identify the specific type of breach.

If the above software wallets had adopted an open source approach, auditors could have spotted and helped rectified their potential vulnerabilities, minimizing the likelihood of such breaches. Nevertheless, this strengthens Keystone’s commitment to ensuring our hardware wallet works seamlessly with all software wallets. Regardless of the many software wallets continuing with a closed-source model, our goal remains to enhance their security universally.

## Open Source Enhancements in the Keystone 3 Pro
![1Vl8T9H-Vz5sHtLRbHGWbRw.webp](/images/blog/crypto-security/the-role-of-open-source-tech-in-keystones-development-4dd77faea752/1-vl8-t9-h-vz5s-ht-l-rb-hg-wb-rw-fd5caf8a2a.webp)
Much like individuals who workout daily at a gym to build strength, Keystone consistently updates our hardware and software to reinforce the security of our hardware wallet

For the Keystone Pro, we took pride in making a variety of features open-source. This encompassed everything from the Secure Element firmware to the hardware blueprint (including the circuit layout and BOM). Additionally, we’ve also shared the hardware wallet application framework and segments of its operating system layer publicly.

With the Keystone 3 Pro, our dedication to transparency still stands firm. **EVERY SINGLE LINE** of code we’ve written, along with the hardware designs and audit reports from SlowMist and Keylabs, will be open-sourced. We aim to make these reports publicly available in November 2023 after resolving all issues highlighted in the audits.

The main notable enhancement in the Keystone 3 Pro compared to its predecessor is the transition from Android to an embedded system. Despite its widespread use, Android’s complexity makes it cumbersome for developers to delve into. By adopting an embedded system, we’ve substantially streamlined our code, making it more accessible and scrutinizable.

This in turn, also makes the firmware of the Keystone 3 Pro more “Reproducible”, empowering individuals with the ability to audit, experiment and test out the firmware’s code for themselves. It allows users to verify that the firmware loaded onto Keystone’s hardware wallets matches the code we publicly share. This resonates deeply especially with the people who live by the mantra “Don’t Trust, Always Verify.” For them, mere access to open-source code isn’t enough.

If you’d like to probe deeper into our security architecture, we also welcome you to check out this article about the [**secure elements chips avaliable in the Keystone 3 Pro**](/secure-elements-the-bedrock-of-hardware-wallet-security-1dd8cbdef461).

## Keystone’s Unwavering Allegiance to Open Source
![1bJ_ywtrUQapZZ2u7jlwJBA.webp](/images/blog/crypto-security/the-role-of-open-source-tech-in-keystones-development-4dd77faea752/1b-j-ywtr-u-qap-zz-2u7jlw-jba-61906de3c6.webp)
We’ve made an oath to always remain committed to open source

At Keystone, our pursuit of open source isn’t a mere trend but a deeply ingrained belief. We recognize that open source goes beyond than just sharing code; it’s about embracing transparency, fostering community collaboration, and continually elevating security standards. The Keystone 3 Pro epitomizes our growth and our commitment to this philosophy. Our unwavering belief in open source resonates in our products, our transparency efforts, and our drive to deliver unrivaled security. As we forge ahead, we value the mutual trust that binds us with our community, and together, we’re eager to continue to redefine the boundaries of technological advancement in Web3.

## About Keystone

[**Keystone**](https://keyst.one/) is an [**open-source**](/the-role-of-open-source-tech-in-keystones-development-4dd77faea752) airgap hardware wallet that utilizes an embedded system. To further enhance its security, the device is equipped with [**three secure element chips**](/secure-elements-the-bedrock-of-hardware-wallet-security-1dd8cbdef461). One of Keystone’s unique features is its ability to support [**multiple recovery seed phrases**](/unleashing-the-power-of-multiple-secret-recovery-phrases-with-keystone-3-a-comprehensive-guide-3c3afb997cc4), reducing the need to purchase multiple hardware wallet devices.

With the [**primary aim**](/keystone-3-pro-a-community-centric-designed-hardware-wallet-81646869feff) of maximizing security against potential threats, minimizing dependence, reducing human errors, and eliminating single points of failure, Keystone also places a strong emphasis on extensive interoperability. It is compatible with well-known software wallets such as [**MetaMask**](https://metamask.io/) (both [**Extension**](https://twitter.com/MetaMask/status/1469351219290382341) and [**Mobile**](https://twitter.com/MetaMask/status/1517256930389110785) versions), as well as other premier software wallets like the [**OKX Web3 Wallet**](https://www.okx.com/web3), [**Solflare**](https://solflare.com/), [**Rabby**](https://rabby.io/), and more.

[**Website**](https://keyst.one/) **|** [**Twitter**](https://twitter.com/KeystoneWallet) **|** [**Discord**](https://keyst.one/discord) **|** [**Telegram**](https://t.me/KeystoneWallet) **|** [**GitHub**](https://github.com/KeystoneHQ)
