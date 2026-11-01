---
repo: "telekom/sutura"
name: "sutura"
description: "sutura is a secure multiplayer chatting with data experience which is pluggable for data and semantics"
readmeQualityOk: true
url: "https://github.com/telekom/sutura"
homepage: "https://telekom.github.io/sutura/"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["mcp", "mcp-server", "server"]
stars: 15
forks: 4
openIssues: 20
closedIssues: 500
watchers: 0
contributors: 9
recentReleases: 10
createdAt: "2026-08-24T08:24:09Z"
lastCommitAt: "2026-11-01T22:40:54Z"
lastReleaseAt: "2026-10-12T05:48:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 60
maintainers: ["geoHeil", "georgHeiler", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/321325e3d808c67ade206a537faf8d1c19ec7cbac0f566008afe6fed6713fc2a/telekom/sutura"
discussionCount: 0
---

sutura is a semantic data runtime written in Rust. It serves queries over HTTP and MCP.
By default, queries use certified metric definitions. Metadata and data sources connect through adapters.
A query can combine data from several sources.

Deployments can verify caller tokens. Each data source declares the identity it uses.
See [identity verification](https://github.com/telekom/sutura/blob/HEAD/docs/where-identity-is-proven.md) for each identity claim and its environment.

## Technology

- [Apache DataFusion](https://datafusion.apache.org/) executes local queries.
- [Apache Arrow](https://arrow.apache.org/) carries result batches inside the runtime.
- [ADBC](https://arrow.apache.org/adbc/) connects to data systems.
- [polyglot-sql](https://github.com/tobilg/polyglot) renders SQL for each dialect.
- [Wren](https://github.com/Canner/WrenAI) and [Spice](https://github.com/spiceai/spiceai)
  provide design references for semantic models and query federation.

See [architecture](https://github.com/telekom/sutura/blob/HEAD/docs/architecture.md) and [integrations](https://github.com/telekom/sutura/blob/HEAD/docs/integrations.md) for details.

## Documentation and examples

-…
