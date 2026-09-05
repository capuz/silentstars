---
repo: "yeomyeonggeori/blueclaw"
name: "blueclaw"
description: "A POSIX-isolated agent host: a Go daemon that runs an AI agent harness on behalf of the person who asked, executes every tool call as that person's own unprivileged Linux user, holds side-effecting calls at an approval gate, and writes every step to a durable event ledger."
readmeQualityOk: true
url: "https://github.com/yeomyeonggeori/blueclaw"
language: "Go"
languages: ["Go"]
languagePcts: [86]
topics: ["acp", "agent-host", "ai-agents", "approval-workflow", "audit-log", "chatops", "golang", "least-privilege", "posix", "self-hosted"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 23
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-02-17T17:29:15Z"
lastCommitAt: "2026-09-05T07:49:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 57
maintainers: ["eastriverlee"]
openGraphImageUrl: "https://opengraph.githubassets.com/e2e0f26e0ad6d7a633a3d99df30fcdd578d16e77c96772586d24ee2169c29950/yeomyeonggeori/blueclaw"
---

# blueclaw — a POSIX-isolated, multi-user agent host

> **Status: pre-alpha, under active development.** The interfaces, the wire
> grammar, the configuration keys and the database schema all still change
> without notice, and there is no release, no versioning policy and no upgrade
> path between commits. It is published so the design can be read and argued
> with, not so it can be depended on. If you run it, pin a commit and expect to
> read diffs.

A company runs one agent on one machine and everyone talks to it. To a harness
that runs as whoever started it, the whole company is one Unix account: one home
directory, one set of files, one view of every secret, and no record of which
person authorized which side effect. Sales can read engineering's drafts because
nothing on the machine knows they are different people.

blueclaw is the host that makes them different people, and POSIX is how. It is
an open source, self-hosted Go daemon that runs an AI agent harness on behalf of
whichever person asked, executes each requester's tool calls as their own
unprivileged Linux user, holds side-effecting calls at an approval gate, and
writes every step to a durable event ledger. It owns…
