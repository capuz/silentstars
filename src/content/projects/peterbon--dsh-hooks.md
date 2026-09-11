---
repo: "PeterBon/dsh-hooks"
name: "dsh-hooks"
description: "Config-driven lifecycle hooks plugin for DeepSeek Harness"
readmeQualityOk: true
url: "https://github.com/PeterBon/dsh-hooks"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [66, 33]
topics: ["dsh-plugin"]
stars: 7
forks: 2
openIssues: 1
closedIssues: 13
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-15T04:03:52Z"
lastCommitAt: "2026-09-11T08:15:10Z"
lastReleaseAt: "2026-09-01T02:28:30Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 64
maintainers: ["PeterBon", "dependabot[bot]", "log-li"]
openGraphImageUrl: "https://opengraph.githubassets.com/a162911b7476d63d895a99e8622efe1a2ee2601fcd01e32c92cf3f69a2781317/PeterBon/dsh-hooks"
---

# dsh-hooks

Config-driven lifecycle hooks plugin for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (dsh).

Declare `event -> command` hooks directly in your profile's `cordis.patch.yml` — like Codex CLI / OpenCode hooks, but for dsh. No plugin code required.

[中文文档](https://github.com/PeterBon/dsh-hooks/blob/HEAD/README.zh.md) | [Design](#design) | [Feishu example](https://github.com/PeterBon/dsh-hooks/blob/HEAD/examples/notify-feishu.mjs) | [Web GUI](#web-gui)

## Install

One package ships everything (hook engine + Web GUI settings page):

```sh
dsh plugin --profile web add dsh-hooks           # from npm
# or straight from git:
dsh plugin --profile web add github:PeterBon/dsh-hooks
```

Restart `dsh web`. The settings panel gains a "Hooks" section (see [Web GUI](#web-gui)).

## Configure

Add a config block to your profile's `cordis.patch.yml`:

```yaml
- id: dsh-hooks
  name: dsh-hooks
  config:
    hooks:
      - on: 'turn/end'
        when: 'completed'            # optional: only completed turns
        run: 'node examples/notify-feishu.mjs'
        timeoutMs: 10000             # optional, default 10000
      - on: 'approval/asked'
        run:…
