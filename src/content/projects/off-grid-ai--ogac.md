---
repo: "off-grid-ai/OGAC"
name: "OGAC"
description: "Open-source control plane for private, governed enterprise AI — one gateway for every model, composable governed pipelines, and apps your whole team builds in plain language, on infrastructure you own."
readmeQualityOk: true
url: "https://github.com/off-grid-ai/OGAC"
homepage: "https://onprem-console.getoffgridai.co"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["ai", "ai-gateway", "ai-governance", "enterprise-ai", "guardrails", "llm", "llmops", "nextjs", "rag", "self-hosted"]
stars: 13
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-25T03:37:53Z"
lastCommitAt: "2026-08-04T06:11:40Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 46
maintainers: ["alichherawalla"]
openGraphImageUrl: "https://opengraph.githubassets.com/50f587af5b403a5b0a921ec15910280a7f92804a67839c3beaf8423e67848f09/off-grid-ai/OGAC"
---

<h1>Off Grid AI</h1>
  <h3>Enable every person to operate with the intelligence and capabilities of the entire enterprise.</h3>
  <p>Source available. Five working AI use cases, live in 14 days, at zero cost. Set your rules once. Everyone builds governed AI on top.</p>
  <p>
  </p>
</div>

Every piece you need to run AI in a company already exists. A gateway to the models. Evals. Guardrails.
PII masking. Data pipelines. Audit. Lineage. Knowledge bases. The problem was never the parts. It was
wiring them into one thing that works, and keeping every team inside the rules.

AWS meant you stopped assembling servers. Off Grid AI means you stop assembling AI infrastructure.
It is one interface where all of it is already set up and connected. You define your organization's
rules, policies, guardrails, and knowledge once. Everyone builds on top of them. It just works.

```bash
git clone https://github.com/off-grid-ai/console.git && cd console
npm install
cp .env.example .env.local        # fill in DATABASE_URL, AUTH_SECRET, AUTH_KEYCLOAK_*
make -C deploy up                 # the whole stack comes up, wired together
npm run db:push                   # create the schema
npm run dev…
