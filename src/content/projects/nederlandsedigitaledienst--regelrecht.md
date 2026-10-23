---
repo: "NederlandseDigitaleDienst/regelrecht"
name: "regelrecht"
description: "Legt Nederlandse wet- en regelgeving vast als machineleesbare regels en voert die uit, met bij elke uitkomst de herleiding naar de wettekst"
readmeQualityOk: true
url: "https://github.com/NederlandseDigitaleDienst/regelrecht"
homepage: "https://regelrecht.rijks.app"
language: "Rust"
languages: ["Rust"]
languagePcts: [52]
topics: ["regelrecht", "overheid", "publiccode", "rijksoverheid", "rules-as-code", "rust", "webassembly", "wetgeving", "regelgeving"]
stars: 26
forks: 11
openIssues: 101
closedIssues: 258
watchers: 0
contributors: 16
recentReleases: 1
createdAt: "2025-11-10T13:12:37Z"
lastCommitAt: "2026-10-23T08:59:15Z"
lastReleaseAt: "2026-10-03T18:24:55Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 64
maintainers: ["tdjager", "anneschuth", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e00e86e5af7f7321c11acd3f69e34283e50f51e59abe42588e89e377c4eb1cd/NederlandseDigitaleDienst/regelrecht"
---

# regelrecht

Machine-readable Dutch law execution. regelrecht takes legal texts, encodes them as structured YAML, and runs them as deterministic decision logic.

## What does it do

- The engine takes a regulation and a set of inputs, evaluates the decision logic, and returns a result with a full explanation trail
- Laws are tested against real-world scenarios using BDD (Gherkin) tests, many derived from legislative explanatory memoranda. The vocabulary those scenarios speak lives in `bdd/grammar.yaml` and every engine's step bindings are generated from it
- A harvester downloads and tracks Dutch legislation from the official BWB repository
- Regulations can be edited through a web UI with live execution preview

## Components

### Rust packages

| Package | Description |
|---------|-------------|
| [packages/engine/](https://github.com/NederlandseDigitaleDienst/regelrecht/blob/HEAD/packages/engine/) | Law execution engine (also compiles to WASM) |
| [packages/law-model/](https://github.com/NederlandseDigitaleDienst/regelrecht/blob/HEAD/packages/law-model/) | The Rust representation of the law format, conforming to `schema/` |
|…
