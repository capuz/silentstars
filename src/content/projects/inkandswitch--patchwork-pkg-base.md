---
repo: "inkandswitch/patchwork-pkg-base"
name: "patchwork-pkg-base"
description: "The base set of Patchwork packages"
readmeQualityOk: true
url: "https://github.com/inkandswitch/patchwork-pkg-base"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [72]
stars: 7
forks: 2
openIssues: 9
closedIssues: 5
watchers: 0
contributors: 18
recentReleases: 0
createdAt: "2026-04-18T05:07:33Z"
lastCommitAt: "2026-10-01T10:23:41Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 47
maintainers: ["chee", "paulsonnentag", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/94e9edf357f6d6533ff06e682c054d70b0bc9f94fafc2e5541689662be3a9904/inkandswitch/patchwork-pkg-base"
---

# patchwork-base

A collection of the core tools that comprise the Patchwork system.

## Creating tools with an LLM

To create your own Patchwork tools with an LLM, install the `writing-patchwork-tools`
skill from [patchwork-skills](https://github.com/inkandswitch/patchwork-skills) into
your coding agent's skills directory:

```sh
npx @inkandswitch/patchwork-skills install <dir>   # e.g. .claude/skills or .cursor/skills
```

The skill teaches the agent the whole workflow — package registration, the render
contract, build & sync — and ships reference checkouts of this repo and
patchwork-experiments.

## Engineering Notes

Tools in this collection should be reliable and maintained: these are the core tools, after all.

Within a given distribution, it is reasonable to assume these tools exist, however tools in this collection should never assume the existence of other tools.

Regardless, these tools should not depend on each other's implementations or their internal structure.

Each directory in this collection can be built completely independently. Tools do not share lockfiles, node modules, or even necessarily build systems or web frameworks.

Please be careful not to violate these…
