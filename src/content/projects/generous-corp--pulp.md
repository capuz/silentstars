---
repo: "Generous-Corp/pulp"
name: "pulp"
description: "Cross-platform audio plugin and application framework (in alpha). MIT licensed."
readmeQualityOk: true
url: "https://github.com/Generous-Corp/pulp"
homepage: "https://www.generouscorp.com/pulp/"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [64, 24]
stars: 22
forks: 2
openIssues: 650
closedIssues: 2892
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-04-06T18:23:42Z"
lastCommitAt: "2026-10-31T15:32:59Z"
lastReleaseAt: "2026-04-18T03:53:16Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 96
undervaluedScore: 48
maintainers: ["danielraffel", "shipyard-local[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/114b041c5dedeba834d265e86b4ace52ae3e5055ee49925d6fb1507779c2b946/Generous-Corp/pulp"
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
Invoke-WebRequest https://www.generouscorp.com/pulp/install.ps1 -OutFile…
