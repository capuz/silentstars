---
repo: "cloudcarver/anclax"
name: "anclax"
description: "Anclax is a framework for building serverless and reliable applications in speed of light with confidence"
readmeQualityOk: true
url: "https://github.com/cloudcarver/anclax"
homepage: "https://deepwiki.com/cloudcarver/anclax"
language: "Go"
languages: ["Go"]
languagePcts: [88]
stars: 14
forks: 3
openIssues: 8
closedIssues: 16
watchers: 1
contributors: 4
recentReleases: 2
createdAt: "2025-04-06T08:59:30Z"
lastCommitAt: "2026-10-02T10:00:31Z"
lastReleaseAt: "2026-09-28T14:27:28Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 84
undervaluedScore: 59
maintainers: ["cloudcarver", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/961318421/288a8d88-963c-4356-9b54-acbefef20d5d"
---

# ⚓ Anclax

English | [中文](https://github.com/cloudcarver/anclax/blob/HEAD/README.zh.md)

Build serverless, reliable apps at lightspeed ⚡ — with confidence 🛡️.

Anclax is a framework for small to medium-sized applications backed by a single PostgreSQL database. It provides:

- Strong schemas and code generation that move correctness checks to compile time
- An integrated toolchain of best-in-class Go tools
- Dependency inversion and a white-box testing framework
- A high-performance async task scheduling framework

Join our [Discord server](https://discord.gg/XxXXbyF59H).

Contact: mike@anclax.com

### Recommended setup

1. Install the Anclax CLI:

  ```bash
  go install github.com/cloudcarver/anclax/cmd/anclax@latest
  ```

2. Bootstrap a new project (installs toolchain + runs codegen):

  ```bash
  anclax init myapp github.com/me/myapp
  cd myapp
  ```

3. For existing repos (or after changing `anclax.yaml`), sync tools and regenerate:

  ```bash
  anclax install
  anclax gen
  ```

  External tools are installed into `.anclax/bin` for reproducible builds.

4. Optional: add the Anclax skill to your coding agent:

  ```bash
  npx skills add cloudcarver/anclax
  ```

###…
