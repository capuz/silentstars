---
repo: "responsibleai/agent-hooks"
name: "agent-hooks"
description: "Framework-neutral control contract for AI agents: eight interception points, three verdicts, and a conformance kit."
readmeQualityOk: true
url: "https://github.com/responsibleai/agent-hooks"
homepage: "https://responsibleai.github.io/agent-hooks"
language: "Rust"
languages: ["Rust"]
languagePcts: [33]
topics: ["agent-security", "ai-agents", "conformance-testing", "dotnet", "golang", "guardrails", "policy-enforcement", "python", "rust", "specification"]
stars: 20
forks: 5
openIssues: 3
closedIssues: 5
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-06-19T06:30:59Z"
lastCommitAt: "2026-10-22T08:52:23Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 46
maintainers: ["MohammadHaroonAbuomar", "dependabot[bot]", "liamcrumm"]
openGraphImageUrl: "https://opengraph.githubassets.com/5bc05570948e060f2b6053b79b707dc2436cdaff7bba5202c878113a70ef7102/responsibleai/agent-hooks"
---

# agent-hooks

> Status: Beta. Spec: [AGENT-HOOKS-0.1](https://github.com/responsibleai/agent-hooks/blob/HEAD/spec/AGENT-HOOKS-0.1.md), wire
> version `agent-hooks/0.1`. Host declaration contract:
> `agent-hooks-declaration/1.0`
> ([version table](https://github.com/responsibleai/agent-hooks/blob/HEAD/spec/DECLARATION-VERSIONS.md)).

Agent Hooks is the interception contract between an agent host and the
controls that govern it. It fixes eight points in the agent loop, the
context the host hands over at each, the verdict a control returns, and
what the host must do with that verdict. Any host (a framework, a
runtime, a gateway) can expose the contract, and any control (a policy
engine, a content filter, a rate limiter, an approval gateway, an egress
guard) can target it. Agent Hooks is not a policy engine: it carries no
rules and makes no decisions of its own. It is not a sandbox: the host
is trusted, interceptors run in-process with full data access, and the
eight points do not promise complete mediation. It is a control plane,
not a telemetry plane: every verdict binds the host, and passive
observation is out of scope. See…
