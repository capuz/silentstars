---
repo: "iemejia/fabio"
name: "fabio"
description: "The agent-native CLI for Microsoft Fabric"
readmeQualityOk: true
url: "https://github.com/iemejia/fabio"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 12
forks: 2
openIssues: 4
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-11T22:21:20Z"
lastCommitAt: "2026-07-29T06:14:34Z"
lastReleaseAt: "2026-06-02T13:38:08Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 84
undervaluedScore: 46
maintainers: ["iemejia", "dependabot[bot]", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/658f61296e97a7a97745ce903d864c821dd6d6a70a366d82e8e0cce5636ce151/iemejia/fabio"
---

# fabio

Agent-native CLI for managing Microsoft Fabric artifacts and data.

**[Documentation](https://ismaelmejia.com/fabio/)** · [Getting started](https://ismaelmejia.com/fabio/getting-started/) · [CLI reference](https://ismaelmejia.com/fabio/reference/)

Composable by design: commands just work together with JSON output by default, errors that explain how to fix things and what to try next, and results that pipe straight into the next command. Follows the [10 principles for agent-native CLIs](https://trevinsays.com/p/10-principles-for-agent-native-clis).

Everything fabio does is achievable via the public Fabric REST APIs — `fabio` encodes the operational knowledge so coding agents can skip the trial and error, saving time, tokens, and money.

## Why fabio?

Microsoft Fabric has two official tools: [Fabric CLI](https://github.com/microsoft/fabric-cli) (`fab` — interactive Python CLI) and [fabric-cicd](https://github.com/microsoft/fabric-cicd) (Python CI/CD library). fabio is designed to be a strict superset — everything they do, fabio does too, plus capabilities neither offers.

### vs. Fabric CLI (`fab` — interactive Python CLI)

| Capability | Fabric CLI | fabio |…
