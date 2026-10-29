---
title: "Ever Wondered What Your Hardware Wallet Inputs and Outputs?"
slug: "ever-wondered-what-your-hardware-wallet-inputs-and-outputs-9b33b4cedafd"
summary: "Aside from releasing the open source code, schematics design and code auditing report, Keystone has introduced a different type of “auditability” through the transparency of QR codes. In excluding..."
publishedAt: "2021-06-21T05:30:53.811Z"
updatedAt: "2024-04-25T08:07:39.369Z"
heroImage: "/images/blog/hardware-wallet/ever-wondered-what-your-hardware-wallet-inputs-and-outputs-9b33b4cedafd/hero.webp"
locale: "en"
---

Aside from releasing [the open source code, schematics design and code auditing report](https://blog.keyst.one/on-open-source-and-transparency-ba37fa1c1e8c), Keystone has introduced a different type of “auditability” through the transparency of QR codes. In excluding Bluetooth, Wi-Fi, USB, NFC, and other opaque means of data transmission from our product design, we have made it easy for users to verify that their hardware wallet is not revealing their private keys or other sensitive information in any way.

### How Transactions Are Created with the Keystone

The Keystone is an offline storage device (cold end) that cannot construct transactions without the help of an online mobile device (hot end) running the Keystone companion app. Because private keys are stored on the offline device and remain there the entire way through, the user’s assets won’t be affected if this mobile device is damaged or lost.

Transactions are constructed and signed through QR code communication between a mobile device and the Keystone in the following way:

 1. The Keystone companion app generates a QR code containing the data of a newly created unsigned transaction.

 2. The camera on the Keystone (cold end) scans the QR code to obtain the transaction data.

 3. The transaction is confirmed on the Keystone touchscreen, signing the transaction and outputting the signed transaction data in the form of a QR code.

 4. The camera on the hot end mobile device scans the QR code on cold end to obtain the signed transaction data.

 5. The hot end broadcasts the transaction to the blockchain network.

![keystone](/images/blog/hardware-wallet/ever-wondered-what-your-hardware-wallet-inputs-and-outputs-9b33b4cedafd/1bk-ro-f5cf-j0-qld-8-j8v-mri-ag-64160e82fc.webp)

### How to “Audit” QR Code Data Transmissions

We believe that QR codes, in addition to being safe, are the most transparent means of data transmission for air-gapped cold storage.

Currently Keystone is using the BC-UR for QR Codes encoding/decoding. Check out the link here for more details: [https://github.com/BlockchainCommons/Research/blob/master/papers/bcr-2020-005-ur.md](https://github.com/BlockchainCommons/Research/blob/master/papers/bcr-2020-005-ur.md)

To follow [this github repository](https://github.com/KeystoneHQ/KeystoneQRVerifier), a user is able to decode the Keystone’s QR code content in an easily understandable fashion and shows to the user exactly what the hardware wallet is sending to the app, allowing the user to verify that no secrets are being transmitted.

To run through the whole process, the following pre-requisites must be fulfilled:

 1. Google Protobuf compiler.

On Ubuntu this can be installed by doing:

 sudo apt install protobuf-compiler

On macOS this can be installed by doing:

 brew install protobuf

2. Google Python API client for protobufs. Assuming python3, this can be installed by doing:

 pip3 install --upgrade google-api-python-client

3. Run (and install if necessary) make to build the python modules needed for Google proto3 support.

Once the above pre-requisites are met, the following sequence can be used to verify the contents of the QR Codes the Keystone shows to the Keystone App, or the other way around.

1. Whenever you see the Keystone rapidly displaying a set of QR codes. Press the *Difficulty scanning? Tap the QR code to adjust.* button.

2. Press the pause button on the resulting screen and use the slider to maximize the size of the QR code, then scan the first image with the Keystone app and with a QR Code Scanner of your choice.

![Press the pause button and scan with a QR Code Scanner](/images/blog/hardware-wallet/ever-wondered-what-your-hardware-wallet-inputs-and-outputs-9b33b4cedafd/0-8bkgvfwndx03bxil.jpg)![08BKgvfWNDx03BXil.webp](/images/blog/hardware-wallet/ever-wondered-what-your-hardware-wallet-inputs-and-outputs-9b33b4cedafd/08-b-kgvf-wn-dx03-b-xil-85a149f566.webp)

3. Save the text of the Keystone QR code (captured using your QR code scanner) into a file accessible by the code of the repository.

4. Pressing *Next* and repeating step #2&3 untill you have saved all the information from the QR codes. The resulting file should look like this:

 UR:BYTES/1-2/LPADAOCFAXLDCYKKKGJPROHKADSKHKAXLNCTLUAYAEAEAEAEAEAEAEHLTYSOPLVLFYCSAHHNFELAJYBZFZNBRKIMYKLEHLQDRKWEROFNTYTDGLESPAFNRECAFRWNPFWFBBGWJNMSVDINSRPFFWBNBDNNMWEMFZYAPKBYUOJTPTCKVTTEESVDPELTUTVLEMFERFJYFSPLVOWSNYENSSGYZTZSWSLTLTUTVLAXKPHNLOVLHPLNKSZCTSSRZETSUTZEEOUEFTKBRKKGZCVLJTZMONZSAAVTNDOSRLTKWSBYTKYKBETILOSFAEWEAOTDFNUTJKLYKTTEMKMSSONBKTTLGRASMYYLLAREKNNBGMZTFDTIFSTSIMZTFYJSMTRPFDKOCKLPWDOESFYACSLDRPECMTOXHEDYYTLYRLZCPFOYMWASDYPSWSHYIAWYLFUTBGFYOTJLDKBGTKNTRKVTTLJTZMUYLNBYDWJSSRZTQZUYLBREHSRTNDDIZSONVAPDONZCVTJOCPWDHDRTONHYGLJSLESTTEHKAMFTNTGMDRVEYAEYEYWFJZOYLUMHBSPRONJEHDCSOEHFESCTHNLGVWTTWMCAROLFGUMKKNPRMDHPGROLBSDETOGLWDECCPFYMHGDWMDPEOVACKWKKPTTVOGEIMHEKIPAZMZCESNYVLQDVAVDUTZEWMBSCYAOGDDLESESLFMNCWBGPTCXLTNSTNNLKBSTJSDWOTGLJZHNHYHPTNENVEHFCPLRHFSEKTGATSHSEMSTCKTAONFYDKCKGSIMNLBNWMOEREGLKTKTHFLUIYWLHHTDCPVDGDFWESCAGOMWLFTPGDCLCHNLFEHSDELECYNBEOZCCLNSTKBYIOLEZMHGREKKHYIMMHGOAHGLBGVSMKDMUYGRNYIEDAWPBGFGPKDTLNTPCMGDBTCFNNMTFEHHJS
 UR:BYTES/2-2/LPAOAOCFAXLDCYKKKGJPROHKADSKMURKLDDKVYCPLOSFEEFYBDEYGHIEIDDNGMLKSFJNSPFMCSRYHPPALNKNSFGHIMOEDYIHHNIYQDHSLRIYCYCHYLGHWYGAFRNYWLFDHNGOWNHDJZNYVDUTDENEWPVAWTEYCYRHLTSFAYBGOYFRLSTECFBKCXBZJODLHHZORFQZTAMTCWJLVYGOAOKKHGFGDPBSFDSWVARYGEIYMUMNDPZSTLFHCFIDBNEOFGJETBMHRKCMCLIHSWNYTEUTPFKGRSINJKFYJOBWGELFWLDYTYWPECGMWEAMBGZTLNYTIALUSWRDRFTEFMPLBKKBGHMDCMLKCHCACTWZMTSAPKPDCWWFTLRNTLPYSBNTINJSDTJZFHGOEYOTDRVAISBABYNNMEGARKKKGSCEPEDEFEAEVAQDGDHSHDFYDSDPWTVTIYDABAGLESHDTSIHGUMHTEDEAONDAOMDJYWNBKRTDYRLPKCKWDKPWFFNDLSTRHVSNEDWATRFVEAEMOSNSKFWFHCPDWDWGHTOLDRTLTDTURRKJNHDRLVAJYCKAHMNGODEGYGRCWQZFDFMHSKGKNWEESESFYNYTBKTMSFNBBVDRECWFNPTCLTPGLECLUNBJZHHRHPTMECTWDPSPENYEYGTBKWFWDCERPCLPDBYLTEMTODLCWATRYQDENTOBSZOZCTEGULGURCHKBLRZOLBDTTIESMEHLBTIAKIBBEEPAFYJSECDADYCASGKEIMKNKKWTAOMYGTDYPDTASWPKBTRKCPSFTEWDHDCMLUGMRETSCANYRPVSGLPEKIDLWSCNOTVWNLPFCFSPEYJZDNAMLPDTGRNTJLJNAYMURPDIDNMOCWMYMHRSJNCHZEZCNETNVYWNRSGWGAVSRDROWDEOZMZCFHTEHTSBURPYAAAEAEAEZSCSSTTN
 UR:BYTES/5-2/LPAHAOCFAXLDCYKKKGJPROHKADSKSGROBSFRIMDRLOSFEEFYBDEYGHESRPVOZTJLLOKPSNHYHLFSDLOXSWTNKTFMNEDEJNTBUYLUBDHLGDQZGHDMFGISHPGHAEJEHKRKJYCYNSTKLUWFDKJNIMMUVDKSIEAHHTFPDPUTTYKEAYDAIAAECXWEMYMOPMSFJERNAERTVEETYTLAKGIASWDEPYRFSALOTKCWAHRNFHAMCWJNKOKEPMSATOOYWZVENDMDVWGLLYISNYCKFRKKRYCPBZLYRKLDVSVLSTUOONMUDSSKSSFNRYNNWEWMBEDMRDDKBEBKPAINDKFYYLBAKIPYCTNSNLKGMSPDIHGMSSFMVOKSDSDKRSFWMETNHLDNCLATEMWLTLYLZEHPEYJLUEFRLTFTTOKKFWYAZOVYCTLDTTASTBCTRSFHFRPKOXWTVOOXSKGEDRHHYNSKJZLPLNZEDWWFLRLEDMVERLBTRNCWGWAOSBUEJSGMASNLSOJLCEBZLBHHDAHFRFRTEMMULUEOREVWZMKPGMWKBBMOPMSNDILDHEPYUYFLZMMNBKFNWTFXASGURHVOJSCLADYNNEFNTDDKZTCSLPWSWEMNLYRFZERYEOLYWSMTOXAEPTVEZTBNGMLROEYTWKHDTNGRTIATHNPSMSPMGAUOMELUIELRDESPSWYTHFRFDWSFHETYSSWDTTAXSSAHTSOXKEVLWFGAFLHFDWCLRTEOKSGHWSCTPYAXSEIYFHGLDRPYBTDYDIIAROLEDMJSKELFMNBWYLFDGOURADZSOTSKDASALYMTZTHEQZNSLGNYLBPMCYRNPFBTEYSEMKBWKGPRFXVEADSELTTKHYYKPRDRVSFTYKMEJOSTBKBBGAMWJNSGURPEVLHGTSIOEOWNCPMNCMBWWSKKKKJKGTATRYGHBTCFNNQZPRSBAD
 UR:BYTES/7-2/LPATAOCFAXLDCYKKKGJPROHKADSKMURKLDDKVYCPLOSFEEFYBDEYGHIEIDDNGMLKSFJNSPFMCSRYHPPALNKNSFGHIMOEDYIHHNIYQDHSLRIYCYCHYLGHWYGAFRNYWLFDHNGOWNHDJZNYVDUTDENEWPVAWTEYCYRHLTSFAYBGOYFRLSTECFBKCXBZJODLHHZORFQZTAMTCWJLVYGOAOKKHGFGDPBSFDSWVARYGEIYMUMNDPZSTLFHCFIDBNEOFGJETBMHRKCMCLIHSWNYTEUTPFKGRSINJKFYJOBWGELFWLDYTYWPECGMWEAMBGZTLNYTIALUSWRDRFTEFMPLBKKBGHMDCMLKCHCACTWZMTSAPKPDCWWFTLRNTLPYSBNTINJSDTJZFHGOEYOTDRVAISBABYNNMEGARKKKGSCEPEDEFEAEVAQDGDHSHDFYDSDPWTVTIYDABAGLESHDTSIHGUMHTEDEAONDAOMDJYWNBKRTDYRLPKCKWDKPWFFNDLSTRHVSNEDWATRFVEAEMOSNSKFWFHCPDWDWGHTOLDRTLTDTURRKJNHDRLVAJYCKAHMNGODEGYGRCWQZFDFMHSKGKNWEESESFYNYTBKTMSFNBBVDRECWFNPTCLTPGLECLUNBJZHHRHPTMECTWDPSPENYEYGTBKWFWDCERPCLPDBYLTEMTODLCWATRYQDENTOBSZOZCTEGULGURCHKBLRZOLBDTTIESMEHLBTIAKIBBEEPAFYJSECDADYCASGKEIMKNKKWTAOMYGTDYPDTASWPKBTRKCPSFTEWDHDCMLUGMRETSCANYRPVSGLPEKIDLWSCNOTVWNLPFCFSPEYJZDNAMLPDTGRNTJLJNAYMURPDIDNMOCWMYMHRSJNCHZEZCNETNVYWNRSGWGAVSRDROWDEOZMZCFHTEHTSBURPYAAAEAEAEMHSGRPSO
 UR:BYTES/10-2/LPBKAOCFAXLDCYKKKGJPROHKADSKHKAXLNCTLUAYAEAEAEAEAEAEAEHLTYSOPLVLFYCSAHHNFELAJYBZFZNBRKIMYKLEHLQDRKWEROFNTYTDGLESPAFNRECAFRWNPFWFBBGWJNMSVDINSRPFFWBNBDNNMWEMFZYAPKBYUOJTPTCKVTTEESVDPELTUTVLEMFERFJYFSPLVOWSNYENSSGYZTZSWSLTLTUTVLAXKPHNLOVLHPLNKSZCTSSRZETSUTZEEOUEFTKBRKKGZCVLJTZMONZSAAVTNDOSRLTKWSBYTKYKBETILOSFAEWEAOTDFNUTJKLYKTTEMKMSSONBKTTLGRASMYYLLAREKNNBGMZTFDTIFSTSIMZTFYJSMTRPFDKOCKLPWDOESFYACSLDRPECMTOXHEDYYTLYRLZCPFOYMWASDYPSWSHYIAWYLFUTBGFYOTJLDKBGTKNTRKVTTLJTZMUYLNBYDWJSSRZTQZUYLBREHSRTNDDIZSONVAPDONZCVTJOCPWDHDRTONHYGLJSLESTTEHKAMFTNTGMDRVEYAEYEYWFJZOYLUMHBSPRONJEHDCSOEHFESCTHNLGVWTTWMCAROLFGUMKKNPRMDHPGROLBSDETOGLWDECCPFYMHGDWMDPEOVACKWKKPTTVOGEIMHEKIPAZMZCESNYVLQDVAVDUTZEWMBSCYAOGDDLESESLFMNCWBGPTCXLTNSTNNLKBSTJSDWOTGLJZHNHYHPTNENVEHFCPLRHFSEKTGATSHSEMSTCKTAONFYDKCKGSIMNLBNWMOEREGLKTKTHFLUIYWLHHTDCPVDGDFWESCAGOMWLFTPGDCLCHNLFEHSDELECYNBEOZCCLNSTKBYIOLEZMHGREKKHYIMMHGOAHGLBGVSMKDMUYGRNYIEDAWPBGFGPKDTLNTPCMGDBTCFNNEOMWBSWE
 UR:BYTES/13-2/LPBTAOCFAXLDCYKKKGJPROHKADSKSGROBSFRIMDRLOSFEEFYBDEYGHESRPVOZTJLLOKPSNHYHLFSDLOXSWTNKTFMNEDEJNTBUYLUBDHLGDQZGHDMFGISHPGHAEJEHKRKJYCYNSTKLUWFDKJNIMMUVDKSIEAHHTFPDPUTTYKEAYDAIAAECXWEMYMOPMSFJERNAERTVEETYTLAKGIASWDEPYRFSALOTKCWAHRNFHAMCWJNKOKEPMSATOOYWZVENDMDVWGLLYISNYCKFRKKRYCPBZLYRKLDVSVLSTUOONMUDSSKSSFNRYNNWEWMBEDMRDDKBEBKPAINDKFYYLBAKIPYCTNSNLKGMSPDIHGMSSFMVOKSDSDKRSFWMETNHLDNCLATEMWLTLYLZEHPEYJLUEFRLTFTTOKKFWYAZOVYCTLDTTASTBCTRSFHFRPKOXWTVOOXSKGEDRHHYNSKJZLPLNZEDWWFLRLEDMVERLBTRNCWGWAOSBUEJSGMASNLSOJLCEBZLBHHDAHFRFRTEMMULUEOREVWZMKPGMWKBBMOPMSNDILDHEPYUYFLZMMNBKFNWTFXASGURHVOJSCLADYNNEFNTDDKZTCSLPWSWEMNLYRFZERYEOLYWSMTOXAEPTVEZTBNGMLROEYTWKHDTNGRTIATHNPSMSPMGAUOMELUIELRDESPSWYTHFRFDWSFHETYSSWDTTAXSSAHTSOXKEVLWFGAFLHFDWCLRTEOKSGHWSCTPYAXSEIYFHGLDRPYBTDYDIIAROLEDMJSKELFMNBWYLFDGOURADZSOTSKDASALYMTZTHEQZNSLGNYLBPMCYRNPFBTEYSEMKBWKGPRFXVEADSELTTKHYYKPRDRVSFTYKMEJOSTBKBBGAMWJNSGURPEVLHGTSIOEOWNCPMNCMBWWSKKKKJKGTATRYGHBTCFNNLYZCGEGU

5. Run the verifier code against the file, e.g.
./keystoneQRVerify.py --file sample_qr_codes.txt

6. The verifier will decode the QRCode text files and show exactly what they contain. It should look something like this:

 version: 1
 description: "keystone qrcode"
 data {
 type: TYPE_SYNC
 uuid: "5271C071"
 sync {
 coins {
 coinCode: "BTC"
 active: true
 accounts {
 hdPath: "M/49\'/0\'/0\'"
 xPub: "xpub6D3i46Y43SFfjEBYheBK3btYMRm9Cfb8Tt4M5Bv16tArNBw5ATNyJWjdcMyLxoCdHWTvm3ak7j2BWacq5Lw478aYUeARoYm4dvaQgJBAGsb"
 addressLength: 1
 }
 }
 coins {
 coinCode: "ETH"
 active: true
 accounts {
 hdPath: "M/44\'/60\'/0\'"
 xPub: "xpub6CNhtuXAHDs84AhZj5ALZB6ii4sP5LnDXaKDSjiy6kcBbiysq89cDrLG29poKvZtX9z4FchZKTjTyiPuDeiFMUd1H4g5zViQxt4tpkronJr"
 addressLength: 5
 }
 }
 coins {
 coinCode: "BCH"
 active: true
 accounts {
 hdPath: "M/44\'/145\'/0\'"
 xPub: "xpub6CjD9XYc1hEKcAMsSasAA87Mw8bSUr6WQKrJ1ErLofJPP9sxeZ3sh1dH2S5ywQTRNrXsfXzT686jJNdX2m9KhvMDh4eQM9AdSkkQLLMbDG6"
 addressLength: 1
 }
 }
 coins {
 coinCode: "DASH"
 active: true
 accounts {
 hdPath: "M/44\'/5\'/0\'"
 xPub: "xpub6DTnbXgbPo6mrRhgim9sg7Jp571onenuioxgfSDJEREH7wudyDQMDSoTdLQiYq3tbvZVkzcPe7nMgL7mbSixQQcShekfhKt3Wdx6dE8MHCk"
 addressLength: 1
 }
 }
 coins {
 coinCode: "LTC"
 active: true
 accounts {
 hdPath: "M/49\'/2\'/0\'"
 xPub: "xpub6CKt97v4gEsG4FG9E4hEotEUtjmW8rAvVcUJ4jsmdrB437WBZnK8gs8ktzaFQHe9i7NqzcAUkc5SeNXsVoYfVNxd1AwDgbw2up8UdMWq91B"
 addressLength: 1
 }
 }
 coins {
 coinCode: "TRON"
 active: true
 accounts {
 hdPath: "M/44\'/195\'/0\'"
 xPub: "xpub6CNbvRPo2jr5oMHPQxUWVpzYAG6HykWahLiQnkxdxcDoxDS6Yje1CUDhD49jxEno9kdS6EB4VTgXohA9ppmqk3wvH4W54nJRZk477Vnpupz"
 addressLength: 1
 }
 }
 coins {
 coinCode: "XRP"
 active: true
 accounts {
 hdPath: "M/44\'/144\'/0\'"
 xPub: "xpub6C438jHkPCDoEy5jAH4a9hBtYrcprSwGvEA8L5HNhqDyJa1WZPpZXj9DNNtsRjcHxzsuZJq18sMSkbmqYKqpDacP8aMSK63ExzX2bPoMdAo"
 addressLength: 1
 }
 }
 coins {
 coinCode: "DOT"
 active: true
 accounts {
 hdPath: "//polkadot"
 xPub: "xpub69XF3sp9ePvENHmDenwg9humjwqtKuZbZ8go4p8qTpQWn1SFzXTT8DhMtPX66T6sPpaZjtdQrB7cqu3mcrn7Dch85GVrc9grt3n3AvC9BVb"
 addressLength: 1
 }
 }
 }
 }
 coldVersion: 10001
 deviceType: "keystone Essential"

If you have any questions or suggestions about this tool, submit your pull request or issue here: [https://github.com/KeystoneHQ/KeystoneQRVerifier](https://github.com/KeystoneHQ/KeystoneQRVerifier)

## Final Words

You’ve doubtlessly heard you should have at least one [hardware wallet](https://keyst.one/), but the transparency of QR code data transmissions is a lesser-known aspect of cold storage that every Hodler should be aware of. Pass on the information and let us know what you think in the comments below!
> Special thanks to [@fnord123](https://github.com/fnord123) for his contribution to this QR code verifier!
