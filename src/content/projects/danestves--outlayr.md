---
repo: "danestves/outlayr"
name: "outlayr"
description: "Open source expense tracker, budget app, and subscription tracker for iPhone and Android. Local-first, built with Expo and Convex."
readmeQualityOk: true
url: "https://github.com/danestves/outlayr"
homepage: "https://tryoutlayr.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["android", "budgeting", "convex", "expense-tracker", "expo", "ios", "local-first", "react-native", "budget-app", "money-manager"]
stars: 33
forks: 6
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-10-20T19:01:37Z"
lastCommitAt: "2026-10-31T09:53:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 45
maintainers: ["danestves"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1427448299/c06aae7f-36c6-4bf4-b64c-8abe7caa0f67"
discussionCount: 0
---

# Outlayr

Outlayr is an open source mobile expense tracker, budget app, and subscription tracker. Log a purchase by typing one sentence, saying it, or scanning the receipt. The ledger lives on the phone; sign-in, sync and server features are optional. On the App Store and Google Play.

[tryoutlayr.com](https://tryoutlayr.com)

## Features

- One-sentence entry, voice entry and receipt scanning
- Category or overall budgets with carry-over and a projection of where the month ends
- Savings goals, accounts, transfers and 165 currencies, converted at the rate from the day of each purchase
- Subscriptions and paychecks that log themselves, with a reminder before each charge
- Insights, Home and Lock Screen widgets, Face ID lock, CSV import and export
- Works offline, in English, Spanish, Portuguese, and French

## Layout

```
apps/
  native/        Expo + React Native app, iOS and Android
  web/           tryoutlayr.com, TanStack Start
  screenshots/   App Store screenshot editor
  clips/         Remotion videos for the site, socials and in-app loops
packages/
  backend/       Convex: auth, sync, exchange rates
  money/         Money math shared by app and backend
  env/…
