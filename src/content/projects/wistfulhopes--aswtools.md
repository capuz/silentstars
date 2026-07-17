---
repo: "WistfulHopes/ASWTools"
name: "ASWTools"
description: "A collection of tools for modding modern Arc System Works fighters"
readmeQualityOk: true
url: "https://github.com/WistfulHopes/ASWTools"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 7
forks: 3
openIssues: 3
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-07-28T08:14:33Z"
lastCommitAt: "2026-07-17T05:58:09Z"
lastReleaseAt: "2025-04-07T20:26:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 36
maintainers: ["WistfulHopes"]
openGraphImageUrl: "https://opengraph.githubassets.com/cbe1e7232ef546b3f09c8d15a18dc0f56f7f51b84b05136f2f0c384d8839422e/WistfulHopes/ASWTools"
---

# ASWTools

A collection of tools for modding modern Arc System Works fighters. 

Currently, it contains a tool for working with BBScript (the battle mode scripts), a tool for working with ADVScript (the story mode scripts), and a tool for working with ATF text localization files. 

The reason I made a new tool for BBScript was partially to challenge myself, and partially to write a tool that more closely follows Arc System Works' own conventions. As a result, there is a larger deviation in syntax from existing tools (such as @super-continent 's wonderful BBScript repo, or @dantarion 's venerable bbtools repo). 

## BBScript

To decompile scripts, use the command `bbscript decompile -c <config_file> -i <input_file> -o <output_file>`. For example, if you were to decompile GGST's BBS_CMNEF, use `bbscript decompile -c ggst.json -i BBS_CMNEF.bbsbin -o BBS_CMNEF.bbs`.

To compile scripts, use the command `bbscript compile -c <config_file> -i <input_file> -o <output_file>`. For example, if you were to compile GGST's BBS_CMNEF, use `bbscript decompile -c ggst.json -i BBS_CMNEF.bbs -o BBS_CMNEF.bbsbin`.

Updated configurations may be found…
