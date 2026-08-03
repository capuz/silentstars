---
repo: "Generous-Corp/pulp"
name: "pulp"
description: "Cross-platform audio plugin and application framework (in alpha). MIT licensed."
readmeQualityOk: true
url: "https://github.com/Generous-Corp/pulp"
homepage: "https://www.generouscorp.com/pulp/"
language: "C++"
languages: ["C++"]
languagePcts: [72]
stars: 13
forks: 1
openIssues: 531
closedIssues: 2078
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-04-06T18:23:42Z"
lastCommitAt: "2026-08-03T06:26:19Z"
lastReleaseAt: "2026-04-18T03:53:16Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 96
undervaluedScore: 50
maintainers: ["danielraffel", "shipyard-local[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f6c67f75872bddf37765705e566a72b97d73a31913c7597ae2246f642c6d160/Generous-Corp/pulp"
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

**Windows (PowerShell)**

```powershell
Invoke-WebRequest https://www.generouscorp.com/pulp/install.ps1 -OutFile install.ps1
Invoke-WebRequest https://raw.githubusercontent.com/Generous-Corp/pulp/main/tools/install/SHA256SUMS -OutFile SHA256SUMS
$expected…
