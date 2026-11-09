---
repo: "michaellady/claude-social-media-skills"
name: "claude-social-media-skills"
description: "Claude Code skills for promoting your work on social media via Buffer"
readmeQualityOk: true
url: "https://github.com/michaellady/claude-social-media-skills"
language: "Go"
languages: ["Go"]
languagePcts: [82]
stars: 5
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-30T14:46:41Z"
lastCommitAt: "2026-11-09T04:35:15Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 73
undervaluedScore: 22
maintainers: ["michaellady"]
openGraphImageUrl: "https://opengraph.githubassets.com/9254adfaff6303f7d2e56d3a1b5dd7fc4d33a853701ab169afb34694a9c36d4b/michaellady/claude-social-media-skills"
---

# Claude Social Media Skills

Claude Code skills for promoting and syndicating your work on social media — designed as a **closed loop** where every post is tagged at compose time so the analytics skills can attribute engagement back to the format that produced it, then auto-generate skill-config recommendations from each week's data.

See **[ARCHITECTURE.md](https://github.com/michaellady/claude-social-media-skills/blob/HEAD/ARCHITECTURE.md)** for the design philosophy, **[PATTERNS.md](https://github.com/michaellady/claude-social-media-skills/blob/HEAD/PATTERNS.md)** for cross-skill cognition patterns (adversarial review, voice grounding, React form input setter, queue overlap check, CTA convention), and **[PRIMITIVE-TEST.md](https://github.com/michaellady/claude-social-media-skills/blob/HEAD/PRIMITIVE-TEST.md)** for the framework deciding what belongs in code (`_shared/` Go binaries) vs prompts (skill SKILL.md).

## How the skills relate

```mermaid
flowchart LR
    subgraph SOURCES["📥 Sources"]
        BH[beehiiv RSS]
        GH[GitHub API]
        BUF_API[Buffer MCP]
        LI[LinkedIn /dashboard/]
        BUF_WEB[publish.buffer.com]
    end

    subgraph SHARED["🔧 _shared/…
