---
repo: "OctopusDeploy/cli"
name: "cli"
description: "| Public |  Next Generation of the Octopus CLI :octopus:"
readmeQualityOk: true
url: "https://github.com/OctopusDeploy/cli"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["public"]
stars: 52
forks: 15
openIssues: 21
closedIssues: 94
watchers: 17
contributors: 44
recentReleases: 0
createdAt: "2022-07-19T03:17:30Z"
lastCommitAt: "2026-08-05T06:07:13Z"
lastReleaseAt: "2022-09-29T06:59:31Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 51
maintainers: ["NickJosevski", "team-integrations-fnm-bot", "team-modern-deployments-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/c2f041628abca64d34b4de0215f5dba1dce56bf8bafcbaa60eebdf91d97a5347/OctopusDeploy/cli"
---

<h3 align="center">cli</h3>
  </p>
</div>

---

## Installation

#### Linux & macOS - CURL script

In your Terminal, run the following command:

```shell
curl -L https://github.com/OctopusDeploy/cli/raw/main/scripts/install.sh | bash
```

This will install Octopus CLI in `/usr/local/bin`. Depending on the permission of `/usr/local/bin`, you may need to provide your sudo password.

If you would like to install to a different location, set the `INSTALL_PATH` variable accordingly:

```shell
curl -L https://github.com/OctopusDeploy/cli/raw/main/scripts/install.sh | INSTALL_PATH=$HOME/bin bash
```

You can also install a specific version by providing the `VERSION` variable:

```shell
curl -L https://github.com/OctopusDeploy/cli/raw/main/scripts/install.sh | VERSION=v0.4.0 bash
```

#### Windows - MSI file

Navigate to latest release on the [GitHub releases page](https://github.com/OctopusDeploy/cli/releases) and expand the **Assets** list.

Download and run the file `octopus_[version]_Windows_x86_64.msi`

*Note:* At this time, the installer is x64 only. If you are using Windows on ARM, download the manual archive instead.

#### Windows - Chocolatey

```shell
choco install octopus-cli…
