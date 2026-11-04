---
repo: "heal-dev/heal-playwright-tracer"
name: "heal-playwright-tracer"
description: "Open-source statement-level Playwright tracer, purpose-built for AI agents. Analyzes test runs with increased accuracy."
readmeQualityOk: true
url: "https://github.com/heal-dev/heal-playwright-tracer"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["automation", "claude-code", "claude-skill", "playwright", "qa-automation", "tracing"]
stars: 49
forks: 0
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-04-20T12:19:37Z"
lastCommitAt: "2026-11-04T08:04:16Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 77
undervaluedScore: 12
maintainers: ["github-actions[bot]", "PierreOucif", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d39915f7c117084e3667c26e2919bd2f081d0d23a7491990c164f9146062b8d/heal-dev/heal-playwright-tracer"
---

# @heal-dev/heal-playwright-tracer

heal-playwright-tracer is an agent-first diagnostic layer for your Playwright tests. It gives agents
(and humans) everything they need to quickly analyze test results.

👉 **Add this to your playwright config, run your tests, point Claude to the improved heal trace, get more accurate test diagnosis**

## Why

The playwright trace doesn't contain enough data for LLM-based agents such as Claude or Open Code to analyze tests results reliably.
That's because the trace ifs focused on locator evaluation, while real-life tests also evaluate non-playwright code.
Heal adds the missing instrumentation layer to let LLM agents work their magic.
And it's useful for humans in complex test codebases, too!

| Feature        | Playwright Trace      | Heal Tracer          | Example: What Heal Adds                                                                    |
| -------------- | --------------------- | -------------------- | ------------------------------------------------------------------------------------------ |
| Granularity    | Action-level          | Statement-level      | Shows `let x = calculate()` line-by-line, not just the final `page.click()`.…
