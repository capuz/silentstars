---
repo: "LKlinke/Prodigy"
name: "Prodigy"
description: "A tool that analyses probabilistic programs, allows for automatic invariance checking and handles inference all based on Generatingfunctionology."
readmeQualityOk: true
url: "https://github.com/LKlinke/Prodigy"
language: "Python"
languages: ["Python"]
languagePcts: [86]
stars: 5
forks: 1
openIssues: 26
closedIssues: 28
watchers: 1
contributors: 10
recentReleases: 0
createdAt: "2022-05-02T15:01:58Z"
lastCommitAt: "2026-11-03T10:52:25Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 72
undervaluedScore: 74
maintainers: ["LKlinke", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ded723888eac3139a2a55ab507d689fdeec7368eaeaa83a2407036c4f7403ccc/LKlinke/Prodigy"
---

# prodigy: PRObability DIstributions via GeneratingfunctionologY

prodigy is a prototypical tool for the analysis of probabilistic non-negative integer programs with `while`-loops. It is based on (probability) generating functions.

It provides a command-line interface and a web GUI.

## Contents

1. Installation
2. Basic Usage

## Installation

To install Prodigy, follow these steps:

1. Make sure [Python](https://www.python.org/downloads/) 3.11 or newer is installed (tested with 3.11 and 3.14).
2. Install [GiNaC](https://www.ginac.de/Download.html), which also requires [CLN](https://www.ginac.de/CLN/).
3. Install [uv](https://docs.astral.sh/uv/getting-started/installation/).
4. Clone or download the Prodigy repository, open a command prompt in its root folder, and type `./install.sh`. This installs Prodigy with the dependency versions locked in `uv.lock` into `.venv`, and the Z3 solver for pysmt.

If no errors occurred, you have successfully installed Prodigy.
Now there are two options on how to use the tool. You can either use the command-line interface (CLI) or the web GUI. The next section (_Basic Usage_) details how to achieve both of these things.

### Troubleshooting

If…
