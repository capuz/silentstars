---
repo: "iuliandita/skills"
name: "skills"
description: "Task skills for coding agents, from Kubernetes to code review. Install only the ones you need."
readmeQualityOk: true
url: "https://github.com/iuliandita/skills"
homepage: "https://iuliandita.com/projects/"
language: "Shell"
languages: ["Shell"]
languagePcts: [89]
topics: ["ai-coding", "ansible", "claude-code", "claude-code-skills", "devops", "docker", "infrastructure", "kubernetes", "security", "terraform"]
stars: 12
forks: 0
openIssues: 17
closedIssues: 160
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-06T18:18:16Z"
lastCommitAt: "2026-11-15T11:23:03Z"
lastReleaseAt: "2026-04-06T18:19:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 97
undervaluedScore: 55
maintainers: ["iuliandita", "renovate[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/483c91c8827999b04b7b5c891cc9ea84e0f55cb9452d53b2fccf704cfec0a37c/iuliandita/skills"
---

Agent skills for infrastructure, security, software engineering, and agent workflows, for people who use coding agents and want task instructions installed one skill at a time.

Each skill provides task instructions, routing hints, and supporting references. Skills are instructions your agent follows with your permissions, and the installer writes only to the skill directories of the harnesses you choose.

Status: stable since v2.0.0. `main` is the stable channel and `develop` the nightly.

## Install

Set up with an agent: paste this into your coding agent.

> Set up https://github.com/iuliandita/skills for the coding agents I use, following its INSTALL.md.

`npx skills add iuliandita/skills` installs the default branch, which is the nightly `develop`. Add `#main` to install the stable channel:

```bash
# Browse the collection
npx skills add iuliandita/skills#main --list

# Install selected skills
npx skills add iuliandita/skills#main --skill kubernetes --skill docker
```

The bundled installer also supports copying skills or sharing one canonical copy across tools with symlinks:

```bash
git clone -b main https://github.com/iuliandita/skills.git
cd skills
./install.sh --tool…
