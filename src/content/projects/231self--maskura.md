---
repo: "231self/maskura"
name: "maskura"
description: "Maskura is an open-source object data privacy gateway for AI agents."
readmeQualityOk: true
url: "https://github.com/231self/maskura"
homepage: "https://maskura.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["ai", "data-security", "mcp", "object-storage", "privacy", "s3", "wasm"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-08-11T05:41:56Z"
lastCommitAt: "2026-09-23T08:47:07Z"
lastReleaseAt: "2026-09-10T14:52:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 60
maintainers: ["amit231self", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ab54801ac130bb311d9a7fd5c4e01fba22b6ebe742af212d4f8b6c4c40862fa/231self/maskura"
discussionCount: 0
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/assets/maskura-lockup-dark.svg" />
    <source media="(prefers-color-scheme: light)" srcset="docs/assets/maskura-lockup-light.svg" />
  </picture>
</p>

# Maskura

</p>

Maskura is the open-source policy boundary between AI agents and object storage.
It gives existing S3 clients one place to decide which representation may cross
that boundary—and to bind the decision to the exact policy code that ran.

An ordered Wasm component pipeline can validate, reject, reshape, redact, or
encrypt object data. Maskura runs locally as an S3-compatible Docker service or
in front of storage you already use.

## Capabilities

- **Protected matching.** `stable-encrypt` applies deterministic AES-SIV to
  selected fields. The same value under the same key produces the same protected
  value, so datasets can be joined and deduplicated without exposing the
  original field. Equality is intentionally visible; the feature is opt-in.
- **Content-addressed policy.** A request resolves one immutable pipeline
  revision with ordered component hashes, configuration, capabilities, and
  execution limits. Imported read components are not…
