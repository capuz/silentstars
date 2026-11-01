---
repo: "k3karthic/totp-generator-web"
name: "totp-generator-web"
description: "Generate TOTP codes from your browser"
readmeQualityOk: true
url: "https://github.com/k3karthic/totp-generator-web"
homepage: "https://totp.maverickgeek.xyz"
language: "HTML"
languages: ["HTML"]
languagePcts: [98]
topics: ["totp", "authenticator", "tor", "tails"]
stars: 14
forks: 8
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-04-18T11:40:15Z"
lastCommitAt: "2026-11-01T10:45:26Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 82
undervaluedScore: 62
maintainers: ["k3karthic", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e28b6ebe3c12b9e0fbbcf7fdd5bf18bc8282c6365e978910bdfadeecc6cf1eef/k3karthic/totp-generator-web"
---

# TOTP Web Generator

Generate [TOTP](https://en.wikipedia.org/wiki/Time-based_One-Time_Password) codes right from your browser for Two-Factor Authentication (2FA). Compatible with authenticator applications like [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en_IN&gl=US), [Authy](https://authy.com/) and [Microsoft Authenticator](https://www.microsoft.com/en-in/account/authenticator).

**Demo**,
* [Netlify](https://www.netlify.com/): [totp.maverickgeek.xyz](https://totp.maverickgeek.xyz/)
* [CloudFlare](https://cloudflare.com): [totp-generator-web.pages.dev](https://totp-generator-web.pages.dev/)

## Design

The application only uses the JavaScript APIs provided by the browser. It consists of only a single HTML file, which allows it to work offline by running it from disk. The design allows it to work without installation and in environments like [Tails](https://tails.boum.org/).

**Assumption:** Possible to input the TOTP key into the web application's input field. (e.g, Copy/Paste or Manual typing using a hardware/virtual keyboard based on the threat model).

## Settings

The default settings are compatible with…
