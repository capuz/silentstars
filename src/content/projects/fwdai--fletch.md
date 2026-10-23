---
repo: "fwdai/fletch"
name: "fletch"
description: "A new kind of IDE for agentic engineering"
readmeQualityOk: true
url: "https://github.com/fwdai/fletch"
homepage: "https://fletch.sh"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [59, 37]
topics: ["agent", "agentic-ide", "ai-ide", "claude-code", "codex", "coding-agent", "ai-agents", "ai-tools", "agent-orchestration", "macos"]
stars: 32
forks: 2
openIssues: 2
closedIssues: 8
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-05-25T01:57:18Z"
lastCommitAt: "2026-10-23T09:33:54Z"
lastReleaseAt: "2026-06-15T05:21:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 41
maintainers: ["alchaplinsky"]
openGraphImageUrl: "https://opengraph.githubassets.com/2191c5df44dd6b6efb5766432342a6778f0d3359c06ad855d9409b54b7aecd2b/fwdai/fletch"
discussionCount: 8
---

Fletch

### A new kind of IDE for agentic engineering.

Run Claude Code, Codex, Cursor, OpenCode and more in sealed workspaces, each with its own repo clone and a served index of your codebase, chained into deterministic workflows that plan, build, review, and test.

---

Fletch is a native macOS app for engineers who use AI agents to build real software and want predictable results, not just more output. Running more agents stopped being the hard part a while ago. Trusting what they produce is the hard part now.

Fletch is opinionated about how agent-written code should reach your main branch:

- **Agents don't get your checkout.** Each one works in an isolated clone of your repo, inside an OS-level sandbox that denies writes anywhere else. Your working copy is untouchable.
- **Process beats prompting.** Repeatable work runs as a workflow (plan → build → review → test) where a step is done when a _verifiable condition_ holds: tests passed, a commit landed, you approved. Not when the agent says so.
- **Nothing merges without you.** Live diffs, explicit approval gates, and your review sit between the agents and the merge.

If you want to fire off a dozen agents and merge whatever…
