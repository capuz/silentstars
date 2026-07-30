---
repo: "smith-horn/skillsmith"
name: "skillsmith"
description: "Lifecycle Management for Agent Skills"
readmeQualityOk: true
url: "https://github.com/smith-horn/skillsmith"
homepage: "https://skillsmith.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
topics: ["agent-skills", "agentic-ai", "agentic-systems", "agentic-workflow", "skills"]
stars: 74
forks: 18
openIssues: 21
closedIssues: 166
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-01-11T19:40:21Z"
lastCommitAt: "2026-07-30T06:08:28Z"
lastReleaseAt: "2026-04-16T20:07:43Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 97
undervaluedScore: 39
maintainers: ["wrsmith108"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1132346844/1831d39e-c334-42af-987b-ae38e68fb9bf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260730%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260730T060957Z&X-Amz-Expires=300&X-Amz-Signature=2b9453e7dc37db16d553d56cd31ac3e60a69edf6320cd0231027e76190e733f1&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTM5MjA5NywibmJmIjoxNzg1MzkxNzk3LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.lokqcQD4bie_uaREsrSx6_RkWLugye7fxdd9cdiU9TI"
discussionCount: 1
---

# Skillsmith

**Craft your agent skill workflow.**

Skillsmith is a lifecycle manager for agent skills, handling discovery, recommendation, installation, and updates for MCP-compatible AI tools. Find the right skills for your projects, install them safely, and learn to use them effectively.

## Features

- **Discover** - Search skills from GitHub with semantic search
- **Recommend** - Get personalized skill suggestions based on context
- **Install** - One-command installation to `~/.claude/skills/`
- **Validate** - Quality scores and structure validation
- **Trust** - Four trust tiers from Official to Community ([Security Guide](https://github.com/smith-horn/skillsmith/blob/HEAD/docs/internal/security/skill-security-guide.md))
- **Compare** - Side-by-side skill comparison

### MCP Tools

| Tool | Description |
|------|-------------|
| `search` | Search skills with filters (query, category, trust tier, min score) |
| `get_skill` | Get detailed skill information including install command |
| `install_skill` | Install a skill to your local environment |
| `uninstall_skill` | Remove an installed skill |
| `recommend` | Get contextual skill recommendations |
| `validate` | Validate a…
