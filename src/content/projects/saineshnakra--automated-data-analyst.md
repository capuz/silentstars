---
repo: "saineshnakra/automated-data-analyst"
name: "automated-data-analyst"
description: "Data analysis skill and python package for Claude Code and Codex: every number computed in code with its calculation, or refused. Paper tables, figures and methods from research data. "
readmeQualityOk: true
url: "https://github.com/saineshnakra/automated-data-analyst"
homepage: "https://automated-data-analyst.streamlit.app/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["ai-data-analyst", "anomaly-detection", "biological-data-analysis", "csv-analysis", "data-analytics", "data-cleaning", "data-exploration", "data-science", "data-visualizations", "eda"]
stars: 34
forks: 14
openIssues: 18
closedIssues: 19
watchers: 1
contributors: 8
recentReleases: 3
createdAt: "2024-11-15T04:39:59Z"
lastCommitAt: "2026-10-27T12:39:27Z"
lastReleaseAt: "2026-10-23T06:56:08Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 90
undervaluedScore: 66
maintainers: ["saineshnakra", "tnalbant", "KingEmma7"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/888827413/5db001ea-b672-4f82-8122-2b45f9a078a7"
---

# ADA: Automated Data Analyst

ADA computes numbers from data files and checks numbers stated about them.
Every number comes from pandas, SciPy or statsmodels, with the calculation and
the rows behind it. A stated number is verified against the data, or reported
unverified with the reason and the one question that would settle it. It is a
Python package and a command line, for people and for coding agents such as
Claude Code and Codex.

```bash
pip install automated-data-analyst     # Python 3.11 or newer
```

## Check a number

```console
$ ada claim flights.csv "The average departure delay was about 13 minutes."
verified: The average departure delay was about 13 minutes.
  12.63907026 (328,521 rows) from mean(dep_delay) lies in 12 to 14, which about 13 minutes stands for.
  calc: mean(dep_delay)
  assumes: Read "departure delay" as dep_delay.
  assumes: Left out 8,255 rows with dep_delay missing.
  assumes: Read "about" as 12 to 14.
  assumes: The unit "minutes" comes from the claim; the check compares numbers only.

$ ada claim flights.csv "The average delay was 13 minutes."
unverified: The average delay was 13 minutes.
  The claim's words fit more than one column, and they…
