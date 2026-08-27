---
repo: "mmeyerlein/meclaw"
name: "meclaw"
description: "Agent swarms that recursively evolve themselves — recursive self-improvement as auditable topology. Build an agentic harness swarm as a directory tree. One Rust binary."
readmeQualityOk: true
url: "https://github.com/mmeyerlein/meclaw"
homepage: "https://meclaw.ai"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["actor-model", "agent-framework", "agentic", "rust", "ai-agents", "multi-agent", "self-modifying-code", "autonomous-agents", "llm", "llm-agents"]
stars: 11
forks: 3
openIssues: 5
closedIssues: 420
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-06-16T11:29:54Z"
lastCommitAt: "2026-08-27T14:32:35Z"
lastReleaseAt: "2026-08-13T13:23:03Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "release_machine"]
healthScore: 100
undervaluedScore: 62
maintainers: ["mmeyerlein"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1271145357/6ad51b53-3160-44f7-b254-2774f8c74d11"
discussionCount: 18
---

# meclaw

**Agent swarms that recursively evolve themselves.**

**Loops? I don't care. The swarm builds its own. Or it doesn't. Its call.**

</div>

---

Every agent framework ships you the same thing: a loop. Call the model, run a tool, feed the result back, call the model again, until some condition you wrote says stop. That loop is the harness. You hand-build it, you babysit it, you redeploy it when it's wrong.

meclaw doesn't ship you a loop.

An `llm` cell makes one provider call and emits one message. That's it. No inner loop, ever. The tool-loop, ReAct, plan-and-execute, every harness pattern you've ever wired by hand, becomes a shape in your filesystem instead. Tools are cells. The loop is an edge that routes back. The harness is topology.

And since the harness is just files on disk, the swarm can rewrite it. Add a cell. Rewire an edge. Decide a loop was the wrong shape entirely and build something else. You wrote the first version. From there, rewiring is a runtime move, yours or the swarm's.

Here's the whole thing in eight seconds. One task in, one answer out, and the
tool-loop you'd normally hand-write showing up as a path through the tree:

That's `docs/demo.sh`…
