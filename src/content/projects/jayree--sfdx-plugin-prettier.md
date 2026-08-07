---
repo: "jayree/sfdx-plugin-prettier"
name: "sfdx-plugin-prettier"
description: "A Salesforce CLI plugin containing a hook that uses prettier to format Salesforce metadata source files retrieved or pulled from Salesforce orgs."
readmeQualityOk: true
url: "https://github.com/jayree/sfdx-plugin-prettier"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [78]
stars: 12
forks: 0
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2020-08-11T18:39:17Z"
lastCommitAt: "2026-08-07T05:14:40Z"
lastReleaseAt: "2022-03-01T14:02:43Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 98
undervaluedScore: 69
maintainers: ["dependabot[bot]", "semantic-release-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d7da4269423ad91a42740c1f575ebe539f603cf9badb087176e9f5ea07f6e08/jayree/sfdx-plugin-prettier"
---

# @jayree/sfdx-plugin-prettier

A Salesforce CLI plugin containing a hook that uses prettier to format Salesforce metadata source files retrieved or pulled from Salesforce orgs.

`sfdx-plugin-prettier` is an [sfdx](https://developer.salesforce.com/tools/sfdxcli) plugin to format Salesforce metadata source files. It is triggered by the [postsourceupdate](https://github.com/forcedotcom/cli/blob/master/releasenotes/README.md#4950-august-6-2020) hook after running `force:source:retrieve` or `force:source:pull`.

* [@jayree/sfdx-plugin-prettier](#jayreesfdx-plugin-prettier)

## Install

```sh-session
$ npm install -g @jayree/sfdx-plugin-prettier
$ sfdx COMMAND
running command...
$ sfdx (--version)
@jayree/sfdx-plugin-prettier/1.3.179 linux-x64 node-v24.18.0
$ sfdx --help [COMMAND]
USAGE
  $ sfdx COMMAND
...
```

## Usage

Use `force:source:retrieve` or `force:source:pull` to tirgger the hook. The formatting is performed on the retrieved source files.

## Configuration and Ignore Files

`sfdx-plugin-prettier` uses the [`.prettierrc`](https://prettier.io/docs/en/configuration), [`.prettierignore`](https://prettier.io/docs/en/ignore#ignoring-files), and…
