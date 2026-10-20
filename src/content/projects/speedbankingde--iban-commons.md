---
repo: "SpeedBankingDe/iban-commons"
name: "iban-commons"
description: "Ultra-fast, allocation-free, zero-dependency IBAN & BIC toolkit for Java 8+"
readmeQualityOk: true
url: "https://github.com/SpeedBankingDe/iban-commons"
homepage: "https://www.speedbanking.de/"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["bic", "clean-code", "iban", "java", "opensource", "validation", "commons-validator", "iban4j", "banking", "fintech"]
stars: 13
forks: 2
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 3
recentReleases: 8
createdAt: "2025-11-11T18:00:58Z"
lastCommitAt: "2026-10-19T20:47:57Z"
lastReleaseAt: "2026-09-11T14:46:05Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 99
undervaluedScore: 76
maintainers: ["spannm", "jschmied"]
openGraphImageUrl: "https://opengraph.githubassets.com/dbbc86c484d62040e38852e84bf0998eb98e3235ee2f85413ae49f86680a4f74/SpeedBankingDe/iban-commons"
discussionCount: 3
---

# IBAN Commons

**Ultra-fast, allocation-free, zero-dependency IBAN & BIC toolkit for Java 8+**

**[🚀 Quick Start](#-quick-start) • [📖 Examples](#-code-examples) • [📊 Benchmarks](#-performance-benchmarks) • [📚 Javadoc](https://javadoc.io/doc/de.speedbanking/iban-commons/latest/) • [💬 Discussions](https://github.com/SpeedBankingDe/iban-commons/discussions)**

`iban-commons` is a Java IBAN validation library and BIC validator for Java 8+, providing fast and reliable parsing, validation, and formatting of International Bank Account Numbers (IBAN) and Business Identifier Codes (BIC/SWIFT codes).
Designed for high-performance enterprise applications, it covers 127 countries, is Android-compatible (API 21+), and has zero compile or runtime dependencies outside the Java Standard Library.

An optional [`iban-commons-de-checkdigit`](#german-account-check-digit-iban-commons-de-checkdigit) module is available for verifying German domestic account number ("Kontonummer") check digits against a Bankleitzahl (BLZ) — standalone and independent of `iban-commons`.

An optional [`iban-commons-bankdata`](#bank-data-lookup-iban-commons-bankdata) module resolves the BIC and bank name behind an…
