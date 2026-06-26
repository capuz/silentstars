---
repo: "cortexkit/aft"
name: "aft"
description: "Give your agent a proper IDE and OS. The sensorimotor cortex for coding agents (OpenCode + Pi), part of CortexKit: symbol-aware edits, semantic search, code health, fast grep/glob, bash compression, background tasks, PTY."
url: "https://github.com/cortexkit/aft"
homepage: "https://discord.gg/DSa65w8wuf"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [68, 29]
topics: ["agent-framework", "ai", "ai-agents", "ai-agents-framework", "opencode", "pi", "pi-coding-agent", "rag", "vector-search"]
stars: 170
forks: 22
openIssues: 7
closedIssues: 96
watchers: 0
contributors: 13
recentReleases: 0
createdAt: "2026-03-15T14:10:55Z"
lastCommitAt: "2026-06-26T06:47:03Z"
lastReleaseAt: "2026-03-25T08:02:50Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 32
maintainers: ["ualtinok", "tobwen"]
openGraphImageUrl: "https://opengraph.githubassets.com/c51270f06b34db9c36e134391dad367c36e97c928cdbcd5fd04fd15aba98e8dc/cortexkit/aft"
---

<h1 align="center">AFT</h1>

  <strong>Give your agent a proper IDE and OS.</strong><br>
  The sensorimotor cortex for coding agents. <br>
</p>

</p>

</p>

</p>

---

## What is AFT?

You give yourself the best tools for the job: an IDE that shows you the whole codebase at a glance, the fastest terminal you can find, an operating system that runs a dozen things at once so you never wait on a single task to finish.

Then you hand your agent `read`, `edit`, and raw `bash`, and wonder why it burns tokens on whole-file reads and breaks edits the moment a line moves.

AFT gives it the real thing. It sits between an agent's reasoning and your codebase as a **sensorimotor cortex**, the part of the brain wired to perception and action:

- **Sensory cortex: perceive.** Outline a file, zoom into one symbol, search by meaning, follow a call graph. The agent sees *structure* instead of scrolling text.
- **Motor cortex: act.** Edit a function by name, refactor across the workspace, organize imports. Every change is parsed, validated, formatted, and backed up by the binary.
- **Brainstem: stay alive.** Background bash tasks, PTY sessions, and compressed output keep the agent's environment…
