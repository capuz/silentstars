---
repo: "STS-CS-WPI/student-solver-tool"
name: "student-solver-tool"
description: "A tool to assign TA's/PLA's to courses at WPI based on their preference and abilities."
readmeQualityOk: true
url: "https://github.com/STS-CS-WPI/student-solver-tool"
homepage: "https://sts.cs.wpi.edu"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["mqp", "wpi"]
stars: 5
forks: 0
openIssues: 30
closedIssues: 96
watchers: 0
contributors: 10
recentReleases: 0
createdAt: "2025-08-26T18:20:44Z"
lastCommitAt: "2026-10-26T18:06:27Z"
lastReleaseAt: "2026-04-30T17:50:54Z"
status: "thriving"
tags: []
healthScore: 91
undervaluedScore: 76
maintainers: ["ryan-griffin", "MaxGingold", "zaicila"]
openGraphImageUrl: "https://opengraph.githubassets.com/869ed897836d8c7f1f320378455969b1e7dd462a2a3ee975df6c5574a0e829c6/STS-CS-WPI/student-solver-tool"
---

# Student Solver Tool

This is a tool to validate, solve, and manage TA and PLA assignment at Worcester Polytechnic Institute.

> [!NOTE]
> This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## Prerequisites

#### POSIX System

You will need a POSIX style operating system to run this repo.
Mac and Linux users are OK, but Windows users should use [WSL](https://learn.microsoft.com/en-us/windows/wsl/).

#### Node Versioning

This project uses `nvm` to manage Node versions. There is a file named `./nvmrc` that contains the correct node version that `nvm` will install.
To install `nvm`, use one of the following commands or read their docs [here](https://github.com/nvm-sh/nvm):

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

Then install & use the correct version of Node:

```bash
nvm install   # installs Node version specified in .nvmrc
nvm use       # switches to the node version
```

#### Package Manager

This project uses `pnpm` as the package manager. To install `pnpm`, run theses commands or visit their…
