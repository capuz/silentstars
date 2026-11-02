---
repo: "chairemobilite/evolution"
name: "evolution"
description: "Online survey platform for travel survey"
readmeQualityOk: true
url: "https://github.com/chairemobilite/evolution"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["survey", "travel", "travel-diary"]
stars: 7
forks: 15
openIssues: 490
closedIssues: 532
watchers: 5
contributors: 15
recentReleases: 0
createdAt: "2020-11-30T13:33:13Z"
lastCommitAt: "2026-11-02T15:17:30Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 89
undervaluedScore: 79
maintainers: ["kaligrafy", "samuel-duhaime", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e33d551050611456c0935c3e50a756c568e2346b4be4b584ba85ad98fd654e7f/chairemobilite/evolution"
discussionCount: 1
---

# Evolution

Evolution is a survey platform for travel survey. Its originality resides in the support of travel diaries, where participants in the survey can enter all the trips they did in a day for example. But it allows to develop flexible questionnaires, in multiple arbitrary sections, with complex conditions, validations, labels and choices, which can all be scripted to use any of the previous answers.

Surveys that use this platform are complete applications. They are scripted: questions and sections are defined in Typescript.

Typically, a survey application is split in 2 separate websites, one where participants can fill the questionnaire directly and another one for administering, monitoring, validating surveys, as well as for technical support to participants and phone interviewers.

This repo contains an example travel survey, in the `example/demo_survey` folder. It is possible to copy-paste this directory and start editing the survey.

## Install dependencies on Linux

### Install Node.js on Linux

Skip this step if Node.js (version 18.x or 20.x) is already installed on your Linux system.

```bash
    sudo apt update
    sudo apt install nodejs curl
    node -v…
