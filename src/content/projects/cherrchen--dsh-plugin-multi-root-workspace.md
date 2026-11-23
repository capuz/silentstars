---
repo: "cherrchen/dsh-plugin-multi-root-workspace"
name: "dsh-plugin-multi-root-workspace"
description: "Multi-folder workspace for DeepSeek Harness: let the agent read and write several folders at once, not just the primary one."
originalDescription: "多文件夹 workspace：让 DSH（DeepSeek Harness）的 Agent 不只能读写主目录，还能同时读写你添加的其他文件夹。Multi-folder workspace for DeepSeek Harness: let the agent read and write several folders at once, not just the primary one."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/cherrchen/dsh-plugin-multi-root-workspace"
homepage: "https://cherrchen.github.io/rivetdeck-website/plugins/multi-root-workspace"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["bwrap", "cordis", "deepseek-harness", "dsh-plugin", "landlock", "multi-root", "sandbox", "seatbelt", "typescript", "workspace"]
stars: 29
forks: 4
openIssues: 1
closedIssues: 9
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-11T17:02:07Z"
lastCommitAt: "2026-11-23T13:30:26Z"
lastReleaseAt: "2026-10-20T15:53:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 51
maintainers: ["cherrchen"]
openGraphImageUrl: "https://opengraph.githubassets.com/cb9c17956d614ce84e1ede1d561c867edb6a7a2890e62183b66853f77e78f84f/cherrchen/dsh-plugin-multi-root-workspace"
---

# dsh-plugin-multi-root-workspace

Chinese | [English](https://github.com/cherrchen/dsh-plugin-multi-root-workspace/blob/HEAD/README.en.md) | [Japanese](https://github.com/cherrchen/dsh-plugin-multi-root-workspace/blob/HEAD/README.ja.md) | [Spanish](https://github.com/cherrchen/dsh-plugin-multi-root-workspace/blob/HEAD/README.es.md) | [French](https://github.com/cherrchen/dsh-plugin-multi-root-workspace/blob/HEAD/README.fr.md) | [German](https://github.com/cherrchen/dsh-plugin-multi-root-workspace/blob/HEAD/README.de.md) | [Russian](https://github.com/cherrchen/dsh-plugin-multi-root-workspace/blob/HEAD/README.ru.md) | [Portuguese](https://github.com/cherrchen/dsh-plugin-multi-root-workspace/blob/HEAD/README.pt.md)

## Project Introduction

[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) by default uses the directory where a newly created workspace is located as the agent's primary directory. In the default workspace read-write mode (`workspace-write`), the sandbox's read and write scope also covers only that one directory. This plugin extends DSH's workspace scope to "one primary directory plus multiple additional directories."
