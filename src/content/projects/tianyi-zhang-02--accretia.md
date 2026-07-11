---
repo: "tianyi-zhang-02/accretia"
name: "accretia"
description: "Personal mobile-first PWA for tracking net worth, income, savings, and a manually-entered investment portfolio. Public repo with a hostile-reader threat model."
readmeQualityOk: true
url: "https://github.com/tianyi-zhang-02/accretia"
homepage: "https://tracker-gamma-eight-14.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-05-27T22:27:17Z"
lastCommitAt: "2026-07-11T05:58:06Z"
lastReleaseAt: "2026-07-07T23:52:05Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 54
maintainers: ["tianyi-zhang-02", "vercel[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/da6fa3fcb7f5e5c75d8df9c3c19c3dc786618648a95609e78b36e08a7803b76e/tianyi-zhang-02/accretia"
---

# Accretia

**English** · [简体中文](https://github.com/tianyi-zhang-02/accretia/blob/HEAD/README.zh-CN.md)

_Watch your wealth accrete._ A single-page, **client-side** wealth-projection simulator. Project household net worth year by year from your own assumptions — careers, windfalls, major expenses, lifestyle creep, and low/mid/high return bands — and answer "what would it take to hit $X by age Y?".

Everything runs in the browser. **There is no backend, no database, no account, and nothing is stored or sent anywhere.** Refresh and you start clean; use Export / Import to keep a scenario as a JSON file.

> Stack: Next.js 16 (App Router) · TypeScript · Tailwind v4 · Recharts · Zod. No environment variables. No server.

**Live:** https://tracker-gamma-eight-14.vercel.app

---

## Features

**Model your situation**

- **Year-by-year projection** from a pure, deterministic, unit-tested engine (documented inflation convention, low/mid/high return bands).
- **Careers with equity** — multiple people and career stages, each with base salary, bonus, and **annual equity / RSU comp**. A browsable, searchable, bilingual **role library** — tech (L3–L7), medicine, law, finance — provides…
