---
repo: "WeftCut/WeftCut"
name: "WeftCut"
description: "Free, open-source AI video editor for macOS, Windows and Linux — drive the whole timeline from any MCP client."
readmeQualityOk: true
url: "https://github.com/WeftCut/WeftCut"
homepage: "https://weftcut.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [79]
topics: ["ai-agent", "ai-video-editor", "claude", "cross-platform", "desktop-app", "electron", "ffmpeg", "llm", "mcp", "mcp-server"]
stars: 294
forks: 46
openIssues: 14
closedIssues: 27
watchers: 8
contributors: 7
recentReleases: 10
createdAt: "2026-05-22T13:57:08Z"
lastCommitAt: "2026-10-31T07:45:57Z"
lastReleaseAt: "2026-09-23T15:31:48Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "funded", "release_machine"]
healthScore: 83
undervaluedScore: 31
maintainers: ["UncleChair", "nattydread69"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1246738326/e0f03072-6a50-4835-823e-7e62baac71c3"
fundingLinks: ["GITHUB:https://github.com/UncleChair"]
discussionCount: 4
---

Point Codex, Claude, or any MCP client at a real desktop NLE — and watch
  every edit land on your timeline while it plays. Code renders as video, so
  your agent can build editable clips.

> [!NOTE]
> WeftCut is still under active development, so some features and UI/UX may change before v1.0.0. Join us to improve the project!

lower third, trimming the B-roll, then undoing both — every edit lands in the UI
in real time, every Agent action is recorded.</em></p>

Most editors bolt AI on as a feature: a button that generates something, a sidebar that suggests a cut. WeftCut exposes the editor *itself* as a tool surface. A localhost MCP server publishes **all editing tools** — place, trim, split, restyle, keyframe, group, caption, mix, checkpoint — and whatever agent you already have open drives them. The intelligence lives outside the app: the installer bundles no model weights, and the local engines for speech and vision are an opt-in download when you want them.

None of that rides on a stripped-down editor. Everything an agent can reach, you can do by hand, in a full NLE: A/B-roll timeline, keyframes with a curve editor, effects, captions, a role-based audio mixer, and…
