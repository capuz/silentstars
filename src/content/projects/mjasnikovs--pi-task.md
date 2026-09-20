---
repo: "mjasnikovs/pi-task"
name: "pi-task"
description: "Deterministic spec-orchestration for local LLMs in the pi coding agent — drives prompts through refine→research→grill→compose→critique, with bundled web/docs/fetch worker tools."
readmeQualityOk: true
url: "https://github.com/mjasnikovs/pi-task"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["agent-tools", "bun", "coding-agent", "llm-tools", "local-llm", "pi", "pi-extension", "task-orchestration", "typescript"]
stars: 126
forks: 9
openIssues: 0
closedIssues: 16
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-02T16:30:23Z"
lastCommitAt: "2026-09-20T08:46:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 31
maintainers: ["mjasnikovs"]
openGraphImageUrl: "https://opengraph.githubassets.com/dbd08fb6b8a596e0a30926b4f0d621007d22f1fc89ac730e61e28fe9b7995282/mjasnikovs/pi-task"
---

# pi-task

**Deterministic spec-orchestration for local models — with bundled web, docs, fetch, and worker sub-agent tools.**

</div>

---

## What it does

Local models drift. Ask one to plan a non-trivial change and it skips context, hallucinates APIs, and forgets what you actually asked. `pi-task` fixes this by **not trusting a single prompt** — it drives your request through a fixed, persisted pipeline of small, verifiable steps (shown above), then hands the main session a clean spec to execute.

Every phase boundary is written to `.pi-tasks/TASK_NNNN.md`, so a task survives a crash, a restart, or a `/task-cancel` — pick it back up with `/task-resume`.

## Why it's different

- **Deterministic by construction.** The phase order is fixed code, not a model's free choice. The orchestrator loops over a config table; each phase has one job and one output section.
- **Parallel research, focused output.** The research phase fans out to isolated child agents — one indexing project files, others digging into APIs, context, and tooling — and **verifies tooling claims** before they reach the spec.
- **Context stays clean.** Noisy file/code spelunking, page fetches, and docs lookups run…
