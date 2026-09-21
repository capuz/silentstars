---
repo: "YuNa-Zju/phy_exp"
name: "phy_exp"
description: "Physics Experiment Report Repository"
originalDescription: "大物实验报告仓库"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/YuNa-Zju/phy_exp"
language: "TeX"
languages: ["TeX"]
languagePcts: [89]
stars: 17
forks: 9
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2025-09-21T05:39:05Z"
lastCommitAt: "2026-09-21T09:14:10Z"
lastReleaseAt: "2025-10-26T08:06:03Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 90
undervaluedScore: 35
maintainers: ["YuNa-Zju"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3ad4ce6a509b33b7b4c2767e4b4d19de8a415465fd46fcd36b10776f746441d/YuNa-Zju/phy_exp"
---

# University Physics Experiment Reports

Reports and LaTeX templates for University Physics experiments at Zhejiang University. [Browse experiments](https://github.com/YuNa-Zju/phy_exp/blob/HEAD/experiments/README.md) · [Download PDF reports](https://github.com/YuNa-Zju/phy_exp/releases/latest)

## Getting Started

Install Python 3.10+ and TeX Live (Windows / Linux) or MacTeX (macOS). On GitHub, click **Code → Download ZIP**, then extract and open the project folder. Open a terminal at the level containing `README.md` and run the commands below. On Windows, you can replace `python3` with `python`.

### Create New Report

```bash
python3 scripts/new_experiment.py "单摆法测量重力加速度"
```

Open the generated `experiments/单摆法测量重力加速度/report.tex` and fill in as prompted. Running the command again for the same experiment will successively generate `report-02.tex`, `report-03.tex`; if multiple reports already exist, it creates the next one after the highest number.

For preview reports, add `--preview` at the end of the command:

```bash
python3 scripts/new_experiment.py "单摆法测量重力加速度" --preview
```

Place images in the experiment's `figures/` folder: use `diagrams/` for principle diagrams,…
