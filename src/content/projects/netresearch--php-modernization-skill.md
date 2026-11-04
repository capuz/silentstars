---
repo: "netresearch/php-modernization-skill"
name: "php-modernization-skill"
description: "Agent Skill: PHP 8.x modernization patterns - typing, attributes, PHPStan | Claude Code compatible"
readmeQualityOk: true
url: "https://github.com/netresearch/php-modernization-skill"
language: "Python"
languages: ["Python"]
languagePcts: [78]
topics: ["agent-skills", "ai-agent", "open-standard"]
stars: 58
forks: 4
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2025-12-13T11:57:20Z"
lastCommitAt: "2026-11-04T12:57:35Z"
lastReleaseAt: "2026-01-11T22:03:37Z"
status: "thriving"
tags: []
healthScore: 92
undervaluedScore: 44
maintainers: ["CybotTM", "renovate[bot]", "netresearch-project-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/73b4702ee73fe444ada832622c71774bfcc3de67744bae8a0727c119ba901ffe/netresearch/php-modernization-skill"
discussionCount: 0
---

# PHP Modernization Skill

Expert patterns for modernizing PHP applications to PHP 8.x with type safety, PSR / PER-CS compliance, static-analysis tooling, and Symfony-grade architecture. The skill ships an **agent contract** — a small set of executable tools that emit machine-readable verification reports, archetype profiles, and fix-loop transcripts.

## Compatibility

This is an **Agent Skill** following the [open standard](https://agentskills.io) originally developed by Anthropic and released for cross-platform use.

Supported platforms:

- Claude Code (Anthropic)
- Cursor
- GitHub Copilot
- Other skills-compatible AI agents

Skills are portable packages of procedural knowledge that work across any AI agent supporting the Agent Skills specification.

## Features

- **Agent contract**: a Python verifier (`verify_php_project.py`), orchestrator (`modernize_loop.py`), and cheap profiler (`introspect.py`). stable structured output (JSON with `schema_version 1.0.0`, SARIF 2.1.0, or JUnit XML), archetype detection, and machine-readable `agent_actions[]` recommendations downstream agents can act on without re-reading the prose references.
- **Hard guardrails**: five binding refusal…
