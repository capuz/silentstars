---
repo: "xal-sh/xal"
name: "xal"
description: "A terminal coding harness with a headless agent core"
readmeQualityOk: true
url: "https://github.com/xal-sh/xal"
homepage: "https://xal.sh"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
topics: ["agent", "ai", "coding-agent", "harness", "tui"]
stars: 37
forks: 2
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-05T18:14:38Z"
lastCommitAt: "2026-08-30T09:23:48Z"
lastReleaseAt: "2026-08-17T08:44:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 46
maintainers: ["saeedvaziry", "wjchoi87"]
openGraphImageUrl: "https://opengraph.githubassets.com/1aea8cac5ad74f2c9ad84148cc5695ed36347ce4ccf8143ec5d9f42bc2d5e36f/xal-sh/xal"
---

# Xal (Zal)

> [!IMPORTANT]
> Xal is currently in beta. Only beta releases are available, and breaking changes may occur before the first stable release.

A terminal coding harness with a headless agent core where every capability, is a plugin

Powered by [OpenTUI](https://github.com/anomalyco/opentui)

## Install the beta

Install the latest beta release on macOS, Linux, or Windows from a POSIX shell:

```bash
curl -fsSL https://xal.sh/install | sh -s -- --beta
```

The installer supports x64 and arm64, including glibc and musl Linux. On Windows, run it from Git Bash, MSYS2, or Cygwin. It installs to `~/.local/bin` by default.

Run Xal from any project:

```bash
xal
```

Start the TUI in `plan`, `normal`, or `yolo` mode:

```bash
xal --mode plan
```

Set `"mode": "plan"` in `config.json` to use it by default. Command-line `--mode` takes precedence.

Update to the latest beta release:

```bash
xal update
```

There is no stable installation channel during the beta rollout. See the [installation and beta release guide](https://github.com/xal-sh/xal/blob/HEAD/docs/install.md) for custom paths, supported platforms, and the release process.

## Documentation

The…
