---
title: "Secure Elements: The Bedrock of Hardware Wallet Security"
slug: "secure-elements-the-bedrock-of-hardware-wallet-security-1dd8cbdef461"
summary: "Beyond standard microchips, Secure Elements are specialized, tamper-resistant processors designed specifically to defend against sophisticated physical threats—from power analysis to cold boot attacks. This guide highlights how the Keystone 3 Pro pushes industry boundaries as the first device to implement a Triple Secure Element architecture, isolating seed phrases and biometric data into independent, hardened environments.\n\nDiscover why these \"digital vaults\" are the non-negotiable bedrock for anyone serious about protecting their private keys from both remote hackers and physical intruders."
publishedAt: "2023-07-12T05:30:53.811Z"
updatedAt: "2026-03-07T16:22:49.138Z"
heroImage: "/images/blog/hardware-wallet/secure-elements-the-bedrock-of-hardware-wallet-security-1dd8cbdef461/hero.jpg"
locale: "en"
---

![secure.webp](/images/blog/hardware-wallet/secure-elements-the-bedrock-of-hardware-wallet-security-1dd8cbdef461/secure-7d74b92bcb.webp)

# Introduction: Why Secure Element Matters

The safeguarding of digital assets, particularly crypto, significantly relies on the kind of chips utilized. Not all chips are designed with security in mind, making the selection of the right one a critical aspect. This is where Secure Elements come into play. Recognized for their reliability and rigorous testing by unbiased third-party security labs, Secure Elements are the only chips acceptable for security-sensitive applications such as banking cards, passports and crypto hardware wallets.

# Understanding Crypto Asset Security and Hardware Wallets

Hardware wallets are engineered to protect your private keys from digital attacks and provide safeguards against physical tampering. The quality of the hardware is crucial in this context. The chips employed in the hardware wallets store your secret recovery phrase, the lifeline to your crypto assets. Consequently, the selection of a chip resistant to threats is paramount to the integrity of your digital wealth.

# Secure Elements (SE)

Topping the list for the most secure storage solution are Secure Elements, which are often used in passports and bank cards. Secure Elements serve as the digital vault for your private keys and are resistant to a multitude of physical tampering hacks, including power analysis attacks, cold boot attacks, and fault attacks, among others.

Secure Elements undergo rigorous third-party security lab testing before getting their certification. This means their claims of security are not only based on in-house tests but also on independent, third-party evaluations.

# Advanced Defenses of Secure Elements

![secure-chip.webp](/images/blog/hardware-wallet/secure-elements-the-bedrock-of-hardware-wallet-security-1dd8cbdef461/secure-chip-51b72bceae.webp)

## Fending off Side-Channel Attacks

A device’s physical behavior, such as energy consumption and electromagnetic emissions, can expose sensitive information — a phenomenon known as side-channel attacks. Secure Elements are equipped with an array of defenses that either reduce the leakage of side-channel information or mask it with dummy operations. Techniques like altering the timing of executions and executing randomized masking operations scramble sensitive information leaked out by power consumption or electromagnetic emissions.

## Hindering Power Analysis Attacks

Power analysis attacks aim to discern a private key by reading changes in power consumption during a transaction signing process. Secure Elements mitigate this risk by obscuring operations and employing a mixed circuitry layout, making the recovery of a key through power analysis almost impossible.

## Thwarting Cold Boot Attacks

Cold boot attacks exploit the retention of memory in a device for a brief period after shutdown. Secure Elements counter this threat with built-in modules that detect sudden environmental changes, such as a drop in temperature, which triggers an immediate reset and erasure of the RAM.

## Repelling Fault Attacks

Fault attacks attempt to extract otherwise secure information by forcing errors in the device’s functionality. Secure Elements have built-in voltage and frequency anomaly detection modules that protect them from excessive voltage supply or clock frequency. In the event of suspicious activity, the flash memory is automatically wiped, ensuring the security of the private keys and other sensitive information.

# What’s new in Keystone 3?
![keystone-new.webp](/images/blog/hardware-wallet/secure-elements-the-bedrock-of-hardware-wallet-security-1dd8cbdef461/keystone-new-0d64b2047b.webp)
# Three Secure Element Chips

