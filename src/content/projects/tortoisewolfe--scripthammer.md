---
repo: "TortoiseWolfe/ScriptHammer"
name: "ScriptHammer"
description: "\"🚀 Production-ready Next.js 15.5 starter with 35+ features: PWA, 32 themes, blog system, GDPR compliance, 680+ tests, Docker-first development. Fork & build!\""
readmeQualityOk: true
url: "https://github.com/TortoiseWolfe/ScriptHammer"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [76]
stars: 5
forks: 3
openIssues: 83
closedIssues: 238
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2025-09-27T15:16:41Z"
lastCommitAt: "2026-08-08T04:35:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 77
maintainers: ["TortoiseWolfe"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c0c21c3e4061ccc299b18ae6ed1b551beb333c33a62ed157c7be46168b745a1/TortoiseWolfe/ScriptHammer"
discussionCount: 0
---

# ScriptHammer

**An accessible web platform with auth, payments, and encrypted messaging. Running live, and free to fork.**

    src="./docs/architecture/architecture-simple.png"
    alt="ScriptHammer architecture overview. Your code is built ahead of time by pnpm into a Next.js static export served from GitHub Pages, so there's no application server. In the browser, a React app with a service worker and local storage talks directly to a managed Supabase backend providing Postgres with Row-Level Security, auth, realtime, and file storage. Twelve Deno Edge Functions handle anything needing a secret, including payments, subscriptions, and email, and call out to Stripe, PayPal, and Resend, which webhook their results back."
    width="900">
</p>

  <sub><b>How it fits together.</b> The <a href="./docs/architecture/architecture-detailed.png">full reference diagram</a> adds every table, Edge Function, and route. Or read <a href="./docs/architecture/README.md">the architecture guide</a>.</sub>
</p>

This is a real product, not a scaffold. It runs at [scripthammer.com](https://www.scripthammer.com/) with OAuth and email sign-in, Stripe and PayPal payments, end-to-end encrypted…
