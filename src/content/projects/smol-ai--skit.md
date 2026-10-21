---
repo: "smol-ai/skit"
name: "skit"
description: "A better way to manage your agent skills."
readmeQualityOk: true
url: "https://github.com/smol-ai/skit"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 17
forks: 0
openIssues: 10
closedIssues: 9
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-13T19:42:16Z"
lastCommitAt: "2026-10-21T23:35:54Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 38
maintainers: ["timhanlon", "swyxio"]
openGraphImageUrl: "https://opengraph.githubassets.com/552e27486a0ceba51f868d29f0d6310510a841ea9a55ed3f3106d6221567b5eb/smol-ai/skit"
---

# skit

SKIT is a better way to manage your agent skills.

- Your skill library is stored separately to the directories harnesses automatically read from, like `.agents/skills`
- Enable and disable a skill in one or more harnesses without removing it from your library
- Control whether agents can invoke skills automatically
- Sync your library and settings across machines, with a self-hosted option

## Why SKIT?

You've no doubt experienced this by now:

People are raving about a skill on X, so you install it.

At some point not too long afterwards, you're working with your agent of choice.

"Since this is related to [foo], I'm going to use the [foo] skill."

But that's not what you wanted:

- maybe the author's description of when the skill should be used was too broad
- maybe the one of skills is called `commit`, or something else you do regularly, and want done in your own way
- maybe you only want to use the skill in certain cases, in certain repos
- maybe the skill requires another application to be open on your machine
- maybe you installed the skill six months ago, and it relies on an MCP server which your harness can't see anymore, because it changed how or where they're…
