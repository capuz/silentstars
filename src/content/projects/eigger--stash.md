---
repo: "eigger/stash"
name: "stash"
description: "A self-hosted home inventory and barcode manager. Track, restock, and manage your belongings with continuous scanning and smart dashboards."
readmeQualityOk: true
url: "https://github.com/eigger/stash"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["barcode-scanner", "inventory-management", "inventory-tracker", "qr-code", "self-hosted", "pwa"]
stars: 7
forks: 4
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-07-11T12:57:00Z"
lastCommitAt: "2026-11-03T12:47:32Z"
lastReleaseAt: "2026-07-12T13:02:55Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 60
maintainers: ["eigger", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c2bb2ccd33e6cf6fd238684d4d57e2b1f2458d7aa7bff1f0ce8e05226e0f6ed/eigger/stash"
fundingLinks: ["GITHUB:https://github.com/eigger"]
---

# Stash

**[한국어 README](https://github.com/eigger/stash/blob/HEAD/README.ko.md)**

Self-hosted home inventory for a household that works by **labels and a scanner**: put a barcode or QR on a thing, scan to restock or consume, and when stock changes an optional webhook updates a printer or Home Assistant label. Track low stock and expiry from the dashboard without turning Stash into a meal planner.

> Current release: **v0.7.4**

Docs: [`docs/ROADMAP.md`](https://github.com/eigger/stash/blob/HEAD/docs/ROADMAP.md)

---

## Features

- Nested locations (rooms / shelves / boxes) rendered as an indented tree, and categories
- Items with quantity, low-stock threshold, expiry & warranty dates, price, notes — name and unit are inline-editable right on the item detail page. An optional photo can be taken *or* picked from the gallery right in the "add manually" form (auto-resized on upload), and price uses a default currency (KRW/USD, set once in Settings) instead of typing it on every item
- Unified `Item` + `Barcode` model — existing UPC/EAN, self-issued internal QR (deep-links to the item), a Matter pairing code, or a manually-entered serial number, all as one barcode type, each with its…
