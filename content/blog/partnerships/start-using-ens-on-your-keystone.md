---
title: "Start Using ENS on your Keystone"
slug: "start-using-ens-on-your-keystone-dd25f3bf6581"
summary: "Today, we are proud to announce that Keystone has integrated with _Ethereum Name Service* (ENS). Names created by ENS can now be securely displayed on the Keystone hardware wallet."
publishedAt: "2021-08-23T05:30:53.811Z"
updatedAt: "2024-04-24T07:03:29.386Z"
heroImage: "/images/blog/partnerships/start-using-ens-on-your-keystone-dd25f3bf6581/hero.webp"
locale: "en"
---

Today, we are proud to announce that Keystone has integrated with [_Ethereum Name Service* (ENS)](https://ens.domains/). Names created by ENS can now be securely displayed on the Keystone hardware wallet.

### What is ENS and why does it have value

The ENS (Ethereum Name Service) is a naming system built on the Ethereum blockchain. You can use your ENS name as your portable web3 username and profile, to simplify cryptocurrency payments (ENS supports all cryptocurrencies, not just ETH), and to point at a decentralized website.

### The “broken” state of ENS on Hardware Wallets

ENS is a very powerful invention and has already been integrated into over 260 services.

Unfortunately, the user experience on hardware wallets has been broken since ENS was launched back in 2017.

Let’s look at a few examples with some screenshots.

On mycrypto.com, if a user puts vitalik.eth in the Recipient area, it would help map this address (vitalik.eth) with Vitalik’s on-chain address which is 0xd8dA…6045.

![0__uEOSoI__Pz3xzlWWO.webp](/images/blog/partnerships/start-using-ens-on-your-keystone-dd25f3bf6581/0-u-eo-so-i-pz3xzl-wwo-081cb01224.webp)

When this transaction is sent to a Ledger for signing, the address confirmation screen is showing the on-chain address of Vitalik but it doesn’t show the ENS address.

![0__2NfR1Gzqc__E__sERp.webp](/images/blog/partnerships/start-using-ens-on-your-keystone-dd25f3bf6581/0-2-nf-r1-gzqc-e-s-e-rp-cdfd49a005.webp)

This makes the UX of ENS totally broken on hardware wallets. The ideal scenario would have your hardware wallet showing both the ENS and the full on-chain address on the hardware wallet for confirmation purposes.

### The Solution by Keystone

If the transaction mentioned above is sent to a Keystone for signing, it will clearly show both the ENS address (vitalik.eth) as well as the full on-chain address of Vitalik (0xd8da6bf26964af9d7eed9e03e53415d37aa96045) like how it would in the screenshot below.

![0__DDPvcXUQeev8Y6JF.webp](/images/blog/partnerships/start-using-ens-on-your-keystone-dd25f3bf6581/0-dd-pvc-xu-qeev8-y6-jf-f958ac1503.webp)

Since Keystone is a completely offline device, it can’t do ENS resolutions with any kind of backend service. The solution we’ve chosen for this is to simply download a package with the most recent ENS records onto a microSD card and your Keystone will be able to read the information on the microSD card to map the ENS with on-chain addresses.

We thank the official ENS team for offering the Keystone team a data source with all the recorded ENS addresses (This database is automatically updated on a weekly basis).

Please check out this [tutorial](https://support.keyst.one/advanced-features/displaying-ens-names) on how to use your Keystone for ENS and download the latest ENS records.

### Final Words

The Keystone team is honored to implement widely-adopted standards like ENS to enhance the user experience for the Ethereum community. Blockchain technology is evolving so fast and not all hardware wallets are closely following the important trends. We are more than happy to fill this gap and make Keystone the most user-friendly and secure hardware wallet possible.
