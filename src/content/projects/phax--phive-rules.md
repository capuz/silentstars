---
repo: "phax/phive-rules"
name: "phive-rules"
description: "eInvoice Validation rules for the phive engine - for many different countries and jurisdictions"
readmeQualityOk: true
url: "https://github.com/phax/phive-rules"
language: "Java"
languages: ["Java"]
languagePcts: [82]
topics: ["xrechnung", "simplerinvoicing", "ubl", "cii", "ebinterface", "energie-efactuur", "ehf", "en16931", "facturae", "fattura-pa"]
stars: 54
forks: 16
openIssues: 1
closedIssues: 76
watchers: 10
contributors: 3
recentReleases: 0
createdAt: "2020-06-04T20:00:23Z"
lastCommitAt: "2026-11-13T11:21:28Z"
lastReleaseAt: "2020-11-02T22:05:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 54
maintainers: ["phax", "gregjotau"]
openGraphImageUrl: "https://opengraph.githubassets.com/768c05aec107525cedff9797a9767f2943a983465f82104b8d90b5610c74b894/phax/phive-rules"
discussionCount: 6
---

# PHIVE rules

> If this project saved you some time or made your day a little easier, a star would mean a lot — it helps others find it too.

A set of preconfigured rules for PHIVE (Philip Helger Integrative Validation Engine) - pronounced `[ˈfaɪv]`.

This project is part of my Peppol solution stack. See https://github.com/phax/peppol for other components and libraries in that area.

All projects found in here rely on the PHIVE validation engine provided by https://github.com/phax/phive

The foundational, XSD-only document formats live in the separate repository [phive-rules-foundations](https://github.com/phax/phive-rules-foundations) since v4.5.0.
Their Maven and VES coordinates are unchanged.
* pure UN/CEFACT CII
* pure OASIS UBL
* ebInterface (AT)
* Facturae (ES)
* FatturaPA (IT)
* Finvoice (FI)
* KSeF (PL)
* OECD Common Reporting Standard (CRS)
* OSA (HU)
* TEAPPS (FI) 

The outdated rule sets live in the separate repository [phive-rules-legacy](https://github.com/phax/phive-rules-legacy) since v4.6.0.
Their Maven and VES coordinates are unchanged.
* older Peppol rule sets (`phive-rules-peppol-legacy`)
* legacy Danish OIOUBL rule sets - 1.12.3 up to 1.17.1, 2.0.2 and 3.0.1…
