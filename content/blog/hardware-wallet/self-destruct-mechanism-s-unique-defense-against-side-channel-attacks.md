---
title: "Self-Destruct Mechanism’s Unique Defense Against Side-Channel Attacks"
slug: "self-destruct-mechanisms-unique-defense-against-side-channel-attacks-4cfea3d4eff1"
summary: "_By* Patrick Kim"
publishedAt: "2021-06-23T05:30:53.811Z"
updatedAt: "2024-04-24T06:50:42.154Z"
heroImage: "/images/blog/hardware-wallet/self-destruct-mechanisms-unique-defense-against-side-channel-attacks-4cfea3d4eff1/hero.webp"
locale: "en"
---

_By* [_Patrick Kim_](https://medium.com/@patrickkim_1991)
![defense-against.webp](/images/blog/hardware-wallet/self-destruct-mechanisms-unique-defense-against-side-channel-attacks-4cfea3d4eff1/defense-against-8bd0321701.webp)

Side-channel attacks are how most hardware wallets get hacked. Someone with enough time, resources and skill to scrutinize the device’s circuit board is able to steal the private keys. Currently, Secure Elements and Passphrase features are the most talked about as effective defenses against side-channel attacks. However, because physical attacks are dependent on physical access to the device, the most straightforward way to deal with side-channel attacks may be a self-destruct mechanism. In this article we will introduce the self-destruct mechanism that is built into the Keystone’s screen, but there is another layer of the self-destruct mechanism which will we not disclose the details of.

## What is a Side-Channel Attack?

If you have read our article explaining how the [Secure Element](/secure-elements-the-last-line-of-defense-4669012d4edc) keeps sensitive information from being exploited by side-channel attacks, feel free to skip on to the next section. For those who don’t know, side-channel attacks use access to the device’s circuit board to analyze device behaviors such as power consumption, timing of operations, and electromagnetic radiation. Whenever a device processes sensitive information, traces of the sensitive information are left in these physical activities, which can be used to piece together private keys. Kraken Security Labs [demonstrated](https://blog.kraken.com/post/3662/kraken-identifies-critical-flaw-in-trezor-hardware-wallets/) that a Trezor can be hacked with just 15 minutes of physical access, although their attack model does not account for [Passphrase](/should-you-enable-passphrase-protection-5aba38b92613), and Trezor does not have a Secure Element.

## Self-Destruct Mechanisms in Traditional Banking

Around the world today, newly upgraded ATM machines are becoming resistant to physical attacks by incorporating a mechanism to destroy the cash they store the moment they detect an attempt to dismantle it. This defense sometimes triggers an ink capsule to explode and taint the cash or a shredding component to just rip the fiat up. This is because if thieves are able to make away with an ATM machine, they can open it with the right tools. Many POS machines used to swipe credit cards are also incorporating a self-destruct mechanism.

Like these machines, a hardware wallet is significantly more vulnerable when it’s in the attacker’s hands. A self-destruct mechanism is the most straightforward way to prevent theft in both cases because governments can just reprint their money, while you can just start over from zero with your recovery phrase if you have stored it in a [secure location](/deep-cold-storage-how-beginners-can-swim-in-the-deep-end-430af49d03bd). Sort of like how the doomsday machine in **Dr. Strangelove** is the ultimate deterrent, only that your recovery seeds are your fallout shelters.

## How it Works

The Keystone’s lack of Bluetooth, WiFi, USB, and NFC communication capabilities means that the only way information can get in and out is through QR codes, which are [auditable](/ever-wondered-what-your-hardware-wallet-inputs-and-outputs-9b33b4cedafd), or by accessing the circuit board inside. Because going through the device body would require cutting tools that are likely to damage the circuit board in the process as well as visibly deface the product, a physical attack is most likely to proceed with a removal of the screen. This is also the case because there are no ports on the device aside from the microSD card slot. Consequently, access to the circuit board would likely be accomplished by using a heat gun to melt the glue that holds the screen in place.

The Keystone’s self-destruct mechanism has two components that touch each other. One is attached to the screen and conducts electricity to the other, which is on the circuit board. If the two come out of contact, the component on the circuit board will detect that the screen has been removed and immediately erase all sensitive information. The device will be bricked after self-destruct is activated, so be aware of that if you’re someone who likes taking apart and toying around with devices.
![anti-tamper.webp](/images/blog/hardware-wallet/self-destruct-mechanisms-unique-defense-against-side-channel-attacks-4cfea3d4eff1/anti-tamper-559748ac62.webp)
There is a button battery to trigger the self-destruct mechanism. The battery lasts for about 2 years. So, it is recommended to replace your Keystone Pro after that time period if you require self-destruct mechanism for extra protection.

Anti-tamper components on the screen (left) and circuit board (right).

## Importance for Side-Channel and Supply Chain Attacks

While no security mechanism guarantees complete security, the multiple layers of the self-destruct mechanism on [Keystone Pro](https://shop.keyst.one/products/keystone-pro) significantly raise the cost of any potential physical attack. Traditionally, counter measures for side-channel attacks have focused on how to reduce the leakage of information or obscure its relationship to sensitive information, which is how a Secure Element makes sure your private keys never leave it. By making it a challenge to even try to start probing the Secure Element, the self-destruct mechanism drives up the cost of side-channel attacks to the point of being a potent deterrent to even the most well-funded hackers.

The self-destruct mechanism also makes it harder for supply chain attacks to succeed given that they would have to figure out how to open the device without visibly defacing the product on top of figuring out how to defeat Web Authentication. Read our [Web Authentication](/web-authentication-a-counter-to-supply-chain-attacks-62d0272f656b) article to learn about how it counters side-channel attacks using the same algorithms that power verifiability to Bitcoin.
