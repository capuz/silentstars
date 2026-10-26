---
repo: "dodona-edu/universal-judge"
name: "universal-judge"
description: "Universal judge for educational software testing"
readmeQualityOk: true
url: "https://github.com/dodona-edu/universal-judge"
homepage: "https://docs.dodona.be/en/tested"
language: "Python"
languages: ["Python"]
languagePcts: [80]
topics: ["dodona", "educational-software", "judge"]
stars: 9
forks: 11
openIssues: 111
closedIssues: 273
watchers: 2
contributors: 15
recentReleases: 0
createdAt: "2019-09-26T09:47:31Z"
lastCommitAt: "2026-10-26T18:06:59Z"
lastReleaseAt: "2023-03-03T13:15:46Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 91
undervaluedScore: 86
maintainers: ["TomNaessens", "bmesuere", "niknetniko"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf03ff55a152639c8900ebe52233850612b4dda5dba8063e59a4db1a13f49204/dodona-edu/universal-judge"
---

# TESTed: universal judge for educational software testing

TESTed is a software test framework to evaluate submissions for programming exercises across multiple programming languages, using a single test suite per exercise.

TESTed is developed by [Team Dodona](https://dodona.ugent.be/en/about/) at Ghent University.
If you use this software in research, please cite:

- Strijbol, N., Van Petegem, C., Maertens, R., Sels, B., Scholliers, C., Dawyndt, P., & Mesuere, B. (2023). TESTed—An educational testing framework with language-agnostic test suites for programming exercises. SoftwareX, 22, 101404. [doi:10.1016/j.softx.2023.101404](https://doi.org/10.1016/j.softx.2023.101404)

> [!IMPORTANT]
> The documentation below is intended for running TESTed as a standalone tool.
> If you are looking to create exercises for Dodona, we have [more suitable documentation available](https://docs.dodona.be/nl/guides/exercises/).

## Installing TESTed

TESTed is implemented in Python, but has various dependencies for its language-specific modules.

To be able to work with all these dependencies on different platforms we make use of [devcontainers](https://containers.dev/).
This means that you can…
