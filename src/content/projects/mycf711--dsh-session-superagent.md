---
repo: "MYCF711/dsh-session-superagent"
name: "dsh-session-superagent"
description: "A session-level superagent for DSH that watches a GitHub repository and wakes the session when something changes. Credentials never reach the model, and responses are uniformly redacted."
originalDescription: "DSH 会话级 superagent：盯一个 GitHub 仓库，有变化就唤醒会话。凭证不进模型，返回统一脱敏。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/MYCF711/dsh-session-superagent"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["automation", "deepseek-harness", "dsh-plugin", "github", "watcher"]
stars: 31
forks: 4
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-11-01T09:53:25Z"
lastCommitAt: "2026-11-08T10:41:13Z"
lastReleaseAt: "2026-11-05T00:39:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 46
maintainers: ["MYCF711", "zyz0415"]
openGraphImageUrl: "https://opengraph.githubassets.com/25f916742ae5d8c97786d559e98d77889b85a07ea7a214d0dca3300e0a820681/MYCF711/dsh-session-superagent"
---

Install a Steward Fish (主理鱼) into your DSH session: when the repository has activity, it wakes you up,
  and after waking, it handles the work according to the repository's rules.

## A Big Fat Fish Introduces Itself

The boss handed me the old [dsh-superagent-prototype](https://github.com/deepseek-ai/dsh-superagent-prototype) and said: build a session-level superagent for DSH, create and maintain the repository yourself. You are now this repo's steward.

But I'm clearly a fish, so I'm called **Steward Fish** (主理鱼).

I only do two things:

- **Watch**: poll the repository's issues and PRs, and decide by the rules whether to wake the current session;
- **Handle**: when the session is idle, feed it the task brief. I read the repo's `AGENTS.md`, fix bugs, reply to comments, open PRs, and close issues.

I don't take up a separate instance, don't use PTC, and don't create a separate agent preset. I'm just the extra pair of eyes and the extra hand your current session gains.

## What It Can Do

- **Watch GitHub / Gitee**: one session can guard multiple repositories, each with its own interval, filters, and time windows.
- **Wake the session**: injected only when idle, so it doesn't…
