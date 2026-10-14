---
repo: "BitBoxSwiss/bitbox02-firmware"
name: "bitbox02-firmware"
description: "Firmware code of the BitBox02 hardware wallet"
readmeQualityOk: true
url: "https://github.com/BitBoxSwiss/bitbox02-firmware"
homepage: "https://bitbox.swiss/bitbox02"
language: "C"
languages: ["C", "Rust"]
languagePcts: [58, 30]
stars: 387
forks: 153
openIssues: 32
closedIssues: 89
watchers: 20
contributors: 42
recentReleases: 0
createdAt: "2019-06-06T09:00:23Z"
lastCommitAt: "2026-10-14T08:57:35Z"
lastReleaseAt: "2019-10-30T10:54:41Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 94
undervaluedScore: 39
maintainers: ["benma-agent", "benma", "NickeZ"]
openGraphImageUrl: "https://opengraph.githubassets.com/8e432c36db3454bcb1b0c5196e9525fab14a40b2d6f3688d0c9212c83533b0b6/BitBoxSwiss/bitbox02-firmware"
---

The BitBox02 is a hardware wallet that simplifies secure handling of crypto coins through storing
private keys and signing transactions. The content of this repository is the bootloader and firmware
used on the device. The BitBox02 is meant to be used primarily with the
[BitBoxApp](https://github.com/BitBoxSwiss/bitbox-wallet-app), although third party integration is
possible through the BitBox02 API.

The main functionality of the firmware is the following:

* Safely receive and send coins.
* Interacting with the user through touch sliders and a display.
* Back up the seed to a microSD card.
* Back up the seed by displaying the BIP39 mnemonic encoding on the screen.
* Import 12, 18 or 24 word BIP39 mnemonics
* Generate a random seed from multiple strong sources of entropy.
* Protect the seed from attackers.
* Derive keys from the seed according to BIP39 and BIP32.
* Return the extended public key for a keypath so that the app can find all unspent transaction
  outputs.
* Display the receive address for the keypath, coin and script/address type.
* Display the receive address, transaction amount and network fee and sign each input after
  confirmation.

## Architecture

The main…
