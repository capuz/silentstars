---
repo: "kap-sh/aws-sdk-python"
name: "aws-sdk-python"
description: "Modern AWS SDK for Python"
readmeQualityOk: true
url: "https://github.com/kap-sh/aws-sdk-python"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-06-01T09:43:31Z"
lastCommitAt: "2026-07-07T06:36:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 44
maintainers: ["karpetrosyan", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7f9a45c347c07916486f3a9d81001db0fec2dabf57b52ecfbc59a241be128075/kap-sh/aws-sdk-python"
---

# aws-sdk-python

Modern AWS SDK for Python — async-native, fully typed, and generated from official Smithy models.

## Features

- **async and sync** — Use the same API for both async and sync code, with support for asyncio and [trio](https://trio.readthedocs.io).
- **WASM support** — Runs in WASM environments via [Pyodide](https://pyodide.org).
- **typed and documented** — Fully typed and documented for a better developer experience.
- **simple inputs** — No need to import separate parameter classes; nested inputs are fully typed via [TypedDicts](https://docs.python.org/3/library/typing.html#typing.TypedDict).
- **generated from Smithy models** — The SDK is generated from the official [Smithy](https://smithy.io) models describing AWS APIs, ensuring accuracy and consistency.
- **zero runtime overhead** — Codegen produces dedicated serialization and deserialization code for each operation, avoiding reflection.
- **interchangeable input/output** — Input and output types use the same [TypedDicts](https://docs.python.org/3/library/typing.html#typing.TypedDict), so you can pass a response directly as input when appropriate.
- **built on [zapros](https://zapros.dev)** — A modern HTTP…
