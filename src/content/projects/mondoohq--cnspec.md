---
repo: "mondoohq/cnspec"
name: "cnspec"
description: "An open source, cloud-native security to protect everything from build to runtime"
readmeQualityOk: true
url: "https://github.com/mondoohq/cnspec"
homepage: "https://cnspec.ai"
language: "Go"
languages: ["Go", "HCL"]
languagePcts: [52, 32]
topics: ["cloud-native", "compliance", "opensource", "policy-as-code", "security", "security-as-code", "declarative", "policy", "kubernetes"]
stars: 441
forks: 41
openIssues: 231
closedIssues: 335
watchers: 13
contributors: 50
recentReleases: 0
createdAt: "2022-09-21T08:34:41Z"
lastCommitAt: "2026-09-21T09:14:13Z"
lastReleaseAt: "2022-10-25T20:42:37Z"
status: "thriving"
tags: []
healthScore: 91
undervaluedScore: 35
maintainers: ["tas50", "chris-rock", "mondoo-mergebot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3a8b23998f2fbee023a46550c237769a99de433746601f121c36e523b6bf37b8/mondoohq/cnspec"
---

# cnspec

**Open source, cloud-native security and policy project**

cnspec assesses your entire infrastructure's security and compliance. It finds vulnerabilities and misconfigurations across public and private cloud environments, Kubernetes clusters, containers, container registries, servers, endpoints, SaaS products, infrastructure as code, APIs, and more.

A powerful policy as code engine, cnspec is built upon Mondoo's security data fabric. It comes configured with default security policies that run right out of the box. It's both fast and simple to use!

### Quick start

```bash
bash -c "$(curl -sSL https://install.mondoo.com/sh)"
cnspec scan local
```

## Installation

Install cnspec with our installation script:

**Linux and macOS**

```bash
bash -c "$(curl -sSL https://install.mondoo.com/sh)"
```

**Windows**

```powershell
Set-ExecutionPolicy Unrestricted -Scope Process -Force;
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072;
iex ((New-Object System.Net.WebClient).DownloadString('https://install.mondoo.com/ps1'));
Install-Mondoo;
```

If you prefer manual installation, you can find the cnspec packages in…
