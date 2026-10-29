---
title: "Blind Signing — A Security Black Hole for the Ethereum Community"
slug: "blind-signing-a-security-black-hole-for-the-ethereum-community-13f909b848b6"
summary: "Photo by Ryoji Iwata on Unsplash"
publishedAt: "2021-06-28T05:30:53.811Z"
updatedAt: "2024-04-24T07:12:43.241Z"
heroImage: "/images/blog/crypto-security/blind-signing-a-security-black-hole-for-the-ethereum-community-13f909b848b6/hero.webp"
locale: "en"
---

![0ZYUv9iy-WiJQSBMU.webp](/images/blog/crypto-security/blind-signing-a-security-black-hole-for-the-ethereum-community-13f909b848b6/0-zy-uv9iy-wi-jqsbmu-8f560f4fbb.webp)
Photo by [Ryoji Iwata](https://unsplash.com/@ryoji__iwata?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com/?utm_source=medium&utm_medium=referral)

**Coauthored by** [**Aaron Chen**](https://twitter.com/aaron1sme) **and** [**Lixin Liu**](https://twitter.com/BitcoinLixin)

Ethereum is one of the most active blockchains in the world now, especially with the recent booming of DeFi projects in 2020. When mentioning DeFi security, it is mostly discussed from the angle of smart contract security, but it barely dives into DeFi security from another potential angle -

Are we securely signing the transaction?

Back in December 2020, a targeted remote attack was performed on [Nexus Mutual’s founder Hugh Karp](https://twitter.com/NexusMutual/status/1338441873560571906). It is reported that the attacker gained remote access to Hugh’s computer and modified the MetaMask extension, tricking him into signing a different transaction which transferred funds to the attacker’s own address. This led to 8 million worth of crypto getting stolen.

From [Hugh’s blog](https://medium.com/@hugh_karp/nxm-hack-update-72c5c017b48) we can also deduct that there is proven evidence showing that the attacker has successfully attacked not only Hugh but also some other DeFi power users in the Ethereum community.

# Hardware Wallet is not the Silver Bullet

Hugh was using a hardware wallet but obviously by just simply using a hardware wallet is not the silver bullet here to prevent issues.

One of the most fundamental security assumptions for a hardware wallet is that it should not trust the companion software wallet and the user should be able to manually check the transaction on the hardware wallet to make sure nothing is swapped by the potentially malicious software wallet.

Otherwise we call this — blind signing.

If we look at it more closely, blind signing means that you are trusting the software wallet to be genuine to feed non-malicious commands and messages for the hardware wallet to sign. If you fully trust the software wallet without assuming it is compromised, using a hardware wallet as a dedicated signing device makes ZERO sense.

But when it comes to reality, Hugh also admitted that checking a smart contract interaction on hardware wallet is [**easier said than done**](https://medium.com/@hugh_karp/nxm-hack-update-72c5c017b48).

Here at Keystone, we believe that we have come up with a solution, which may not 100% solve the problem but it is definitely the best solution currently available on the market.

We must again emphasize that, there is no 100% security, all we can do is try to minimize the available attack surfaces.

# Keystone’s Solution

**4 Inch Big Screen**

Here is the screenshot of the Keystone showing the transaction details of a Uniswap’s swap transaction. You can clearly tell that a bigger screen makes a huge difference here. It makes all the information much more readable so that it’s much easier for users to manually check the unsigned data.
![1397oG8lgDSvJtDfAIEfsQA.webp](/images/blog/crypto-security/blind-signing-a-security-black-hole-for-the-ethereum-community-13f909b848b6/1397o-g8lg-d-sv-jt-df-ai-efs-qa-4ae4294abf.webp)

**Smart Contract Address Verification**

The first thing to verify is that you are actually calling the right Smart Contract.

If an attacker creates a [phishing website of Uniswap,](https://app.uniswap.abc) then he can copy Uniswap’s current UI and call his malicious Smart Contract which will transfer the user’s fund to the hacker’s address.

So we preloaded the most famous Smart Contract’s address like Uniswap and labeled it so it is now much easier for the user to confirm it. If the address is not pre-loaded (maybe a new contract or a malicious contract), we will highlight it as an unknown address with red to alert the user.
![1x6xgq7ygcuXfBQtEGIGSig.webp](/images/blog/crypto-security/blind-signing-a-security-black-hole-for-the-ethereum-community-13f909b848b6/1x6xgq7ygcu-xf-b-qt-egig-sig-a4a8dd983f.webp)
**Smart Contract Function Verification**

Even though the user is interacting with the original Dapp, it still can be hacked if their software wallet (like MetaMask) is compromised.

If the software wallet is compromised, there are several ways to steal user’s funds (Using Uniswap as an example).

The first risk exposure is authorising the Smart Contract to use the user’s token. The malicious software wallet can replace the origin contract address to the hacker’s address therefore he can have full access to the funds.

To prevent this we have also labeled the Smart Contract address you are authorising and highlighted an unknown address to give an alert.
![1anlKBCLS70g92r8saWf0pQ.webp](/images/blog/crypto-security/blind-signing-a-security-black-hole-for-the-ethereum-community-13f909b848b6/1anl-kbcls-70g92r8sa-wf0p-q-adc014bc05.webp)
The second attack surface is even more interesting.

After deeply diving into Uniswap’s code base, we found the [following code](https://github.com/Uniswap/uniswap-v2-periphery/blob/4123f93278b60bcf617130629c69d4016f9e7584/contracts/UniswapV2Router01.sol#L179):

There is one address parameter called “to” in the function definition. Normally it should be the same as the user’s own “From” address so that the swapped token goes to the user’s original address. But this parameter is allowed to be changed so the user can swap tokens and send to another address (we think it’s not a bug but an intended design of Uniswap). If this design is taken advantage of by the hacker, he can modify this value to his own address with the compromised software wallet. Then the user will swap to a malicious address.

To minimize the attack surface here, we verify this address with the “From” address, if we find they are inconsistent, we will highlight it (check the screenshot below).
![07FGEbvhJw3IvOzO5.webp](/images/blog/crypto-security/blind-signing-a-security-black-hole-for-the-ethereum-community-13f909b848b6/07-fg-ebvh-jw3-iv-oz-o5-f6c01b8aa8.webp)
From the screenshot you can tell that we also label the path out, so users can verify whether it is consistent with Uniswap’s UI.

Down below is an example of how one of the hardware wallets signs a Uniswap transaction (swaping 0.1 ETH to DAI). Here you can see that the “to” address is not shown during the entire signing process. With that being said, if the compromised MetaMask send an unsigned transaction which changes the “to” address to hacker’s, no matter how carefully you do your manual check, you CAN NOT find the issue if you were to use this device.
![1-GHUad7WXtNhIMAABRzrvg.webp](/images/blog/crypto-security/blind-signing-a-security-black-hole-for-the-ethereum-community-13f909b848b6/1-gh-uad7-w-xt-nh-imaab-rzrvg-b89192ff43.webp)
How a Uniswap transaction is signed

**Current Status**

Keystone has been integrated with both MetaMask Extension as we llas MetaMask Mobile.

Here are links related:

[MetaMask’s Announcement](https://consensys.net/blog/news/metamask-x-keystone-how-to-benefit-from-hardware-wallet-security-using-transparent-qr-code/) for MetaMask Extension integration

[Tutorial](https://support.keyst.one/3rd-party-wallets/eth-and-web3-wallets-keystone/bind-metamask-with-keystone) for MetaMaks Extension integration

[MetaMask’s Announcement](https://twitter.com/MetaMask/status/1517256930389110785) for MetaMask Mobile integration

[Tutorial](https://support.keyst.one/3rd-party-wallets/eth-and-web3-wallets-keystone/metamask-mobile) for MetaMaks Mobile integration

# Final Words

Here at Keystone, we believe that user experience is extremely important for crypto security as human error is [the biggest reason](https://bitcoinist.com/estimated-4-million-bitcoin-lost-forever-by-users-forgetfulness/) for crypto loss. This is also one of the biggest [design principles of Keystone](/keystone-product-design-principles-cd833bc11125).

All the hardware wallets should be responsible for not only protecting the private keys but also avoiding human error.

Last but not least, security (countering attackers) is not an easy job.

If we take Smart Contract function verification as an example here, the wallet manufacturer needs to be familiar with Dapp’s logic and to figure out the potential attacking surfaces. It’s much better if the Dapp projects can work side by side with wallet teams to find out a thorough solution together.

Security is always a shared responsibility among the whole community. And us, at the Keystone team, are widely open to this kind of collaboration.

Special thanks to [Philipp](https://twitter.com/Philiff) and [Ryan](https://twitter.com/smart_wallet_1) for the technical review of this article.
