---
repo: "0xGosu/herdr-auto-pilot"
name: "herdr-auto-pilot"
description: "A Herdr plugin that will automatically prompt the running AI Coding CLI on-behalf of you via Herdr API. The plugin has training mode which learn from your actions and also has guards to prevent dangerous/malicious actions to be performed. Once it has been trained with enough interaction you can let it run on Full-Self Prompting mode (FSP)"
readmeQualityOk: true
url: "https://github.com/0xGosu/herdr-auto-pilot"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["herdr-plugin"]
stars: 19
forks: 0
openIssues: 0
closedIssues: 28
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-07-09T10:25:12Z"
lastCommitAt: "2026-09-06T08:03:14Z"
lastReleaseAt: "2026-07-09T18:03:22Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 51
maintainers: ["0xGosu"]
openGraphImageUrl: "https://opengraph.githubassets.com/723e289195be8e5ccbce23e95ac95068f05dd4c00e1f15aa8dd0f0437a9c15f5/0xGosu/herdr-auto-pilot"
---

# Herd Auto Prompter

**Keep your [Herdr](https://herdr.dev) coding agents unblocked, hands-free.**

Herd Auto Prompter is a Herdr plugin that watches every agent session in your
herd, detects when an agent needs input — finished a step, waiting on an
approval, stuck on a multiple-choice question, or stalled on an error — and
automatically supplies the next prompt or the correct response, *the way you
would*. It learns from your own past decisions in a supervised shadow mode, can
follow task lists you explicitly configure, and can optionally consult an
LLM/agent CLI. Autonomous actions must clear the applicable confidence and
safety gates; uncertain ones escalate to you. Everything it does is audited and
correctable.

- **Learned rules, not guesses** — every action taken from a learned rule traces
  back to your confirmed decisions. Explicit task sources and the opt-in LLM
  helper are separate, clearly audited paths.
- **Confidence-gated** — learned rules and optional LLM suggestions use their
  own configured thresholds; below the applicable threshold they escalate.
- **Safety first** — never-auto patterns (force-push, destructive ops, deploys,
  credential changes, …), a global…
