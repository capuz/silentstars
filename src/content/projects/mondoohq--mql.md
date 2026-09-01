---
repo: "mondoohq/mql"
name: "mql"
description: "open source, cloud-native, graph-based query language"
readmeQualityOk: true
url: "https://github.com/mondoohq/mql"
homepage: "https://mondoo.com/docs/mql"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["aws", "cis", "security", "azure", "gcp", "linux", "macos", "cloud-computing", "cloud-native", "unix"]
stars: 408
forks: 40
openIssues: 255
closedIssues: 944
watchers: 12
contributors: 49
recentReleases: 0
createdAt: "2022-08-16T07:52:45Z"
lastCommitAt: "2026-09-01T08:47:56Z"
lastReleaseAt: "2022-10-24T20:51:31Z"
status: "thriving"
tags: ["community_hub"]
healthScore: 95
undervaluedScore: 37
maintainers: ["tas50", "chris-rock", "preslavgerchev"]
openGraphImageUrl: "https://opengraph.githubassets.com/105e8a3aedb523c5ca6c2a47e260455b940cda85e0cf4ccd1010bf75e709d56a/mondoohq/mql"
discussionCount: 60
---

# MQL

**Open source, cloud-native asset inventory and discovery**

MQL is a cloud-native tool for querying your entire infrastructure. Built upon Mondoo's security data fabric, it answers thousands of questions about your infrastructure and integrates with over 1,300 resources across cloud accounts, Kubernetes, containers, services, VMs, APIs, and more.

Here are a few more examples:

```bash
# run a query and print the output
mql run -c "ports.listening { port process }"

# open an interactive shell to an aws account
mql shell aws
> aws.ec2.instances{*}
```

[:books: To learn more, read the MQL docs.](https://mondoo.com/docs/mql)

## Installation

Install `mql` with our installation script:

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

If you prefer manual installation, you can find the `mql` packages in our [GitHub…
