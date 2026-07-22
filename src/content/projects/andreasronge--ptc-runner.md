---
repo: "andreasronge/ptc_runner"
name: "ptc_runner"
description: "Meta-agentic harness for programmable agent workflows. LLMs write Clojure like programs that combine controlled tools, reusable preludes, and observable execution."
readmeQualityOk: true
url: "https://github.com/andreasronge/ptc_runner"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [94]
stars: 18
forks: 3
openIssues: 24
closedIssues: 584
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2025-12-01T12:40:07Z"
lastCommitAt: "2026-07-22T06:11:04Z"
lastReleaseAt: "2026-06-24T13:07:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 99
undervaluedScore: 59
maintainers: ["andreasronge", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/17a6e7eb7944dc9266071f986c04c016051c40b62a647ca87b5be882b0d5e06a/andreasronge/ptc_runner"
discussionCount: 0
---

# PtcRunner

PtcRunner lets an LLM write a small program to solve a task, then runs that
program with only the tools you allow.

Instead of sending every tool result back to the model, one PTC-Lisp program
can call several tools, transform their results, branch, and loop. This can
reduce model round trips while keeping credentials and unrestricted host access
out of generated code.

> PtcRunner is a 0.x project under active development. Breaking changes are
> expected.

## What is different?

- **Programmatic tool calling.** Deterministic work stays in generated code
  instead of repeatedly passing intermediate data through the LLM.
- **Replaceable agent behavior.** Prompts, retries, planning, memory, and
  completion rules are PTC-Lisp libraries—not a loop fixed inside the runtime.
- **Controlled tools.** Generated programs see a small task API, not
  credentials, arbitrary files, network access, or host functions.
- **Useful failures.** Successful definitions remain available on the next
  turn; failed attempts roll back and return clear correction errors.
- **Evidence for improvement.** Structured traces record outcomes, errors,
  tool use, evaluations, and resource use. Exact…
