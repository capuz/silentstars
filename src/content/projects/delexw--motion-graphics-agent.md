---
repo: "delexw/motion-graphics-agent"
name: "motion-graphics-agent"
description: "Turn ideas into motion graphics and animated videos with Claude or Codex. 用 Claude 或 Codex，将创意变成动态图形和动画视频。"
readmeQualityOk: true
url: "https://github.com/delexw/motion-graphics-agent"
language: "TypeScript"
languages: ["TypeScript", "JavaScript", "HTML"]
languagePcts: [41, 33, 24]
topics: ["ai-agent", "ai-video", "claude", "codex", "creative-coding", "gsap", "hyperframes", "local-first", "motion-graphics", "react"]
stars: 126
forks: 4
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 1
recentReleases: 5
createdAt: "2026-10-15T20:25:36Z"
lastCommitAt: "2026-11-02T17:56:32Z"
lastReleaseAt: "2026-10-29T20:31:45Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 31
maintainers: ["delexw", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/342e03c0b5c2055426111a13886de474a4fcb556cb4d2ea87d0eb3b31edf2709/delexw/motion-graphics-agent"
---

Use Kiteva from external agents through its [MCP server](https://github.com/delexw/motion-graphics-agent/blob/HEAD/docs/agent-mcp.md): search ideas
and Motion Graphics, save an Assistant draft, and explicitly start a build.

  Create with <a href="https://platform.claude.com/docs/en/about-claude/models/overview">Claude Opus 5.5</a> or <a href="https://developers.openai.com/api/docs/models/gpt-6.1-sol">GPT-6.1 Sol</a>.

Switch the interface instantly with **EN / 中文**; see [interface language](https://github.com/delexw/motion-graphics-agent/blob/HEAD/docs/ui-language.md). Video language remains a separate project setting.

## Recent updates

Dates below use New Zealand time.

- **MCP asset imports:** import local files or ComfyUI outputs into a saved draft or project through `import_asset`. Use `manage_idea_assets` to list available assets, attach them to the draft or remove their entries from the material shelf. MCP and the interface share file limits and attachment rules. Imported files are stored in Git-ignored runtime uploads. See [agent MCP](https://github.com/delexw/motion-graphics-agent/blob/HEAD/docs/agent-mcp.md).
- **Linked draft, asset and project IDs:** when `start_idea`…
