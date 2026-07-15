---
repo: "movito/agentive-starter-kit"
name: "agentive-starter-kit"
description: "Removes the usual headaches from agent-driven development. Provides a little extra structure, so you can  focus on building, not debugging."
readmeQualityOk: true
url: "https://github.com/movito/agentive-starter-kit"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [67, 33]
stars: 12
forks: 0
openIssues: 9
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2025-11-25T18:40:47Z"
lastCommitAt: "2026-07-15T05:56:30Z"
lastReleaseAt: "2026-07-14T11:41:09Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 83
undervaluedScore: 47
maintainers: ["movito", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0279f998e11e997aa3732f603f8e97569188499f72cb9793d5125a5b5b830b57/movito/agentive-starter-kit"
---

# Agentive Starter Kit

**A bit of structure to help you get more out of agentive software development**

Using agents to build software works better if you add a bit of structure. Anthropic calls this a [harness](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents). We created the tools in this kit to overcome the usual problems of agentive development: documentation, testing, architecture, and value for money (and tokens).

When we start a new project, we clone this repo and complete the onboarding. This gives us tests, tasks, documentation, and token-efficient tools, all in about ten minutes. You can tweak things as you wish, including how the agents work, and what models you use.

----
## What's inside?

1. An **onboarding agent** to help you get started.

2. A selection of **specialized agents** that have specific tasks, instructions, and tools. Some of them create and track plans, others write code, and so on.

3. A package we created called `adversarial-workflow` which lets agents get a "second opinion" from specialized **Evaluators**. Built-in evaluators handle plan review, code review, and documentation proofreading. You can also create…
