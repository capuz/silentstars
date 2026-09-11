---
repo: "Cloudgeni-ai/opengeni"
name: "opengeni"
description: "Open, self-hostable agentic runtime for organizations — durable, replayable agent sessions, human approvals, governed credentials and memory, running in managed sandboxes or on your own hardware. Apache-2.0."
readmeQualityOk: true
url: "https://github.com/Cloudgeni-ai/opengeni"
homepage: "https://opengeni.ai/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
topics: ["agents", "bun", "infrastructure", "openai", "temporal", "typescript", "agent-runtime", "ai-agents", "llm", "self-hosted"]
stars: 127
forks: 10
openIssues: 0
closedIssues: 37
watchers: 2
contributors: 10
recentReleases: 10
createdAt: "2026-04-16T13:47:22Z"
lastCommitAt: "2026-09-11T08:15:45Z"
lastReleaseAt: "2026-06-26T08:48:46Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 100
undervaluedScore: 38
maintainers: ["jorgensandhaug", "opengeni-staging[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/81d33070aca21b6a68866e145802e1a60ca8f9d1fda359f7f5c72da213c3f833/Cloudgeni-ai/opengeni"
---

# OpenGeni

**An open, self-hostable agentic runtime for organizations.**

OpenGeni is the platform layer that makes long-running AI agents safe to trust with real work: durable, replayable sessions; human approvals; governed credentials and memory; and a choice of where every session runs — a managed sandbox or your own hardware. It comes out of two years of running agents against production cloud infrastructure at [CloudGeni](https://cloudgeni.ai), where the recurring lesson was that safe agent adoption at scale is a platform problem, not an agent problem. OpenGeni is that platform, extracted into an Apache-2.0 runtime you operate yourself — the control plane, the sessions API, the event history, and the audit trail all live in your deployment, not on a vendor's servers.

OpenGeni is the runtime, not the agent. It provides a session-based API for creating, steering, observing, interrupting, and replaying agent runs, agnostic to what the agent does. The included React app is one client for that API; your own products can call the same API directly and let OpenGeni own durable session state, event history, approvals, and final outputs.

Every session picks where it runs. A…
