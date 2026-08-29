---
repo: "JayFarei/opentraces"
name: "opentraces"
description: "A local-first evidence layer for agent work, capturing what the agent sees, does, and changes."
readmeQualityOk: true
url: "https://github.com/JayFarei/opentraces"
homepage: "https://www.opentraces.ai/"
language: "Python"
languages: ["Python"]
languagePcts: [82]
topics: ["agents", "mlops", "observability", "traces"]
stars: 99
forks: 6
openIssues: 65
closedIssues: 205
watchers: 0
contributors: 4
recentReleases: 3
createdAt: "2026-03-27T18:15:06Z"
lastCommitAt: "2026-08-29T17:27:31Z"
lastReleaseAt: "2026-06-11T23:14:09Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 37
maintainers: ["JayFarei", "github-actions[bot]", "datagero"]
openGraphImageUrl: "https://opengraph.githubassets.com/d30b44a8ba01b8c2c4c401e2d99396d13d8bb5e7e87d5e43e49985e9a15e9e10/JayFarei/opentraces"
---

```
  █▀▀█ █▀▀█ █▀▀█ █▀▀▄ ▀█▀ █▀▀▄ █▀▀█ █▀▀▀ █▀▀█ █▀▀▀
  █  █ █  █ █▀▀▀ █  █  █  █▀▀▄ █▀▀█ █    █▀▀▀ ▀▀▀█
  ▀▀▀▀ █▀▀▀ ▀▀▀▀ ▀  ▀  ▀  ▀  ▀ ▀  ▀ ▀▀▀▀ ▀▀▀▀ ▀▀▀▀
```

  </a>
</p>

  <strong>opentraces hub</strong> — <a href="https://x.com/jayfarei">reach out for early access</a>
</p>

**Traces are the new source code.** opentraces is a local-first evidence layer for agent work — an open schema + CLI that captures what the agent saw, did, and changed into a private bucket, anchors those changes to the Git history that accepted them, and lets you reuse that one record many ways: search, lineage, resumable context, shareable bug reports, evals, and datasets published to Hugging Face Hub.

Every coding session leaves behind the record you actually want: the prompt that set the direction, the files the model read, the dead ends, the edits that survived, the ones that got reverted. Git keeps the diff; the rest evaporates when the session ends. opentraces keeps that record locally, anchors each change to the commit that accepted it, reconstructs what the agent saw at each step, and lets workflows project selected evidence into datasets. It works with Claude Code, Codex, and Pi today; nothing…
