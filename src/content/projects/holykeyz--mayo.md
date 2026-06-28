---
repo: "HOLYKEYZ/mayo"
name: "mayo"
description: "my autonomous 3riple-LLMs agents for my github actions & workflows(opens suggestive PRs every hour)"
url: "https://github.com/HOLYKEYZ/mayo"
homepage: "https://joe-gemini.vercel.app"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["actions", "agent", "ai", "automation", "llm", "workflow"]
stars: 17
forks: 9
openIssues: 0
closedIssues: 0
watchers: 5
contributors: 2
recentReleases: 0
createdAt: "2026-02-07T15:06:33Z"
lastCommitAt: "2026-06-28T02:01:05Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 88
undervaluedScore: 47
maintainers: ["joe-gemini-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/77357a612f375d1738a9fdfecf65a7bb48ee4dfc103db685838bb0d1f89757df/HOLYKEYZ/mayo"
---

# Mayo 🦾🤖
### The Autonomous Triple-AI Maintainer

Mayo is a **Self-Improving Autonomous Maintenance Engine** integrated directly into your GitHub ecosystem. It uses a **Triple-AI Pipeline** — three specialized AI models working in concert — to produce high-value, validated code improvements across all your repositories.

---

## 🧬 Triple-AI Pipeline

Every improvement goes through 3 AI models before it becomes a PR:

```mermaid
flowchart TD
    A["Hourly Cron Trigger"] --> R0["REVIEWER: Audit pending PR statuses"]
    R0 --> B["SCANNER: Deep codebase analysis"]
    B -->|"Text-only summary + plan"| C["EXECUTOR: Generate surgical edits"]
    C -->|"Proposed search/replace JSON"| D["REVIEWER: Validate edits"]
    D -->|"APPROVE"| E["Create PR"]
    D -->|"CORRECT"| F["Apply corrected edits then Create PR"]
    D -->|"REJECT + feedback"| C2["EXECUTOR: Retry with feedback"]
    C2 --> D2["REVIEWER: Validate retry"]
    D2 -->|"APPROVE"| E
    D2 -->|"REJECT"| SKIP["Skip, save failure to memory"]
    E --> MEM["All 3 AIs save lessons to Global Memory"]
    F --> MEM
```

| Role | Model(s) Used | Purpose |
|---|---|---|
| 🔭 **Scanner** | Fireworks AI (Llama 3.3 70B), Gemini 2.5…
