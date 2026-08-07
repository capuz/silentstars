---
repo: "1RB/cheki"
name: "cheki"
description: "free ethiopian receipt verification. no signup. no api key. no scam."
readmeQualityOk: true
url: "https://github.com/1RB/cheki"
homepage: "https://chekiapp.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [77]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-06-18T14:02:41Z"
lastCommitAt: "2026-08-07T05:14:40Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 55
maintainers: ["1RB"]
openGraphImageUrl: "https://opengraph.githubassets.com/546e4ebfc82d26c8e9fda1adc166dac697cd322eded1a0378acc0178aa8635dc/1RB/cheki"
---

# cheki

**Free, open-source Ethiopian bank receipt verification. No signup. No API key. No scam.**

cheki verifies Ethiopian bank and mobile money receipts by fetching public bank endpoints. The data is free. The code is MIT licensed. No one should charge you for accessing public bank data.

## Why?

check.et charges 499 ETB/month. verify.et charges $20-40/month. Both verify receipts by hitting the same public bank URLs cheki uses for free. cheki exposes this and provides the same service for free, forever.

## Supported banks

**10 live banks** · 21 in research

| Bank | Code | Type | Status | Requires account | Geo-blocked |
|------|------|------|--------|------------------|-------------|
| Commercial Bank of Ethiopia | `cbe` | Bank | ✅ Live | Yes (last 8 digits) | No |
| Telebirr (Ethio Telecom) | `telebirr` | Mobile money | ✅ Live | No | Yes (Ethiopia only) |
| Bank of Abyssinia | `boa` | Bank | ✅ Live | Yes (last 5 digits) | No |
| M-Pesa Ethiopia | `mpesa` | Mobile money | ✅ Live | No | Yes (Ethiopia only) |
| Dashen Bank | `dashen` | Bank | ✅ Live | No | No |
| Awash Bank | `awash` | Bank | ✅ Live | No | No |
| Zemen Bank | `zemen` | Bank | ✅ Live | No | No |
| CBE Birr |…
