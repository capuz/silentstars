---
repo: "san086041-glitch/FailGate"
name: "FailGate"
description: "The acceptance layer for bug fixes: a failing test sealed for every bug, then used to grade every PR that claims to fix it — human or AI agent."
readmeQualityOk: true
url: "https://github.com/san086041-glitch/FailGate"
homepage: "https://github.com/san086041-glitch/failgate-demo"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["ai-agents", "code-review", "github-app", "langgraph", "llm", "mcp", "pytest", "python", "testing"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-03T12:52:45Z"
lastCommitAt: "2026-10-09T10:50:20Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 45
maintainers: ["san086041-glitch"]
openGraphImageUrl: "https://opengraph.githubassets.com/776222692b3580042f42da067eed2e8f77a758ac5c46a810e18cf3d954e426af/san086041-glitch/FailGate"
---

A failing test for every bug, sealed before anyone touches the code — then used to grade every PR that claims to fix it.

## 🤔 Why

Coding agents now open pull requests at scale — [about 17 million a month on GitHub by March 2026](https://www.danilchenko.dev/posts/2026-04-11-github-ai-agents-pull-requests/). Writing the fix is no longer the hard part. **Knowing whether it is right is.**

- 🧪 **Tests written after the fix grade themselves.** When an agent sees a failing test, editing the test is the cheapest way to make it pass — [ImpossibleBench](https://www.lesswrong.com/posts/qJYMbrabcQqCZ7iqm/impossiblebench-measuring-reward-hacking-in-llm-coding-1) caught GPT-5 doing exactly that in 76% of impossible tasks.
- 🕳️ **"Tests pass" is a weak signal.** [UTBoost](https://arxiv.org/pdf/2506.09289) found that 15.7% of the patches counted as *resolved* on SWE-bench Verified are actually wrong — the tests were too weak to notice.
- 🔁 **Reproduction bots stop too early.** Several tools now turn an issue into a failing test. Very few keep that test honest when a PR arrives: was it edited? skipped? does it still fail the same way? did something else break?

FailGate is the **acceptance…
