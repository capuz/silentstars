---
repo: "Am6er/BecqMoni"
name: "BecqMoni"
description: "BecqMoni Nuclear edition"
originalDescription: "BecqMoni Nuclear edition"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/Am6er/BecqMoni"
homepage: "https://amba.cloud/becqmoni"
language: "C#"
languages: ["C#"]
languagePcts: [78]
topics: ["becquerel", "gamma-spectrometry", "nuclides", "radiation", "spectrometry"]
stars: 53
forks: 5
openIssues: 1
closedIssues: 7
watchers: 10
contributors: 4
recentReleases: 0
createdAt: "2022-07-07T12:08:15Z"
lastCommitAt: "2026-10-23T09:32:15Z"
lastReleaseAt: "2023-01-21T20:58:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 53
maintainers: ["Am6er", "Verter73"]
openGraphImageUrl: "https://opengraph.githubassets.com/1cbc5e7f0e71200c884ab665c09c039a3b1b2e52044cc2716e6fe1269d80978b/Am6er/BecqMoni"
---

# BecqMoni
English:

Compiled distr with autoupdate available at https://amba.cloud/becqmoni

Youtube channel for feature view available at https://www.youtube.com/@Am6er

User config files stored at %AppData%\BecqMoni

Russian:

Installer distribution available at https://amba.cloud/becqmoni

YouTube channel where you can see new features https://www.youtube.com/@Am6er

Configuration files are saved in the user profile %AppData%\BecqMoni

Using [SpecUtils binding for C#](https://github.com/Am6er/SpecUtilsCS)
For original [SpecUtils](https://github.com/sandialabs/SpecUtils) big thanks SandiaLabs!

---

## Environment: systematic pitfalls / Known environment pitfalls

Each line below has already cost lost work at least once; dates and analyses are in the handoff notes. Check BEFORE stepping on it.

| where | pitfall | what to do |
|---|---|---|
| rtk and read wrappers | can return a snapshot of the tree from many hours ago: on 13.08 `rtk git status`/`git log` and reading `TODO.md` showed the tip as `a1c5e4e` instead of the real `17e3af4`, and tasks closed that same day looked unfinished | start the session with DIRECT `git log --oneline -5` and `git status --porcelain` without…
