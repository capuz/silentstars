---
repo: "danjdewhurst/story-skills"
name: "story-skills"
description: "Agent Skills for end-to-end story writing in markdown, packaged as Codex and Claude Code plugins."
readmeQualityOk: true
url: "https://github.com/danjdewhurst/story-skills"
homepage: "https://www.npmjs.com/package/story-skills"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["claude-code-plugin", "creative-writing", "markdown", "storytelling", "worldbuilding", "agent-skills", "codex", "skill-md", "ai-agents", "codex-plugin"]
stars: 243
forks: 36
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-02-12T21:30:02Z"
lastCommitAt: "2026-09-25T09:01:34Z"
lastReleaseAt: "2026-09-25T08:48:59Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 80
undervaluedScore: 29
maintainers: ["danjdewhurst"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1156623863/714c5c2e-32d0-485b-81ee-ad7105d9fb40"
discussionCount: 1
---

# Story Skills

**Agent Skills for planning, tracking, and drafting fiction in markdown.**

Story Skills gives agents a shared project format for fiction: a story bible, characters, worldbuilding, factions, artifacts, plot arcs, scenes, continuity state, promises and payoffs, timelines, and chapter drafts. Everything is plain markdown with YAML frontmatter, packaged as standard Agent Skills with Codex and Claude Code plugins.

The companion `story` CLI treats the story bible as a checkable contract. Its **continuity engine** catches dead characters walking, payoffs that land before their setup, unfired Chekhov guns, and stale story state, deterministically, before a reader finds them.

Why it works this way: [*Story Skills: a continuity compiler for AI-written fiction*](https://ddewhurst.com/blog/story-skills-continuity-compiler-for-ai-fiction/)

</div>

---

## Quick start

Install the plugin in **Codex** or **Claude Code**:

```shell
# Codex
codex plugin marketplace add danjdewhurst/story-skills
codex plugin add story-skills@story-skills

# Claude Code (type these inside a Claude Code session, not a shell)
/plugin marketplace add danjdewhurst/story-skills
/plugin install…
