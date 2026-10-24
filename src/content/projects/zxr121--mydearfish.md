---
repo: "zxr121/MyDearFish"
name: "MyDearFish"
description: "Big Fat Fish: DeepSeek Harness custom source code and six plugins (dsh + Yuuyuko-uu)"
originalDescription: "大肥鱼：DeepSeek Harness 定制源码与六个插件（dsh + Yuuyuko-uu）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/zxr121/MyDearFish"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 6
createdAt: "2026-10-20T16:19:56Z"
lastCommitAt: "2026-10-24T08:19:55Z"
lastReleaseAt: "2026-10-24T04:16:42Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 48
maintainers: ["zxr121"]
openGraphImageUrl: "https://opengraph.githubassets.com/d51149c89e430e06167d5ae689ccee44b2dbcefbac3dc2b039413f89f7e1649c/zxr121/MyDearFish"
---

# DeepSeek Harness

English | [中文](https://github.com/zxr121/MyDearFish/blob/HEAD/README.zh.md)

DeepSeek Harness (`dsh`) is an open-source agent harness developed by [DeepSeek AI](https://deepseek.com).

It is built on an **everything-is-a-plugin** architecture and powered by [Cordis](https://github.com/cordiverse/cordis), whose design is described in [_A Programming Paradigm for Spatiotemporal Composability_](https://arxiv.org/abs/2608.25512).

Documentation: [https://deepseek-harness.github.io/deepseek-harness/](https://deepseek-harness.github.io/deepseek-harness/)

## Developer preview

DeepSeek Harness is in _developer preview_ and iterating rapidly. **THERE WILL BE COMPATIBILITY-BREAKING CHANGES.**

Review the [safety notice](https://github.com/zxr121/MyDearFish/blob/HEAD/SAFETY.md) before running the project.

## Run

### Run from `npm`

Install `Node.js`, then run:

```sh
npx @deepseek-ai/dsh web
```

The command starts the Web UI at `http://127.0.0.1:3080` by default and opens it in the default browser for a local launch. An SSH launch only prints the host URL because the SSH client or editor owns the local forwarded address. Pass `--no-open` to run the server without…
