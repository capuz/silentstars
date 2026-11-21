---
repo: "adamdecaf/trustprune"
name: "trustprune"
description: "Audit and trim CA trust stores on your system and apps: list, backup, whitelist, restore."
readmeQualityOk: true
url: "https://github.com/adamdecaf/trustprune"
homepage: "https://trustprune.com"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["x509", "certificate-authority", "certificate-store", "certificates", "nss", "security", "tls", "trust-store", "whitelist", "cacerts"]
stars: 34
forks: 5
openIssues: 11
closedIssues: 153
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2016-09-07T20:57:06Z"
lastCommitAt: "2026-11-21T13:28:38Z"
lastReleaseAt: "2018-02-14T01:11:46Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 61
maintainers: ["adamdecaf", "adamdecaf-bot", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba1055ed0787537d6ab6880c111bf9708b7c907848fb5b8f5514ed71e95d8bcc/adamdecaf/trustprune"
---

# trustprune

**Your machine trusts hundreds of Certificate Authorities by default. Most of them you have never heard of. One bad CA is enough to break HTTPS for everyone who trusts it.**

In October 2026, the private keys of eight [eMudhra](https://emudhra.com/en/post/certificate-security-incident) intermediate CAs were compromised. Six of them could issue TLS certificates for any website. [Apple blocked](https://support.apple.com/en-us/149555) those certificates in Safari and system frameworks starting 19 October 2026, and later blocked the emSign ECC Root CA - G3. Command-line tools that still read `/etc/ssl/cert.pem` (git, curl, python3, and others) kept trusting the compromised chains until users removed the roots by hand — and a subsequent macOS update can restore Apple's copy of that file. The pattern is old: DigiNotar, Symantec, WoSign, and many others. The CA system still ships with more trust than most people need, and removing it is still harder than it should be.
