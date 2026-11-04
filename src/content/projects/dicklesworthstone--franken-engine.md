---
repo: "Dicklesworthstone/franken_engine"
name: "franken_engine"
description: "Native Rust runtime for adversarial JavaScript/TypeScript extension workloads: native-only core execution (no V8/JSC/QuickJS), deterministic replay of high-impact decisions, and Ed25519-signed evidence for every containment action. Research-grade; automation ships advisory-only."
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/franken_engine"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
topics: ["bayesian-inference", "capability-security", "deterministic-replay", "incident-response", "javascript-runtime", "runtime", "rust", "sandboxing", "supply-chain-security", "typescript"]
stars: 34
forks: 3
openIssues: 6
closedIssues: 4
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-02-19T00:56:27Z"
lastCommitAt: "2026-11-04T02:56:58Z"
lastReleaseAt: "2026-10-04T12:35:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 42
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1161313144/8e6db38d-abf1-4f42-956f-05cfd9417be4"
---

# FrankenEngine

A native Rust runtime for adversarial JavaScript/TypeScript extension workloads, built around four constitutional rules: native-only core execution (no V8/JSC/QuickJS bindings), deterministic replay of high-impact decisions, signed evidence for every containment action, and claim-language that cannot exceed its evidence.

### Why Each Constitutional Rule Exists

Each rule pays for itself by closing a class of failure that binding-led runtimes cannot close cheaply.

| Rule | Failure class it closes | Concrete mechanism |
|---|---|---|
| **Native-only core execution** (`Charter §2`) | Binding-led runtimes ship with megabytes of upstream unsafe C++/Zig that is *outside* the IFC/capability algebra. Retrofitting type-safe authority membranes around them is structurally lossy. | The lowering pipeline owns parser-to-scheduler semantics in Rust with `#![forbid(unsafe_code)]`. IFC labels are computed at IR2; capability checks gate every hostcall edge. |
| **Deterministic replay** (`Charter §3`) | Streaming policy decisions made under wall-clock pressure are not reproducible from a postmortem. Forensic causation breaks. | Replay captures the IR3 program, policy snapshot,…
