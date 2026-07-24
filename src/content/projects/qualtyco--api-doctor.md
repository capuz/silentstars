---
repo: "qualtyco/api-doctor"
name: "api-doctor"
description: "AI compiles hallucinated code that pass. This fixes it before accepting it. 100% Deterministic"
readmeQualityOk: true
url: "https://github.com/qualtyco/api-doctor"
homepage: "https://www.apidoctor.co"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["agents", "ai-tools", "api", "code-review", "doctor", "skills", "abstract-syntax-tree", "linter"]
stars: 65
forks: 6
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-06-06T05:50:40Z"
lastCommitAt: "2026-07-24T06:09:57Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 38
maintainers: ["ReubenSantoso", "arnaugomez"]
openGraphImageUrl: "https://opengraph.githubassets.com/049d2c8af002752241abd969e29e679f5c1b463b0e7d86741de56916b25eb918/qualtyco/api-doctor"
discussionCount: 1
---

# api-doctor

api-doctor scans AI-generated code for bad API integrations.

Deterministic AST rules. Not a prompt. Same input, same output, every time.

→ **[Full story and examples at apidoctor.co](https://apidoctor.co)**

[https://github.com/user-attachments/assets/53dab24f-528b-4f1b-87a9-8870002053d8](https://github.com/user-attachments/assets/53dab24f-528b-4f1b-87a9-8870002053d8)

## Quick Start

```bash
# Scan your project
npx @api-doctor/cli .

# Or install as an agent skill (Claude Code, Cursor, Windsurf)
npx @api-doctor/cli install
```

## 📦 Supported Providers

| Provider                                                                                | Rules                                                                                            |
| --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| [Resend](https://resend.com/docs)                                                       | [13 rules](https://github.com/qualtyco/api-doctor/blob/main/src/providers/resend/README.md)      |
| [Supabase](https://supabase.com/docs)…
