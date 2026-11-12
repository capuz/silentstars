---
repo: "Cyber-Threat-Hunting-Playground/ConvertSigmaRepo2SentinelOnePQ"
name: "ConvertSigmaRepo2SentinelOnePQ"
description: "Scripts played by GitHub Actions that converts Sigma rules to SentinelOne PowerQuery via PySigma."
readmeQualityOk: true
url: "https://github.com/Cyber-Threat-Hunting-Playground/ConvertSigmaRepo2SentinelOnePQ"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["github-actions", "sentinelone", "sentinelone-singularity", "sigma", "sigma-rules"]
stars: 15
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-10-05T12:39:35Z"
lastCommitAt: "2026-11-12T05:39:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 63
maintainers: ["wikijm"]
openGraphImageUrl: "https://opengraph.githubassets.com/d760e773faff9d823ca83645411f870881652b7b96f96ce817ef271544aaa7ac/Cyber-Threat-Hunting-Playground/ConvertSigmaRepo2SentinelOnePQ"
discussionCount: 1
---

# ConvertSigmaRepo2SentinelOnePQ

Scripts stolen and heavily based on [rcegan/ConvertSigmaRepo2KQL](https://github.com/rcegan/ConvertSigmaRepo2KQL), played by GitHub Actions that converts Sigma rules to SentinelOne PowerQuery via PySigma.

## Usage

Firstly, modify the 'rules_directory' variable to reflect the location of your Sigma process creation rules. If using in CI/CD and you're cloning the Sigma repo in each time, you can leave this value as-is.

Next, modify the 'output_directory' to match whichever folder you want the rules to be dumped into. Expect over 1000+ results.

## Sigma coverage

| Datasource           | Rule type            | Platform    | 3rd level            | Status                  |
|----------------------|----------------------|-------------|----------------------|-------------------------|
| SigmaHQ              | rules-threat-hunting | cloud       | 2 folders            | ❌ Not applicable      |
| SigmaHQ              | rules-threat-hunting | linux       | file_event           | ⚠️ Will be implemented |
| SigmaHQ              | rules-threat-hunting | linux       | process_creation     | ⚠️ Will be implemented |
| SigmaHQ              |…
