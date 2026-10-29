---
title: "New to TON? Consider this your go-to guide to safety in the TON ecosystem"
slug: "new-to-ton-consider-this-your-go-to-guide-to-safety-in-the-ton-ecosystem"
summary: "It's no secret that TON, aka The Open Network—a public blockchain deeply bound to Telegram—has been making waves among the crypto community and attracting many users who want to gain an edge over o..."
publishedAt: "2024-07-10T05:36:39.329Z"
updatedAt: "2024-07-10T05:36:39.339Z"
heroImage: "/images/blog/crypto-security/new-to-ton-consider-this-your-go-to-guide-to-safety-in-the-ton-ecosystem/hero.jpg"
locale: "en"
---

It's no secret that [TON](https://ton.org/), aka The Open Network—a public blockchain deeply bound to Telegram—has been making waves among the crypto community and attracting many users who want to gain an edge over others by investing in its new projects. Like the ecological pyramid, the scammers follow these innocent users to prey on them, like sharks follow the blood trail of their prey!

## Challenges and suggestions:

As a user, you cannot follow the same security habits that kept you safe in the EVM due to the differences in technical characteristics between EVM and TON blockchain. 

As a leading hardware wallet provider active in the TON ecosystem, we have compiled 4 security suggestions to help you navigate this space safely.

1. Choosing the right wallet
2. Protect yourself against common forms of phishing
3. Identifying fraudulent phishing with the blockchain browser
4. Using a hardware wallet for further security

Let’s understand these security suggestions one by one with detailed examples and guidance that you can follow at once:

### 1. Choosing the right wallet:

Due to the technical differences, the regular EVM wallets we use, such as MetaMask and Rabby, do not currently support TON. So, we need to install another wallet that does.

When it comes to choosing a wallet to secure your asset, you should evaluate the wallets based on certain aspects, such as:

- Open-sourced, 
- Security features,
- Ability to connect Hardware wallet, 
- Attention to analysing the transaction details, etc. 

To give you a head start, we have done some basic research to make your job easier! 

Imagine you are on a TON phishing site, and the hacker wants to drain some assets from your wallet with a fake airdrop transaction. 

We took two TON wallets, namely, OpenMask and Tonkeeper, and tried to simulate the transaction on both. 

![OpenMask vs Tonkeeper](/images/blog/crypto-security/new-to-ton-consider-this-your-go-to-guide-to-safety-in-the-ton-ecosystem/new-b70f9b0d5b.jpg)

