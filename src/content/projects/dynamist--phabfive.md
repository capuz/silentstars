---
repo: "dynamist/phabfive"
name: "phabfive"
description: "CLI for Phabricator and Phorge - built for humans and AI agents"
readmeQualityOk: true
url: "https://github.com/dynamist/phabfive"
homepage: "https://phabfive.readthedocs.io/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["automation", "phabricator", "phorge"]
stars: 7
forks: 4
openIssues: 20
closedIssues: 177
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2018-10-23T17:28:20Z"
lastCommitAt: "2026-10-08T10:52:35Z"
lastReleaseAt: "2026-05-04T21:57:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 87
maintainers: ["holmboe", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f45bcfe530a5f323b93e7a917aaafbdeb0388afa6979c500bcc130fd5614870/dynamist/phabfive"
discussionCount: 0
---

# phabfive

CLI for [Phabricator](https://www.phacility.com/phabricator/) and [Phorge](https://we.phorge.it/) - built for humans and AI agents.

## Features

- **Maniphest** - Full task management: create, show, edit, search, comment, parents/subtasks
- **Paste** - Create, show, edit, search, and comment on pastes
- **Diffusion** - Repository management, branches and tags, and URI configuration
- **Projects** - Create, show, edit and search projects, subprojects and milestones, with their members and roles
- **Passphrase** - Search, list, and retrieve secrets (passwords, tokens, SSH keys, notes)
- **User** - Search users and filter them by role, user info, and an interactive setup wizard

Cross-cutting features:

- **Monogram shortcuts** - `phabfive T123` expands to `phabfive maniphest show T123`
- **Batch editing** - Edit multiple objects at once: `phabfive edit T1,T2,T3 --status=resolved`
- **Policies** - Read and set who can see, edit, join and push to repositories, tasks and projects: `--show-policy`, `--visible-to`, `--editable-by`, `--joinable-by`, `--can-push`
- **Shell completion** - Tab completion for commands, options, and values
- **Machine-readable output** -…
