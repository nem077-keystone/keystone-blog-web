---
title: "Deep Dive into Next-Gen Hardware Wallet : Crashing Keystone3 Pro Audit"
slug: "deep-dive-into-next-gen-hardware-wallet-crashing-keystone3-pro-audit-2729bc551d7b"
summary: "As we promised, we and our auditing partner completed the first audit report of the Keystone3 Pro in November 2023. Now it’s time for us to take a deeper dive into this report."
publishedAt: "2023-12-14T05:30:53.811Z"
updatedAt: "2024-04-30T07:04:12.910Z"
heroImage: "/images/blog/hardware-wallet/deep-dive-into-next-gen-hardware-wallet-crashing-keystone3-pro-audit-2729bc551d7b/hero.jpg"
locale: "en"
---

As we promised, we and our auditing partner completed the first audit report of the Keystone3 Pro in November 2023. Now it’s time for us to take a deeper dive into this report.

Its audit by Keylabs, transcends the ordinary, marking a pivotal moment in the saga of digital asset protection. In a domain long dominated by giants like Ledger or Trezor, Keystone3 emerges not just as a challenger but as an innovator, reshaping perceptions and setting new benchmarks.

**Keystone stands out in hardware wallet security, achieving several ‘firsts’ in Keylabs audits**: It’s the **first **to feature a point-of-sale grade secure microcontroller, the **first** with a fingerprint sensor, the **first** to implement Physically Unclonable Function-based keys on secure elements, the **first** audited with three secure elements, and the **first** with an effective tamper circuit.

This audit isn’t merely a comparison; it’s a detailed examination of how Keystone3 is carving out its unique stronghold in the world of hardware wallets.

## Keystone3 Pro’s Pioneering Features

Keystone it is the first wallet audited by Keylabs to incorporate a point-of-sale grade secure microcontroller, offering robust defense against digital threats.

The wallet’s integration of a fingerprint sensor is a novel approach to biometric security, a feature not seen in other hardware wallets. Another significant innovation is the use of Physically Unclonable Function (PUF)-based keys on its secure elements, enhancing the security of key generation and storage. The seed phases of your wallet was stored in Maxim’s chip, fortified and untouchable.

![Frame 10643.jpg](/images/blog/hardware-wallet/deep-dive-into-next-gen-hardware-wallet-crashing-keystone3-pro-audit-2729bc551d7b/frame-10643-b53d7bdd3d.jpg)

**The Keystone3 boasts three secure elements, compared to single element, providing multiple layers of security.** Its effective tamper circuit, another first in the industry, renders the device unusable upon tampering, surpassing the physical security capabilities of other wallets. The audit also highlighted Keystone3’s potential for further improvements and security enhancements in future firmware updates, indicating a progressive approach to wallet security.

Another notable finding was the wallet’s effective tamper circuit, which deactivates the device upon any signs of tampering. This feature significantly elevates the wallet’s defense against physical attacks.

## Key Takeways from the Audit

The Keylabs audit uncovered several key insights into the Keystone3’s security architecture. A major strength identified was the wallet’s robust tamper response, which outperforms other product’s in terms of physical security. However, the audit also brought to light a high severity issue related to tamper response inadequacy, alongside two low Severity firmware issues, and three low severity hardware vulnerabilities.

Keystone does not dodge away from these issues; instead, we clearly inform everyone about their existence. The audit report mentions that these issues have been properly resolved.

The Keystone3’s use of multiple secure elements and a secure microcontroller provides a strong defense against various threats, matching and sometimes surpassing other product’s security protocols.

## Threat Model and Security Concerns

The audit’s approach to threat modeling was like a grand chess game, with Keylabs anticipating moves from a variety of adversaries.

It mapped out threats from remote hackers, considering remote attackers, local attackers, insider threats, and various attack vectors. This model was adjusted to reflect Keystone3’s unique features, such as the fingerprint sensor and multiple secure elements. Keystone3’s approach to hardware security, particularly with its point-of-sale grade microcontroller and PUF-based keys, provides robust protection against a wide range of threats, aligning closely with Ledger’s security measures but adding its innovative hardware enhancements.

This holistic view of security, addressing threats from all angles, shows Keystone3’s commitment to being a leader in wallet security, constantly evolving to meet the challenges of the digital age.

## Future Directions for Keystone3: Setting New Industry Standards

The audit’s recommendations offer a roadmap for Keystone3 to elevate its security framework.

Suggested strategies include strengthening physical security features, improving secure boot processes, and implementing multi-factor authentication. These enhancements are crucial for Keystone3 to surpass the high security standards set by competitor, especially in firmware stability and physical security.

Keystone3’s potential to lead the hardware wallet industry lies in its ability to integrate these recommendations effectively, setting new benchmarks for wallet security. The wallet’s innovative features, combined with Keylabs’ suggestions, position Keystone3 as a leader in the next wave of hardware wallet technology, potentially surpassing established benchmarks.

## Conclusion

The Keystone3 Wallet, through its comprehensive audit by Keylabs, asserts itself as a vanguard in the realm of cryptocurrency security. This audit isn’t just a mere comparison to competitive; it’s a testament to Keystone3’s ambition and potential. Keystone3 is not only challenging the status quo but also inspiring a new wave of innovation in hardware wallet technology.

As Keystone3 continues to refine its security measures, it stands on the brink of redefining hardware wallet security, challenging the established standards set by Ledger. This moment marks not just a new product release but a significant leap forward in ensuring the safety and integrity of digital currencies.

## About Keystone

[**Keystone](https://keyst.one/)** is an [**open-source](https://blog.keyst.one/the-role-of-open-source-tech-in-keystones-development-4dd77faea752)** airgap hardware wallet that utilizes an embedded system. To further enhance its security, the device is equipped with [**three secure element chips](https://blog.keyst.one/secure-elements-the-bedrock-of-hardware-wallet-security-1dd8cbdef461)**. One of Keystone’s unique features is its ability to support [**multiple recovery seed phrases](https://blog.keyst.one/unleashing-the-power-of-multiple-secret-recovery-phrases-with-keystone-3-a-comprehensive-guide-3c3afb997cc4)**, reducing the need to purchase multiple hardware wallet devices.

With the [**primary aim](https://blog.keyst.one/keystone-3-pro-a-community-centric-designed-hardware-wallet-81646869feff)** of maximizing security against potential threats, minimizing dependence, reducing human errors, and eliminating single points of failure, Keystone also places a strong emphasis on extensive interoperability. It is compatible with well-known software wallets such as [**MetaMask](https://metamask.io/)** (both [**Extension](https://twitter.com/MetaMask/status/1469351219290382341)** and [**Mobile](https://twitter.com/MetaMask/status/1517256930389110785)** versions), as well as other premier software wallets like the [**OKX Web3 Wallet](https://www.okx.com/web3)**, [**Solflare](https://solflare.com/)**, [**Rabby](https://rabby.io/)**, and more.

[**Website](https://keyst.one/) | [Twitter](https://twitter.com/KeystoneWallet) | [Discord](https://keyst.one/discord) | [Telegram](https://t.me/KeystoneWallet) | [GitHub](https://github.com/KeystoneHQ)**
