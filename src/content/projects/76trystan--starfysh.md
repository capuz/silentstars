---
repo: "76Trystan/starfysh"
name: "starfysh"
description: "One AI-recorded session, compiled into a deterministic script that heals itself when sites change. Author once, run indefinitely."
readmeQualityOk: true
url: "https://github.com/76Trystan/starfysh"
homepage: "https://www.starfysh.dev/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["agentic-ai", "agentic-workflow", "self-healing", "workflow", "workflow-automation", "workflows"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-09-01T05:00:09Z"
lastCommitAt: "2026-11-18T12:06:54Z"
lastReleaseAt: "2026-10-31T03:44:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 53
maintainers: ["76Trystan", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/24391c7f9f34d0329ef82ed5cd4f8f93a188e1568be0b2e5322afa3f5b4d09ab/76Trystan/starfysh"
---

# Starfysh

A browser-automation compiler that turns one AI-recorded session into a deterministic, self-healing script. The agent authors the code once, the runtime runs it indefinitely.

> **Status: Phase 1 in progress.** The paragraph above is the vision. Phase 0 (IR, compiler, runtime, Playwright adapter) shipped on npm at 0.1.x and has since seen several minor releases. Phase 1 (parser, verifier, triage, healer, CLI, MCP server) is in progress. The parser and verifier are published on npm. The triage classifier, model providers, CLI, and healer work inside the repo but are not yet published. The full heal loop (diagnose, patch, verify live, review, approve or undo) runs end to end in the repo's tests, but only against scripted models and simulated pages: the healer has not yet been run against a real model or measured on a benchmark. The sections below separate what you can use today from what is coming.

## What ships today

Six `@sfysh/*` packages are published on npm today. The Phase 0 core gives you the deterministic middle of the pipeline; the parser and verifier are the first Phase 1 packages to ship.
