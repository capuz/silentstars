---
repo: "ecorkran/squadron"
name: "squadron"
description: "user-configurable pipeline orchestration. decompose, review, automate — every level from broad architecture to precise code, your choice of models, structured artifacts human and ai readable. pairs with context-forge. you're in control."
readmeQualityOk: true
url: "https://github.com/ecorkran/squadron"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-tools", "cli", "multi-agent-systems", "pipelines", "reviews"]
stars: 5
forks: 3
openIssues: 83
closedIssues: 191
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-02-17T13:56:23Z"
lastCommitAt: "2026-11-02T13:38:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 70
maintainers: ["ecorkran"]
openGraphImageUrl: "https://opengraph.githubassets.com/4374d9b37169660bd47ed385294944cd73785da72ea0f15e4bca1a254ee3ed7d/ecorkran/squadron"
---

# Squadron

Repeatable AI workflows from the terminal: structured reviews, customizable YAML pipelines, and context handoffs between agents. It runs on your existing Claude and ChatGPT subscriptions or on any API model.

```bash
sq review slice 120 -v --model {model-alias}
```

## What Squadron does

**Structured reviews.** Point `sq` at an architecture doc, a slice design, a task plan, or a diff. You get back a verdict (PASS, CONCERNS, or FAIL) plus specific findings ranked by severity. Each review type runs from a purpose-built template, so the output has the same shape on every run and with any model. Once you've fixed the findings, `sq review resolve` checks them against the actual diff and records whether they were really addressed. → [Reviews](#reviews)

**Customizable pipelines.** A pipeline is a YAML file that chains steps into one command: design, review, revise, judge, implement, commit, summarize. Loops run until a review passes. Judges settle disagreements. Checkpoints stop for a human when a gate fails. Every step names its own model, so a cheap model can draft while a strong one reviews. Squadron ships pipelines for each phase of a project. Copy any of them and…
