---
repo: "beatrax-app/beatrax"
name: "beatrax"
description: "Local-first personal finance dashboard that resolves cross-account routing chains across banking, ICS Cards, PayPal, and Google Play."
readmeQualityOk: true
url: "https://github.com/beatrax-app/beatrax"
language: "PHP"
languages: ["PHP"]
languagePcts: [92]
topics: ["camt053", "desktop-app", "dutch-banks", "hippocratic-license", "laravel", "livewire", "local-first", "nativephp", "personal-finance", "php"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-05-24T23:28:16Z"
lastCommitAt: "2026-09-10T08:21:32Z"
lastReleaseAt: "2026-06-14T14:25:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 46
maintainers: ["lessevv"]
openGraphImageUrl: "https://opengraph.githubassets.com/c2878ccc40ae4a670954aac53e14d1bf7a407a70e2a376d2ed13bcea5034b3bd/beatrax-app/beatrax"
discussionCount: 0
---

</p>

  <em>A local-first personal finance dashboard for the unified picture of your cross-account money.</em>
</p>

</p>

</p>

## What is Beatrax?

Beatrax is a local-first personal finance dashboard that pulls together
transactions from your bank, credit cards, PayPal, and app-store
subscriptions into a single calm "this month at a glance" view. It reads
the statement formats European banks already export — CAMT.053 (ISO
20022), MT940, and CSV — so it is not tied to any one institution. It
then resolves the routing chains between your accounts (PayPal → your
bank or card, card → bank via bulk SEPA settlement) so that fixed monthly
payments, real underlying funding sources, and upcoming cash flow are
visible in one place instead of buried across statements.

It runs on your own machine. No telemetry, no Beatrax server, no cloud
account: the SQLite database, the OAuth tokens and the cached email
receipts live on the device you installed it on. One call goes out on
its own — a check for a new version, which you can turn off. Everything
else waits for you: a mailbox, a bank through Enable Banking, a daily
exchange-rate lookup, the devices you pair for sync, a relay you
configure,…
