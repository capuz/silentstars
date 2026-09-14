---
repo: "Generous-Corp/pulp"
name: "pulp"
description: "Cross-platform audio plugin and application framework (in alpha). MIT licensed."
readmeQualityOk: true
url: "https://github.com/Generous-Corp/pulp"
homepage: "https://www.generouscorp.com/pulp/"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [68, 21]
stars: 17
forks: 1
openIssues: 573
closedIssues: 2356
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-04-06T18:23:42Z"
lastCommitAt: "2026-09-14T08:35:20Z"
lastReleaseAt: "2026-04-18T03:53:16Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 96
undervaluedScore: 47
maintainers: ["danielraffel", "shipyard-local[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/93b858927bd053f53915fceeb8d96fc9704c884a9c75c356a99fd32589d5aa32/Generous-Corp/pulp"
---

# Pulp

A cross-platform audio plugin and application framework. MIT licensed, C++20 core, Swift on Apple, JS-scripted GPU UIs.

## Install

**macOS / Linux**

```bash
curl -fsSL https://www.generouscorp.com/pulp/install.sh | sh
```

**Windows (PowerShell)**

```powershell
irm https://www.generouscorp.com/pulp/install.ps1 | iex
```

The macOS/Linux installer normally adds the matching SDK after the CLI; the
Windows installer currently installs the CLI only. Before SDK-backed builds,
check `pulp sdk status` and run `pulp sdk install` if no matching SDK is listed.

<details>
<summary><strong>Optional: Verify before installation</strong> (click to expand)</summary>

For an additional layer of security, you can download the installer and verify its SHA-256 checksum before running it:

**macOS / Linux**

```bash
(
  set -e
  curl -fLso install.sh https://www.generouscorp.com/pulp/install.sh
  curl -fLso SHA256SUMS https://raw.githubusercontent.com/Generous-Corp/pulp/main/tools/install/SHA256SUMS
  if command -v sha256sum >/dev/null; then
    sha256sum -c SHA256SUMS --ignore-missing
  else
    shasum -a 256 -c SHA256SUMS --ignore-missing
  fi
  sh install.sh
)
```

**Windows…
