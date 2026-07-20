---
repo: "redfox-data/redfox-community"
name: "redfox-community"
description: "Redfoxhub skill collection: A reusable collection of SKILLS for Agents, covering scenarios such as inspiration, topic selection, copywriting, and data review, continuously updated."
originalDescription: "redfoxhub 技能合集：面向 Agent 的可复用 SKILL 集合，覆盖灵感、选题、文案创作、数据复盘等场景，持续更新。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/redfox-data/redfox-community"
language: "Python"
languages: ["Python"]
languagePcts: [85]
stars: 266
forks: 37
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-05-12T06:26:09Z"
lastCommitAt: "2026-07-20T06:35:19Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 28
maintainers: ["yuanyi-github", "redfox-data"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0621c61eaa303ec42392555dc83af344797b7e1a2bf784268b7dfb8b45cc310/redfox-data/redfox-community"
---

</a>
</p>

  中文
</p>

# redfoxdata · Agent Skills

This repository includes multiple Agent Skills maintained by the **redfoxdata** community, aimed at scenarios such as inspiration, topic selection, copywriting, and data review. The skills are centered around `SKILL.md` and can be used with tools that support Agent Skills, such as Cursor and Claude Code.

## Repository Structure

```text
.
├── README.md          # This description (in Chinese)
├── README.en.md       # English README
├── skills/            # Skills (each subdirectory contains one skill)
│   └── <skill-name>/
│       ├── SKILL.md
│       └── …          # Scripts, reference documents, etc. (optional)
```

## Skill Directory Convention

Each skill is an **independent subfolder** and must contain at least:

| File       | Description                                                      |
| ---------- | --------------------------------------------------------------- |
| `SKILL.md` | Skill entry: YAML frontmatter + body (trigger conditions, steps, constraints, examples, etc.) |

It is recommended to provide clear metadata in the frontmatter of `SKILL.md` for easy retrieval and platform recognition, for example:

```yaml…
