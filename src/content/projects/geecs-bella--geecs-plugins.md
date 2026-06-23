---
repo: "GEECS-BELLA/GEECS-Plugins"
name: "GEECS-Plugins"
description: "Add-ons for the Generalized Equipment and Experiment Control system"
url: "https://github.com/GEECS-BELLA/GEECS-Plugins"
language: "Python"
languages: ["Python", "Jupyter Notebook"]
languagePcts: [72, 27]
stars: 10
forks: 5
openIssues: 13
closedIssues: 60
watchers: 4
contributors: 30
recentReleases: 0
createdAt: "2020-04-28T22:11:27Z"
lastCommitAt: "2026-06-23T23:16:51Z"
lastReleaseAt: "2020-08-19T21:33:49Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 96
undervaluedScore: 73
maintainers: ["skbarber"]
openGraphImageUrl: "https://opengraph.githubassets.com/59fa9b0ac314f5c0376a31f44fe05d059cb97f47adecec2088c601d161fea863/GEECS-BELLA/GEECS-Plugins"
discussionCount: 1
---

# GEECS-Plugins
Add-ons for the Generalized Equipment and Experiment Control system-

## Using Pre-Commit Hooks

This project uses [pre-commit](https://pre-commit.com/) to automatically run formatting, linting, and other checks before you make a commit.

### 1. Install `pre-commit`
```bash
pip install pre-commit
```

### 2. Install the hooks

Run this once in the repo root to set up the Git hook scripts:
```bash
pre-commit install
```

Now, every time you run git commit, pre-commit will:

- Run the configured checks on staged files.
- Stop the commit if any check fails (you’ll need to fix the issues and re-stage).
- The configuration is in .pre-commit-config.yaml in the repo root.

## Documentation
https://sites.google.com/a/lbl.gov/geecs/plugins?authuser=0 (original)

read the docs: https://geecs-plugins.readthedocs.io/en/latest/

## License

*** Copyright Notice ***

“GEECS (Generalized Equipment and Experiment Control System)”, Copyright (c) 2016, The Regents of the University of California, through Lawrence Berkeley National Laboratory (subject to receipt of any required approvals from the U.S. Dept. of Energy).  All rights reserved.

If you have questions about your rights to…
