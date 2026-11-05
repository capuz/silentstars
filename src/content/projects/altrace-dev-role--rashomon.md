---
repo: "altrace-dev-role/rashomon"
name: "rashomon"
description: "Verify what your Claude Code agent actually did. Rashomon keeps an independent record of every tool call, subagent, failed command, and flags when the agent's summary says all tests pass but something failed. Open-source AI agent verification, hallucination detection, and audit tool. Local-only, no telemetry."
readmeQualityOk: true
url: "https://github.com/altrace-dev-role/rashomon"
language: "Go"
languages: ["Go"]
languagePcts: [86]
topics: ["audit", "audit-logging", "audit-trail", "claude", "claude-ai", "claude-code", "claude-plugin", "coding-agent", "debugging", "developer"]
stars: 19
forks: 3
openIssues: 4
closedIssues: 6
watchers: 2
contributors: 7
recentReleases: 3
createdAt: "2026-09-18T22:58:51Z"
lastCommitAt: "2026-11-05T00:22:03Z"
lastReleaseAt: "2026-10-31T18:49:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 47
maintainers: ["k4rthiknerella"]
openGraphImageUrl: "https://opengraph.githubassets.com/9bc9e3ad200558a79b534c7c26b9a3c610cd2cc91750c42cef1447cb8cca0f96/altrace-dev-role/rashomon"
discussionCount: 0
---

# rashomon

rashomon keeps its own record of what your Claude Code agent runs and edits,
tells you and the agent what the repository says about the files a request
names, and tells you at the end of a turn whether a test or build passed after
the last edit.

What this build does today: it records every tool call the agent makes. Before
the agent starts on a request, it tells the agent what the repository declares
about the files the request names: the rules a spec you have trusted sets for
them, and the checks to run before done. At the end of a turn it tells you
whether a test or build passed after the last edit, and when done was claimed
without one. It never blocks a call. The notes and the end-of-turn checks are
its steering layer, AutoSteer. The note before the agent starts reaches it on
every supported version; a note after a call that succeeded on Claude Code
2.1.280 and later; and a note after a failed call on Claude Code 2.1.304 and
later. Where a note is not sent (an older version, a version that failed the
delivery check or could not be read, a subagent's call, an SDK session, or a
session whose surface could not be read, or an event whose notes are withheld as…
