---
repo: "mondoohq/mql"
name: "mql"
description: "open source, cloud-native, graph-based query language"
url: "https://github.com/mondoohq/mql"
homepage: "https://mondoo.com/docs/mql"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["aws", "cis", "security", "azure", "gcp", "linux", "macos", "cloud-computing", "cloud-native", "unix"]
stars: 402
forks: 37
openIssues: 211
closedIssues: 869
watchers: 12
contributors: 49
recentReleases: 0
createdAt: "2022-08-16T07:52:45Z"
lastCommitAt: "2026-07-02T06:32:31Z"
lastReleaseAt: "2022-10-24T20:51:31Z"
status: "thriving"
tags: ["solo_builder", "community_hub"]
healthScore: 96
undervaluedScore: 37
maintainers: ["tas50", "preslavgerchev", "arlimus"]
openGraphImageUrl: "https://opengraph.githubassets.com/a8e6c6610a27dcbfbfa57b9e3250db8d8e0cb617851ac742bc5d561d074f75a4/mondoohq/mql"
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
