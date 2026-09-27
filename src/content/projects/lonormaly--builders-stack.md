---
repo: "lonormaly/builders-stack"
name: "builders-stack"
description: "Opinionated AI-native monorepo starter — build your MVP as a production-ready structure. apps/services/libs · Tilt · Nx boundary-enforced · agent-ready."
readmeQualityOk: true
url: "https://github.com/lonormaly/builders-stack"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
topics: ["ai-agents", "better-auth", "bun", "drizzle", "hono", "monorepo", "nx", "template", "tilt", "typescript"]
stars: 41
forks: 4
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-01T19:51:46Z"
lastCommitAt: "2026-09-27T09:27:36Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 76
undervaluedScore: 27
maintainers: ["lonormaly", "hannochl", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5592d37132c87a337af8f59bf43396bf0e0385e08aa68a1d4ceef3a0c8a5528f/lonormaly/builders-stack"
---

</p>

<h1 align="center">builders-stack</h1>

  <strong>The starter repo your AI agent can actually navigate.</strong><br>
  Opinionated AI-native starter. Build your MVP as a <em>production-ready</em> structure.
</p>

</p>

</p>

---

**Four buckets for what the system _is_, one for how you _operate_ it — plus three laws the linter enforces.** Everything else is a deletable example.

- **What you RUN** — `apps/` (served to **humans**) · `services/` (served to **machines** — anything with a URL) · `libs/` (**shared**, never served).
- **What you SHIP** — `packages/` — distributables served to **third parties** (npm SDKs, embeddable widgets, CLIs): tagged `type:package`, depending on libs only, and **terminal** (nothing inside the repo imports them). Add it when you distribute something; delete it when you don't.
- **How you OPERATE it** — `ops/` — deploy · db · secrets · runbooks · local-CI. The **outermost** layer: it reaches _down_ to drive the code; nothing reaches back up into it. Not a workspace, invisible to Nx. See [`ops/`](https://github.com/lonormaly/builders-stack/blob/HEAD/ops/).

Three laws — **no-upward-import** · **one-public-door** · **by-feature-not-layer**.…
