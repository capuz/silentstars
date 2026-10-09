---
repo: "pointblank-club/pb-recruitment-website"
name: "pb-recruitment-website"
description: "The website for PB Recruitment!"
readmeQualityOk: true
url: "https://github.com/pointblank-club/pb-recruitment-website"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 17
forks: 7
openIssues: 1
closedIssues: 8
watchers: 0
contributors: 13
recentReleases: 0
createdAt: "2025-10-04T19:08:15Z"
lastCommitAt: "2026-10-09T18:55:39Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 44
maintainers: ["Hemang360", "autistic-avenger", "jayantkageri"]
openGraphImageUrl: "https://opengraph.githubassets.com/d6696b82d5a4374a27305d9f58bcf819bb7db3ae2e07b868df344109ac1a9750/pointblank-club/pb-recruitment-website"
---

# React + TypeScript + Vite

## Local submission judging

Until the judging worker is available (PBR-2), submissions stay `pending` forever, so the polling UI
ends in the "Verdict delayed" state. To exercise the full flow locally, set
`VITE_MOCK_SUBMISSION_JUDGING=true`: the real submit call still happens, but status checks return two
`pending` responses followed by `accepted`, with mock test-case metrics.

This is **opt-in and ignored in production builds** — contestants can never be shown a fabricated
verdict. Leave it unset to develop against the real backend.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this…
