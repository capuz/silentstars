---
repo: "grindsa/dkb-robo"
name: "dkb-robo"
description: "library to access the internet banking area of  \"Deutsche Kreditbank\" to get account information and transactions"
readmeQualityOk: true
url: "https://github.com/grindsa/dkb-robo"
language: "HTML"
languages: ["HTML"]
languagePcts: [86]
topics: ["python", "dkb", "scrap", "robo", "mechanize", "deutsche", "kreditbank"]
stars: 199
forks: 42
openIssues: 6
closedIssues: 53
watchers: 12
contributors: 19
recentReleases: 0
createdAt: "2018-01-20T22:36:02Z"
lastCommitAt: "2026-11-16T11:56:42Z"
lastReleaseAt: "2021-04-01T15:41:32Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 87
undervaluedScore: 31
maintainers: ["grindsa", "snaker89"]
openGraphImageUrl: "https://opengraph.githubassets.com/e5233d29e443f2d0ad1a3fbb66bf727ecc1a8dbd3f5a534d05c5e6400bf10d03/grindsa/dkb-robo"
---

# dkb-robo

dkb-robo is a python library to access the internet banking area of ["Deutsche Kreditbank"](https://banking.dkb.de) to fetch

- account information and current balances
- transactions from creditcards and checking accounts (Girokonten)
- query the content of "DKB Postbox"
- get standing orders (Dauerauftrag)
- get information about credit limits and exemption orders (Freistellungsauftrag)

Starting from version 0.9 dkb-robo can handle the 2nd factor DKB introduced to fulfill the [PSD2 obligations](https://en.wikipedia.org/wiki/Payment_Services_Directive). Starting from September 2019 logins must be confirmed by either

- the blue [DKB-Banking app](https://play.google.com/store/apps/details?id=com.dkbcodefactory.banking)
- Insertion of a TAN created by the [DKB TAN2Go app](https://play.google.com/store/apps/details?id=com.starfinanz.mobile.android.dkbpushtan)

The introduction of a 2nd factor does limit the usage of dkb-robo for automation purposes. DKB is unfortunately ~~not willing/ not able~~ not allowed to open their PSD2-API for non-Fintechs. I discussed this with them for weeks at some point they stopped responding to my emails so I gave up.

DKB introduced a new…
