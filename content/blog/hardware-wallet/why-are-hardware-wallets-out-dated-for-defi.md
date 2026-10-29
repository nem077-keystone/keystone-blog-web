---
title: "Why are Hardware Wallets Out-dated for DeFi?"
slug: "why-are-hardware-wallets-out-dated-for-defi-8a3d81a27572"
summary: "A hardware wallet is a type of dedicated hardware device where you can generate and store your private keys and use them to sign a specific transaction. Since hardware wallets usually operate offli..."
publishedAt: "2021-07-14T05:30:53.811Z"
updatedAt: "2024-04-24T07:05:36.314Z"
heroImage: "/images/blog/hardware-wallet/why-are-hardware-wallets-out-dated-for-defi-8a3d81a27572/hero.webp"
locale: "en"
---

A hardware wallet is a type of dedicated hardware device where you can generate and store your private keys and use them to sign a specific transaction. Since hardware wallets usually operate offline without any internet connections, they minimize the attack surfaces compared to keeping your private keys on an online device such as a laptop or a mobile phone. Aside from safely keeping your private keys, another important benefit of your hardware wallet is allowing you to fully verify your transactions in real time when necessary.

This article discusses the importance of verifiability and how a hardware wallet, especially with DeFi booming, should evolve to eliminate risks for the users.

### Verifiability Matters

Ever since Satoshi Nakamoto raised a starting flag of decentralization by publicizing the Bitcoin Whitepaper, there is a famous mantra in the cryptocurrency industry: “Don’t trust. Verify!”

Thus, a huge upgrade to a hardware wallet’s verifiability is adding a screen to the device itself.

![0__y6UIKHqOrgEhJ042.webp](/images/blog/hardware-wallet/why-are-hardware-wallets-out-dated-for-defi-8a3d81a27572/0-y6-uik-hq-org-eh-j042-79616bdc7a.webp)

This eliminates a classic attack — hackers hacking the software wallet and changing the receiving address. Your software wallet would show the correct address but your hardware wallet would receive an incorrect and malicious address to sign instead. Due to a lack of a screen on your device, you wouldn’t be able to identify this attack. That being said, if you use a hardware wallet without a screen, you won’t be able to identify whether your software wallet is hacked or not. The security level of using an extra hardware wallet (without a screen) would almost be the same as if you were only using a software wallet.

### Additional Verifiability Required for DeFi

Ethereum opens a new era for deploying executable code onto the blockchain, commonly known as “smart contracts”. The advantage of Ethereum’s interoperability makes it possible for these smart contracts to interact with each other.

The DeFi world is built upon these attributes. We all heard that DeFi is like Lego so the interoperability between smart contracts makes DeFi transactions extremely complex. This opens new doors for hackers to take advantage of. The attack surface is exactly like the one mentioned earlier in this article. The difference is that hackers would no longer need to manipulate the receiving addresses (smart contract addresses) but the parameters of a DeFi transaction.

Let’s take a swapping transaction on Uniswap as an example. Aside from the smart contract address of Uniswap, users need to confirm at least 2 important parameters -

* The path of the swapping
* The destination address of the swapping

Below is a step-by-step breakdown of how Ledger signs a Uniswap transaction. From the 6 steps shown, a user can only confirm the amount of ETH he/she is sending to the Uniswap smart contract address but nothing else. Thus, hackers can change the destination swapping address and steal the user’s funds.

![0__ZIGbjm__1iGip9jsP.webp](/images/blog/hardware-wallet/why-are-hardware-wallets-out-dated-for-defi-8a3d81a27572/0-zi-gbjm-1i-gip9js-p-eacf97df31.webp)

### ABI is the Key for DeFi Verifiability

Before discussing the solution for DeFi verifiability, we need to understand what ABI is.

