---
repo: "electricsheephq/lcm-x"
name: "lcm-x"
description: "Lossless memory for Hermes Agent: every turn kept in a local store, not compacted away, and searchable by your agent."
readmeQualityOk: true
url: "https://github.com/electricsheephq/lcm-x"
homepage: "https://losslesscontext.com/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["context-engine", "hermes-agent", "llm-memory", "lossless-context", "ai-agent", "hermes", "hermes-plugin"]
stars: 169
forks: 22
openIssues: 472
closedIssues: 995
watchers: 1
contributors: 50
recentReleases: 8
createdAt: "2026-08-13T11:38:44Z"
lastCommitAt: "2026-11-19T04:49:38Z"
lastReleaseAt: "2026-08-27T16:26:51Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 93
undervaluedScore: 34
maintainers: ["100yenadmin"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1333049175/c92cf2b9-cd55-48cf-b7d6-12bed9c99095"
---

Lossless memory for Hermes Agent: every turn kept in a local store, not compacted away, and searchable by your agent.
[Watch the demo](https://x.com/ElectricSheepIO/status/2119777119873925155)

https://github.com/user-attachments/assets/c215bf7f-e8c8-428f-9510-ba1da3571f53

## Install

```bash
hermes plugins install hermes-lcm-x --enable
hermes config set context.engine lcm-x
```

This installs the version the Hermes catalog currently pins, which can trail the [latest release](https://github.com/electricsheephq/lcm-x/releases/latest) by a few days (see [catalog payload](https://github.com/electricsheephq/lcm-x/blob/HEAD/docs/operations/catalog-payload.md)).
The default local setup needs no API key; optional cloud embeddings and Voyage reranking use configured provider keys (see [embeddings setup](https://github.com/electricsheephq/lcm-x/blob/HEAD/docs/embeddings-setup.md)).
The first line installs and enables the plugin; the second selects it as the context engine (both checked on a clean Hermes 0.23.0 home). Restart Hermes afterwards.

### Activate it

The plugin has two names:

- plugin manifest name: `hermes-lcm-x`
- runtime context engine name: `lcm-x`
