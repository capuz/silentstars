---
repo: "SiriLee/dsh-rewind"
name: "dsh-rewind"
description: "DSH plugin: effortless in-window conversation rewind — never forking a new session; ships a lightweight workspace backup that restores files together with the rewind (Claude Code /rewind semantics)."
originalDescription: "DSH 插件：便捷无感的同窗口内对话回退，从不新建分支；自带轻量工作区备份，可一并还原文件（Claude Code /rewind 语义）。 ·  DSH plugin: effortless in-window conversation rewind — never forking a new session; ships a lightweight workspace backup that restores files together with the rewind (Claude Code /rewind semantics)."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/SiriLee/dsh-rewind"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["dsh-plugin", "deepseek-harness", "dsh", "rewind", "session", "undo", "checkpoint", "conversation", "rollback", "backup"]
stars: 258
forks: 22
openIssues: 1
closedIssues: 57
watchers: 1
contributors: 11
recentReleases: 10
createdAt: "2026-08-17T04:42:48Z"
lastCommitAt: "2026-11-12T05:40:47Z"
lastReleaseAt: "2026-08-17T09:41:36Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 31
maintainers: ["SiriLee", "slev-agent", "FUFUTPR"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ed21817789849bd2cda692a7e45096d32c7e04def50edcbf6e4c5bd04520b22/SiriLee/dsh-rewind"
discussionCount: 3
---

# dsh-rewind

DeepSeek Harness plugin: **one-click in-place rewind of the conversation to any earlier user message**.<br />
Done within the same window, with no new branch and no window switch, and it can restore workspace files as well. This is Claude Code-style `/rewind` semantics.

[English](https://github.com/SiriLee/dsh-rewind/blob/HEAD/README.en.md) | Chinese

Deliberately focused and kept minimal, it does one thing: **rewind in place to any distant user message**, and it can **also restore the files you edited** along the way.

- **In-place message rewind**: the target message and everything after it are withdrawn from both the **model context** and the **rendered conversation**, and the target message text is automatically refilled into the input box. It always completes within the original session, with no new branch and no leftover copies.
- **Lightweight backup and restore**: aligned with Claude Code. It tracks files edited by write-type tools and restores them on rewind, and it can also restore external changes to tracked files. **Partial tracking, backup before write, and unchanged files are not stored.** It does not depend on git.
- **Safety guarantees**: session…
