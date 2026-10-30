---
repo: "LandrixSoftware/ZUGFeRD-for-Delphi"
name: "ZUGFeRD-for-Delphi"
description: "ZUGFeRD / Factur-X Implementation for Delphi"
readmeQualityOk: true
url: "https://github.com/LandrixSoftware/ZUGFeRD-for-Delphi"
language: "Pascal"
languages: ["Pascal", "XSLT"]
languagePcts: [73, 26]
topics: ["delphi", "zugferd", "factur-x", "invoice", "e-invoice", "xml", "pdf", "en16931", "ebusiness", "invoicing"]
stars: 23
forks: 10
openIssues: 0
closedIssues: 22
watchers: 7
contributors: 5
recentReleases: 0
createdAt: "2018-03-07T09:44:21Z"
lastCommitAt: "2026-10-30T10:24:09Z"
lastReleaseAt: "2024-08-12T07:59:25Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 99
undervaluedScore: 65
maintainers: ["landrix", "PeterSawatzki-MGGM"]
openGraphImageUrl: "https://opengraph.githubassets.com/18e8bfb466223982112b9ad4b5e593b7ce3c69e92191c62a30658d4ff19d5ba7/LandrixSoftware/ZUGFeRD-for-Delphi"
fundingLinks: ["GITHUB:https://github.com/landrix"]
discussionCount: 4
---

# ZUGFeRD-for-Delphi

Read and write electronic invoices in Delphi: ZUGFeRD, its successor Factur-X, and the German
XRechnung format. The library works on a single invoice object — you fill it in, then decide which
version, profile and syntax to write it as.

This is a port of [ZUGFeRD-csharp](https://github.com/stephanstapel/ZUGFeRD-csharp) by Stephan
Stapel. The port is free to go its own way where that yields the better result; see
[Relationship to the C# library](#relationship-to-the-c-library).

## Formats and versions

| Format | write | read |
|---|:---:|:---:|
| ZUGFeRD 2.3 / Factur-X 1.0 — CII (Cross Industry Invoice) | yes | yes |
| XRechnung 3.x — UBL (Universal Business Language) | yes | yes |
| XRechnung — CII | yes | yes |
| ZUGFeRD 2.0 — CII | yes | yes |
| ZUGFeRD 1.0 (`rsm:CrossIndustryDocument`) | yes | yes |

UBL is available for version 2.3 only, and there only for the XRechnung profiles — that is what the
format is defined for. Everything else is CII.

## Profiles

`Minimum`, `BasicWL`, `Basic`, `Comfort` (EN 16931), `Extended`, `XRechnung1`, `XRechnung` and
`EReporting`. The profile decides which elements end up in the document: writing is filtered through…
