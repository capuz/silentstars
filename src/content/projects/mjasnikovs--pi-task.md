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
stars: 76
forks: 5
openIssues: 1
closedIssues: 12
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-02T16:30:23Z"
lastCommitAt: "2026-08-28T15:33:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 33
maintainers: ["mjasnikovs"]
openGraphImageUrl: "https://opengraph.githubassets.com/ae00f1f73db048122147b7831fd1ebb0bc76f6075e6e8ee86d8e7eda51970b60/mjasnikovs/pi-task"
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
