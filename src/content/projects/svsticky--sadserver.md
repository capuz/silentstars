---
repo: "svsticky/sadserver"
name: "sadserver"
description: "Documentation and configuration management of Study Association Sticky's servers"
readmeQualityOk: true
url: "https://github.com/svsticky/sadserver"
language: "Jinja"
languages: ["Jinja"]
languagePcts: [72]
topics: ["hacktoberfest"]
stars: 10
forks: 0
openIssues: 42
closedIssues: 205
watchers: 6
contributors: 37
recentReleases: 0
createdAt: "2014-03-16T15:04:39Z"
lastCommitAt: "2026-11-06T13:20:06Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 65
maintainers: ["stickyPiston", "rensvmoorsel", "KoenDR06"]
openGraphImageUrl: "https://opengraph.githubassets.com/750a709f9f246ce68a7ff1b401e69806da50be3eebbcb3212e51eb6eb84fc682/svsticky/sadserver"
---

```
                       888
                       888
                       888
.d8888b   8888b.   .d88888 .d8888b   .d88b.  888d888 888  888  .d88b.  888d888
88K          "88b d88" 888 88K      d8P  Y8b 888P"   888  888 d8P  Y8b 888P"
"Y8888b. .d888888 888  888 "Y8888b. 88888888 888     Y88  88P 88888888 888
     X88 888  888 Y88b 888      X88 Y8b.     888      Y8bd8P  Y8b.     888
 88888P' "Y888888  "Y88888  88888P'  "Y8888  888       Y88P    "Y8888  888

```

# Server workspace

This repository contains Ansible playbooks and relevant documentation for the
IT infrastructure at Study Association Sticky. The name of this repository, and
the association's production server, is a reference to [this][sadserver] Twitter
account.

In this README, we try to give some reasons as to why the project is organised
the way it is. Don't try to reinvent the wheel, but feel free to periodically
reconsider the way things are done!

Quick links:

 1. [Updating SSH keys][ssh-keys]
 1. [Deployment guide][deployment-guide]
 1. [Other documentation][docs]

## Reasons for the current approach to Sticky's server management

It was important for this committee to make Sticky's infrastructure easy to…
