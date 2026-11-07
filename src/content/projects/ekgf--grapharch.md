---
repo: "EKGF/grapharch"
name: "grapharch"
description: "A tool to generate documentation for a given graph (knowledge graph, shape graph or ontology) as website or PDF"
readmeQualityOk: true
url: "https://github.com/EKGF/grapharch"
homepage: "https://ekgf.github.io/grapharch/"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
stars: 5
forks: 1
openIssues: 34
closedIssues: 22
watchers: 3
contributors: 1
recentReleases: 3
createdAt: "2024-11-29T17:56:04Z"
lastCommitAt: "2026-11-07T22:50:36Z"
lastReleaseAt: "2026-11-07T18:51:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 82
undervaluedScore: 81
maintainers: ["jgeluk"]
openGraphImageUrl: "https://opengraph.githubassets.com/dbe710dc614013aab081ade1b0a7993fb358501d6607ee62707936dcd00dff6c/EKGF/grapharch"
---

# GraphArch

Turn authored text, ontologies, shapes, and related RDF into a documentation
knowledge graph, then publish a specification, companion website, or PDF.

GraphArch is one command-line tool. Keep your content and publication
configuration in your project; use the same command locally and in CI.

## Get started

Use a prebuilt release for normal use. Download the archive for your platform
from [GitHub Releases](https://github.com/EKGF/grapharch/releases), extract it,
and put `grapharch` (or `grapharch.exe`) on your `PATH`.

Standalone binaries are published on GitHub Releases. Package-manager channels
have separate publication requirements; see the installation guide for their
availability.

To build in GitHub Actions:

```yaml
- uses: actions/checkout@v7
- uses: EKGF/grapharch@v0.1.0
  with:
    version: '0.1.0'
    source-kind: checkout
```

See [GitHub Actions](https://ekgf.github.io/grapharch/usage/github-actions/)
for configuration and Pages publication.

After installation:

```sh
grapharch --version
grapharch build ./ontology.ttl
# Or discover Markdown and RDF in the current directory:
grapharch build .
```

Open `output/grapharch/site/index.html`. No configuration…
