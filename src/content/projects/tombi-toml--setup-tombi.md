---
repo: "tombi-toml/setup-tombi"
name: "setup-tombi"
description: "Set up Tombi in your GitHub Actions workflow"
url: "https://github.com/tombi-toml/setup-tombi"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [75, 25]
stars: 7
forks: 1
openIssues: 0
closedIssues: 7
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-05-08T14:36:07Z"
lastCommitAt: "2026-06-28T03:11:11Z"
lastReleaseAt: "2025-12-08T16:08:57Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 78
maintainers: ["ya7010", "github-actions[bot]", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a48e36efc169d1728430abe5fbe3eef1f2b4b3647405bf67535aaffd9472edf/tombi-toml/setup-tombi"
---

# setup-tombi

This action sets up [Tombi](https://github.com/tombi-toml/tombi) in your GitHub Actions workflow.

## Usage

### Basic usage

```yaml
- uses: tombi-toml/setup-tombi@v1.1.6
```

This is the recommended form from `setup-tombi@v1.1.0` onward. When `with.version` is omitted, the action installs the `tombi` CLI version that matches the `setup-tombi` release version.

### Install a specific version

```yaml
- uses: tombi-toml/setup-tombi@v1.1.6
  with:
    version: '1.0.0'
```

### Install a version from a lock file

```yaml
- uses: tombi-toml/setup-tombi@v1.1.6
  with:
    lockfile: 'uv.lock'
```

### Install with checksum verification

The checksum examples below are for GitHub-hosted Linux x64 runners (`x86_64-unknown-linux-musl`).

#### For the archive

```yaml
- uses: tombi-toml/setup-tombi@v1.1.6
  with:
    archive-checksum: '774491f7cc990b86ee2e14d41d08743f7bd953ba2269a46ca5096e75de83e18a'
```

<details>
<summary>🔐 Archive checksums for all supported targets</summary>

| Target | Archive checksum |
|--------|----------|
| `aarch64-apple-darwin` | `85775462cd3dc5e6f184a2633df7c114a84184d4b04c5f8e512760bf9e09fc97` |
| `aarch64-pc-windows-msvc` |…
