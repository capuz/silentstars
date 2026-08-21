---
repo: "shanjunmei/dig"
name: "dig"
description: "dig is a compile‑time code generation based DI tool for Go. It provides a more intuitive API than Wire , with native generics support , built‑in closure capture safety that Wire lacks, and is faster than Fx by eliminating runtime reflection — all with zero runtime dependencies"
readmeQualityOk: true
url: "https://github.com/shanjunmei/dig"
language: "Go"
languages: ["Go"]
languagePcts: [94]
topics: ["code-generation", "dependency-injection", "di", "dig", "fx", "go", "golang", "microservices", "modular", "wire"]
stars: 54
forks: 3
openIssues: 0
closedIssues: 18
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-17T08:14:51Z"
lastCommitAt: "2026-08-21T04:10:56Z"
lastReleaseAt: "2026-07-08T06:43:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 42
maintainers: ["shanjunmei"]
openGraphImageUrl: "https://opengraph.githubassets.com/f673189eaecc136e16f0f76d74e6f85125d7490e81aec6447c7f0ebb98dd5105/shanjunmei/dig"
discussionCount: 3
---

## LLM Agent Skills
AI assistant prompts for dig live in [`prompts`](https://github.com/shanjunmei/dig/blob/HEAD/prompts). Entry point: [`system_prompt_dig_en.md`](https://github.com/shanjunmei/dig/blob/HEAD/prompts/system_prompt_dig_en.md) — covers core API & CLI, troubleshooting, version migration, and a dig/Wire/Fx comparison.
### Official Industrial Modular Coding Skill
A complete standardized production coding convention skill for business microservice based on dig:
[Industrial Modular Coding Skill](https://github.com/shanjunmei/dig/blob/HEAD/prompts/industrial_modular_coding_skill.md)

# dig — Compile‑time Dependency Injection for Go

[中文文档](https://github.com/shanjunmei/dig/blob/HEAD/README_zh.md) | English | [Documentation site](https://shanjunmei.github.io/dig/?lang=en)

> **Current version**: v1.0.20 — full release notes in [CHANGELOG_en.md](https://github.com/shanjunmei/dig/blob/HEAD/CHANGELOG_en.md).

---

## Why dig?

Go DI tools fall into two camps:

- **Uber Fx**: elegant API (`Provide`/`Invoke`/`Supply`/`Module`) but **runtime reflection** – slower startup, runtime panics on dependency errors, larger binaries.
- **Google Wire**: compile‑time safety and zero…
