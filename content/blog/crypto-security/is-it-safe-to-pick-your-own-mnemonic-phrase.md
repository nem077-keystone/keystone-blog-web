---
title: "Is it Safe to Pick Your Own Mnemonic Phrase?"
slug: "is-it-safe-to-pick-your-own-mnemonic-phrase"
summary: "This guide explores the mathematical necessity of high-entropy mnemonic phrases and explains how the Keystone 3 Pro solves the human predictability problem. \nBy utilizing dice-generated seeds, Keystone allows you to create a high-entropy recovery phrase that is physically verifiable and immune to the brute-force attacks that plague self-chosen word lists."
publishedAt: "2025-09-16T02:56:02.743Z"
updatedAt: "2026-03-04T08:17:05.504Z"
heroImage: "/images/blog/crypto-security/is-it-safe-to-pick-your-own-mnemonic-phrase/hero.jpg"
locale: "en"
seo:
  title: "Why You Shouldn’t Create Your Own 12-Word Seed Phrase"
  description: "Thinking of making your own 12-word recovery phrase? Discover why human-chosen mnemonics are insecure, how hardware wallets generate true randomness"
---

## Random Isn’t Always Truly Random

When you generate a wallet using a hardware wallet, it doesn’t just "pick 12 words." 
Behind the scenes, something much more sophisticated is happening.

Modern hardware wallets come with a **TRNG (True Random Number Generator)** inside a secure chip. It uses unpredictable physical noise like voltage changes, temperature fluctuations, and environmental interference to create truly random numbers.

Those numbers are then processed through cryptographic algorithms to produce your 12- or 24-word mnemonic phrase.

**Importantly:**
- You can’t just choose any 12 words from the BIP39 list. 
- The last word isn’t even optional. It’s a checksum word, mathematically derived to help detect errors. 

So if you handpick 11 words, the 12th must still be calculated. And if it’s not done properly, your wallet may not work, or worse, it may seem to work while being fatally insecure.



## Why Human-Selected Mnemonics Are Risky

Okay, but can’t you still handpick the first 11 words, as long as the last one is valid? 
Technically yes. Practically it’s a dangerous idea.

### Human Bias Isn’t Random

Let’s try something. 
Pick a random number between 1 and 100.

Done? If you said **17, 37, or 73**, you’re not alone. Those are some of the most commonly chosen “random” numbers in studies.
![Why Human-Selected Mnemonics Are Risky.jpeg](/images/blog/crypto-security/is-it-safe-to-pick-your-own-mnemonic-phrase/why-human-selected-mnemonics-are-risky-c257bea352.jpg)
The truth is, **humans are terrible at being random**. We lean toward patterns, preferences, and comfort zones.

When choosing words, we tend to:
- Pick words we recognize: “apple,” “home,” “river” 
- Avoid repetition: even though “word1 word1 word2” is valid, we shy away from duplicates 
- Create patterns: avoiding weird combinations that feel “too random” 

These choices feel safe, but they create predictability. And that’s something attackers love.



## A Numbers Game You Don’t Want to Lose

Let’s talk about probability.

**Hardware Wallet Mnemonics** 
A 12-word phrase randomly generated has **2048^12 combinations**. That’s **2^132**. Even the world’s fastest computers would take billions of years to guess it.

**Human-Crafted Mnemonics** 
Human-chosen phrases drastically shrink that number. Instead of a planet-sized haystack, you’ve left your key under the doormat. Hackers don’t need a miracle. They just need a few educated guesses.

**The difference?**
- Hardware-generated phrase: may take **10,000 years** to brute-force. 
- Human-chosen phrase: could take **days or weeks**. 

That’s not a gamble worth taking.



## So How Should You Create Mnemonic Phrases?

### Use Hardware Wallets
If your device is audited, battle-tested, and built by a reputable team, let it do its job. 
It’s like using a bank vault instead of hiding cash under your mattress. Designed for security. Built for unpredictability.

### For Advanced Users: DIY Entropy
Still skeptical? You can introduce your own randomness. 
Roll dice. Flip coins. Use radioactive decay. Then convert those results into a mnemonic phrase using trusted tools.

Cloudflare famously uses **100 lava lamps** to generate randomness. But unless you know exactly what you're doing, this route is not recommended for casual users. One mistake could lock you out forever.



## The Core Principle: Trust the Math, Not the Mind

We get it. Choosing your own mnemonic phrase feels empowering. 
But crypto doesn’t reward feelings. It rewards precision, entropy, and proven randomness.

Like parents who believe cradling a child is safer than a car seat, **human instinct can mislead**. When it comes to safeguarding assets, lean on **cryptography, not comfort**.