From [Solidity’s development documentation](https://docs.soliditylang.org/en/develop/abi-spec.html), ABI is defined as -

> The Contract Application Binary Interface (ABI) is the standard way to interact with contracts in the Ethereum ecosystem, both from outside the blockchain and for contract-to-contract interaction. Data is encoded according to its type, as described in this specification. The encoding is not self describing and thus requires a schema in order to decode.

Basically you can use ABI as a “tool” to decode a DeFi transaction. Let’s take [this Uniswap transaction](https://etherscan.io/tx/0x6e81f84381b38f49bc7236b2bad1f6895b800ac438269dcca3efa26020c5383a) as a simple example.

This is the input data for an Uniswap swapping token transaction -

`
0x18cbafe5000000000000000000000000000000000000000005d9c3d12c896aaffeec748100000000000000000000000000000000000000000000000008d71f175c9006f000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000bf187aca78b004af1994b91565c75c6cb42c7a5d0000000000000000000000000000000000000000000000000000000060e6e10f0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000249e38ea4102d0cf8264d3701f1a0e39c4f2dc3b000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2
`

This is the same input data decoded by Uniswap’s ABI -

`
{  
  "method": "swapExactTokensForETH",  
  "types": [  
    "uint256",  
    "uint256",  
    "address[]",  
    "address",  
    "uint256"  
  ],  
  "inputs": [  
    "5d9c3d12c896aaffeec7481",  
    "8d71f175c9006f0",  
    [  
      "249e38ea4102d0cf8264d3701f1a0e39c4f2dc3b",  
      "c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"  
    ],  
    "bf187aca78b004af1994b91565c75c6cb42c7a5d",  
    "60e6e10f"  
  ],  
  "names": [  
    "amountIn",  
    "amountOutMin",  
    "path",  
    "to",  
    "deadline"  
  ]  
}
`

ABI can make DeFi transactions human-readable. A side note — a DeFi project can have several smart contracts and each smart contract has a specific ABI.

### Keystone’s Solution

At Keystone, we believe solving the ABI decoding issue is a paramount priority for DeFi security. We have designed a full solution, which we will break down into 2 phases.

**Phase 1**

In this phase, we create a big ABI pack (~60,000 smart contracts with a size over 400M) and put it on our website and github. Users can download it, put it into a microSD card and then insert the microSD card into their Keystone devices. Users are also able to add their own ABIs into the microSD card to fulfil their personal needs.

With firmware later than 1.2.0, Keystone will be able to use the ABI on the microSD card to decode the DeFi transactions like the below example：

![0__7DUkoGt88GZebFqS.webp](/images/blog/hardware-wallet/why-are-hardware-wallets-out-dated-for-defi-8a3d81a27572/0-7-d-uko-gt88-g-zeb-fq-s-75a4c49e5a.webp)

**Phase 2**

In this phase, we selectively pick top DeFi projects and embed their ABIs into our firmware. Users won’t need to download extra files and put them into a microSD card. We will also highlight key information and risks associated with the DeFi transaction. The user interface will look like this:

![0__8xN__M8g8x6Oh2olv.webp](/images/blog/hardware-wallet/why-are-hardware-wallets-out-dated-for-defi-8a3d81a27572/0-8x-n-m8g8x6-oh2olv-1f3a1078f3.webp)

You can see the smart contract address is shown with the name of the DeFi transaction as well as the swapping path. The most important thing is that if your swapping destination address is changed by the hacker, your Keystone hardware wallet will inform you that it is not consistent with your original “from” address.

### Current Status And Help Needed

**Phase 1**

Phase 1 features are mostly targeting DeFi power users who are very familiar with DeFi. The phase 1 feature is available with the release of the firmware 1.2.0. You can check [this tutorial](https://support.keyst.one/advanced-features/decode-defi-transactions) on how to download the ABI pack as well as how to manually add ABIs.

We have published all the contracts metadata on our github repo. Check them out here: [https://github.com/KeystoneHQ/contracts-meta-repo](https://github.com/KeystoneHQ/contracts-meta-repo)

If you are a DeFi enthusiast and have some knowledge about DeFi and smart contracts, you can either submit the pr to add the contract for you favorite DeFi or help us improve our current collections by submitting the name of the contracts, verifying the contract address and other metadata.

All of this help will be very appreciated. Simply adding the name for a contract can help others avoid attacks from those swapping our smart contract addresses. As one community, we can work together to reduce the attack surface of signing transactions.

**Phase 2**

Phase 2 features are mostly targeting average DeFi users who may not interact with many DeFi projects but have less experience identifying the potential risks in DeFi. It is a long term optimization and we need to collaborate with various teams of DeFi projects to analyze all their smart contracts for a specific project as well as set up the schemes to highlight all the potential risks. If you are a big fan of a specific DeFi project, please help us notify the official team so that we can work together on Phase 2.

### Final Words & Special Thanks

Keystone has a big 4-inch touch screen which enables it to show all the DeFi decoded information in a much more human-readable way.

Blockchain technology is developing really fast and it’s booming to take over the traditional finance system. In the past several years, the development of hardware is kind of lagging behind the speed of Blockchains itself. We at Keystone are willing to change this.

Phase 1 metadata comes from the project [Sourcify](https://twitter.com/SourcifyEth). Sourcify team ([Chris](https://twitter.com/ethchris) and [Ligi](https://twitter.com/mr_ligi)) and [Nick Johnson](https://twitter.com/nicksdjohnson) gave us lots of help to polish our solution for ABI. Special thanks to all of them!
