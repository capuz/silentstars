---
repo: "antonillos/makevn"
name: "makevn"
description: "Terminal-first workflows for Java Maven repositories."
readmeQualityOk: true
url: "https://github.com/antonillos/makevn"
homepage: "https://github.com/antonillos/makevn"
language: "Shell"
languages: ["Shell", "Rust", "Python"]
languagePcts: [49, 29, 22]
topics: ["ai-agents", "automation", "cli", "developer-tools", "java", "jdk", "maven", "mvn", "terminal", "toolchain"]
stars: 14
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-01T17:28:35Z"
lastCommitAt: "2026-10-21T17:31:54Z"
lastReleaseAt: "2026-06-27T08:25:19Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 43
maintainers: ["antonillos", "antonillos-vulcan-protocol[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5ddf8258197ca3c0d999076230aa1a5c180f8ca87dff70dd0f01b33bd874776/antonillos/makevn"
---

`makevn` detects the repository's Java, Maven, Docker, Karate, and coverage setup
so developers and AI agents can run the right workflow from the terminal.

## See it in action

Operational demos are recorded from a matched CLI/MCP source build; installation
shows the published distribution. See [recording status and regeneration](https://github.com/antonillos/makevn/blob/HEAD/docs/demo/README.md)
for pending recordings; an older GIF is not evidence of the current output.

### Developer

```bash
makevn doctor
makevn init # only when doctor recommends it
makevn test --name CalculatorTest
makevn verify
```

### Live telemetry

```bash
makevn clean compile package
```

### Tail logs

```bash
makevn compile --tail
```

### Docker verification

Refresh pending: a running Docker daemon is required. [Previous recording](https://github.com/antonillos/makevn/blob/HEAD/docs/assets/makevn-verify-docker.gif).

```bash
makevn docker-up docker-ps-required --wait-seconds 30 verify
makevn docker-down
```

### Codex agent

Refresh pending: Codex’s configured model is unavailable to its CLI account. [Previous recording](https://github.com/antonillos/makevn/blob/HEAD/docs/assets/makevn-agent.gif).…
