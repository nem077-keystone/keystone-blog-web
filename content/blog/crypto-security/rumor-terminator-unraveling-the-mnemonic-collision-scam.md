---
title: "Rumor Terminator: Unraveling the Mnemonic Collision Scam"
slug: "Rumor-Terminator"
summary: "Keystone Hardware Wallet: Secure your crypto assets with state-of-the-art security. Featuring quantum TRNG, air-gapped transactions."
publishedAt: "2025-03-25T08:20:12.814Z"
updatedAt: "2025-03-25T08:20:28.213Z"
heroImage: "/images/blog/crypto-security/Rumor-Terminator/hero.jpg"
locale: "en"
seo:
  title: "Unraveling the Mnemonic Collision Scam"
  description: "Keystone Hardware Wallet: Secure your crypto assets with state-of-the-art security. Featuring quantum TRNG, air-gapped transactions."
---

# Mnemonic Collisions: A Flawed Scam

Many newcomers to the cryptocurrency world often wonder: With the immense power of modern GPUs, is it possible to brute-force mnemonic phrases and stumble upon a wallet with assets? This is a classic scam in the crypto space—the so-called mnemonic collision attack.

## The Mathematics Behind the Improbability

According to the BIP39 standard, generating a 12-word mnemonic phrase requires 128 bits of entropy. This translates to roughly:
2^128 ≈ 3.4×10^38 possible combinations


Even with a high-performance GPU like the RTX4090, which operates at about 125 MH/s (or 125 million hashes per second), brute-forcing all possible mnemonic phrases would take approximately `8.62×10^22` years. This astronomical figure far exceeds the lifespan of our civilization.

Some might argue that you don’t need to iterate through all possibilities—only a small subset to hit an existing wallet. However, statistics reveal that the actual number of wallets is minuscule compared to the total possible mnemonic combinations. Data from @ycharts indicates that Ethereum currently has about 273 million unique addresses. This is merely a `1/1.24×10^30` fraction of all possible mnemonic phrases. In other words, even to randomly encounter an already used address, one would need around `3.16×10^14` years.

---

# From Random Numbers to Mnemonics ????
![From Random Number to Mnemonic.jpg](/images/blog/crypto-security/Rumor-Terminator/from-random-number-to-mnemonic-85d44ccf79.jpg)
Understanding how a 12-word mnemonic is generated is essential to appreciating its security:

1. ​**Generation of a 128-bit Random Number:** The computer generates a random 128-bit binary number (A). 
2. ​**Checksum Addition:** A hash is calculated on A, and the first 4 bits of the hash are appended to A, forming a 132-bit binary string (B). 
3. ​**Segmentation:** B is divided into 12 groups of 11 bits each. 
4. ​**Mapping to Words:** Each 11-bit segment is converted to a decimal number, which is then used as an index to pick a word from the mnemonic wordlist. 
5. ​**Final Mnemonic:** The 12 words form your mnemonic phrase. 

Clearly, the security of your mnemonic—and ultimately your assets—depends critically on the quality of the initial random number.


# The Intricacies of Random Number Generators

Random number generators (RNGs) come in two primary forms:

- ​**Pseudo-Random Number Generators (PRNGs):** These rely on deterministic algorithms. Given the same seed value, a PRNG will always produce the same sequence of numbers. While fast and widely applicable, their predictability can pose risks in security-critical applications. 
- ​**True Random Number Generators (TRNGs):** In contrast, TRNGs derive randomness from unpredictable physical phenomena such as atmospheric noise, gyroscope measurements, or even beta particle emissions from radioactive materials. TRNGs often blend multiple sources to minimize single points of failure. 
![Two random numbers generate picture results comparison.jpg](/images/blog/crypto-security/Rumor-Terminator/two-random-numbers-generate-picture-results-comparison-507128c726.jpg)
One study compared images generated from TRNGs and PRNGs by plotting random coordinates on a canvas. The TRNG-generated image appeared entirely chaotic, while the PRNG-generated one, though seemingly random, revealed subtle patterns.


# The Role of RNGs in Wallet Security

Software wallets typically use PRNGs seeded with values that have sufficient entropy to ensure a high degree of unpredictability. However, since these generators ultimately rely on a seed, there is an inherent cyclicity in their outputs—even if the cycle is astronomically long.

In contrast, Keystone hardware wallets use an onboard TRNG built into a secure chip. This TRNG leverages multiple unpredictable physical phenomena—such as circuit noise and thermal variations—to produce truly random numbers, reducing the risk of mnemonic collisions. For high-value assets, this hardware-based security is a significant advantage.

For users with extreme security concerns, Keystone offers an additional method: generating mnemonic phrases using dice. This method requires a high-quality, casino-grade dice (uniform weight distribution and transparent for observation) tossed at least 50 times—though for optimal randomness, 99 or more tosses are recommended. Detailed instructions can be found in our video tutorial.

# Conclusion

The exceedingly low probability of a mnemonic collision means that, under normal circumstances, the security of mnemonic phrases is robust. However, partial exposure of mnemonic words or vulnerabilities in the random number generation process can compromise security. Keystone’s use of a secure TRNG and the option for dice-based mnemonic generation embodies the blockchain ethos of "Do not trust, verify," ensuring that your assets remain securely under your own control.

By choosing hardware wallets like Keystone for asset management, users benefit from state-of-the-art security protocols that mitigate even the most remote risks.
If you're interested, feel free to check out our tutorial! [Link](link)https://youtube.com/watch?v=JRzxQmpbIPw
