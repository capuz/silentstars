---
repo: "m1well/env-setup"
name: "env-setup"
description: "This repo includes stuff to setup an developer environment"
readmeQualityOk: true
url: "https://github.com/m1well/env-setup"
language: "Python"
languages: ["Python"]
languagePcts: [87]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2018-12-09T20:07:20Z"
lastCommitAt: "2026-10-18T08:15:49Z"
lastReleaseAt: "2018-12-22T16:41:56Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 73
undervaluedScore: 44
maintainers: ["m1well"]
openGraphImageUrl: "https://opengraph.githubassets.com/6bb5941ed1cbd65f25f4b5ee7ddb3905233fb4c0b51845a0d8c91be9b3b9c0b8/m1well/env-setup"
---

# m1well env-setup

This is just a collection of my public dotfiles and other stuff to setup an environment.
This repository is "under construction".

## usage

#### install m1well-toolsuite

To set up the m1well-toolsuite, just create a folder for the toolsuite and clone this repo into it.
Then cd into the env-setup folder and execute the [m1well-toolsuite.sh](https://github.com/m1well/env-setup/blob/HEAD/m1well-toolsuite.sh) file,
for example `bash m1well-toolsuite.sh -i`, and follow the instructions. The script then does all for you.

If you want vim and zsh styling, these tools have to be installed on your system.
At the end you just have to source your `.zshrc` or `.bashrc` file.

#### update m1well-toolsuite

Execute the following statement in the env-setup folder to update all repos in the m1well-toolsuite:
`bash m1well-toolsuite.sh -u` (all apps/repos have to stay on the master branch).

#### test m1well-toolsuite

Just build the Dockerfile and run the container. In the container then execute `bash m1well-toolsuite.sh -i`.

#### test m1well-toolsuite (legacy)

To run some tests just execute the following statement in the root folder: `bash test/m1well-test.sh`.

##…
