---
repo: "myyrakle/billion_row_challenge"
name: "billion_row_challenge"
description: "Billion Row Challenge"
originalDescription: "10억줄 처리 챌린지"
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/myyrakle/billion_row_challenge"
language: "Rust"
stars: 40
forks: 13
openIssues: 1
closedIssues: 21
watchers: 1
contributors: 14
recentReleases: 0
createdAt: "2024-03-10T15:55:02Z"
lastCommitAt: "2026-07-30T06:06:10Z"
lastReleaseAt: "2024-09-01T01:59:25Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 36
maintainers: ["myyrakle"]
openGraphImageUrl: "https://opengraph.githubassets.com/ca45211f086c33ac2aef83bec8f00ba84a984f6e7e275358994ce2c27910a9f6/myyrakle/billion_row_challenge"
---

# billion row challenge

- This is a challenge to process 1 billion data entries using various programming languages.

## How to proceed

1. Run setup.sh to generate test data. (Requires Rust. Approximately 17GB in size.)
2. The input data file contains pairs of regions and measurements separated by new lines. The numbers are integer values.

```
Prico;458634
Canada;780790
Central;798387
Athens;799643
Boa Vista;75486
```

3. Read the file and calculate the maximum, minimum, count, total, and average based on the region names.
4. When performing division, use integer operations and discard the remainder.
5. Sort the data in ascending order based on the region names.
6. The expected output format is as follows: `region_name=min_value;max_value;average_value(total/count)`

```
Adenarith=1;9999999;5000594(4716533623284/9431947)
Amsterdam=4;9999999;4999133(4715142248923/9431920)
Anápolis=0;9999999;4999550(4718363502090/9437576)
```

## Restrictions

- Must operate in a typical commercial computing environment.
  - linux/amd64, RAM 64GB, multi-core (8 cores)
- However, unsafe or tricky black magic techniques are allowed.
- Please name the submitted folder or source file in a…
