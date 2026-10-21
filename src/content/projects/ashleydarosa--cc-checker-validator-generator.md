---
repo: "ashleydarosa/CC-Checker-Validator-Generator"
name: "CC-Checker-Validator-Generator"
description: "Python CLI toolkit for payment QA: generate and validate synthetic Luhn-valid card numbers by brand, BIN, or custom pattern. Supports Visa, Mastercard, Amex, Discover and more, plus BIN/IIN lookup, expiry/CVV checks, bulk validation, masking, and TXT/CSV/JSON export. Offline and cross-platform."
readmeQualityOk: true
url: "https://github.com/ashleydarosa/CC-Checker-Validator-Generator"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["bin-checker", "card-number", "cardvalidator", "cc-checker", "cc-checker-bot", "cc-checker-live", "checker-card", "credit-card", "credit-card-checker", "credit-card-generator"]
stars: 201
forks: 44
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-09-21T19:25:00Z"
lastCommitAt: "2026-10-21T23:35:44Z"
lastReleaseAt: "2026-09-25T02:21:18Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 27
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/044f9e9a1d098cf589e7bc4fe783f4bd870df512b50150d3a5dd6dde78f2cb92/ashleydarosa/CC-Checker-Validator-Generator"
---

# CC-Checker-Validator-Generator
Python CLI toolkit for payment QA: generate and validate synthetic Luhn-valid card numbers by brand, BIN, or custom pattern. Supports Visa, Mastercard, Amex, Discover and more, plus BIN/IIN lookup, expiry/CVV checks, bulk validation, masking, and TXT/CSV/JSON export. Offline and cross-platform.
---

# CC Checker

**Card Generator & Validator — Luhn, BIN/IIN Lookup, Bulk QA Testing**

---

*Developer toolkit for payment integration testing: real Luhn validation, synthetic test-card<br>generation by brand/BIN/pattern, offline BIN/IIN lookup and multi-threaded bulk checks —<br>built for QA against Stripe, Adyen, Braintree or your own gateway sandbox.*

[Features](#features) · [How Luhn Works](#how-luhn-works) · [Brands & BINs](#brands--bin-support) · [Getting Started](#getting-started) · [Configuration](#configuration) · [Usage](#usage) · [FAQ](#faq)

---

> ⚠️ **For testing only.** Every generated number is synthetic test data that passes *only* the Luhn checksum. These are not real payment cards and hold no monetary value. Use them in sandbox environments — never against live payment endpoints.

---

## Features

### Validation Engine
| Feature |…
