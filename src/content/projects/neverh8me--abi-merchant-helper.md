---
repo: "neverh8me/abi-merchant-helper"
name: "abi-merchant-helper"
description: "ABI: Merchant Helper - Field Merchant mystery cargo helper for Arena Breakout: Infinite: sound + screen recognition with red-item odds and payback."
readmeQualityOk: true
url: "https://github.com/neverh8me/abi-merchant-helper"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [53, 29]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-23T08:22:09Z"
lastCommitAt: "2026-11-07T16:11:51Z"
lastReleaseAt: "2026-10-25T00:17:52Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 51
maintainers: ["neverh8me"]
openGraphImageUrl: "https://opengraph.githubassets.com/70d0dd7f56612fff23be18c2991882c212550f96d6352ea021f1f11239ecc95d/neverh8me/abi-merchant-helper"
---

# ABI: Merchant Helper

**ABI: Merchant Helper** is a local web app for *Arena Breakout: Infinite*. It helps you work out what is inside the Field Merchant's mystery cargo before you buy it.

The app listens to the game's sound when you drag a cargo, and it watches the merchant window. From these it shows:

- which items the cargo can contain, with a percentage for each;
- the chance that the cargo holds a red (legendary) item.

## Features

- **Sound recognition.** When you drag a cargo, the game plays a pickup sound that depends on the item inside. ABI: Merchant Helper matches that sound against a library of reference game sounds and narrows down the possible items.
- **Red chance.** The probability combines four inputs: the sound, the cargo size, the cargo label (Common / Uncommon / Rare Mystery Cargo or a category like *Tools*) and the price. Every merchant pool carries the label of its cargo, so the odds come from exactly the pools of that label and price. Reds mostly drop from Mystery Cargo, but also from some rarer category cargo (Rare Collectibles, Rare Medical Supplies, Uncommon Military Items…).
- **Automatic merchant map.**
  - Open the merchant and scroll through the…
