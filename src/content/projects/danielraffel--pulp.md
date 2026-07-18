---
repo: "danielraffel/pulp"
name: "pulp"
description: "Cross-platform audio plugin and application framework (in alpha). MIT licensed."
readmeQualityOk: true
url: "https://github.com/danielraffel/pulp"
homepage: "https://www.generouscorp.com/pulp/"
language: "C++"
languages: ["C++"]
languagePcts: [68]
stars: 13
forks: 1
openIssues: 502
closedIssues: 1838
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-04-06T18:23:42Z"
lastCommitAt: "2026-07-18T05:46:53Z"
lastReleaseAt: "2026-04-18T03:53:16Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 96
undervaluedScore: 49
maintainers: ["danielraffel", "shipyard-local[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b573869364ae94d9eedc4d8d055c9584ecbf1199c04da77573d1cff9545950e8/danielraffel/pulp"
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
  curl -fLso SHA256SUMS https://raw.githubusercontent.com/danielraffel/pulp/main/tools/install/SHA256SUMS
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
Invoke-WebRequest https://raw.githubusercontent.com/danielraffel/pulp/main/tools/install/SHA256SUMS -OutFile SHA256SUMS
$expected =…
