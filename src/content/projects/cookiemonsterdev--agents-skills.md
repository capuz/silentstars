---
repo: "cookieMonsterDev/agents-skills"
name: "agents-skills"
description: "Agent Skills for coding agents "
readmeQualityOk: true
url: "https://github.com/cookieMonsterDev/agents-skills"
language: "Python"
languages: ["Python"]
languagePcts: [29]
topics: ["agent-skills", "skills"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-02T07:00:01Z"
lastCommitAt: "2026-10-28T09:56:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 23
maintainers: ["cookieMonsterDev"]
openGraphImageUrl: "https://opengraph.githubassets.com/61e5e62cd3f97b916b39acafebf0d6b0e413d6760e966813efc1a87c1c7a1e5d/cookieMonsterDev/agents-skills"
---

# Agents Skills

[Agent Skills](https://skills.sh/) for coding agents. Each skill is a folder with a `SKILL.md` file that teaches the agent how to perform a specific task.

## Repository layout

```
agents-skills/
├── skills/
│   ├── docs/              # docs-grounded skills, one per product or framework
│   │   ├── README.md      # category index
│   │   └── <skill>/
│   ├── architecture/      # catalog skills: patterns, principles, practices
│   │   ├── README.md
│   │   └── <skill>/
│   ├── finance/           # workflow skills: filings, company and portfolio analysis
│   │   ├── README.md
│   │   └── <skill>/
│   └── compliance/        # workflow skills: reviews against privacy, payment, platform and AI rules
│       ├── README.md
│       └── <skill>/
├── templates/             # starting points for new skills (not installable)
└── scripts/               # lint, list, link and link-check tooling
```

Skills are grouped as `skills/<category>/<skill-name>/`. Skill names are unique across categories, so a skill installs under its own name regardless of its category.

## Categories

| Category                                        | Skills…
