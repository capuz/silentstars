---
repo: "2233admin/design-pipeline"
name: "design-pipeline"
description: "A frontend design pipeline for AI agents: write DESIGN.md and MOTION.md first, then dispatch through jobs, OpenSpec, and evidence gates before writing code."
originalDescription: "给 AI Agent 的前端设计管线：先写 DESIGN.md 与 MOTION.md，经 job 分发、OpenSpec 与证据门禁再写代码。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/2233admin/design-pipeline"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [80]
topics: ["ai-agents", "claude-code", "codex-cli", "design-system", "design-tokens", "frontend-development", "motion-design", "openspec", "ui-ux", "web-design"]
stars: 12
forks: 4
openIssues: 35
closedIssues: 25
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-07-04T08:51:30Z"
lastCommitAt: "2026-10-29T21:24:10Z"
lastReleaseAt: "2026-07-28T02:36:13Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 45
maintainers: ["2233admin", "claude", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba4f107276fafb5a32a43e87a8ea3e4f234cded8646854b9a85acd448eee7a34/2233admin/design-pipeline"
---

# design-pipeline

> Say what you want built inside your agent, and get back work that has design rationale, has been checked in practice, and has your final approval.

Claude Code:

```text
/plugin marketplace add 2233admin/design-pipeline
/plugin install design-pipeline@design-pipeline
```

Codex and other agents:

```bash
SKILLS_DOWNLOAD_MAX_BYTES=104857600 SKILLS_EXTRACT_MAX_BYTES=268435456 SKILLS_EXTRACT_MAX_FILES=5000 \
  npx skills add https://github.com/2233admin/design-pipeline/releases/latest/download/design-pipeline-skill.zip \
  --skill design-pipeline -a codex -g
```

Then ask your agent to run `designer-pipeline doctor`. It lists what is missing and gives one copyable command for each item. It does not install anything for you. Once installed, just state what you need, for example "use design-pipeline to make a settings page for this project". For Windows, the offline Release package, and upgrade steps, see [Install and first run](https://github.com/2233admin/design-pipeline/blob/HEAD/docs/install.md). Requires Node.js 22.12 or newer.

[What it does](#能做什么) · [How it works](#怎么工作) · [Showcase: enamel badge](#作品案例珐琅徽章) · [Principles](#几条原则) · [Docs](#继续阅读)

---

##…
