---
repo: "kubuntu-team/kubuntu.org"
name: "kubuntu.org"
description: "The Kubuntu Public Website"
readmeQualityOk: true
url: "https://github.com/kubuntu-team/kubuntu.org"
homepage: "https://kubuntu.org/"
language: "HTML"
languages: ["HTML"]
languagePcts: [100]
topics: ["kde", "kubuntu"]
stars: 40
forks: 22
openIssues: 17
closedIssues: 13
watchers: 3
contributors: 14
recentReleases: 0
createdAt: "2024-04-07T18:17:54Z"
lastCommitAt: "2026-10-29T08:58:33Z"
lastReleaseAt: "2025-11-07T22:46:08Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 79
undervaluedScore: 58
maintainers: ["rikmills", "ricktimmis", "ArrayBolt3"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0b54b22c277cb78d50c2af414d1b6a327ad83fcd36f733b1a16efd79aa4e357/kubuntu-team/kubuntu.org"
---

# kubuntu.org
Repository for the Kubuntu.org website. This is where we can add new pages, update old ones, maintain and manage the 
website and its content.

## Development Workflow

We follow a branching strategy to ensure stable deployments:

- `main` branch: Production environment (kubuntu.org)
- `develop` branch: Testing environment (kubuntu-team.github.io/kubuntu.org)
- Feature branches: Created from `develop` for new features or fixes

### Branch Protection Rules
- `main`: Requires pull request reviews before merging
- `develop`: Allows direct pushes for testing
- Feature branches: Created from `develop` for development work

## New to development ?
No worries we have you covered, we're assuming you are working on a Kubuntu, or another Ubuntu based Linux distribution.

**Step 1**

Open a terminal application such as Konsole

**Step 2**

Copy the following line and paste it into the terminal window
at the command line.

```shell
wget -O setup.sh https://raw.githubusercontent.com/kubuntu-team/kubuntu.org/develop/setup.sh && bash setup.sh
```
Want more detail about what the script is doing, check the [setup…
