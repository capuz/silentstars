---
repo: "zentropi-ai/skills"
name: "skills"
description: "Agent skills powered by the Zentropi content classification engine"
readmeQualityOk: true
url: "https://github.com/zentropi-ai/skills"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-03-18T06:06:44Z"
lastCommitAt: "2026-09-14T09:13:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 61
undervaluedScore: 9
maintainers: ["samidh"]
openGraphImageUrl: "https://opengraph.githubassets.com/a74e9ad8fadd2e99f095e0d67ed530061eb5512275546fc375d8ba76515e457c/zentropi-ai/skills"
---

# Zentropi Skills

Agent skills for building systems powered by the
[Zentropi](https://zentropi.ai) classification engine. They give AI agents the superpower of fast, accurate, flexible, content labeling.

These skills follow the [Agent Skills](https://github.com/anthropics/agent-skills)
open standard.  They teach AI coding agents how to integrate Zentropi into applications and workflows— from writing policies to
optimizing performance to deploying live.

## Skills

| Skill | Description |
|-------|-------------|
| [zentropi-labeler](https://github.com/zentropi-ai/skills/blob/HEAD/skills/zentropi-labeler/) | Create custom classifiers and label content against them using the Zentropi API. |

## Quick Start

### 0. Installation

**Automatic installation:**

Just ask your agent: "Install the zentropi skills at https://github.com/zentropi-ai/skills"

**Skills.sh package manager:**

Another fast way to install is with [skills.sh](https://skills.sh):

```bash
# Install every skill in this repo
npx skills add https://github.com/zentropi-ai/skills

# …or install just the zentropi-labeler skill
npx skills add https://github.com/zentropi-ai/skills --skill zentropi-labeler
```

**Manual…
