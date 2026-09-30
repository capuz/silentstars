---
repo: "ParallelMaths/parallel"
name: "parallel"
description: "Weekly mathematics bulletin written by Simon Singh"
readmeQualityOk: true
url: "https://github.com/ParallelMaths/parallel"
homepage: "https://parallel.org.uk"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [65]
stars: 8
forks: 5
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 6
recentReleases: 0
createdAt: "2017-05-19T13:43:44Z"
lastCommitAt: "2026-09-30T09:57:29Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 92
undervaluedScore: 85
maintainers: ["mrmmarsh", "dr3", "leoprd"]
openGraphImageUrl: "https://opengraph.githubassets.com/958901a4829662e59467fd860c4a4899399ecf5946e0fb1bbe145b46ba451ee8/ParallelMaths/parallel"
---

# Parallel

_Parallel_ is a weekly bulletin written by Simon Singh, author of No.1 bestseller Fermat’s Last Theorem.

Every week, participating students will receive an email that contains 60 minutes of interesting, fun and challenging maths that goes beyond school maths: mystery and history, activities and oddities, puzzles and problems.

## Getting started

This repo contains a static website that hosts the content of each week's
parallelogram. Using Firebase, students can create accounts, save their
progress and see their scores.

**Firstly clone the repository and enter the directory**

```bash
git clone git@github.com:ParallelMaths/parallel.git
cd parallel
```

**Next you need to setup your service account & aws information**
```bash
mkdir private
touch private/service-account.json # put your service account json in here
touch private/aws-account.json # put your aws credential json in here
```

**Then you can install the node dependancies using our version of Node**
```bash
nvm use # If you dont have nvm it can be installed here https://github.com/nvm-sh/nvm#installing-and-updating
npm install
```

**Finally you can start the app locally**
```bash
npm start
```

**You can…
