---
title: "Why Keystone implemented Shamir Backups"
slug: "why-keystone-implemented-shamir-backups-71e319f972a6"
summary: "Keystone has proudly implemented SatoshiLabs’ SLIP39 Shamir Backups that are available on the Keystone Hardware Wallet. This article explains this feature, the pros and cons of it and also some hin..."
publishedAt: "2021-07-01T05:30:53.811Z"
updatedAt: "2024-04-24T07:09:10.664Z"
heroImage: "/images/blog/hardware-wallet/why-keystone-implemented-shamir-backups-71e319f972a6/hero.webp"
locale: "en"
---

Keystone has proudly implemented SatoshiLabs’ SLIP39 Shamir Backups that are available on the Keystone Hardware Wallet. This article explains this feature, the pros and cons of it and also some hints for those wanting to start using this feature.

### Considering the threat model of your recovery phrase

Before diving into using Shamir Backups right away, let’s take a step back and examine what kind of threat models are there and which you probably should concern you the most when deciding whether or not Shamir Secret Sharing Scheme is the way to go.

There are basically 3 threats that can threaten the safety of your recovery phrase:

1. Memory loss, if you memorize your recovery phrase in your head (brain wallet)
2. Physical copy gets stolen or robbed.
3. Physical copy gets destroyed by accidents or disasters like fire or flood. This may happen in a variety of forms like eaten by a dog, destroyed by a cup of coffee or the house collapses onto it because of an earthquake.

For #1, we strongly don’t recommend it as the only way to keep your recovery phrase as people’s brain is not as reliable as you think. Traumatic brain injury can cause memory loss, aging can cause memory loss also and alzheimers can render it impossible to remember things. Naturally occuring memory loss can also happen that distorts memories over time.

For #2, Here you should keep in mind that it may not be done by an outsider but an insider like one of your relative or the person you asked to help you keep your recovery phrase secure. You of course have to consider the trustworthiness of the people who you enroll into holding these copies.

For #3, a very common solution is simply to replicate the recovery phrase and keep it in several geographic places to avoid a single point of failure. But do keep in mind that replication increase the possibility of #2. This [article](https://blog.keyst.one/deep-cold-storage-how-beginners-can-swim-in-the-deep-end-430af49d03bd) did some simple math to calculate it from a statistical point of view.

To find a better solution than simple replication, we introduce Shamir Backup.

### What is Shamir Backup

Shamir Backups allow you to split your backup seed in such a way that it allows you to specify how many Shamir Backups you need to restore your wallet. The smallest is 2 out of 2 or a maximum 16 out of 16 Shamir Backups. This although more complex than a multisig that allows you to sign right away, because this process needs individual importing if a restoration of the wallet is required. But safety wise it is equally almost as good, or better because if you have a 3 out of 5 Shamir Backup and you lose 2 of it, you can still restore, with the remaining 3 backups, your wallet.

A Shamir Backup is similar to how a multisig wallet looks like but instead of signing transactions with it you only specify how many backups you need to be able to restore a wallet. This way it is easier to geographically distribute a wallet backup using Shamir Secret Sharing Scheme.

### Downsides of Shamir Backup

Just like there is nothing 100% secure or failsafe in the world, there is also no perfect solution for storing your recovery phrase. Shamir Backup also has its downside. Knowing the downside will help you make a better decision whether you use this implementation to protect your recovery phrase.

**Limited wallets support Shamir Backup**

Keystone’s Shamir Backup is an implementation of [SatoshiLabs’ SLIP39](https://github.com/satoshilabs/slips/blob/master/slip-0039.md). At the point of this article’s publication time, only Keystone and Trezor support this implementation.

This brings the first downside — if your Keystone or Trezor is broken, you can’t recover your recovery phrase with other wallets but you have to buy another Keystone or Trezor. This also applies to people who want to switch wallets from Keystone or Trezor to any other wallets that don’t support Shamir Backup as of yet. BIP39 recovery phrase backups are more widely accepted and implemented as of now.

**Complexity is the enemy of security**

There is an old saying that complexity is the enemy of security. Here complexity is a relative concept for everyone. As a hardware wallet developer, our job is creating a friendly user experience to lower the complexity to make it usable for everyone. But if you don’t understand how it works, it is better not to use it. Just use standard recovery phrase that you are familiar with.

### Suggestions for first time users of Shamir Backups

Here are some basic suggestions for people who want to start using Shamir Backup

**Practise makes it perfect and robust**

As mentioned above, even hardware wallets like Keystone and Trezor have created a very seamless experience of setting up and recovering your Shamir Backup. It still adds some level of complexity. It’s strongly recommended that practise before moving your big chunk of bitcoin onto it.

For Keystone bitcoin only firmware it also supports bitcoin testnet so you can test it without touching your real bitcoin.

**Do a health check for your recovery phrase on a regular basis**

As mentioned above, the basic threat models for recovery phrase are 1) destroyed by disaster 2)theft. Even a Shamir Backup finds a much better balance compared to a non-shamir backup, you still need to do a health check for it on a regular basis.

**Metal is better than paper**

When backing up your recovery phrase you’d better select THE better choice. Metal storage is always better than paper solution against all the disasters like fire and flood, or even just a humid environment.

On Keystone’s metal storage solution Keystone Tablet, you can even find a hole so that you can lock it with a padlock. It adds some extra security if you choose a good padlock. Tampering is easier to identify compared to paper solutions.

**Carefully select the people who help you keep the backups**

When you are assigning someone to keep your Shamir Backup part, you need to be careful when selecting your custodian. Usually the best choice is family members or an assigned legal representative who is bound by law to safeguard items or data to them. (This is not financial and legal advice, please consult with a legal professional before hiring a legal custodian for a Shamir Backup.)

When you share your backup with a family member, make sure to let them know that it is important to keep the backup secure similarly like how they would store their own secrets in order to prevent loss or accidental destruction of the Shamir Backup. A legal custodian will likely hold it in a safe at their office or you can also try to keep one at a bank deposit box in a vault.

You should also be aware that holders of Shamir Backups should not know about others who hold other copies, because they could collude together to steal your coins. Keep their identities secret and also keep the amount of parts consisting of a Shamir Backup secret from them.

**Think about your heirs**

When planning to use Shamir Backup it is always a good idea to think about letting your heirs know how to use them and where you placed them or who you assigned with their safekeeping. This way in case anything unexpected would happen, you can know for sure that an heir will be able to access your funds in case of an emergency.

### Final words

Here at Keystone we put your security first and continue to thrive to provide better solutions for the safekeeping of your coins. It is our mission to provide cutting edge security whenever available, to our users to help them safeguard their wealth on the internet.

We also want to thank [SatoshiLabs](https://satoshilabs.com/)’ contribution to the space and welcome their competitive mindedness towards setting common standards that others can also utilize to protect everyone’s coins.
