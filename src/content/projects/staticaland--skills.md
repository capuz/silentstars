---
repo: "staticaland/skills"
name: "skills"
description: "Ceremonial grade agent skills 🫖"
readmeQualityOk: true
url: "https://github.com/staticaland/skills"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [49, 39]
stars: 5
forks: 0
openIssues: 8
closedIssues: 17
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-29T13:55:54Z"
lastCommitAt: "2026-11-27T13:01:35Z"
lastReleaseAt: "2026-08-25T11:43:37Z"
status: "thriving"
tags: []
healthScore: 91
undervaluedScore: 64
maintainers: ["staticaland", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1908fe8d094e0235ab9c19a6f1086e1071e8b4246acc4d6b79b9be256b7e76ec/staticaland/skills"
---

# Skills

Skills and hooks for Claude Code, distributed as a marketplace of small,
single-purpose plugins. Install only the plugins you want - each one is an
independent bundle.

## Install

Add the marketplace, then install individual plugins:

```text
/plugin marketplace add staticaland/skills
/plugin install prose@staticaland-skills
/plugin install toolchain@staticaland-skills
```

The catalog below lists every plugin. Each one installs on its own, so you take
the ones you want and leave the rest.

To install an individual skill in another supported agent, use its name with
the skills CLI:

```bash
npx skills add staticaland/skills --skill writing-revision
```

Each plugin README lists the command for every available skill. Hooks need the
plugin install above, because the skills CLI skips them.

Each plugin also has a `plugin.json` manifest at its root per the
[Agent Plugins](https://agent-plugins.org/) specification, and its skills
follow the [Agent Skills](https://agentskills.io/) format, so any client that
supports those specifications can install the plugins too.
