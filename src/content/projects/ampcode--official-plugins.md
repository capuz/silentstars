---
repo: "ampcode/official-plugins"
name: "official-plugins"
description: "Official Amp agent mode plugins"
readmeQualityOk: true
url: "https://github.com/ampcode/official-plugins"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [57, 22]
stars: 21
forks: 3
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 11
recentReleases: 0
createdAt: "2026-09-03T08:57:36Z"
lastCommitAt: "2026-10-25T02:47:35Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 46
maintainers: ["ampagent", "nicolaygerold", "dexhorthy"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc7498e4ee3bb3531bf3af752ff71f774d0f6855bd5dde9d156d233004843727/ampcode/official-plugins"
---

# Official Amp plugins

This public repository contains the agent modes and the official skills that Amp serves to every
user.

Each top-level directory except `skills/` is one plugin. `official-modes/` contains all official
agent modes in one plugin process, with one prompt and tool list file per model.

`skills/<name>/` holds one official skill each: a `SKILL.md` with `name` and `description`
frontmatter plus any reference files it needs. Amp serves every skill in this directory to every
signed-in user as an official skill (scope `official`); a user or workspace skill with the same name
takes precedence on that user's machine. Each skill is versioned by the last commit that touched its
own files, so editing one skill does not re-download the others.

Changes land on GitHub `main`. The mirror workflow pushes them to Amp's internal Pierre repository,
which supplies global plugins and the Dial's Raw Models list.