The Keystone 3 is currently the **ONLY** hardware wallet that incorporates the use of three distinct secure elements: the [**Microchip ATECC608B**](https://ww1.microchip.com/downloads/en/DeviceDoc/ATECC608B-CryptoAuthentication-Device-Summary-Data-Sheet-DS40002239A.pdf), [**Maxim DS28S60**](https://www.analog.com/en/products/ds28s60.html#product-evaluationkit), and [**Maxim MAX32520**](https://www.engineersgarage.com/maxim-integrated-unveils-the-max32520-worlds-most-secure-iot-microcontroller/), offering a level of security that is unmatched. Each secure element has a unique role in reinforcing the hardware wallet’s security, collectively ensuring the protection of seed phrases and biometric data of users.

**Microchip ATECC608B** and **Maxim DS28S60** are specifically engineered to safeguard seed phrases. They collaboratively produce a secure environment for seed phrase storage, with the ATECC608B providing hardware-level security and authorization, and the DS28S60 ensuring a trusted platform module is always in place.

The **Maxim MAX32520**, on the other hand, is a secure microcontroller unit that plays a vital role in securing fingerprint data. It utilizes encrypted flash storage for safeguarding a user’s fingerprint data, with the verification process being executed securely within the MCU (only available in the Keystone 3 Pro).

Additionally, Keystone 3 incorporates a PCI-grade anti-tampering feature, with an intricate ‘security house’ of circuitry encompassing the core IC and SE chips. Any physical tampering results in an immediate data wipeout, further strengthening the device’s resilience. We’ll be publishing a separate article delving deeper into this topic in the coming weeks.

# Secure Seed Generation & Storage

The Keystone team puts substantial focus on the seed generation process, particularly on ensuring randomness, as any lack of it can lead to security vulnerabilities. To avoid a single point of failure and boost randomness, the Keystone 3 leverages both secure elements (**Microchip ATECC608B & Maxim DS28S60)** to generate random numbers, which are then combined to form a unique seed phrase.

Furthermore, users suspicious of the secure elements have the choice to manually generate their recovery phrase via [**dice rolling**](https://support.keyst.one/advanced-features/recovery-phrase/use-dice-to-generate-recovery-phrase). They are also given the additional option to select their 11th or 23rd word, and have the Keystone device calculate their 12th or 24th checksum word. Nonetheless, we advise that the dice rolling feature be used only by experienced users who are fully aware of their actions.

[How to verify the recovery phrase created by dice rolling](/how-to-verify-the-recovery-phrase-created-by-dice-rolling-af01c16b765e)

Users’ seed phrases are encrypted with their password and securely preserved within both the secure elements. An encryption key, derived from both secure elements rather than the user’s direct password, is used. A part of this key is produced from the **Microchip ATECC608B** leveraging the [**KDF function**](https://onlinedocs.microchip.com/pr/GUID-D7090430-8C77-4611-BE14-1E6C9D0B117F-en-US-1/index.html?GUID-79E56B19-B4A4-48E1-A352-FD3E33180FBF=). The second part is a random number stored on the **Maxim DS28S60**.

Extraction of the seed phrase is only possible if the secure elements are thoroughly compromised, and the user’s password is exposed. This multilevel security measure provides strong protection against potential attacks on users’ seed phrases.

# Fully Open Source And Transparent Signing Process
![open-source.webp](/images/blog/hardware-wallet/secure-elements-the-bedrock-of-hardware-wallet-security-1dd8cbdef461/open-source-53243478b9.webp)
Keystone stands out due to our dedication to transparency and open-source practices. We are currently collaborating with [**SlowMist**](https://twitter.com/SlowMist_Team) and [**KeyLabs**](https://twitter.com/keylabsio) to meticulously review and audit every aspect of the Keystone 3. **Our objective is to make all our firmware code open-source by 2023 Q4**, enabling anyone to re-construct our firmware and assess the security level of the Keystone 3 independently. This “Don’t trust, verify!” philosophy exemplifies our commitment to transparency and security.

While there are challenges related to open-sourcing secure element firmware due to vendor-imposed IP protections, we still emphasize the open verification of procedures like nonce selection during [**Secp256k1 signing**](https://medium.com/asecuritysite-when-bob-met-alice/four-basic-rules-of-ecdsa-signatures-763ea8b3b645) or the proper implementation of [**RFC6979**](https://datatracker.ietf.org/doc/html/rfc6979). We have also developed all the device’s signing logic internally to allow full auditability of the code for vulnerabilities.

# Conclusion

To sum it up, the importance of robust hardware for crypto security cannot be overstated. The Keystone 3, armed with its multitude of Secure Elements, transparency through open-source, and fortified signing procedures, provides a strong barrier against various threats. By opting for a hardware wallet like Keystone, users can notably enhance the protection of their digital assets, ensuring peace of mind amidst the unpredictable environment of Web3.

Join the #Keystone3Waitlist today!
<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">???? We&#39;re opening the waitlist for Keystone 3!<br><br>???? Want to be the first to get your hands on Keystone 3 at a discounted price? Here&#39;s what you need to do:<br><br>???? Tweet why you&#39;re looking forward to the launch of Keystone 3 &amp; include the hashtag <a href="https://twitter.com/hashtag/Keystone3Waitlist?src=hash&amp;ref_src=twsrc%5Etfw">#Keystone3Waitlist</a> in your tweet <a href="https://t.co/FFxblTlwgK">pic.twitter.com/FFxblTlwgK</a></p>&mdash; Keystone Hardware Wallet (@KeystoneWallet) <a href="https://twitter.com/KeystoneWallet/status/1677260351489048577?ref_src=twsrc%5Etfw">July 7, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

# About Keystone

[**Keystone**](https://keyst.one/) is an [**open-source**](/the-role-of-open-source-tech-in-keystones-development-4dd77faea752) airgap hardware wallet that utilizes an embedded system. To further enhance its security, the device is equipped with [**three secure element chips**](/secure-elements-the-bedrock-of-hardware-wallet-security-1dd8cbdef461). One of Keystone’s unique features is its ability to support [**multiple recovery seed phrases**](/unleashing-the-power-of-multiple-secret-recovery-phrases-with-keystone-3-a-comprehensive-guide-3c3afb997cc4), reducing the need to purchase multiple hardware wallet devices.

With the [**primary aim**](/keystone-3-pro-a-community-centric-designed-hardware-wallet-81646869feff) of maximizing security against potential threats, minimizing dependence, reducing human errors, and eliminating single points of failure, Keystone also places a strong emphasis on extensive interoperability. It is compatible with well-known software wallets such as [**MetaMask**](https://metamask.io/) (both [**Extension**](https://twitter.com/MetaMask/status/1469351219290382341) and [**Mobile**](https://twitter.com/MetaMask/status/1517256930389110785) versions), as well as other premier software wallets like the [**OKX Web3 Wallet**](https://www.okx.com/web3), [**Solflare**](https://solflare.com/), [**Rabby**](https://rabby.io/), and more.

[**Website**](https://keyst.one/) **|** [**Twitter**](https://twitter.com/KeystoneWallet) **|** [**Discord**](https://keyst.one/discord) **|** [**Telegram**](https://t.me/KeystoneWallet) **|** [**GitHub**](https://github.com/KeystoneHQ)
