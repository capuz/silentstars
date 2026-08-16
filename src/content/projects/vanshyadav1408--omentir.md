---
repo: "vanshyadav1408/Omentir"
name: "Omentir"
description: "Open Source HeyReach & Gojiberry alternative"
readmeQualityOk: true
url: "https://github.com/vanshyadav1408/Omentir"
homepage: "https://omentir.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["ai", "firebase", "gemini", "lead-generation", "linkedin", "nextjs", "outreach", "sales", "sales-automation", "self-hosted"]
stars: 22
forks: 9
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-07-22T11:30:25Z"
lastCommitAt: "2026-08-16T04:08:30Z"
lastReleaseAt: "2026-07-22T17:05:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 54
maintainers: ["dependabot[bot]", "Shaunakrane914"]
openGraphImageUrl: "https://opengraph.githubassets.com/6f0cac4c439be6da09025ccfbee18c54396d4221c253059c41bf537ba9bce05c/vanshyadav1408/Omentir"
discussionCount: 0
---

# Omentir

Omentir is an open-source alternative to LinkedIn outreach and automation tools like [HeyReach](https://heyreach.io) and [Gojiberry](https://gojiberry.ai).

It's an AI sales workspace for finding qualified LinkedIn prospects, drafting contextual outreach, running human-paced campaigns, and handling replies — but you own the code and run it on your own infrastructure.

Use the managed product at [omentir.com](https://omentir.com), or self-host the same application code with your own Firebase, Gemini, and Unipile accounts.

**One codebase:** hosted cloud and self-host share this repo. `RUN_LOCALLY=TRUE` switches auth, billing, marketing, and hosted-only mail off. Public brand contacts for omentir.com stay in source on purpose (see `src/lib/hosted-identity.ts`); they are not used for self-hosted operation.

### Connect from other AI apps (Claude, ChatGPT, Grok, Cursor, …)

People use Omentir from chat and coding agents without sharing LinkedIn passwords:

1. In Omentir: connect LinkedIn and fill **My Product**.
2. **Chat apps (Claude, ChatGPT, Grok):** Settings → Connectors → add  
   `https://omentir.com/api/agent/v1/mcp` → sign in and approve **Connect workspace** →…
