---
repo: "yetone/magpie-releases"
name: "magpie-releases"
description: "Signed builds of magpie"
readmeQualityOk: true
url: "https://github.com/yetone/magpie-releases"
language: "Shell"
languages: ["Shell"]
languagePcts: [79]
stars: 359
forks: 27
openIssues: 71
closedIssues: 21
watchers: 3
contributors: 2
recentReleases: 10
createdAt: "2026-09-23T16:56:00Z"
lastCommitAt: "2026-11-24T01:54:27Z"
lastReleaseAt: "2026-09-24T05:13:51Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "under_pressure"]
healthScore: 68
undervaluedScore: 24
maintainers: ["github-actions[bot]", "yetone"]
openGraphImageUrl: "https://opengraph.githubassets.com/10217f2318d14d2d173f01dcea4e202c671f92aa0e384471e276046e6825c94f/yetone/magpie-releases"
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
