---
repo: "scs0209/laya-guard"
name: "laya-guard"
description: "Free local guardrail for AI coding agents: every tool_call judged on-device (regex + Laya), allow/review/block"
readmeQualityOk: true
url: "https://github.com/scs0209/laya-guard"
language: "Python"
languages: ["Python"]
languagePcts: [73]
topics: ["ai-agents", "ai-safety", "claude-code", "coding-assistant", "fastapi", "guardrails", "llm-security", "local-first", "prompt-injection", "security"]
stars: 40
forks: 10
openIssues: 10
closedIssues: 17
watchers: 1
contributors: 10
recentReleases: 10
createdAt: "2026-10-11T03:55:14Z"
lastCommitAt: "2026-11-16T04:27:06Z"
lastReleaseAt: "2026-10-17T00:53:55Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 43
maintainers: ["scs0209", "blawesom", "faizansaiyed123"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1413903108/2190be5f-d233-459f-86b3-8276fe91c279"
discussionCount: 2
---

A free, local guardrail for AI coding agents.

---

Your coding agent can run `cat ~/.ssh/id_rsa`, `curl … | sh` or `rm -rf ~` on your machine. laya-guard answers
**before** the command runs: **block** it, **ask** you, or **let it through**. A regex prefilter catches the
known-dangerous patterns and a small multilingual model ([laya-guard-multilingual](https://huggingface.co/Ayaannnnnnn/laya-guard-multilingual), Laya fine-tuned for this, ~322M, Apache-2.0) judges the rest, on your laptop, in
about 0.1 s.

Free and MIT-licensed. No API key, no per-call billing, and the verdict log never stores the command text.

## ✨ Why laya-guard

| | |
|---|---|
| 🛑 **Judged before it runs** | Every command your agent proposes gets `allow`, `review` (you're asked) or `block`, with the policy and the reason. A chain like `npm test && curl … \| sh` is split, and the worst part wins. |
| 💻 **Local and free** | Regex hits and safe commands return instantly. Everything else goes to a ~322M model on your CPU, about 85–90 ms per judgment. |
| 🔌 **11 agents, one command** | `laya-guard install <agent>` shows the diff first, backs up your settings, then sends two test calls through the hook. |
| 🔐…
