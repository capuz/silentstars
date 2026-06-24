---
repo: "netlify/axis"
name: "axis"
description: "Open source tooling and scoring framework to measure how well services work for AI agents."
url: "https://github.com/netlify/axis"
homepage: "https://axis.run"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [77]
topics: ["agent-experience", "ai", "ax", "evals"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 9
recentReleases: 10
createdAt: "2026-04-28T14:22:12Z"
lastCommitAt: "2026-06-24T00:19:14Z"
lastReleaseAt: "2026-05-04T23:57:50Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 51
maintainers: ["sean-roberts", "token-generator-app[bot]", "seancdavis"]
openGraphImageUrl: "https://opengraph.githubassets.com/69f22da8cafef93e06c029881388693beacee72e4f4bb8658a846e23fdd4ab23/netlify/axis"
---

<picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/76547bab-3a2e-498a-b556-99c58b3c553b">
    </picture>
  </a>
  <h1>AXIS — Agent Experience Index Score</h1>
</div>
<br />

AXIS is an open source tooling and a scoring framework to measure how well services work for AI agents. Think [Lighthouse](https://developer.chrome.com/docs/lighthouse), but for agent experience. 

Give AXIS a scenario, an agent, and a prompt. It runs the agent, captures a full transcript, and produces a graded score across four independent dimensions: Goal Achievement, Environment, Service, and Agent.

## Why AXIS

The web has Lighthouse. APIs have contract testing. Performance has k6. But there's no standardized way to answer: "How well does my system work when an AI agent tries to use it?".

As agents become a primary interface for interacting with sites, APIs, and developer platforms, the systems they interact with need to be measured and optimized for that experience — just like we optimize for page load time or accessibility. AXIS is that measurement.

## Quick start

```bash
npm install @netlify/axis
```

`axis.config.json`:

```json
{…