If we start with the [OpenMask](https://www.openmask.app/), It seems like a normal transaction to claim airdrops, right? Now, pause for a second and check the same transaction on the [Tonkeeper](https://tonkeeper.com/). It gives us more information compared to the former and clearly breaks the hacker's trap by revealing that the site is trying to steal the FISH tokens from our wallet. 

Now tell us, which wallet users are more likely to fall for this? 

A secure wallet is like a 'giant magnifying glass' that can effectively reduce users' anxiety about identifying phishing scams. Recently, Keystone also successfully integrated with Tonkeeper, and this addition of a hardware wallet can increase users' security on TON by a tonne.
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">1/<br><br>????️ Exciting news for all the <a href="https://twitter.com/ton_blockchain?ref_src=twsrc%5Etfw">@ton_blockchain</a> fanatics!<br><br>We are thrilled to partner with <a href="https://twitter.com/tonkeeper?ref_src=twsrc%5Etfw">@tonkeeper</a> to bring the power of <a href="https://twitter.com/hashtag/TON?src=hash&amp;ref_src=twsrc%5Etfw">#TON</a> to your hands with our latest firmware update, V - 1.5.0 ⚙️<br><br>Ready to explore what&#39;s new? ???? <a href="https://t.co/PK3e4RJwmU">pic.twitter.com/PK3e4RJwmU</a></p>&mdash; Keystone Hardware Wallet (@KeystoneWallet) <a href="https://twitter.com/KeystoneWallet/status/1803789962154041610?ref_src=twsrc%5Etfw">June 20, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### 2. Protect yourself against the common forms of phishing

Like any other public chain, phishing is TON's most common and widely used attack. Let's learn the various phishing tricks followed by hackers:

#### A) Zero-amount transfer phishing:

Hackers send TON dust to many addresses in bulk and try baiting the receiver by mentioning such as "receive 1000 TON airdrop, visit “[http://xxxxxx.com](https://t.co/fgeNaPBI1N)", etc. in the transaction notes of these transactions. This method is to trick you into visiting their scammy site and stealing your assets by fooling you into signing your own wallet drain transaction.

#### B) NFT Airdrop Phishing

Similar to the earlier method, hackers airdrop NFTs to multiple users' wallets and attach URLs of phishing websites or NFT marketplaces, luring users to sell these airdropped scam NFTs. If you receive such an NFT, do not interact with it because hackers set up these websites to steal assets from your wallets.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">❗️Be cautious, new scam alert – fake <a href="https://twitter.com/hashtag/NFT?src=hash&amp;ref_src=twsrc%5Etfw">#NFT</a> token distributions to <a href="https://twitter.com/hashtag/TON?src=hash&amp;ref_src=twsrc%5Etfw">#TON</a> wallets.<br><br>Scammers send NFTs with similar numbers to the one in the screenshot, which are priced from $10k on the market.<br><br>In the NFT description, they insert a link to a marketplace, like… <a href="https://t.co/vbpYoe87oD">pic.twitter.com/vbpYoe87oD</a></p>&mdash; Perominar (@Perominar) <a href="https://twitter.com/Perominar/status/1788873552319389792?ref_src=twsrc%5Etfw">May 10, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

#### C) Beware of TON's unique "comment" feature

Unlike EVM, Ton has an optional comment field on all transfer transactions, similar to the “remarks” column when transferring money from the bank. This user-friendly feature has now become a playground for hackers, who use it to confuse their victims.

![Transaction Comment](/images/blog/crypto-security/new-to-ton-consider-this-your-go-to-guide-to-safety-in-the-ton-ecosystem/new-2-49f1a59769.png)

As shown in the image above, the hacker tries to manipulate the user by mentioning a fake transaction, "Received +10 227 810 848 43 FISH," in the comment field. But, in reality, the transaction is created to drain the existing FISH token from the victim’s wallet.

 Now, you can understand that any average user will buy into this scam out of curiosity to get the fake airdrop and end up losing his assets.

Reminder: Do not trust any content in the trade message.

To protect our TON users, we are including a safety message under the comments section to alert them before executing the transaction.

![Keystone's safety measure](/images/blog/crypto-security/new-to-ton-consider-this-your-go-to-guide-to-safety-in-the-ton-ecosystem/5212e081-aa93-40c8-8c6b-0fa1aa967b90-9fbb795cb1.png)

### 3. Identifying fraudulent phishing with the blockchain browser

Similar to Ethereum’s [Etherscan](https://etherscan.io/), the TON blockchain has [Tonscan](https://tonscan.com/) and [Tonviewer](https://tonviewer.com/) to view on-chain information.

![Tonviewer vs Tonscan](/images/blog/crypto-security/new-to-ton-consider-this-your-go-to-guide-to-safety-in-the-ton-ecosystem/gq-1-i8gzac-aaex-iy-746e63f53a.jpg)

On comparing these two explorers, Tonviewer does a better job by marking the suspected phishing transactions as "SUSPICIOUS", and the fraudulent airdrop NFTs are labelled as "SCAM" to prevent users from falling into the trap. On the other hand, TONSCAN only displays on-chain information and lacks some security-related tips.

![Scam label on fake airdropped NFTs](/images/blog/crypto-security/new-to-ton-consider-this-your-go-to-guide-to-safety-in-the-ton-ecosystem/untitled-4-286b43ca88.png)

### 4. Using a hardware wallet for further security

On any public chain, using a hardware wallet to take the seed phrases off the grid and verify transactions twice is an effective security measure to protect assets. 

Keystone enables TON users to enjoy supreme security by integrating with the TonKeeper wallet. 
For hardware wallet users, we have the following suggestions: 
- Use hardware wallets to save large assets 
- Separate multiple wallets using Keystone's 3 sets of mnemonics to prevent the risk of a single point of failure. 
- Carefully verify the transaction information displayed by Keystone to avoid signature phishing transactions.

## Eager to BUIDL in TON ecosystem:

In the blockchain world, opportunity often goes hand in hand with risk. As you grow with the TON ecosystem, don't forget to protect your assets with our above security suggestions while you continue looking for quality projects to invest in. Being a leading hardware wallet provider, we are willing to contribute to improving the security of the users by closely working with all parties in the TON ecosystem and doing our best to build a secure interaction environment.
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">1/2<br><br>Ensuring user safety on public blockchains is non-negotiable.<br><br>As a leading hardware wallet provider, we&#39;re eager to team up with <a href="https://twitter.com/ton_blockchain?ref_src=twsrc%5Etfw">@ton_blockchain</a> &amp; contribute to improving user safety.<br><br>Let&#39;s make this happen - <a href="https://twitter.com/steveyun_ton?ref_src=twsrc%5Etfw">@steveyun_ton</a>, <a href="https://twitter.com/jbfxdotme?ref_src=twsrc%5Etfw">@jbfxdotme</a>, <a href="https://twitter.com/rogozov?ref_src=twsrc%5Etfw">@rogozov</a>, <a href="https://twitter.com/surnamedanev?ref_src=twsrc%5Etfw">@surnamedanev</a>! <a href="https://t.co/pL0l5ZnnOL">https://t.co/pL0l5ZnnOL</a></p>&mdash; Keystone Hardware Wallet (@KeystoneWallet) <a href="https://twitter.com/KeystoneWallet/status/1806674068923650065?ref_src=twsrc%5Etfw">June 28, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
