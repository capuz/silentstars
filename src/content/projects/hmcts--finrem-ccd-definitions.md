---
repo: "hmcts/finrem-ccd-definitions"
name: "finrem-ccd-definitions"
description: "Financial Remedy CCD Configuration Definitions"
readmeQualityOk: true
url: "https://github.com/hmcts/finrem-ccd-definitions"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["jenkins-cft", "jenkins-cft-d-i"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 119
contributors: 97
recentReleases: 0
createdAt: "2019-07-31T09:57:34Z"
lastCommitAt: "2026-09-10T08:20:09Z"
lastReleaseAt: "2020-03-26T12:33:07Z"
status: "watched"
tags: ["legacy_hero", "community_watch"]
healthScore: 89
undervaluedScore: 43
maintainers: ["renovate[bot]", "so99y", "ptrelease"]
openGraphImageUrl: "https://opengraph.githubassets.com/7b604529a09db26005fe34620a5c117c8ab9667d3c9ae4ad9845296f6a644708/hmcts/finrem-ccd-definitions"
---

# finrem-ccd-definitions

Financial Remedy configuration definitions for CCD.

This allows for the FR CCD Config to be easily edited and stored in GitHub as JSON rather than version controlled in Confluence as Xlsx files.

## Setup

To install the dependencies for both this project and the submodule (ccd-definition-processor), run:
`yarn install && yarn reset-ccd-submodule`

## Setup for M1 chip Macs

If running yarn install throws an error with this output:

`The chromium binary is not available for arm64`

1) Run `brew install chromium`
2) Run `xattr -cr /Applications/Chromium.app`
3) Add these env variables to your .zshrc file
`export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true`
``export PUPPETEER_EXECUTABLE_PATH=`which chromium` ``
4) Save file and restart terminal
5) Run `source ~/.zshrc`
6) `yarn install && yarn reset-ccd-submodule`

## Convert JSON to Excel

Depending on if you want the generated Excel to be for the Consented or Contested Journeys - add the appropriate journey to the end of the command.

### Generate Excel Configs for all environments (Local, Demo, ITHC, AAT & Prod)

For Consented Journey:
```sh
yarn generate-excel-all-consented
```
For Contested Journey:
```sh…
