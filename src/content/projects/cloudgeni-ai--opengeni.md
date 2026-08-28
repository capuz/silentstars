---
repo: "Cloudgeni-ai/opengeni"
name: "opengeni"
description: "Open, self-hostable agentic runtime for organizations — durable, replayable agent sessions, human approvals, governed credentials and memory, running in managed sandboxes or on your own hardware. Apache-2.0."
readmeQualityOk: true
url: "https://github.com/Cloudgeni-ai/opengeni"
homepage: "https://opengeni.ai/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
topics: ["agents", "bun", "infrastructure", "openai", "temporal", "typescript", "agent-runtime", "ai-agents", "llm", "self-hosted"]
stars: 112
forks: 9
openIssues: 0
closedIssues: 35
watchers: 1
contributors: 9
recentReleases: 10
createdAt: "2026-04-16T13:47:22Z"
lastCommitAt: "2026-08-28T14:22:19Z"
lastReleaseAt: "2026-06-26T08:48:46Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 100
undervaluedScore: 39
maintainers: ["benyhh", "opengeni-staging[bot]", "jorgensandhaug"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd6ea2ef36817ebd97aaec02358aa9160ced1166f3d145658dc1e1e010e03e8d/Cloudgeni-ai/opengeni"
---

# OpenGeni

**An open, self-hostable agentic runtime for organizations.**

OpenGeni is the platform layer that makes long-running AI agents safe to trust with real work: durable, replayable sessions; human approvals; governed credentials and memory; and a choice of where every session runs — a managed sandbox or your own hardware. It comes out of two years of running agents against production cloud infrastructure at [CloudGeni](https://cloudgeni.ai), where the recurring lesson was that safe agent adoption at scale is a platform problem, not an agent problem. OpenGeni is that platform, extracted into an Apache-2.0 runtime you operate yourself — the control plane, the sessions API, the event history, and the audit trail all live in your deployment, not on a vendor's servers.

OpenGeni is the runtime, not the agent. It provides a session-based API for creating, steering, observing, interrupting, and replaying agent runs, agnostic to what the agent does. The included React app is one client for that API; your own products can call the same API directly and let OpenGeni own durable session state, event history, approvals, and final outputs.

Every session picks where it runs. A…
