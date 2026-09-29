---
repo: "yetone/magpie-releases"
name: "magpie-releases"
description: "Signed builds of magpie"
readmeQualityOk: true
url: "https://github.com/yetone/magpie-releases"
language: "Shell"
languages: ["Shell", "Ruby"]
languagePcts: [76, 24]
stars: 39
forks: 2
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-23T16:56:00Z"
lastCommitAt: "2026-09-29T08:11:05Z"
lastReleaseAt: "2026-09-24T05:13:51Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 83
undervaluedScore: 45
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/33342e91e6956b329f30cd5a0c71a1b4fa3e9c7a997b2cdd6d81a0c55f1b7fcf/yetone/magpie-releases"
---

# magpie-releases

Builds of [magpie](https://github.com/yetone/magpie). Pushing a `v*` tag
there triggers the workflow here, which builds, signs, notarises and
publishes the release.

Get it from [usemagpie.ai](https://usemagpie.ai) (`curl -fsSL https://usemagpie.ai/install.sh | sh`),
or download the latest from [Releases](https://github.com/yetone/magpie-releases/releases/latest):

- macOS, Apple Silicon: `magpie-darwin-arm64.dmg`
- macOS, Intel: `magpie-darwin-amd64.dmg`
- Windows: `magpie-windows-amd64.exe`, or `magpie-windows-arm64.exe`
- Linux: `magpie-linux-amd64`, or `magpie-linux-arm64` (needs GTK 3 and WebKitGTK 4.1)
- Terminal only: `magpie-cli-<os>-<arch>`

## Homebrew

```sh
brew tap yetone/magpie-releases https://github.com/yetone/magpie-releases
brew trust --tap yetone/magpie-releases
```

(`brew trust` is Homebrew 7's; skip it on an older Homebrew.)

Terminal-only binary, as `magpie` on macOS and Linux:

```sh
brew install magpie
```

The macOS app, signed and notarised, into `/Applications`:

```sh
brew install --cask magpie-app
```

Both are updated on every release, so `brew upgrade` picks up new versions. The app also updates itself, as it does however it was…
