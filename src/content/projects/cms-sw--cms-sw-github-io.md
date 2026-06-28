---
repo: "cms-sw/cms-sw.github.io"
name: "cms-sw.github.io"
description: "Documentation for CMSSW"
url: "https://github.com/cms-sw/cms-sw.github.io"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [63]
stars: 25
forks: 60
openIssues: 3
closedIssues: 4
watchers: 9
contributors: 32
recentReleases: 0
createdAt: "2014-06-04T12:25:03Z"
lastCommitAt: "2026-06-28T13:09:25Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 79
undervaluedScore: 64
maintainers: ["cmsbuild", "smuzaffar", "makortel"]
openGraphImageUrl: "https://opengraph.githubassets.com/59e6a6967018ed0ea52e1477c6b41858ccee64ec771d056fc788e78239c8e7dd/cms-sw/cms-sw.github.io"
---

CMSSW work pages
================

They include:

- Actual documentation.
- Various scripts to import log files sparse in /afs to the git repository. 

Importing log files to the repository.
======================================

A reasonable amount of processed log files, usually in json format, can be 
stored in this git repository and not cause scalability issues, since git 
is extremely good at compressing similar files.

This allows us to serve integration builds results via [Github
Pages](http://pages.github.com)

In order to populate the data directory:

```
git clone cms-sw.github.com
cd cms-sw.github.com
./process-logs --logdir <path-to-your-toplevel-log-directory>
make -j 20
git commit data -m'Results updated'
git push origin master
```

Contributing to repository.
=====================

This repository contains two branches - `master` and `code`. All user submitted changes should go to `code` branch which will then be merged into `master` branch. Auto-generated data such as JSON files submitted by Cms Bot should go directly in to `master`. This should solve PR issues like [this](https://github.com/cms-sw/cms-sw.github.io/pull/74).
