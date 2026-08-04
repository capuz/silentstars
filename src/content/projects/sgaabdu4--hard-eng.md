---
repo: "sgaabdu4/hard-eng"
name: "hard-eng"
description: "Stateful agentic engineering workflow for local coding agents"
readmeQualityOk: true
url: "https://github.com/sgaabdu4/hard-eng"
language: "Python"
languages: ["Python"]
languagePcts: [86]
topics: ["agentic-workflow", "ai-agents", "codex", "engineering-workflow", "guardrails", "hard-eng"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-26T07:02:55Z"
lastCommitAt: "2026-08-04T06:11:00Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 59
maintainers: ["sgaabdu4", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1281036141/55c148fd-d759-473e-8700-6d333c889f51?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260804%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260804T061339Z&X-Amz-Expires=300&X-Amz-Signature=3d5817cd752b3260a01eeadb9dfdb6580bb31ffd547af070f32519a68f7e5325&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTgyNDMxOSwibmJmIjoxNzg1ODI0MDE5LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.MgEjIZIyG7pi8mVqyFj7Z2nFp-KTsU3IxZeZyJ9BGLM"
---

</p>

  <strong>Fast, evidence-backed engineering for OpenAI Codex and Claude Code.</strong><br>
  Align once. Build in verified vertical slices. Put extra scrutiny only where the risk is.
</p>

</p>

> [!IMPORTANT]
> **Alpha:** Hard Eng is evolving quickly. Its contract is stable on the essentials: explicit intent, root-cause fixes, deterministic proof, and protected approval boundaries.

## What you get

One canonical repository, wired natively into both agents. No copied files, no plugin packaging, nothing to keep in sync.

| Piece | What it is |
| --- | --- |
| `AGENTS.md` | One behavior contract, loaded by Codex and Claude Code in every session |
| `skills/` | 22 focused skills covering lifecycle, evidence, review, and stack guidance — see [Skills](#skills) |
| Deterministic gates | Contract tests, design checks, and managed-skill verification — enforced by Git hooks at commit and push |
| Native wiring | A `~/.codex/AGENTS.md` symlink and `~/.claude/CLAUDE.md` import stub; Codex, Claude Code, and Copilot CLI read skills from `~/.agents/skills`, while Copilot CLI reads the canonical `~/.agents/AGENTS.md` globally and uses the pinned Context Mode plugin when `~/.copilot`…
