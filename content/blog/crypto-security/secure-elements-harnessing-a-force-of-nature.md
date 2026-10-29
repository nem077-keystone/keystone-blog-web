---
title: "Secure Elements: Harnessing A Force of Nature"
slug: "secure-elements-harnessing-a-force-of-nature-14a959da7b54"
summary: "Part of the brilliance of Bitcoin is its ability to harness the infinite power of randomness to disguise information for security purposes. Think about that for a second — Bitcoin leverages nothing..."
publishedAt: "2021-07-12T05:30:53.811Z"
updatedAt: "2024-04-24T07:03:09.482Z"
heroImage: "/images/blog/crypto-security/secure-elements-harnessing-a-force-of-nature-14a959da7b54/hero.webp"
locale: "en"
---

![blackhole.webp](/images/blog/crypto-security/secure-elements-harnessing-a-force-of-nature-14a959da7b54/blackhole-cdc575e4d9.webp)
Part of the brilliance of Bitcoin is its ability to harness the infinite power of randomness to disguise information for security purposes. Think about that for a second — Bitcoin leverages nothing less than entropy, a force of nature, to make your private keys almost impossible to guess, and thus cryptographically secure. Bitcoin has the potential to be the ultimate safe asset, but to put Bitcoin’s security to work for you, you need to tap into a naturally occurring source of randomness to prevent anyone from guessing or cracking your private keys. This fundamental step towards true ownership of keys is exactly what a Secure Element allows you to do, as the technology that most closely approximates the natural phenomenon of randomness.

## The Root of All Encryption

So how does Bitcoin take advantage of a boundless and chaotic force of nature to protect your information in an ordered fashion and prevent it from spilling out? The answer is in asymmetric cryptography, a process through which public keys are derived from private keys. Without getting into the mathematics of the function Bitcoin uses, the keyword here is **asymmetric** because everyone can see the public keys used to verify transactions, but only you can see your private keys. The one-way nature of public key generation channels the power of randomness into concealing private keys, while the rest of the blockchain remains transparent. However solid this security model is, it is entirely dependent on the private keys remaining almost unguessable by virtue of their randomness.

## Universe-Sized Randomness

Bitcoin uses 256-bit numbers as private keys, which is equivalent to using a space of randomness that is about 10⁷⁷ possible digits large. To put that number in context, scientists estimate that the visible universe contains about 10⁸⁰ atoms. Essentially what this means is that it is highly, highly improbable that anyone could guess or accidentally choose the same digits used by your private keys. An attack that attempts to guess the secret information by trying different combinations is called a brute force attack. The cost of such attacks raises exponentially with each additional number that must be guessed, and is also determined by the quality of the randomness from which the digits were derived. In using entropy, Bitcoin private keys tap into an almost infinite source of power to make these attacks highly unfeasible.

But with great power comes great responsibility — in order to really take advantage of the powerful world of randomness, you cannot get the source of randomness wrong. This is where the difference between a true random number generator (TRNG) and a pseudo-random number generator (PRNG) becomes important.

## TRNG vs PRNG

Being able to mimic one of nature’s most powerful forces is no easy task; there is no hardware device that generates a completely pure source of entropy. However, different kinds of approximations of randomness make a world of difference in terms of security.

At the moment, it has yet to be proven that computers are getting anywhere close enough to securely generating randomness. PRNGs, less commonly known as deterministic-random bit generators, are fundamentally all based on algorithms. Because these systems rely on formulas, their simulation of real life random events always results in the same calculation and they cannot even replicate the randomness of a fair dice throw! Flaws with these software programs frequently surface, and there is an on-going debate in mathematics about whether cryptographically secure PRNGs can [exist at all](https://en.wikipedia.org/wiki/Pseudorandom_generator).

The modern payment systems of the world — banks, credit card companies, and point of sale (POS) machines — all use TRNGs contained within a [Secure Element](/secure-elements-the-last-line-of-defense-4669012d4edc). By definition, a TRNG is a device that uses physical processes rather than computer algorithms to generate random numbers. These processes involve microscopic-scale phenomena that generate low-level, statistically random “noise” signals, such as with thermodynamics, photoelectric effects, or other quantum phenomena. Keystone’s Secure Element multiplies the effects of 4 different microscopic physical sources of entropy to achieve its approximation of true randomness.

Physical phenomena are the only source of true randomness.
![random.webp](/images/blog/crypto-security/secure-elements-harnessing-a-force-of-nature-14a959da7b54/random-aebd3a9bf2.webp)
## Don’t Gamble with Randomness

When you’re selecting a method of cold storage, you want to make sure you get its most important function right: giving you absolute ownership of your keys. By literally harnessing a force of nature, a Secure Element makes it all but theoretically impossible for anyone but yourself to command ownership of the private keys. We advise choosing a hardware wallet with a Secure Element, and have made this another technologies we believe every hodler should have [available at 119 USD](https://shop.keyst.one/products/keystone-essential).

At the time of writing, Keystone is to our knowledge the only hardware wallet with open source Secure Element firmware (let us know if someone else has flown under our radar). Our [open source firmware code](https://github.com/KeystoneHQ/keystone-se-firmware) allows you to see how the function that triggers TRNG is called when your private keys are generated, and that the private keys never leave the Secure Element. At the same time, you can see how we use the Secure Element to store your private keys and how transactions are signed entirely within it. Other hardware wallets that have a Secure Element like ColdCard and Ledger don’t disclose their firmware. Read on in the [second installment](/secure-elements-the-last-line-of-defense-4669012d4edc) of our series on the Secure Element for details on how it protects you from side-channel attacks.
