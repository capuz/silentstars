---
repo: "BeautyyuYanli/codex-apply-patch"
name: "codex-apply-patch"
description: "Standalone automatically updated mirror of OpenAI Codex apply-patch"
readmeQualityOk: true
url: "https://github.com/BeautyyuYanli/codex-apply-patch"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
stars: 56
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-27T20:18:18Z"
lastCommitAt: "2026-08-19T04:08:00Z"
lastReleaseAt: "2026-08-04T06:29:34Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 36
maintainers: ["github-actions[bot]", "BeautyyuYanli"]
openGraphImageUrl: "https://opengraph.githubassets.com/87f9eb6a2a2c6737cfd64f8f9be248db7698ecb08cc4dc681634bcd41cf0c5d7/BeautyyuYanli/codex-apply-patch"
---

# apply-patch

A standalone distribution of OpenAI Codex's
[`apply_patch`](https://github.com/openai/codex/tree/main/codex-rs/apply-patch)
utility. This repository mirrors the upstream Rust crate and publishes
ready-to-install bundles containing both a binary and an agent skill.

For the patch format and tool instructions, see [`SKILL.md`](https://github.com/BeautyyuYanli/codex-apply-patch/blob/HEAD/SKILL.md).

## Download

Prebuilt bundles are available from
[GitHub Releases](https://github.com/BeautyyuYanli/codex-apply-patch/releases):

| Platform | Release asset suffix |
| --- | --- |
| Linux x86-64 | `x86_64-unknown-linux-gnu.tar.gz` |
| Linux ARM64 | `aarch64-unknown-linux-gnu.tar.gz` |
| macOS Apple Silicon | `aarch64-apple-darwin.tar.gz` |
| Windows x64 | `x86_64-pc-windows-msvc.zip` |

Every archive has a matching `.sha256` checksum and contains one top-level
directory:

```text
apply-patch/
├── apply_patch          # apply_patch.exe on Windows
├── SKILL.md
├── LICENSE
├── NOTICE
├── SOURCE
└── THIRD_PARTY_LICENSES.html
```

### Download the latest release from a shell

The following command downloads the newest published release, including
prereleases. It requires `curl`…
