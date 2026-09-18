---
repo: "filipexyz/ravi"
name: "ravi"
description: "A personal agent harness in WhatsApp — keeping context, routing work, and coordinating specialized agents across my day"
readmeQualityOk: true
url: "https://github.com/filipexyz/ravi"
homepage: "https://ravi.bot"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [71]
stars: 6
forks: 3
openIssues: 113
closedIssues: 51
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-01-29T16:40:53Z"
lastCommitAt: "2026-09-18T13:58:30Z"
lastReleaseAt: "2026-04-25T23:38:30Z"
status: "thriving"
tags: []
healthScore: 85
undervaluedScore: 61
maintainers: ["filipexyz", "github-actions[bot]", "cursoragent"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c468a722d35fac9f601187fad865238e02230c36a6b5674eff76ff9517c2fe4/filipexyz/ravi"
discussionCount: 8
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/logo-dark.svg" />
    <source media="(prefers-color-scheme: light)" srcset="docs/logo-light.svg" />
  </picture>
</p>

  <strong>Local-first runtime infrastructure for long-lived AI agents.</strong><br />
  Channel routing, durable sessions, identity, tasks, artifacts, specs, SDKs, and provider adapters in one coherent operating layer.
</p>

</p>

---

Ravi is the open-source runtime behind a multi-agent operating system.

Most agent projects start with a model call and then struggle with the hard parts around it: keeping the right context attached to the right conversation, routing messages to the right specialist, preserving provider state, tracking work, explaining failures, storing generated artifacts, and giving agents rules they can actually consult before editing code.

Ravi is the layer that owns those concerns.

```text
message or job
  -> chat/contact/session resolution
  -> route and policy decision
  -> runtime provider execution
  -> events, traces, tasks, artifacts, metrics, and SDK streams
```

The goal is simple: an agent should be able to keep working across days, chats, providers, tasks, and…
