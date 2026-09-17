---
repo: "SergeiPatiakin/dobkapapp"
name: "dobkapapp"
description: "Desktop app for automating passive income tax filings in Serbia"
readmeQualityOk: true
url: "https://github.com/SergeiPatiakin/dobkapapp"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [63, 36]
stars: 31
forks: 0
openIssues: 3
closedIssues: 6
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2023-01-04T20:21:33Z"
lastCommitAt: "2026-09-17T08:50:29Z"
lastReleaseAt: "2025-01-23T22:28:20Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 69
undervaluedScore: 28
maintainers: ["SergeiPatiakin"]
openGraphImageUrl: "https://opengraph.githubassets.com/609b0c14644f6bb825ef076b3e2622db61c8cedb9215566740b6a5f731ec2654/SergeiPatiakin/dobkapapp"
---

## Dobkapapp

Dobkapapp is a desktop application for automating PP-OPO passive income tax filings in Serbia. It can
import dividend and interest data from InteractiveBrokers activity statements in your email inbox and
produce PP-OPO XML tax filings ready to be uploaded to ePorezi.

## Features

- Supports Interactive Brokers CSV format
- Reads from your email inbox through IMAP
- Supports optional filtering by sender, subject and attachment name
- Can handle statements from multiple brokerage accounts in the same inbox
- Allows you to track filing statuses
- Allows you to track payment references between filing and paying

### Tax code features
  - Handles withholding tax deductions
  - Calculates filing/payment deadlines based on weekends and public holidays
  - Supports multiple currencies by scraping exchange rates off the NBS public website and using
cross rates from statements

### Platforms
  - Windows x64
  - Mac arm64 (Apple Silicon)

## User guide
- Before using Dobkapapp you will need to configure your brokerage account to send daily activity statements via email. This is how to do it for Interactive Brokers:
- Download and install a Dobkapapp binary suitable for your…
