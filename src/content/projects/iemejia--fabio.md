---
repo: "iemejia/fabio"
name: "fabio"
description: "The agent-native CLI for Microsoft Fabric"
readmeQualityOk: true
url: "https://github.com/iemejia/fabio"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 10
forks: 2
openIssues: 3
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-05-11T22:21:20Z"
lastCommitAt: "2026-07-22T06:10:55Z"
lastReleaseAt: "2026-06-02T13:38:08Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 84
undervaluedScore: 49
maintainers: ["iemejia", "dependabot[bot]", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/bbcda5abca0336b5ab1232d64d882b6495f47a34ab39e0708f47b37f1af3d970/iemejia/fabio"
---

# fabio

Agent-native CLI for managing Microsoft Fabric artifacts and data.

Composable by design: commands just work together with JSON output by default, errors that explain how to fix things and what to try next, and results that pipe straight into the next command. Follows the [10 principles for agent-native CLIs](https://trevinsays.com/p/10-principles-for-agent-native-clis).

Everything fabio does is achievable via the public Fabric REST APIs — `fabio` encodes the operational knowledge so coding agents can skip the trial and error, saving time, tokens, and money.

## Why fabio?

Microsoft Fabric has two official tools: [Fabric CLI](https://github.com/microsoft/fabric-cli) (`fab` — interactive Python CLI) and [fabric-cicd](https://github.com/microsoft/fabric-cicd) (Python CI/CD library). fabio is designed to be a strict superset — everything they do, fabio does too, plus capabilities neither offers.

### vs. Fabric CLI (`fab` — interactive Python CLI)

| Capability | Fabric CLI | fabio |
|---|---|---|
| Design philosophy | Interactive-first (shell with `cd`/`ls`) | Agent-native (non-interactive, structured output) |
| CI/CD deployment | Wraps fabric-cicd library | Native…
