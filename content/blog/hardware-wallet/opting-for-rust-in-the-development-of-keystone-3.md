---
title: "Opting for Rust in the Development of Keystone 3"
slug: "opting-for-rust-in-the-development-of-keystone-3-b71e497b538d"
summary: "Anyone with a technical background understands the challenges associated with developing on embedded systems. These systems often have limited memory, processing capabilities, and battery life, nec..."
publishedAt: "2023-09-22T05:30:53.811Z"
updatedAt: "2024-04-30T06:44:20.632Z"
heroImage: "/images/blog/hardware-wallet/opting-for-rust-in-the-development-of-keystone-3-b71e497b538d/hero.jpg"
locale: "en"
---

![rust.webp](/images/blog/hardware-wallet/opting-for-rust-in-the-development-of-keystone-3-b71e497b538d/rust-f74fbe8563.webp)

Anyone with a technical background understands the challenges associated with developing on [**embedded systems**](https://www.techtarget.com/iotagenda/definition/embedded-system). These systems often have limited memory, processing capabilities, and battery life, necessitating judicious use of these resources by developers. Additionally, real-time constraints are crucial, requiring the software to be deterministic and free from any sort of delays.

## Why Rust?

Keystone recognizes [**Rust**](https://www.rust-lang.org/) as a contemporary programming language engineered for safety, speed, and expressiveness. It is particularly suitable for developing applications critical to security, such as operating systems, embedded systems, and financial software. The type system and memory safety model of Rust aid in averting common errors that could result in security vulnerabilities, like dangling pointers and null pointer dereferences, thereby enhancing the reliability and security of applications. Moreover, Rust also offers a high level of control, making it an excellent choice for performance-critical applications, a key consideration for embedded systems where resources are limited. Furthermore, it’s popularity within the crypto community is evident, with blockchains such as [**Solana**](https://solana.com/) adopting it.

By utilizing Rust, the Keystone team can allocate development resources more efficiently, focusing on the integration of our hardware wallet with additional software wallets instead of the underlying development. One good example would be our recent [**integration with Keplr 2.0’s desktop plug-ins**](https://twitter.com/keplrwallet/status/1695059495435505933?s=20).

## Reflecting on the Past
![android.webp](/images/blog/hardware-wallet/opting-for-rust-in-the-development-of-keystone-3-b71e497b538d/android-9a6f161155.webp)

The Keystone Pro Gen2 was built entirely on Android

The previous generation of the Keystone Wallet was built on Android. We chose Android for its advanced set of tools that are crucial for applications such as the camera (for scanning QR codes), touchscreen (for ease of use), and other functionalities that improve the overall user experience. Additionally, the decision to construct our hardware wallet application layer on an Android operating system was influenced by its [**open-source nature**](https://github.com/KeystoneHQ/Keystone-cold-app) and its widespread use in several payment and banking terminals.

However, two drawbacks we encountered were the inability to make the hardware wallet entirely open-source because certain parts of the operating system were proprietary to different vendors and the extensive size of the Android codebase, which made auditing difficult. Consequently, we proceeded to [**implement several measures**](https://github.com/KeystoneHQ/Keystone-system) to mitigate potential Android vulnerabilities, including:

* Disabling adb and removing the adb daemon
* Eliminating unrelated system processes and applications
* Prohibiting the installation of third-party applications
* Patching Linux kernel vulnerabilities

## Transiting from Android to Embedded OS

In early 2022, we decided that it was the time to develop the Keystone wallet further by incorporating significant enhancements to make it completely open-source.

![embed.webp](/images/blog/hardware-wallet/opting-for-rust-in-the-development-of-keystone-3-b71e497b538d/embed-7fbafdd646.webp)

An embedded operating system is designed only to perform a specific task

The biggest hurdle our team faced was ensuring the security of the software on the Keystone 3 hardware wallet. Rust’s emphasis on safety made it an obvious choice for this purpose. We leveraged Rust’s type system to prevent bugs and errors and utilized its ownership system for safe memory management. By harnessing these features, we were able to create a software highly resilient to attacks.

Performance was another significant challenge, as the software on the Keystone 3 hardware wallet needed to be efficient enough to operate with the device’s limited resources. Rust’s performance optimizations facilitated meeting this requirement. We employed Rust’s compiler to optimize our code’s performance and utilized its standard library to access efficient algorithms and data structures. This approach enabled us to develop software that was both secure and efficient.

## What’s Next?

The next major step in Keystone’s open-source plan is to concentrate on usability and documentation. Our main objective is to make the Keystone Github repository as accessible and readable as possible, even for those without an engineering background. We plan to make the documentation straightforward and succinct, enabling anyone to comprehend our development progress. The objective of this open-source initiative is to develop the Keystone wallet into the most secure and easy-to-use hardware wallet on the market.
![road.webp](/images/blog/hardware-wallet/opting-for-rust-in-the-development-of-keystone-3-b71e497b538d/road-92d8fd66a4.webp)
The road ahead may be uncertain, but it’s the one we must take to move forward

The release of the open source codes for Keystone 3 will be done in a staggered manner rather than simultaneous. This approach is necessary to protect our users from the heightened risk of cyberattacks that typically arise when the source code is revealed, as it simplifies the process of identifying vulnerabilities.

The importance of open-source cannot be overstated for us. It not only substantially reduces the risk of backdoor insertions by rogue engineers but also enables smoother integrations with various DApps and software wallets. We are extremely optimistic about the potential for expanding compatibility, which will also contribute to reducing trust dependencies on our products in the future.

## Closing
![bridge.webp](/images/blog/hardware-wallet/opting-for-rust-in-the-development-of-keystone-3-b71e497b538d/bridge-35281544e3.webp)
Build bridges, not walls

We are fully committed to enhancing the Keystone 3 by focusing on usability, documentation, and maintaining the vitality of open-source. This journey has its challenges, but it is necessary and worthwhile as we strive to provide a secure and easy-to-use wallet, facilitate smoother integrations, and ultimately reduce the reliance on our products. By doing so, we are not only contributing to the security and functionality of the Keystone hardware wallet but also promoting a more open and collaborative ecosystem.

## About Keystone

[**Keystone**](https://keyst.one/) is an [**open-source**](/the-role-of-open-source-tech-in-keystones-development-4dd77faea752) airgap hardware wallet that utilizes an embedded system. To further enhance its security, the device is equipped with [**three secure element chips**](/secure-elements-the-bedrock-of-hardware-wallet-security-1dd8cbdef461). One of Keystone’s unique features is its ability to support [**multiple recovery seed phrases**](/unleashing-the-power-of-multiple-secret-recovery-phrases-with-keystone-3-a-comprehensive-guide-3c3afb997cc4), reducing the need to purchase multiple hardware wallet devices.

With the [**primary aim**](/keystone-3-pro-a-community-centric-designed-hardware-wallet-81646869feff) of maximizing security against potential threats, minimizing dependence, reducing human errors, and eliminating single points of failure, Keystone also places a strong emphasis on extensive interoperability. It is compatible with well-known software wallets such as [**MetaMask**](https://metamask.io/) (both [**Extension**](https://twitter.com/MetaMask/status/1469351219290382341) and [**Mobile**](https://twitter.com/MetaMask/status/1517256930389110785) versions), as well as other premier software wallets like the [**OKX Web3 Wallet**](https://www.okx.com/web3), [**Solflare**](https://solflare.com/), [**Rabby**](https://rabby.io/), and more.

[**Website**](https://keyst.one/) **|** [**Twitter**](https://twitter.com/KeystoneWallet) **|** [**Discord**](https://keyst.one/discord) **|** [**Telegram**](https://t.me/KeystoneWallet) **|** [**GitHub**](https://github.com/KeystoneHQ)
