---
repo: "imantaba/kubeagent"
name: "kubeagent"
description: "Read-only Kubernetes troubleshooting agent in Go (client-go) — explains CrashLoopBackOff, ImagePullBackOff, OOMKilled, Pending/Unschedulable with P1-infra to P2-workload reports; guarded reversible --fix; optional AI --explain via Claude API."
readmeQualityOk: true
url: "https://github.com/imantaba/kubeagent"
homepage: "https://k8sproject.top"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["ai-agent", "cli", "client-go", "devops", "golang", "k8s", "kubectl", "kubernetes", "observability", "sre"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-17T08:09:51Z"
lastCommitAt: "2026-07-28T14:57:04Z"
lastReleaseAt: "2026-07-07T05:58:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 66
maintainers: ["imantaba"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1272024618/2bb903a4-175b-488f-86fd-d2f2bfad7bf2"
discussionCount: 2
---

</p>

# kubeagent

> A read-only Kubernetes troubleshooting CLI that tells you **why** your pods are broken — not just that they are.

**Highlights:**

- 🔒 **Read-only by default** — only `get`/`list`/`watch`, safe against prod. (Opt-in `--fix` applies a fixed allowlist of reversible remediations, each behind a `[y/N]` confirm, never in `kube-system`.)
- 📴 **Deterministic & offline** — the whole diagnostic core needs no API key. AI is strictly opt-in.
- 🤖 **Optional `--explain`** — one Claude API call summarizes findings in plain English (never sends pod specs, env, or secrets).
- 🔍 **Optional `--investigate`** — agentic read-only follow-up reads (bounded tool-use loop: describe objects, list events, hop to related resources) to chase a root cause and emit a grounded fix; Anthropic-only, supersedes `--explain`.
- 📦 **Single Go binary** — built on `client-go`, the same library `kubectl` uses. No CRDs, no in-cluster agent required.
- 📊 **`watch` daemon** — run it in-cluster for continuous read-only diagnosis; tracks issue state across reconciles (new/resolved/flapping, MTTR) and serves it as Prometheus metrics plus a read-only `/issues` endpoint.
- 🔌 **MCP server** —…
