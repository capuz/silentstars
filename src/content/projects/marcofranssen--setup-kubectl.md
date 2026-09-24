---
repo: "marcofranssen/setup-kubectl"
name: "setup-kubectl"
description: "Github action to install kubectl and kubectl plugins"
readmeQualityOk: true
url: "https://github.com/marcofranssen/setup-kubectl"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["hacktoberfest", "krew", "krew-plugin", "kubectl", "kubectl-plugins", "kubernetes"]
stars: 7
forks: 1
openIssues: 2
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-08-18T09:55:11Z"
lastCommitAt: "2026-09-24T08:41:35Z"
lastReleaseAt: "2024-09-20T14:18:15Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded"]
healthScore: 85
undervaluedScore: 49
maintainers: ["dependabot[bot]", "marcofranssen"]
openGraphImageUrl: "https://opengraph.githubassets.com/ae63c35650d0db878dd59b797496d6a3b3e493918dfc3990076c84fbef1386c9/marcofranssen/setup-kubectl"
fundingLinks: ["GITHUB:https://github.com/marcofranssen"]
---

# Setup kubectl

This Github action installs [kubectl][] and allows to optionally also install [krew][] to manage [kubectl plugins][krew-plugins]. You can also choose to pre-install a bunch of kubectl plugins by default.

## Usage

### Install stable

Installs the latest `stable` release.

```yaml
steps:
  - uses: marcofranssen/setup-kubectl@v2.0.0
    id: kubectl
  - run: echo ${{ steps.kubectl.output.kubectl-version }}
```

### Install latest

Installs the `latest` release.

```yaml
steps:
  - uses: marcofranssen/setup-kubectl@v2.0.0
    id: kubectl
    with:
      kubectl-version: latest
  - run: echo ${{ steps.kubectl.output.kubectl-version }}
```

### Install specific version

Installs the `v1.24.5` release.

```yaml
steps:
  - uses: marcofranssen/setup-kubectl@v2.0.0
    id: kubectl
    with:
      kubectl-version: v1.24.5
```

### Install krew

Install `krew` allong with kubectl.

```yaml
steps:
  - uses: marcofranssen/setup-kubectl@v2.0.0
    with:
      enable-plugins: true
  - run: echo ${{ steps.kubectl.output.krew-version }}
  - run: kubectl krew install aws-auth
```

### Install plugins

Install `krew` allong with `kubectl` and some plugins.

```yaml
steps:
  - uses:…
