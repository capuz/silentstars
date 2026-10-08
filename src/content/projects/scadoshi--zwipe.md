---
repo: "scadoshi/zwipe"
name: "zwipe"
description: "a swipeable magic the gathering deck building application in Rust"
readmeQualityOk: true
url: "https://github.com/scadoshi/zwipe"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
topics: ["deck", "deck-building", "magic-the-gathering", "magicthegathering", "mtg", "swipe-interface", "trading-card-game", "tradingcardgame", "swipe-able", "swipe"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-07-28T03:41:16Z"
lastCommitAt: "2026-10-08T10:52:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 62
maintainers: ["scadoshi"]
openGraphImageUrl: "https://opengraph.githubassets.com/98297dc7be2a278a37566de35be3d9dbc962838412f920787ca1bcfee31b3197/scadoshi/zwipe"
fundingLinks: ["GITHUB:https://github.com/scadoshi", "BUY_ME_A_COFFEE:https://buymeacoffee.com/scadoshi", "CUSTOM:https://buy.stripe.com/5kQdRa5tUeNm9pd8BY9Zm00"]
---

# Zwipe

Mobile-first Magic: The Gathering deck builder with swipe-based navigation.

**Status:** live on the iOS App Store and Google Play. Deck building is in the app; [zwipe.net](https://zwipe.net) is the site.

## Tech stack

Full-stack Rust:
- **zwipe-core**: shared domain types, validation, business rules, HTTP contracts; the single source of truth
- **zwipe-components**: shared Dioxus UI components and CSS (themes, changelog, card details) consumed by the app, the site, and the owner's portfolio
- **zwipe-client**: typed API client over the shared contracts, one call function for every endpoint; used by both the app and the site
- **zerver**: Axum REST API, PostgreSQL, SQLx, JWT auth, Scryfall sync
- **zwiper**: Dioxus iOS and Android app, swipe gestures, 31 themes, dark mode
- **zite**: Dioxus site at [zwipe.net](https://zwipe.net) (guides, changelog, shared deck pages, email verification and password reset)
- **zervice**: background jobs (Scryfall sync, session cleanup)

```
zwiper, zite ──→ zwipe-client ─────→ zwipe-core ←── zerver
zwiper, zite ──→ zwipe-components ──→ zwipe-core     (zervice binary)
```

## Quick start

```bash
# prerequisites: rust (https://rustup.rs),…
