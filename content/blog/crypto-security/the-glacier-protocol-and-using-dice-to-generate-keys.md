---
title: "The Glacier Protocol and Using Dice To Generate Keys"
slug: "the-glacier-protocol-and-using-dice-to-generate-keys-6677550c2b86"
summary: "By Patrick Kim"
publishedAt: "2021-09-10T05:30:53.811Z"
updatedAt: "2024-04-30T06:55:35.198Z"
heroImage: "/images/blog/crypto-security/the-glacier-protocol-and-using-dice-to-generate-keys-6677550c2b86/hero.jpg"
locale: "en"
---

*By [Patrick Kim](https://medium.com/@patrickkim_1991)*

The Glacier Protocol is a storage scheme that takes the “not your keys, not your bitcoin” ethos to its literal extreme. While it’s a great reference for a completely trustless model of security, the majority of users don’t have the technical expertise or time to execute every step of Glacier Protocol’s 93-page manual, and are actually much more likely to risk losing everything by attempting to. However, average users can gain from learning about the Glacier Protocol’s more rudimentary tools, such as using casino-grade dice as a physical source of entropy.

### Glacier Protocol in a Nutshell

Glacier Protocol was designed to be the gold standard of how to make every single storage and transaction decision from the perspective of security alone. To accomplish this, it completely eliminates reliance on third parties for things like private key generation and connecting to the blockchain. It requires the user to purchase their own laptops, USB keys, and casino-grade dice, and practically build the majority of their storage and transaction mechanisms from scratch. As you might imagine, you really have to know what you’re doing to get through the entire 93-page manual without risking something going wrong through human error. Just to begin with, one of the first steps requires you to know how to quarantine a laptop by manually removing its wi-fi communication card.

In addition to being a strength, Glacier Protocol’s completely trustless model of avoiding printers, network connections, and hardware wallets is its greatest weakness. The biggest downside for having to operate so many of the mechanisms manually is that you could easily fall victim to human error. The feeling of dread when transferring assets from a known wallet environment into unknown in inaccessible [deep cold storage](https://blog.keyst.one/deep-cold-storage-how-beginners-can-swim-in-the-deep-end-430af49d03bd) is familiar to many experienced bitcoiners, especially those who are aware of just how many things could go wrong and cause a total loss of assets. Apply the emotions of that moment to large parts of the Glacier Protocol process, and you have some idea of the stresses of the undertaking.

Glacier Protocol calls for a Faraday bag to sheath laptops in while they are running sensitive operations, but electromagnetic waves are just one of the many types of emissions leaked by the large attack surfaces of generic consumer electronic devices like [air-gapped computers](https://blog.keyst.one/air-gapped-computers-and-phones-vs-hardware-wallets-whats-the-difference-458888cdd97). While neither will a windowless room and white noise fan cover all the ways private keys can be exfiltrated, these measures are relatively easy to implement and can’t hurt, so they can be beneficial depending on your level of paranoia. Close the curtains and download a white noise mp3 file to give yourself some peace of mind while you are running sensitive operations. You never know, drones could be spying on you through your windows.

### How to Use Dice to Generate Private Keys

Ownership of private keys is everything in Bitcoin, which is why random number generation is the single most important step in any storage scheme. If you get [true random number generation (TRNG)](https://blog.keyst.one/secure-elements-harnessing-a-force-of-nature-14a959da7b54) wrong, your keys might someday not be your keys. Pseudo random number generation (PRNG) software, while statistically random, is still predictable to an advanced hacker and could even contain backdoors. Glacier Protocol’s example of using casino-grade dice as a physical source of randomness can be used by anyone who doesn’t have a hardware wallet with a Secure Element to generate private keys. Alternatively for those who want to make their use of a hardware wallet more trustless, it can also be used to generate a backup that can be imported into a hardware wallet.

Here’s how to do it:

 1. Roll a dice 256 times, recording rolls of 1 through 3 as 0’s, and rolls of 4 through 6 as 1’s so that you end up with a 256-bit binary. Make sure that when you are rolling, you get enough bounces and that you are not always starting with a particular side of the die facing up.

 2. Use a sha256 tool to get its hexadecimal checksum result of the 256-bit binary, then convert it to binary. The tools for calculating the checksum and converting it into binary can be found easily online, but you will want to download them and use them offline.

 3. Take the first 8 digits of the binary checksum and add them to the end of the 256-bit binary so that you have a 264-bit binary.

 4. Divide the 264-bit binary into 24 sets of 11-bit binaries.

 5. Convert each 11-bit set into a decimal number. This can also be done with tools found online, which should be downloaded and operated offline.

 6. Use the BIP 39 list of mnemonic phrase words to find the mnemonics that correspond to each of the 24 sets of decimal numbers.

 7. Record the mnemonic phrase and store it so that it will not be lost. (Visit our article on [deep cold storage](https://blog.keyst.one/deep-cold-storage-how-beginners-can-swim-in-the-deep-end-430af49d03bd) for more information on protecting your recovery phrase.).

![Casino dice — all you need to generate your own private keys.](/images/blog/crypto-security/the-glacier-protocol-and-using-dice-to-generate-keys-6677550c2b86/casino-dice-89f0d7dfce.webp)

Glacier Protocol uses 62 dice rolls and manipulates these results to get a 256-bit entropy, but we suggest the following method to reduce complication. Keystone supports for automatically converting [101 dice rolls into a 256-bit private key](https://support.keyst.one/advanced-features/recovery-phrase/use-dice-to-generate-recovery-phrase). And the result aligns with Ian Coleman’s tool for [easy verification](https://blog.keyst.one/how-to-verify-the-recovery-phrase-created-by-dice-rolling-af01c16b765e). With 101 dice rolls, you get a quantity of entropy as big as that of the 256-bit binary (there are 6 possible outcomes of a dice roll, and 6¹⁰¹ >2²⁵⁶). Note that you do not need to worry about the possibility of human error while you are recording dice rolls by hand or following the other steps without the help of automation. As long as you make sure your recovery phrase is stored properly, other errors are inconsequential to the randomness and security of your private keys.

Check out Keystone’s other features.
