---
repo: "YangZhaoWeblog/skills-develop"
name: "skills-develop"
description: "backup my ClaudeSkills"
readmeQualityOk: true
url: "https://github.com/YangZhaoWeblog/skills-develop"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [54, 26]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-10T09:29:49Z"
lastCommitAt: "2026-10-24T08:20:34Z"
status: "thriving"
tags: []
healthScore: 70
undervaluedScore: 40
maintainers: ["YangZhaoWeblog"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7bff3daf31bbd6d79784072cd43b45e63c62d7e98a67db7e0e3762b00725845/YangZhaoWeblog/skills-develop"
---

# skills-develop

English | [中文](https://github.com/YangZhaoWeblog/skills-develop/blob/HEAD/README.zh-CN.md)

* * *

## Install

### Project scope

Install into the current repo.

```bash
npx skills@latest add YangZhaoWeblog/skills-develop -y
```

### Global scope

Install into your user space.

```bash
npx skills@latest add YangZhaoWeblog/skills-develop -g -y
```

Project scope is the default. `-g` switches to user-level installation.

### Single skill

Install only one skill from this repository.

```bash
npx skills@latest add YangZhaoWeblog/skills-develop --skill td-harness-build -y
```

Use `--skill td-harness-build` for the canonical harness build/upgrade flow.

Install one local skill directory.

```bash
npx skills@latest add ./skills/engineering/td-harness-build -y
```

Use one skill without installing it.

```bash
npx skills@latest use YangZhaoWeblog/skills-develop@td-harness-build
```

Replace `td-harness-build` with the target skill name. Add `-g` to install that single skill globally.

* * *

## Skills

| Skill | What it does |
| --- | --- |
| `td-harness-build` | Builds or upgrades a reusable project AI harness with canonical AGENTS.md, `.harness` templates,…
