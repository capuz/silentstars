---
repo: "h100envy/crawl-hive"
name: "crawl-hive"
description: "CrawlHive: open-source memecoin safety swarm. Bundles, snipers, linked operators, bubble map, LP locks and dev history on Solana, BNB, Base and Robinhood Chain, plus a Larpcheck second opinion. Free scans, Telegram bot, Chrome extension."
readmeQualityOk: true
url: "https://github.com/h100envy/crawl-hive"
homepage: "https://crawlhive.xyz"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["crawler", "memecoin", "nextjs", "phantom", "solana", "web3", "grok", "launchpad", "pumpfun", "telegram-bot"]
stars: 138
forks: 36
openIssues: 2
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-10-10T14:29:26Z"
lastCommitAt: "2026-10-23T12:01:35Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 60
undervaluedScore: 25
maintainers: ["h100envy"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e4e505eac49265ec4bdf9c5e3b2d6f37885050da61241b10436c34c6a811f24/h100envy/crawl-hive"
---

---

## Latest updates

| Date | Update |
| --- | --- |
| Oct 23 | **Ask CrawlHive in the bots** (`src/lib/server/ask.ts` `askOnce`, `telegram-public.ts`, `x-bot.ts`): `/ask <question>` in the Telegram bot, plain questions in DMs, and in groups any message that tags @crawlhivebot or replies to it with a question; answers come from the same tools and limits as `/ask` on the site (per Telegram user, by linked holder tier), with the last few turns kept for follow ups. The X bot answers question mentions that carry no coin with a short Ask reply that links to the site; mentions with a coin still get a scan. |
| Oct 23 | **Holders get the edge** (`src/lib/tier-gate.ts`, `src/components/deep-lock.tsx`, `src/app/scan/[id]/actions.ts`, `src/lib/server/tg-signals.ts`): the home page is now scan first, one big "Is this token safe?" box with the rest below the fold. Everyone gets the verdict, score, top flags, basics and the probable dump headline; the full analysis (bubble map and operators, first 20 buyers, factor breakdown, full dump breakdown, launch evidence, Second look, since last scan) is for the Holder tier and up, and on the scan page it is gated on the server so free pages do not…
