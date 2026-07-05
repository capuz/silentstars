---
repo: "NovemLinguae/UserScripts"
name: "UserScripts"
description: "Novem Linguae's Wikipedia user scripts"
readmeQualityOk: true
url: "https://github.com/NovemLinguae/UserScripts"
homepage: "https://en.wikipedia.org/wiki/User:Novem_Linguae/Templates/Scripts"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [93]
topics: ["wikipedia", "script", "scripting", "scripts", "scripts-collection"]
stars: 8
forks: 4
openIssues: 187
closedIssues: 106
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2021-11-14T16:25:05Z"
lastCommitAt: "2026-07-05T20:54:15Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 52
maintainers: ["NovemLinguae", "dw31415wp-glitch"]
openGraphImageUrl: "https://opengraph.githubassets.com/e323bc1e775b0973a33d801d4bb6b4f9a1c4a0ac4c0298d12673f333cf258aa8/NovemLinguae/UserScripts"
---

Novem Linguae's Wikipedia user scripts. A user script is custom JavaScript that a logged in Wikipedia user can install, and that JS will then run on every Wikipedia page they visit. The main use case is tools for power users.

My list of user scripts onwiki is located at https://en.wikipedia.org/wiki/User:Novem_Linguae/Templates/Scripts. Please visit this page to see a description of each user script, and the # of users that have installed it.

# Files and folders

User scripts in the root directory as standalone files are simple and just use that one file.

User scripts in folders are more complex scripts usually spanning multiple files, have unit tests, and have a deploy script. These tools are all located in the folder. There may also be PHP or browser tools related to the user script.

# Linter

- Install the linter by running `npm update` from the root directory. The linter is run in CI and should always be passing before merging to the master branch. We use MediaWiki's JavaScript linting rules, with some turned off.

# Unit tests

- Install unit tests by running `npm update` in applicable subdirectories. Then run the tests with `npm test`. Unit tests are run in CI and should…
