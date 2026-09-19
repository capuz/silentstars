---
repo: "Tech-Melon/FlapFeeInfo"
name: "FlapFeeInfo"
description: "Butterfly Platform 8888 Token Tax Details Google Plugin, Supporting GMGN and Debot"
originalDescription: "蝴蝶平台8888代币税收详情谷歌插件，支持gmgn和debot"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Tech-Melon/FlapFeeInfo"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [94]
stars: 23
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-06-25T17:02:18Z"
lastCommitAt: "2026-09-19T08:14:41Z"
lastReleaseAt: "2026-08-06T17:27:08Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 89
undervaluedScore: 50
maintainers: ["Tech-Melon"]
openGraphImageUrl: "https://opengraph.githubassets.com/c9a73a856e525c7b8b3e71bc4a04936d9681fbce061a3f49f6ab85eb9765488e/Tech-Melon/FlapFeeInfo"
---

# Technical Melon FlapFeeInfo

## Icon Legend

The plugin displays tax distribution ratios (only shown if present):

- 💎`N%`: Holder Dividend
- 👨‍🍳`N%`: Creator/Marketing Tax
- 🎁`N%`: vault gift
- 🎓`N%`: Giggle Charity (Four.meme)
- 💛`N%`: Binance Charity (Four.meme)
- 🔥`N%`: Burn
- 💧`N%`: Liquidity Reflux
- ❓️: Unknown / No valid allocation found on-chain

**100% allocation only shows the type icon** (no `100%` written), e.g., `💎`, `🎁→BNB`; non-100% still includes percentage, e.g., `💎90%`.

When multiple items are non-zero, display the complete string, e.g., `💎90%→SPCXB👨‍🍳10%`. Hover to see buy/sell tax rates.

**The largest allocation segment will always be labeled with `→SYMBOL`** (the item with the highest bps among dividend/marketing/vault/burn/LP), not omitted even if the same as the pool quote, to easily confirm the distribution token:

- 💎 corresponds to `dividendToken` (falls back to quote / BNB if empty)
- 👨‍🍳🎁💧 corresponds to pool `quoteToken` (BNB if empty)
- 🔥 corresponds to the tax token itself

If the card already has pool/quote information (BNB, USDT, NVDAB, etc.), the badge will be synthesized:

- `{🦋|🖐️|🪙}QUOTE | fee`: Flap (7777/8888) uses…
