---
title: "Beware the Dusting Attack"
slug: "beware-the-dusting-attack-234f017d1118"
summary: "_Coauthored by* Lixin Liu and Patrick Kim A dusting attack involves sprinkling crypto wallets with minuscule amounts of crypto to connect multiple addresses to a single owner. While these attacks a..."
publishedAt: "2021-06-18T05:30:53.811Z"
updatedAt: "2024-04-24T07:07:42.490Z"
heroImage: "/images/blog/crypto-security/beware-the-dusting-attack-234f017d1118/hero.webp"
locale: "en"
---

_Coauthored by* [_Lixin Liu_](https://medium.com/@LixinLiu) _and_ [_Patrick Kim_](https://medium.com/@patrickkim_1991)
![1BBMQTCFj9eqKzJMLiEdsDw.webp](/images/blog/crypto-security/beware-the-dusting-attack-234f017d1118/1-bbmqtc-fj9eq-kz-jm-li-eds-dw-0f6f67e3a8.webp)
A dusting attack involves sprinkling crypto wallets with minuscule amounts of crypto to connect multiple addresses to a single owner. While these attacks are relatively new and nobody has really been able to say for sure what the exact motives behind them are, what is clear is that they represent a significant threat to privacy on the blockchain.

One [article](https://ciphertrace.com/crypto-dusting/) speculates that dusting attacks may be a ploy to foil analytics tools by attempting to “dust every address with money laundering funds, thereby soiling virtually every user’s reputation.” However, we’ve yet to see strong enough evidence that dusting attacks have succeeded in causing a disruption to the way exchanges are viewing coins as tainted. What seems far more likely to be of concern for users is that these attacks are targeted at compromising the privacy of specific individuals or companies holding large amounts of crypto.

As Binance explains in this [article](https://www.binance.vision/security/what-is-a-dusting-attack), “after dusting multiple addresses, the next step of a dusting attack involves a combined analysis of those various addresses in an attempt to identify which ones belong to the same wallet… The goal is to eventually be able to link the dusted addresses and wallets to their respective companies or individuals. If successful, the attackers may use this knowledge against their targets, either through elaborate phishing attacks or cyber-extortion threats.”

**But the blockchain is transparent anyway, isn’t it? So what information do attackers gain from the dust that they can’t get by just looking at the blockchain? Why send any dust at all?**

The answer lies in [hierarchical deterministic wallets (HD wallets)](https://www.investopedia.com/terms/h/hd-wallet-hierarchical-deterministic-wallet.asp) and the logic they use in determining which [unspent transaction outputs (UTXO)](https://www.investopedia.com/terms/u/utxo.asp) will be used to make a payment. Essentially every unspent amount in your wallet is a UTXO.

Let’s look at an example. Tim is a crypto enthusiast who uses an HD wallet. He HODLs 500 BTC in one address. He also trades on an exchange and uses his wallet to make transactions.
![1iDZaIbfgcxSyRw9SoDMzLA.webp](/images/blog/crypto-security/beware-the-dusting-attack-234f017d1118/1i-d-za-ibfgcx-sy-rw9-so-d-mz-la-31872b1c59.webp)
A snapshot of Tim’s HD wallet. HD wallets are far more complicated with multiple UTXOs of varying denomination under each address, but we’re keeping it simple for clarity.

> **If Tim sends 3.2 BTC to Binance, UTXO 2 and UTXO 4 amounting to 3.5 BTC (the transaction fee also needs to be taken into account) are picked up and sent to the exchange.**
> 
> **If Tim spends 1.35 BTC at Amazon, UTXO 5 and UTXO 7 amounting to 1.6 BTC are picked up.**
> 
> **If Tim sends 1.2 BTC to a friend, UTXO 6 and UTXO 8 amounting to 1.4 BTC will be picked up.**

In all situations, change, if any, minus the transaction fee is sent back to completely new addresses in Tim’s HD wallet.

****Note that only the set of UTXO closest to the amount to be paid is selected.****

It is always approximately 3.2, 1.35, 1.2 or any other small amount that Tim would like to trade. The 500 BTC is never picked up; therefore, the address containing it is not exposed and it cannot be connected to the other addresses from where the UTXO is being sent. There’s no way to trace it to Tim by linking it to his other transaction activity, even though this address is available on the blockchain.

Anna wants to find the identity of the address containing 500 BTC, so she sends some dust (0.000005 BTC) to that address. Note that the dust is also UTXO. It’s called dust because of its trivial value, which is often less than the minimum transaction fee required to send bitcoin. Anna can be a government entity or a service connected to identifying people in crypto. She could also be a hacker.
![1LquTkkm2JFI9baV6qicNjw.webp](/images/blog/crypto-security/beware-the-dusting-attack-234f017d1118/1-lqu-tkkm2-jfi-9ba-v6qic-njw-8aa8dfd573.webp)
A snapshot of Tim’s HD wallet. HD wallets are far more complicated with multiple UTXOs of varying denomination under each address, but we’re keeping it simple for clarity.

Tim fails to recognize the dust and continues to trade with Binance, shop, and pay his friends. As long as the dust isn’t picked up, there’s no real problem. It’s important to note that different HD wallets employ their own strategy for picking up UTXO. However, if the dust is picked up along with the other UTXO in any future transaction, it is broadcast on the blockchain and the address is exposed.

When that happens, Anna will be able to track all the addresses related to the dusted address that contains the 500 BTC. And it doesn’t stop there. If the dust has been picked up with UTXO 5 from Address 4, for example, Anna will be able to see the entire transaction history for Address 4 — shops visited, payments made, trades with Binance, every single transaction is up on the blockchain.

If Anna is a hacker, things can get ugly! As the Binance article suggested, hackers can use dust to identify their victims and then subject them to phishing attacks and cyber-extortion.

## A New Conception of Threat

What could emerge as an even greater threat than the cybercriminal activity suggested by Binance is the potential that dusting could be used to identify targets for $5 wrench attacks. Widely regarded as the most difficult kind of attack to counter, the $5 wrench attack is particularly alarming if the attacker knows exactly how much BTC you have, which is the scenario we are supposing with the dusting attack.

If someone can tie your identity to specific BTC amounts, then that is **as likely as anythin**g to provide incentive for targeting you with a $5 wrench attack, depending on how much you’re storing. For a while, it has been claimed by some in cryptosecurity that ordering a hardware wallet is tantamount to doxxing yourself to anyone able to get ahold of your delivery information. Of course, specialized hardware is of little defense when someone’s pointing a gun at you.

As far as we know from reports in the media, the majority of $5 wrench attacks find their targets through word of mouth information. Someone gets a little drunk at a party and starts bragging about how much they are holding. These rather rudimentary tactics may be why we haven’t seen a massive influx of $5 wrench attack stories up to date, while other types of cybercriminal activity such as hacks on exchanges have proliferated. But when the dusting attack becomes part of the picture, it seems there is a serious threat that large hodlers could be targeted for their BTC amounts by much more efficient and well-informed kidnappers, the likes of which we have not seen in the past.
![04F06cJKichSdRedW.webp](/images/blog/crypto-security/beware-the-dusting-attack-234f017d1118/04-f06c-j-kich-sd-red-w-3f0426fa80.webp)
Could the dusting attack provide inspiration for cybercriminals who want to more effectively target individuals for $5 wrench attacks?

It should also be noted that dusting could also make it easier for government authorities to track how much crypto you hold. All they need to do is contact or issue a subpoena to an exchange you used after your accounts have been dusted. It is common knowledge that many cryptocurrency exchanges collect personal data through a [KYC verification process](https://www.binance.vision/glossary/know-your-customer), so when users move funds between their personal wallets and exchange accounts, they run the risk of being de-anonymized.

## How do you protect your identity?

Private wallet holders are usually the target of dusting attacks. It’s important to keep track of incoming funds, possibly by enabling push notifications on your wallet app. Some wallets like Samurai Wallet also allow you to mark small unknown deposits in your wallet so that you never use them for further transactions.

So what can you do if you find you have been dusted? You will want to move each big UTXO you want to protect the privacy of into a new HD wallet, possibly creating separate wallets for each big UTXO if you are concerned with them being associated, then leave the dust behind. To prevent this from happening again, create Bitcoin Core wallets (download [here](https://bitcoin.org/en/download)) for your big UTXOs and learn how to manually select UTXOs when constructing transactions with Bitcoin Core. We recommend not using your HD wallet until you find a way to manage how UXTOs are spent.
