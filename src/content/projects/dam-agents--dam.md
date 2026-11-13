---
repo: "dam-agents/dam"
name: "dam"
description: "An open platform to run your agents densely on Kubernetes."
readmeQualityOk: true
url: "https://github.com/dam-agents/dam"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [77]
topics: ["hacktoberfest", "innersource"]
stars: 70
forks: 16
openIssues: 225
closedIssues: 3378
watchers: 1
contributors: 25
recentReleases: 7
createdAt: "2026-04-30T09:34:44Z"
lastCommitAt: "2026-11-13T10:11:00Z"
lastReleaseAt: "2026-11-04T13:25:05Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 42
maintainers: ["JanPokorny", "dam-application[bot]", "jjeliga"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc911548395ed1e752897c74fe0ebc8d926ef631146d001285959ce909291c51/dam-agents/dam"
discussionCount: 4
---

Engineering agents that run your entire stack.<br />
AI teammates that work with you in Slack.

  ·
  ·
  ·

---

## Get started

### Open source

Deploy DAM on your own infrastructure and build with the platform.

- [Deployment guide](#run-your-own)
- [Architecture](https://github.com/dam-agents/dam/blob/HEAD/docs/architecture.md)
- [All repositories, Starter Kits, and examples](https://github.com/orgs/dam-agents/repositories)
- [Issues and contributions](https://github.com/dam-agents/dam/issues)

### IBM hosted deployment

Use DAM through IBM Research without managing your own cluster.
Sign in with your IBM login to start.

- [Launch DAM](https://ibm.biz/dam-agents)
- [IBM documentation](https://ibm.biz/dam-docs)

The hosted deployment includes IBM internal model endpoints and integrations not included in the open-source deployment.

---

## Why DAM?

- **Dense by design:** Many agents share one runner pod per owner.
  Memory is counted by what agents use, not by their size, so nobody sizes an agent by hand.
- **Sleep when idle, wake on demand:** An idle agent hibernates: its VM stops and gives back its CPU and memory, and its disk stays.
  A message, a schedule or an open chat…
