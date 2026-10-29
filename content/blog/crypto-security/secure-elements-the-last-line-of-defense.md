---
title: "Secure Elements: The Last Line of Defense"
slug: "secure-elements-the-last-line-of-defense-4669012d4edc"
summary: "_By* Patrick Kim The recently passed Proof-of-Keys movement marked a silent revolution of individuals declaring financial independence by claiming ownership of their keys. In our last article, we e..."
publishedAt: "2021-07-13T05:30:53.811Z"
updatedAt: "2024-04-24T07:12:27.676Z"
heroImage: "/images/blog/crypto-security/secure-elements-the-last-line-of-defense-4669012d4edc/hero.webp"
locale: "en"
---

_By* [_Patrick Kim_](https://medium.com/@patrickkim_1991)
![1Fulydl1ahURL7zuV0wM8Jg.webp](/images/blog/crypto-security/secure-elements-the-last-line-of-defense-4669012d4edc/1-fulydl1ah-url-7zu-v0w-m8-jg-97169b55e7.webp)
The recently passed Proof-of-Keys movement marked a silent revolution of individuals declaring financial independence by claiming ownership of their keys. In our [last article](/secure-elements-harnessing-a-force-of-nature-14a959da7b54), we explained why a hardware wallet with a Secure Element that performs true random number generation (TRNG) gives you the most complete ownership of your keys. In addition to generating a random number, a Secure Element takes care of transaction signing so that your private keys never leave its controlled environment. This vitally important second function is ensured by the Secure Element’s many protections against even the most vulnerable situation for your keys — when an attacker has physical access to your device.

## Side-Channel Attacks

Side-channel attacks focus on gleaning sensitive information by closely observing a device’s physical behavior. The idea behind this kind of attack is that a device’s energy consumption, electromagnetic emissions, or other observable behaviors such as sounds can reveal something about the information that is being processed inside. Refer to our article on [air-gapped devices](/air-gapped-computers-and-phones-vs-hardware-wallets-whats-the-difference-458888cdd97) for an in-depth explanation of how information can easily escape from computers and smartphones because of their large attack surfaces.

Unlike the components in generic consumer electronics, a Secure Element is equipped with an array of defenses that mitigate the chances of a side-channel attack succeeding. These hardware defenses either reduce the leakage of side-channel information, or mask it with fake operations that produce information indistinguishable from the traces of sensitive encryption operations. For instance, manipulating the timing of executions drastically reduces the information that can be recovered by analyzing the time intervals elapsed during cryptographic operations. Likewise, executing randomized masking operations in tandem with real operations is an effective way to scramble sensitive information leaked out by power consumption or electromagnetic emissions.

## Power Analysis Attacks

The most well-known kind of side-channel attack works by reading changes in power consumption that occur while private keys are being used to sign a transaction. A 256-bit private key consists of a series of ‘0’ bits and ‘1’ bits, which are processed with two different operations. Because the operations differ in power consumption, a private key can be recovered if an attacker has physical access to the device and adequately sensitive power analysis equipment. A power analysis attack is [generally performed](https://www.youtube.com/watch?v=bFfyROX7V0s&t=625s) by inserting a shunt resistor into the power line where it is connected to the chip processing the private keys, and hooking the resistor up to an oscilloscope for power consumption reading. Not only will a Secure Element’s ability to obscure its operations make recovering a key through power analysis reading almost impossible, but the mixed layout of its circuitry makes this a very difficult defense to get around.

## Cold Boot Attacks

Cold boot attacks seek to exploit the fact that memory physically lingers in a device for a short period of time after the device has been shut down. With a hard reset of the device, an attacker can dump memory onto a file before it physically degrades. This type of attack works not only on computers, but also smartphones.

Cold boot attacks are [most effective](https://www.youtube.com/watch?v=E6gzVVjW4yY) when freeze spray is used to cool down the memory module and delay the degradation of physical memory. While general circuit systems are defenseless against this cold boot attack method, a Secure Element has modules designed to detect abnormal environmental conditions such as low temperatures. Once a sudden change in temperature is detected, a Secure Element will immediately reset and erase the RAM to counteract any potential threat.

## Fault Attacks

Fault attacks attempt to cause a device to reveal information that otherwise would not leak out by forcing errors in the device’s functionality. A Secure Element has built-in voltage and frequency abnormality detection modules that protect it from being probed by excessive voltage supply or clock frequency. To obscure the physical activity of its encrypted operations, it conducts a number of fake operations in simultaneous concert with real ones, effectively scrambling any sensitive information that could be secreted as the result of a fault attack. On top of these defenses, a Secure Element conducts verification checks when it detects that multiple real operations are being executed at the same time. If the Secure Element detects suspicious activity, flash memory is wiped, causing the private keys and other sensitive information to disappear.

## How Can a Secure Element Be Verified?

A Secure Element is also designed to be resistant to other kinds of side-channel attacks not listed here, such as light attacks and software attacks. But how can you be sure that a Secure Element is really offering any of the protections it proposes to provide? Controversy in the bitcoin community as to whether Secure Elements are beneficial is due to the common perception of Secure Elements as complete black boxes about which nothing can be known. However, Keystone is the first hardware wallet to have [open source Secure Element firmware](https://github.com/KeystoneHQ/Keystone-developer-hub), allowing you to verify:

1. How the he recovery phrase & master private key are generated from [entropy](/secure-elements-harnessing-a-force-of-nature-14a959da7b54).
2. How child private keys and public keys are generated/derived.
3. That the signing process happens entirely within the Secure Element and your private keys never leave it.

This leaves only TRNG mechanics, cryptographic algorithms like ECDSA, and prevention of physical attacks as the only non-transparent functions of Keystone’s Secure Element. TRNG can be verified by running a test like FIPS 140–2 (check out Trezor’s [results](https://github.com/trezor/rng-test/blob/master/stm32_rng_nc_1.rngtest) of running an FIPS 140–2 test for STM32’s TRNG). Cryptographic functions like ECDSA can be tested using known inputs and outputs, although technically you would have to test every possible value to verify these functions completely. As for the side-channel attacks described in this article, hardware wallet history clearly demonstrates that a Secure Element significantly drives up attack costs. The recent hardware wallet hack [involving Trezor](https://blog.kraken.com/post/3662/kraken-identifies-critical-flaw-in-trezor-hardware-wallets/) shows how vulnerable devices without a Secure Element are to physical attacks that cost only around $75 to execute. Trezor recommends their users protect themselves by enabling [Passphrase wallets](/should-you-enable-passphrase-protection-5aba38b92613), but Passphrase requires much more responsibility on the part of the user to prevent human error, thereby introducing a risk factor.

Our Keystone Hardware Wallets make a Secure Element and other security features we believe every hodler should have [available at just 119 USD](https://shop.keyst.one/products/keystone-essential).
