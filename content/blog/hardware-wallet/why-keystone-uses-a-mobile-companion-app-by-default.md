---
title: "Why Keystone Uses a Mobile Companion App By Default"
slug: "why-keystoneuses-a-mobile-companion-app-by-default-db88e3a92c8a"
summary: "_By* Patrick Kim"
publishedAt: "2021-07-07T05:30:53.811Z"
updatedAt: "2024-04-24T07:07:57.729Z"
heroImage: "/images/blog/hardware-wallet/why-keystoneuses-a-mobile-companion-app-by-default-db88e3a92c8a/hero.webp"
locale: "en"
---

_By* [_Patrick Kim_](https://medium.com/@patrickkim_1991)

Every hardware wallet needs to communicate with a companion app on a device connected to the internet so it can sign transactions and send them to the blockchain. Currently, most companion apps are desktop or web-based applications, but there are a number of reasons mobile apps are safer for sending and receiving bitcoin. In traditional banking, mobile apps did not take long to overtake web apps as the secure option for online banking. Many of the same benefits for online banking carry over for hardware wallet companion apps. In this article, we will explain why Keystone only connects to the internet through a [mobile companion app](https://keyst.one/companion-app) and why mobile apps are safer in general.

> _“Your smartphone is probably the device that is the most secure device you have. Modern smartphone operating systems are extremely secure if you keep up with the updates, have set a pin and are careful about what apps you download. They are extremely secure, more secure than a laptop or desktop device.”_

> _\- Andreas Antonopoulos,_ [_Bitcoin Q/A_](https://eng.ambcrypto.com/bitcoin-wallets-and-safety-phone-wallets-are-the-second-best-says-andreas/)

#### Mobile App Stores

Before applications are released on app stores, Apple and Google vet application code principally for two things — access to the operating system and access to the data of other apps. All apps by default have no access to the OS or to other apps except for the specific permissions they applied for and were granted. If your iPhone is not jailbroken, you cannot download apps that have not been approved for release on the App Store. Android phones can still download apps not on the Google Play store even if the device is not rooted, but if you are careful only to download apps from the store, a lot of security benefits will already be enabled by default.

With app stores, you have to download apps by manually searching them. On desktop, it is possible malicious code could be downloaded without you even knowing unless you have strong antivirus software. Both Android and iOS require application signature verification, which ensures all app downloads and updates can only come from their verified publisher, who is able to produce the application’s valid signature. While even app updates have to be verified for phones, users are not required to take the extra steps to verify the hash or signature themselves for software they download on a desktop. This means that attackers could fake a desktop app to look the same as a hardware wallet companion app and insert it into a user’s computer without having to pass app publisher verification.

#### Sandbox

The mechanism that Apple and Android require mobile apps to adopt for security is called sandbox. According to the [Android Open Source Code Project](https://source.android.com/security/app-sandbox), sandbox restricts permissions so “by default, apps can’t interact with each other and have limited access to the OS.” Even if malicious code were to enter a jailbroken or rooted device, the potential of an attack is severely limited because sandbox will isolate the companion app as long as it has been downloaded from an official app store. While you wouldn’t want to expose yourself to the unnecessary risk of running a companion app on a jailbroken or rooted device, doing so might still be safer than using a desktop, which would not typically have sandbox built-in.

Full file encryption is enabled by default on Android and iOS. OSX does the same on computers, but on Windows, bitlocker is not enabled by default. Desktops are in general more flexible, allowing users to change the system settings and bypass security mechanisms, which may open the door to hackers if users are not extremely careful.

#### Hardware-Level Protections

Apple and Android both have built-in cryptographic hardware chips that function like [Secure Elements](https://blog.keyst.one/secure-elements-the-last-line-of-defense-4669012d4edc) for security verification purposes. Apple calls their proprietary chip the Secure Enclave and Android has the Trusted Execution Environment (TEE), both of which are separated from the rest of the device at the hardware level. These encryption chips generate keys or do cryptographic operations such as sign in to mobile banking apps or authorize wallet app transactions. Secure Enclave, which was originally designed for security functions like mobile banking, works well in combination with a companion app to add an extra, cryptographically secure layer of protection for your hardware wallet. Read our article on [air-gapped devices](https://blog.keyst.one/air-gapped-computers-and-phones-vs-hardware-wallets-whats-the-difference-458888cdd97) if you are wondering why you need a hardware wallet at all if mobile devices really are so secure.

Apple manufactures its chips so that when the device is booted, all the firmware is verified as having come from Apple. Android also ensures all executed code comes from a trusted source like a device OEM. An attacker can bypass computer login passwords by dismantling a desktop and attaching the hard disk to another system, but boot level verification makes it so you cannot do this with a phone by taking out its chips and attempting to connect them to another system.

Phones are designed to have one primary user and are more securely designed as a result. A mobile banking app can readily verify personal identity through fingerprint scanner or face ID biometrics, but computers are not necessarily built to do that. Human factors play a role in overall device security too, as we are much more likely to neglect the whereabouts of a computer than our mobile phone.

#### Cons for Web Apps

Web applications have an incomparably larger attack surface. Web app data may be cleaned by a trash cleaner operation, sites might not have HTTPS enabled, browsers are vulnerable to man-in-the-middle attacks or bugs that leak data, and web apps are easier targets for phishing attacks. Ledger Live [this year](https://www.cryptoglobe.com/latest/2020/03/ledger-issues-warning-over-crypto-stealing-google-chrome-extension/) and Trezor more notably [before](https://blog.trezor.io/psa-phishing-alert-fake-trezor-wallet-website-3bcfdfc3eced) have already had to warn their users to be more skeptical when using web-based companion apps after users were targeted by phishing attacks.

#### Should Companion Apps Be Mobile-Only?

Mobile-only apps are not a silver bullet but are in general more secure hardware wallet companion apps. However, there are certain trade offs such as the lack of flexibility to customize privacy settings in a more limited system. Due to the strict limitations on app access to the OS level, it’s very hard to run Tor on an iOS device. Keystone is compatible with third-party wallets like [BlueWallet](https://support.keyst.one/3rd-party-wallets/bitcoin-wallets/bluewallet), [Specter](https://support.keyst.one/3rd-party-wallets/bitcoin-wallets/specter), [Sparrow](https://support.keyst.one/3rd-party-wallets/bitcoin-wallets/sparrow), [Nunchuk](https://nunchuk.io/), [Electrum](https://support.keyst.one/3rd-party-wallets/bitcoin-wallets/electrum), [BTCPay Server](https://support.keyst.one/3rd-party-wallets/bitcoin-wallets/btcpayserver) and [Wasabi](https://support.keyst.one/3rd-party-wallets/bitcoin-wallets/wasabi) for advanced users who have need of using them as companion apps.

Moving from desktop and web apps to mobile will make it easier to perform trades on the go, and accessibility is a core function hardware wallets should have. However, it should be noted that you do not want to use public Wi-Fi when you are running your hardware wallet companion app, as it is possible your network traffic could be intercepted in a man-in-the-middle attack. Be mindful of staying on encrypted Wi-Fi or cellular networks when you trade or transact, and the security Apple and Google provide should give you more peace of mind when connecting your hardware wallet to a mobile app.
