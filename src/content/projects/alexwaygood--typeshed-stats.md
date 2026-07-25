---
repo: "AlexWaygood/typeshed-stats"
name: "typeshed-stats"
description: "Library and command-line tool to gather stats on typeshed packages"
readmeQualityOk: true
url: "https://github.com/AlexWaygood/typeshed-stats"
homepage: "https://alexwaygood.github.io/typeshed-stats/"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["python", "python-typing", "typeshed", "typing"]
stars: 14
forks: 6
openIssues: 3
closedIssues: 164
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2022-10-09T23:59:17Z"
lastCommitAt: "2026-07-25T03:21:26Z"
lastReleaseAt: "2024-06-09T01:15:01Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 76
maintainers: ["renovate[bot]", "AlexWaygood"]
openGraphImageUrl: "https://opengraph.githubassets.com/d51b62a6b8b7670f7402b6a8a10ecf272aff6ad08fb31b464d8275ff6df95354/AlexWaygood/typeshed-stats"
postedAt: "2026-07-01T07:12:26.962Z"
---

# typeshed-stats

<br>

---

## A CLI tool and library to gather stats on [typeshed](https://github.com/python/typeshed)

<br>

<br>
<br>

---

<br>
</div>

## What's this project for?

This project is for easy gathering of statistics relating to [typeshed](https://github.com/python/typeshed)'s stubs. As well as being a CLI tool and library, it also powers [a website](https://alexwaygood.github.io/typeshed-stats/) where stats about typeshed's stubs are uploaded twice a day.

This project was created by Alex Waygood. It is not necessarily endorsed by any of the other typeshed maintainers.

Some examples of things you can do from the command line:

- Create a `.csv` file with stats on all typeshed stubs: `typeshed-stats --typeshed-dir <PATH_TO_TYPESHED_CLONE> --to-file stats.csv` (the `.csv` file extension will be automatically detected by the script to identify the format required).
- Pretty-print stats on typeshed stubs for emoji and redis to the terminal, in JSON format: `typeshed-stats --typeshed-dir <PATH_TO_TYPESHED_CLONE> --to-json emoji redis`
- Generate a MarkDown file detailing stats on typeshed's stubs for protobuf and the stdlib: `typeshed-stats --typeshed-dir…
