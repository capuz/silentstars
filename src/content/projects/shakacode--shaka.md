---
repo: "shakacode/shaka"
name: "shaka"
description: "Give your agent a task. Get a verified, explained pull request."
readmeQualityOk: true
url: "https://github.com/shakacode/shaka"
homepage: "https://shaka.shakacode.com"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [99]
stars: 14
forks: 8
openIssues: 27
closedIssues: 130
watchers: 0
contributors: 13
recentReleases: 1
createdAt: "2026-09-14T03:39:43Z"
lastCommitAt: "2026-10-17T07:58:19Z"
lastReleaseAt: "2026-09-16T09:03:36Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 59
maintainers: ["justin808", "dependabot[bot]", "Seybo"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ed73be1954c95414ebf6d68659942c3df2e796eec2d9015b4ac4cd4594c784b/shakacode/shaka"
---

# Shaka

**Work effectively with your coding agent, from task to human-readable PR.**

Shaka guides your coding agent through implementation, verification, independent
review, and PR delivery. Get a clear handoff: what changed, what was checked,
and what needs your decision—with the context to approve the change, request
revisions, or resolve an open question.

The agent builds, verifies, and reviews, fixing what it can. Then you review one clear
PR: what changed, how it was checked, and what is still open. At the
[checkpoint](https://github.com/shakacode/shaka/blob/HEAD/docs/pr-verification.md#checkpoint), decide what happens next.

[Read the Shaka documentation](https://shaka.shakacode.com/).

## Start with a small task

[Install Shaka](https://github.com/shakacode/shaka/blob/HEAD/docs/getting-started.md), then give it a task:

```text
$shaka <task or issue link>
```

Examples use Codex. Use `/shaka` in Claude Code, Cursor, or OpenCode; in Pi,
load the installed skill. You can describe an outcome or provide an issue link.
If setup is missing, Shaka asks whether you want individual or team settings,
finds your existing checks, and defaults to Ask.
`Go` starts with your agent's…
