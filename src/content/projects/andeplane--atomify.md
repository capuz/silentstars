---
repo: "andeplane/atomify"
name: "atomify"
description: "Real time molecular dynamics in the browser using LAMMPS"
readmeQualityOk: true
url: "https://github.com/andeplane/atomify"
language: "TypeScript"
languages: ["TypeScript", "C++"]
languagePcts: [52, 34]
topics: ["atomistic-simulations", "lammps", "molecular-dynamics", "molecular-dynamics-simulation", "molecular-simulation", "visualization", "webassembly", "webgl"]
stars: 75
forks: 12
openIssues: 13
closedIssues: 64
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2021-04-25T11:45:35Z"
lastCommitAt: "2026-09-11T08:14:48Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 94
undervaluedScore: 49
maintainers: ["andeplane", "dependabot[bot]", "henriasv"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/361413203/371992af-a70d-4113-918c-640520a3f128"
fundingLinks: ["GITHUB:https://github.com/andeplane"]
discussionCount: 1
---

# Atomify - real time molecular dynamics simulations in the browser

TL;DR:

- Run molecular dynamics (LAMMPS) in the browser
- Upload your own scripts or run one of the built-in examples
- Watch the simulation while it happens and view plots of real time physical quantities such as temperature and pressure
- Analyze the simulation in a Jupyter notebook

## ⚛️ Try it in your browser ⚛️

➡️ **https://andeplane.github.io/atomify**

➡️ **[Customize Atomify with your own simulations for e.g. teaching](https://github.com/andeplane/atomify-examples-template)** (this only takes a few minutes if you have simulations).

To see the latest changes, please check the [change log](https://github.com/andeplane/atomify/blob/HEAD/CHANGELOG.md).

The typical workflow when developing scripts for LAMMPS includes working with several programs. A text editor is needed to modify the scripts, the terminal to run LAMMPS, and programs like VMD or Ovito reading trajectories from a file dumped to the disk to visualize the system over time. If physical quantities are computed with LAMMPS, the data is often plotted with MATLAB or Python. This is a tedious process, especially for teaching purposes and for…
