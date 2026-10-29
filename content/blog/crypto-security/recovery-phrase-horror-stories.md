---
title: "Recovery Phrase Horror Stories"
slug: "recovery-phrase-horror-stories-329c3896bf85"
summary: "_By* Patrick Kim"
publishedAt: "2021-07-21T05:30:53.811Z"
updatedAt: "2024-04-24T07:04:38.810Z"
heroImage: "/images/blog/crypto-security/recovery-phrase-horror-stories-329c3896bf85/hero.webp"
locale: "en"
---

_By* [_Patrick Kim_](https://medium.com/@patrickkim_1991)

![17XnKRvpYFuredvRllFf9_g.webp](/images/blog/crypto-security/recovery-phrase-horror-stories-329c3896bf85/17-xn-k-rvp-y-furedv-rll-ff9-g-b26c393b79.webp)
What do you do if your hardware wallet is destroyed in a house fire, smashed by a malicious actor, or less dramatically, ruined by a spilt cup of coffee? If anything happens to your hardware wallet, your recovery phrase is the ultimate backup for restoring everything. But should we really put **that** much faith in being able to restore everything from zero? The single most important thing to protect is your recovery phrase, so you should know about any potential pitfalls before you count on it as a failsafe Plan B. Here are five horror stories of how patiently stacked sats were lost to oblivion due to easy-to-avoid recovery phrase mistakes.

## Head in the Clouds

In the early days of bitcoin, a high-flying trader made some big gains and was so assured of his future in bitcoin he published a statement on social media about how no one would ever knock him off his perch. Unfortunately, it seems he was not able to back up his claims. While moving his BTC off an exchange to a software wallet, he took a screenshot of his recovery phrase, which his photo app automatically uploaded to a cloud service. Within an hour of withdrawing his bitcoin from an exchange, his entire amount was transferred into the hands of hackers he had so invitingly drawn the attention of.

Obviously, he made some of the most rookie kinds of mistakes you can make. **Your first defense against hackers is privacy**, so never let anyone know exactly how much you hodl, even your friends. We’re all for promoting the spread of bitcoin, but don’t let yourself get carried away by bragging about how much you are hodling. Even the most casual mention can draw the attention of hackers if you let it slip.

You can’t trust the devices you use for day to day digital life to keep you safe in bitcoin. The data stored in note taking or photo apps is often entirely controlled by cloud services and you have no way of knowing whether it could somehow be leaked or whether apps on other network-connected devices might also have the permissions to screenshot your information. Copying and pasting recovery phrase words can also lead to them being automatically saved by other third-party apps that have access to your clipboard, after which they may be uploaded to a cloud service.

The only way to record your recovery phrase securely is the old fashioned way — manually and without the help of electronic devices. Never use a device that ever will connect to the internet to store, or even help you record your recovery phrase.

## Joint Stock Bros

![1R7GPml-u8aPjxYZk92sqZQ.webp](/images/blog/crypto-security/recovery-phrase-horror-stories-329c3896bf85/1-r7-g-pml-u8a-pjx-y-zk92sq-zq-689b15da5f.webp)
A pair of finance bros decided to quit their jobs to start a Bitcoin investment fund. Taking inspiration from early joint stock companies where merchants pooled their fortunes to reduce the risk of catastrophic loss due to one of their voyages being shipwrecked, they decided to split up the recovery phrase between them. As it turns out, this isn’t how recovery phrases work.

In order to prevent a “take the money and run” scenario, the two buddies divided a 12-word recovery phrase into two parts. Confident in what they believed to be a solid foundation, they looked forward to coasting to an early middle age retirement. Unfortunately, their plans were cut short when one of them was tragically hit by a car, dying on the same day. The other friend, not having enough time to respond to the tragedy, never found the second half of the recovery phrase and was never able to reconstitute the phrase.

Separating a recovery phrase into parts offers no guarantees of security, and can instead introduce a lot of risk to your storage scheme. The major vulnerability in recovery phrase storage is that if you only have one copy, it is **a single point of failure**. In the case of the two friends, they multiplied the risk by creating two points of failure. If you are interested in secret sharing techniques to avoid having a single point of failure, but do not wish to add further complication to your recovery phrase, we recommend checking out the simplified Shamir’s Secret Sharing Scheme (SSSS) we put forth in this [article](/deep-cold-storage-how-beginners-can-swim-in-the-deep-end-430af49d03bd).

## Don’t Kid Around with Apps

Our third story is of a Dad who used a smartphone app for his wallet. While getting set up, he used a tool the app called “Safe” to store his private key and keystore file. One day it occurred to him to check and make sure everything was still there. Discovering that the app had entirely disappeared from his smartphone, he reinstalled it and looked for his private key, but the files were gone.

Software wallets specifically do not manage your private keys or store them remotely for you. Instead, they are stored locally, which can lead to a high incidence of human error because these apps cannot ever retrieve your private keys for you if you lose them. The unlucky father had underestimated his child’s ability to find ways of freeing up space on his phone to play a new game, which led to his loss. Version compatibility issues are also a problem with some apps that might someday require you to uninstall, then reinstall your wallet app.

## Access Denied

In another instance of someone losing everything to a software wallet issue, one man who was receiving bitcoin through a wallet plugin had failed to write down his recovery phrase before the plugin starting giving him issues. This poor individual had not taken time to back up the funds he had been receiving for services he was providing online, and his wallet application suddenly informed him that it could no longer be used. He tried reinstalling the plugin, but again the recovery phrase could not be retrieved once the application had been uninstalled.

There are many reasons why a plugin could fail. A trojan virus or malware might modify it, physical damage to the hard drive can destroy the file memory, or an out of date plugin may require a forced reinstallation. When you set up any kind of wallet, the very first thing you should do is back up the recovery phrase.

## Party Foul

The last one really makes us cringe because this type of situation is so easily preventable. Someone left their recovery phrase words on pieces of paper distributed throughout their house. After hosting a rowdy New Year’s Eve party, they had everyone pitch in to clean up. It goes without saying what happened to some of those phrase words when their hungover guests came across them.

Paper is not an adequate way to store something as important as a recovery phrase. In addition to accidental loss, paper degrades over time with exposure to sunlight and humidity. Think of whoever would inherit your bitcoin someday, and back your phrase up with metal storage designed to withstand the test of time.

## Recovery Phrase Best Practices
![0gcxxUSNti1n9vJa9.webp](/images/blog/crypto-security/recovery-phrase-horror-stories-329c3896bf85/0gcxx-us-nti1n9v-ja9-3b74d16554.webp)
What’s the best way to record your recovery phrase? Depending on your attack model, you should be aware that computers and phones have microphones and cameras that could be remotely hijacked. When you create a backup for your recovery phrase, stay out of the line of sight of device cameras and don’t read your words out loud. Make sure there are no other people or security cameras nearby before you get started.

The best way to avoid human error is to check to make sure your recovery phrase works before you start moving funds to it:

1. Use an air-gapped device to generate the recovery phrase, preferably one with a Secure Element that uses physical entropy (TRNG) rather than pseudo-random computer-generated entropy. Keystone’s [Secure Element](/secure-elements-harnessing-a-force-of-nature-14a959da7b54) generates a 24-word recovery phrase from four sources of physical entropy.
2. Record the recovery phrase and triple check that you have written it down correctly. It’s okay to use paper for this step but make sure to burn it later if you don’t plan on storing it securely.
3. Write down the first address generated from the recovery phrase (optional, but recommended that you write it down in full).
4. Wipe the device.
5. Initiate the device again and import the recovery phrase.
6. Check to see if the first address generated matches the address you wrote down.
7. If it matches, you’re good to go! Record your recovery phrase in metal storage to give it a higher degree of permanence. Most metal storage products have a hole that can be used to secure their contents with a padlock.

You can also use dice for Step 1. Keystone supports [inputing the results of dice rolls](https://support.keyst.one/advanced-features/recovery-phrase/use-dice-to-generate-recovery-phrase)(1,2,3,4,5,6) directly into Keystone to generate a recovery phrase. We also have DIY instructions for an even more trustless way to use dice in this [article](/the-glacier-protocol-and-using-dice-to-generate-keys-6677550c2b86). Whichever method you choose, casino-grade dice will give you the highest degree of entropy.
![0Q7XIEQDGKtuuqNOL.webp](/images/blog/crypto-security/recovery-phrase-horror-stories-329c3896bf85/0-q7-xieqdg-ktuuq-nol-9ddcbbc327.webp)
We have released two new metal storage tablets inspired by Jameson Lopp’s [metal storage test](https://blog.lopp.net/metal-bitcoin-seed-storage-stress-test-round-iii/). Our new 304-grade steel tablets survive sustained heating at extreme temperatures (fireproof threshold 2550° to 2650° Fahrenheit), a quick temperature change of being submerged in cold water right after being heated, and being crushed by a 20-ton hydraulic press. Keystone Tablet Plus has been upgraded with slots for each letter as opposed to each four letters, so the sequence of your recovery phrase letters won’t budge even if the tablet gets warped. It’s now [available on Amazon](https://www.amazon.com/dp/B08DR5KZ69).

*An extra precaution when using Keystone Tablet Plus— either keep the leftover tiles you did not use securely, or dispose of them in a way that disguises which letters you used. This is because if an attacker comes across the metal sheets with some of the letters taken out, it is much easier for them to brute force your recovery phrase.*

For a more straightforward approach, we designed Keystone Tablet Punch. The automatic center punch it comes with marks the squares that correspond to the letters of your phrase like a knife slicing through butter. There’s no excuse not to backup your recovery phrase the right way with Keystone Tablet Punch available for $29 on Amazon.
![1PQ1FomP6CFKEs_Z7VX0tkg.webp](/images/blog/crypto-security/recovery-phrase-horror-stories-329c3896bf85/1-pq-1-fom-p6-cfk-es-z7-vx-0tkg-8b394a0f6a.webp)
