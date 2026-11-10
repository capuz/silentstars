---
repo: "pabair/ml2-ws26"
name: "ml2-ws26"
description: "Vorlesung Data Mining und Machine Learning 2"
readmeQualityOk: true
url: "https://github.com/pabair/ml2-ws26"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [100]
stars: 9
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-25T15:29:32Z"
lastCommitAt: "2026-11-10T11:38:17Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 78
undervaluedScore: 42
maintainers: ["pabair"]
openGraphImageUrl: "https://opengraph.githubassets.com/131ad96158ba25682bade84ecbb0c00c33bd76795133fb171faf898c94b85d1a/pabair/ml2-ws26"
---

# Maschinelles Lernen 2
Code-Repository für den Kurs "Maschinelles Lernen 2" an der Hochschule Karlsruhe.

# Setup

The recommended way to setup your development environment is to use Anaconda:
1. Download and install Miniconda for your OS from here: [https://docs.conda.io/en/latest/miniconda.html](https://docs.conda.io/en/latest/miniconda.html)

2. Start the `Anaconda Prompt` on Windows. On Mac or Linux, just open a new terminal window.

3. Create a new environment for this course:

`conda create --name ml2 python=3.12`

4. Activate this environment:

`conda activate ml2`

5. Install the following packages: numpy, pandas, matplotlib, scikit-learn.

`conda install numpy pandas matplotlib scikit-learn jupyter`

6. Install Pytorch and follow the instructions [here](https://pytorch.org/get-started/locally/). You do not need the GPU support, CPU is enough.

7. Test your installation by opening a new jupyter notebook. A new browser window should open.

`jupyter notebook`
