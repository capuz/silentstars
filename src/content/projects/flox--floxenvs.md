---
repo: "flox/floxenvs"
name: "floxenvs"
description: " Example Flox environments "
readmeQualityOk: true
url: "https://github.com/flox/floxenvs"
language: "Shell"
languages: ["Shell", "Nix"]
languagePcts: [44, 38]
topics: ["production"]
stars: 20
forks: 7
openIssues: 0
closedIssues: 14
watchers: 4
contributors: 24
recentReleases: 0
createdAt: "2024-10-09T15:34:30Z"
lastCommitAt: "2026-10-14T08:57:45Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 67
maintainers: ["floxbot", "stephenyeargin", "garbas"]
openGraphImageUrl: "https://opengraph.githubassets.com/776a60477e83a81fe50887a3bc198ac518cb44ccd097eaba31bc98fa57818c13/flox/floxenvs"
---

# Example Flox Environments

A collection of ready-to-use [Flox](https://flox.dev)
environments.

## Quick start

Include any environment in your manifest:

```toml
[include]
environments = [{ remote = "flox/<name>" }]
```

Or run as a Docker container:

```bash
docker run -it ghcr.io/flox/floxenvs:<name>-latest
```

## Open in Codespaces

Every environment is available as a one-click GitHub
Codespace. Two variants:

- **`<name>-demo`** — the full demo with sample data,
  services started, and a gum welcome.
- **`<name>`** — the minimal base environment, for
  hacking on the manifest itself.

First Codespace boot is slower (downloads packages into
a persistent `/nix` volume); subsequent boots reuse the
cache.

**Note:** Codespaces in enterprise GitHub orgs that
restrict `seccomp=unconfined` will fail to start the
container.

## Dual-layer pattern

Most environments follow a dual-layer pattern:

- **`<name>/`** — minimal base layer for `[include]`
- **`<name>-demo/`** — demo with gum UI and sample
  project files

## Languages

| Environment | Description | Links |
| ----------- | ----------- | ----- |
| go | Go | [floxhub](https://hub.flox.dev/flox/go) ·…
