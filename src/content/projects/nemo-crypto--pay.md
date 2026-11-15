---
repo: "nemo-crypto/pay"
name: "pay"
description: "Go payment integration lab featuring WeChat Pay (Mini Program, JSAPI, H5, Native, App), Stripe, Allscale and fiat on-ramps, with verified webhooks, idempotency, reconciliation, SQLite ledger and step-by-step tutorials."
originalDescription: "Go payment integration lab featuring WeChat Pay (Mini Program, JSAPI, H5, Native, App), Stripe, Allscale and fiat on-ramps, with verified webhooks, idempotency, reconciliation, SQLite ledger and step-by-step tutorials."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/nemo-crypto/pay"
language: "Go"
languages: ["Go"]
languagePcts: [81]
topics: ["cryptocurrency", "fiat-onramp", "golang", "idempotency", "moonpay", "payment-gateway", "sqlite", "stablecoin", "stripe", "stripe-checkout"]
stars: 20
forks: 15
openIssues: 0
closedIssues: 0
watchers: 10
contributors: 2
recentReleases: 0
createdAt: "2026-11-09T14:28:03Z"
lastCommitAt: "2026-11-15T11:18:49Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 79
undervaluedScore: 31
maintainers: ["cursorOne1111", "nemo-crypto"]
openGraphImageUrl: "https://opengraph.githubassets.com/eebcb1ec603e03423cbd9b5211f49306b2a8102d62161e430b476b0836089c00/nemo-crypto/pay"
---

# Pay Lab — Go Seven-Channel Payment Integration and Full-Process Tutorial

A Go + SQLite payment lab that uniformly introduces seven integration methods: **WeChat Pay, Stripe, Allscale, MoonPay, Alchemy Pay, Transak, and Ramp**. It covers everything from creating orders, opening the checkout counter, and identity/payment verification, to Webhook signature verification, status queries, arrival confirmation, and exception recovery, with code, mock demonstrations, and step-by-step tutorials for each.

**No real keys or merchant accounts are required by default; all seven can run locally.** The real API adapters and the mocks share the same order processing flow. Locally, no money is charged, no ID documents are uploaded, and no on-chain transactions are initiated. The real merchant APIs have not yet been acceptance-tested with public-network transactions.

## 1. How to choose among the seven methods

| Method | How the user pays | This project's business result | Integration focus | Standalone tutorial |
| --- | --- | --- | --- | --- |
| **WeChat Pay** | Mini Program, WeChat web pages, H5, PC QR code scan, App | After payment in CNY, platform points are credited | Scene and…
