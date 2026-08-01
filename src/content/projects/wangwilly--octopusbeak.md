---
repo: "WangWilly/OctopusBeak"
name: "OctopusBeak"
description: "a personal banking automation project. downloads or parses account, card, loan, fund, and trading records into local files."
readmeQualityOk: true
url: "https://github.com/WangWilly/OctopusBeak"
homepage: "https://wangwilly.github.io/OctopusBeak/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [79]
topics: ["ledger", "libretto", "bank", "automation", "taiwan", "statements"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-23T02:22:16Z"
lastCommitAt: "2026-08-01T06:15:14Z"
lastReleaseAt: "2026-07-08T01:54:00Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 61
maintainers: ["WangWilly"]
openGraphImageUrl: "https://opengraph.githubassets.com/d42d67563faa5b51bfc668a8fa16be057f6cd115af67123dfd6d8252d289c26d/WangWilly/OctopusBeak"
---

# OctopusBeak

[繁體中文版](https://github.com/WangWilly/OctopusBeak/blob/HEAD/README.zh-TW.md)

Personal banking and E-Invoice automation with local portfolio and spending dashboards for Taiwan services.

OctopusBeak uses Libretto to run browser workflows for bank portals, download statement data, normalize files into CSV/JSON outputs, import them into a local SQLite ledger, and inspect the result in Svelte dashboards.

All downloaded statements, browser sessions, ledger databases, credentials, and local automation config are sensitive local data. Keep `downloads/`, `data/`, `.libretto/`, `.env`, `.env.local`, `settings.json`, `credentials.json`, and `~/Library/Application Support/OctopusBeak/` out of commits and shared archives.

## What It Does

- Runs guided browser automations for supported Taiwan banking portals.
- Pauses for manual steps such as CAPTCHA, OTP, email verification, or certificate selection.
- Provides an in-app `#/automation` panel for credentials, task runs, logs, retries, and human assist.
- Saves clean local statement exports under `downloads/<workflow-name>/`.
- Imports downloaded CSV files into `data/ledger/ledger.sqlite`.
- Fetches personal E-Invoices in a…
