---
repo: "stafyniaksacha/facturx"
name: "facturx"
description: "Generate and extract Factur-X and Order-X invoices"
readmeQualityOk: true
url: "https://github.com/stafyniaksacha/facturx"
homepage: "https://stafyniaksacha.github.io/facturx/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["e-invoicing", "en16931", "european", "factur-x", "order-x", "pdf", "xml"]
stars: 25
forks: 8
openIssues: 3
closedIssues: 12
watchers: 1
contributors: 4
recentReleases: 1
createdAt: "2024-08-24T17:45:30Z"
lastCommitAt: "2026-11-11T19:44:41Z"
lastReleaseAt: "2026-08-28T17:44:19Z"
status: "thriving"
tags: []
healthScore: 84
undervaluedScore: 57
maintainers: ["stafyniaksacha", "dependabot[bot]", "nebelshaeuser"]
openGraphImageUrl: "https://opengraph.githubassets.com/8d99a1ba6120859895d4fd8fcbaed367dc9182d1ffbe2587f7a0e5b1e8a2b741/stafyniaksacha/facturx"
---

# Factur-X and Order-X JS library

Generate, extract, parse and validate Factur-X / ZUGFeRD and Order-X e-invoices in TypeScript, using [pdf-lib](https://github.com/Hopding/pdf-lib) and [libxml2-wasm](https://github.com/jameslan/libxml2-wasm).

Conforms to **Factur-X 1.09 / ZUGFeRD 2.5** (the EN 16931 European e-invoicing standard, CII D22B).

> 📖 **[Read the full documentation →](https://stafyniaksacha.github.io/facturx/)**

## Features

- 📎 **Generate** a PDF-A/3 invoice by embedding the XML into a PDF — `generate`
- 📤 **Extract** the XML back out of a Factur-X / Order-X / ZUGFeRD PDF — `extract`
- 🔁 **Parse** an XML invoice into a fully-typed model — `xmlToInvoice`
- 🧱 **Build** a Cross Industry Invoice model and serialize it to XML — `invoiceToXml`
- ✅ **Validate** against the official 1.09 **XSD**, and optionally the **Schematron** EN 16931 `BR-*` business rules and code lists — `check` (`schematron: true`) / `validateSchematron`
- 🗂 All five Factur-X profiles: `minimum`, `basicwl`, `basic`, `en16931`, `extended`

See [Profiles & flavors](https://stafyniaksacha.github.io/facturx/guide/profiles-and-flavors) for the supported flavors, levels and autodetection rules.

##…
