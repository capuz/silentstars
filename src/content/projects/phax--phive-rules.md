---
repo: "phax/phive-rules"
name: "phive-rules"
description: "eInvoice Validation rules for the phive engine - for many different countries and jurisdictions"
readmeQualityOk: true
url: "https://github.com/phax/phive-rules"
language: "Java"
languages: ["Java"]
languagePcts: [86]
topics: ["xrechnung", "simplerinvoicing", "ubl", "cii", "ebinterface", "energie-efactuur", "ehf", "en16931", "facturae", "fattura-pa"]
stars: 47
forks: 13
openIssues: 3
closedIssues: 60
watchers: 7
contributors: 3
recentReleases: 0
createdAt: "2020-06-04T20:00:23Z"
lastCommitAt: "2026-09-01T08:51:39Z"
lastReleaseAt: "2020-11-02T22:05:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 55
maintainers: ["phax", "gregjotau"]
openGraphImageUrl: "https://opengraph.githubassets.com/86eb6c5faeafcb8b96d7b6fb84bb081e6266c130dc5421ca90219d1e794d5429/phax/phive-rules"
discussionCount: 5
---

# PHIVE rules

> If this project saved you some time or made your day a little easier, a star would mean a lot — it helps others find it too.

A set of preconfigured rules for PHIVE (Philip Helger Integrative Validation Engine) - pronounced `[ˈfaɪv]`.

This project is part of my Peppol solution stack. See https://github.com/phax/peppol for other components and libraries in that area.

All projects found in here rely on the PHIVE validation engine provided by https://github.com/phax/phive

The foundational, XSD-only document formats live in the separate repository [phive-rules-foundations](https://github.com/phax/phive-rules-foundations) since v4.5.0. Their Maven and VES coordinates are unchanged.
* pure UN/CEFACT CII
* pure OASIS UBL
* ebInterface (AT)
* Facturae (ES)
* FatturaPA (IT)
* Finvoice (FI)
* KSeF (PL)
* OSA (HU)
* TEAPPS (FI) 

This project is divided into sub-projects each keeping tracking of one document type set:
* phive-rules-api - Shared UBL/CII helper classes; depends on `phive-rules-foundation-api` (from [phive-rules-foundations](https://github.com/phax/phive-rules-foundations)) which provides the validation rules registration SPI and the core helpers
*…
