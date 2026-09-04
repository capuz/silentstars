---
repo: "Nightbr/factorai"
name: "factorai"
description: "Agentic Development Environment (ADE) for the AI era"
readmeQualityOk: true
url: "https://github.com/Nightbr/factorai"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [61, 36]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-08-14T09:20:06Z"
lastCommitAt: "2026-09-04T08:09:48Z"
lastReleaseAt: "2026-08-17T11:45:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 62
maintainers: ["Nightbr", "rbideau"]
openGraphImageUrl: "https://opengraph.githubassets.com/08a43e93c3c197bd230c8012ad5ded8fd4904a5d3e6068e3703ad15d89728906/Nightbr/factorai"
---

### IDE is dead. Long live the ADE

Agentic Development Environment for the AI era

</div>

> [!WARNING]
> **factorai is alpha.** It is used daily by its author and by very few other
> people. Releases go out several times a day and publish themselves; things
> move, break and get renamed without ceremony. It drives real agent sessions
> against real repositories, so point it at work your version control can
> recover. [What's next and what just landed](https://github.com/Nightbr/factorai/blob/HEAD/specs/roadmap/).

You stopped writing most of the code. Your editor never noticed. It still opens
files one at a time, still assumes the cursor is the thing that matters, still
treats the terminal running your agent as a rectangle at the bottom of the
screen.

factorai is built the other way round. **The unit of work is a session, not a
file** — agents are long-lived processes you launch, watch, resume and kill, and
reading code is something you do to *check on* the work.

---

### Run agents, not chats

Every session is a real PTY with xterm.js in front of it — the actual `claude`
CLI, not a reimplementation of it. Launch a new one, resume an old one, stop and
restart it. Terminals…
