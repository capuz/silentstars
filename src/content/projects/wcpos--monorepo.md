---
repo: "wcpos/monorepo"
name: "monorepo"
description: "Monorepo for the cross-platform WooCommerce POS Application"
readmeQualityOk: true
url: "https://github.com/wcpos/monorepo"
homepage: "https://wcpos.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
stars: 10
forks: 7
openIssues: 68
closedIssues: 451
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2021-11-10T16:11:22Z"
lastCommitAt: "2026-10-31T09:52:46Z"
lastReleaseAt: "2026-06-09T18:06:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 84
maintainers: ["kilbot", "translations-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f6d1b0c3eabba9d3d5974a257c52c7b06e4293b43f08647bfdcac3a408560fee/wcpos/monorepo"
---

&ensp;&mdash;&ensp;
    &ensp;&mdash;&ensp;
    &ensp;&mdash;&ensp;
    &ensp;&mdash;&ensp;

## 💡 About

The goal of this project is a <u>free</u> and <u>extensible</u> Point of Sale application, with a payment-method-agnostic design (including first-class support for cryptocurrency).

This monorepo contains all the code for the **client applications** — a single React Native + Expo codebase that ships to web, desktop and mobile. It currently uses [WooCommerce](https://woocommerce.com) as its backend, so to run it against a store you also need the [WooCommerce POS plugin for WordPress](https://github.com/wcpos/woocommerce-pos), which provides the REST API and authentication.

| Target          | Built from                                        | Distributed as                                         |
| --------------- | ------------------------------------------------- | ------------------------------------------------------ |
| 🌐 Web          | `apps/main`                                       | [wcpos.expo.app](https://wcpos.expo.app) (EAS Hosting) |
| 🖥 Desktop       | `apps/main` (`build:electron` export), wrapped by the standalone…
