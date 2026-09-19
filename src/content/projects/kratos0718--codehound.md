---
repo: "kratos0718/codehound"
name: "codehound"
description: "An AST-based static analyzer that hunts real correctness and async-safety bugs in Python code. Each rule is distilled from a bug found and fixed in a popular open-source AI framework."
readmeQualityOk: true
url: "https://github.com/kratos0718/codehound"
homepage: "https://kratos0718.github.io/codehound/"
language: "Python"
languages: ["Python"]
languagePcts: [91]
topics: ["ast", "asyncio", "bug-finder", "code-quality", "developer-tools", "linter", "python", "static-analysis", "pre-commit", "static-analysis-tool"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-05-31T12:22:33Z"
lastCommitAt: "2026-09-19T08:14:57Z"
lastReleaseAt: "2026-09-17T08:05:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 72
undervaluedScore: 44
maintainers: ["kratos0718"]
openGraphImageUrl: "https://opengraph.githubassets.com/8867200807da3606e4e6bf51c064f546c00029b009300f75b8e08dab878e2c51/kratos0718/codehound"
discussionCount: 1
---

</p>

<h1 align="center">codehound</h1>

**An AST-based static analyzer that hunts *real* bugs in large Python codebases — fifty checks, eight backed by a bug that was actually found and merged (or opened as a PR) into a major open-source AI framework, the rest hardening rules verified against real false positives across a ~29-framework validation corpus instead of just reasoned about.**

**[Try it in your browser — no install](https://kratos0718.github.io/codehound/)** — paste Python, click Scan, see real findings from all 50 checks. Runs entirely client-side via [Pyodide](https://pyodide.org) (Python compiled to WebAssembly); your code never leaves the page.

Most linters flag style. `codehound` flags the *subtle correctness and async-safety bugs* that slip past code review and only bite in production — event-loop stalls, shared mutable state, leaked file descriptors, fire-and-forget tasks that get garbage-collected mid-run.

Most of the checks below aren't theoretical. **I wrote them after finding — and fixing, via a merged pull request — that exact bug in a real, popular framework** (agno 25k⭐, crewAI 30k⭐, mem0, llama_index, accelerate).

---

## See it in action

Pointing…
