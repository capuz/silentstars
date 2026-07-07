---
repo: "greenthree/ProbHub-skill"
name: "ProbHub-skill"
description: "Algorithm competition question generation automation skill (personal question-setting habits), supports perfecting problem statements, constructing data, compiling PDFs using typ, and generating domjudge problem packages."
originalDescription: "算法竞赛出题自动化skill（个人出题习惯），支持完善题面、构造数据、组卷用typ编译pdf和生成domjudge题目包"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/greenthree/ProbHub-skill"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [55, 39]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-25T05:18:39Z"
lastCommitAt: "2026-07-07T06:38:54Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 37
maintainers: ["greenthree"]
openGraphImageUrl: "https://opengraph.githubassets.com/988ac3833bf86c18952ba40cecf6a7b00ef95c8084dbb1106a2ca44c48db68e5/greenthree/ProbHub-skill"
---

# ProbHub-skill: ACM/ICPC Automated Question Generation Workflow

ProbHub is an algorithm competition question generation environment built on large language models (LLM Agent) and modern typesetting/testing frameworks. This project aims to reduce repetitive tasks such as data generation, formatting adjustments, and configuration of evaluation packages through a standardized automated workflow.

---

## Core Features

* **Agent Driven**: Built-in `SKILL.md`, compatible with Agent frameworks like Claude Code, completing the question generation process through natural language instructions.
* **Data Generation**: Integrates CYaRon, supporting quick generation of complex data structures like trees and graphs through Python scripts.
* **Data Validation**: Uses a sandbox (customizable validator) for brute-force testing of small data, globally ensuring the elimination of brute-force and incorrect solutions.
* **Fast Typesetting**: Uses Typst templates, replacing traditional LaTeX, significantly improving the PDF compilation speed of problem statements.
* **WebUI Manual Fine-tuning of Problem Statements**: Supports markdown preview, auto-saving, and automatically distributes…
