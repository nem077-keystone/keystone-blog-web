---
title: "Mythbusters: The Mystery Behind the Mnemonic Phrase Collision Scam"
slug: "mythbusters-the-mystery-behind-the-mnemonic-phrase-collision-scam"
summary: "Newcomers to the cryptocurrency world often wonder about the security of their digital assets."
publishedAt: "2024-10-08T09:57:48.543Z"
updatedAt: "2024-10-17T11:37:18.558Z"
heroImage: "/images/blog/crypto-security/mythbusters-the-mystery-behind-the-mnemonic-phrase-collision-scam/hero.jpg"
locale: "en"
---

Newcomers to the cryptocurrency world often wonder about the security of their digital assets. 

One common question is: With today's powerful GPU computing power, is it possible to generate wallets with assets by traversing mnemonic phrase combinations?

This is actually a classic scam in the crypto world: the mnemonic phrase collision generator. Why is this idea unreliable? Let's do some math:

# Mnemonic Phrase Collision: An Unreliable Scam

The BIP39 standard mnemonic word list contains 2048 words. Let's calculate how many 12-word mnemonic phrase combinations can be produced:P(2048,12) = 2048!/(2048-12)! ≈ 5.27× 10^39

An RTX4090 GPU has a hash rate of about 125MH/s (125 million hashes per second). It would take 1.38×10^24 years to traverse all mnemonic phrase combinations, which is obviously beyond our limited lifespans.

Some might think, "I don't need to traverse all combinations; hitting just one is profitable." According to [@ycharts](https://x.com/ycharts) data, there are currently 273 million Ethereum addresses, which is only 1/5×10^32 of the maximum number of mnemonic combinations. In other words, the time needed to collide with an existing address would still be 1.27×10^17 years, far exceeding the timespan of human civilization.

Given that the probability of mnemonic phrase collisions is so low, does this mean that our generated mnemonic phrases are completely secure? In reality, under certain specific conditions, others can obtain your complete mnemonic phrase through brute-force attacks.

The first scenario is if 8 out of 12 words in your mnemonic phrase are leaked. Using the computing power of a single RTX4090 GPU, the remaining 4 words could be calculated within 30 days. So, even leaking part of your mnemonic phrase poses a risk.

Another scenario is when the wallet's random number generator has vulnerabilities, significantly reducing the actual range of generated mnemonic phrases. This would greatly lower the difficulty of cracking the mnemonic phrase.

Let's now explore one of the most crucial elements in cryptocurrency - the security of random numbers.

![4597a18c7c856ebaf4a9f9555bd165d296b1167108eed3cddb0a637c23486199.jpg](/images/blog/crypto-security/mythbusters-the-mystery-behind-the-mnemonic-phrase-collision-scam/4597a18c7c856ebaf4a9f9555bd165d296b1167108eed3cddb0a637c23486199-7023209142.jpg)

# From Random Numbers to Mnemonic Phrases

Let's understand how a 12-word mnemonic phrase is generated:

- The computer randomly generates a 128-bit binary number A.
- A hash calculation is performed on A, and the first 4 bits of the hash result are added to the end of A, resulting in a 132-bit binary number B.
- B is divided into 12 groups of 11-bit binary numbers.
- Each group of binary numbers is converted to decimal and matched with the corresponding word in the mnemonic word list.
- The final 12 words form a mnemonic phrase combination.

It's clear that the key to generating a wallet lies in the random number produced in the first step. The subsequent processes are just converting it into mnemonic phrases according to certain rules to help us record it. The random number determines everything about the wallet, so the quality of this random number generation also affects our asset security.

# The Mystery of Random Number Generators

Many people may not know that random number generators mainly include two types: **pseudo-random (PRNG)** and **true random (TRNG)**

Pseudo-random numbers are generated based on deterministic algorithms. They are generated quickly, only needing an input seed value and a specific algorithm to obtain results. The same seed value will generate the same sequence of random numbers.

True random numbers use unpredictable physical phenomena to generate random numbers, such as weather conditions, accelerometer values from mobile phones, or even beta particles randomly emitted by radioactive materials. Generally, TRNG uses data from multiple different physical sources to jointly generate random numbers, avoiding the risk of single point of failure.

![1502826342-784b54d482425921090a84d3e2054005f896c544d2c7701c4aae153aaf95fc2a.webp](/images/blog/crypto-security/mythbusters-the-mystery-behind-the-mnemonic-phrase-collision-scam/1502826342-784b54d482425921090a84d3e2054005f896c544d2c7701c4aae153aaf95fc2a-bf1788230b.webp)

# Use of Random Number Generators in Wallets

Software wallets generally use pseudo-random number generators with sufficiently high entropy values as seeds. High entropy can obtain relatively higher security and predictability difficulty, but fundamentally, it still needs a seed to start. The same seed + algorithm will get the same random number sequence, and the periodic cycle pattern of pseudo-random numbers still exists, just stretched to a large enough cycle. We can say it has relatively small hidden dangers, but we can't say they don't exist.

Due to their wide applicability and fast generation speed, pseudo-random numbers are used in many scenarios, but in security-related situations, using pseudo-random number generators can have serious consequences. For example, TrustWallet announced in 2023 that they used the pseudo-random number generator MT19937 in certain versions of their browser extension wallet. However, due to its inability to provide sufficient randomness, there was a potential risk of generating identical mnemonic phrases. Therefore, they disclosed this issue and guided affected users to transfer assets and update to new versions.

# Conclusion

For users who are extremely concerned about security, even the TRNG in hardware wallets might not be reassuring enough. [Keystone](https://keyst.one/) understands this concern, so they have built-in functionality to create mnemonic phrases using dice. This requires you to have a casino-grade dice (with evenly distributed weight and transparent for observation). You need to roll the die at least 50 times, inputting each result into the [Keystone](https://keyst.one/shop/products/keystone-3-pro) to generate the mnemonic phrase. For better randomness, we recommend rolling more than 99 times. Users interested in this can watch our tutorial on YouTube: https://www.youtube.com/watch?v=JRzxQmpbIPw

By supporting dice-generated mnemonic phrases, Keystone further illustrates the blockchain value of "Don't trust, verify," more fully realizing the concept of "self-custody of assets" for users.
