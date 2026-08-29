---
repo: "Digital-Process-Tools/claude-remember"
name: "claude-remember"
description: "Persistent memory for Claude Code — identity, context, and continuity across sessions"
readmeQualityOk: true
url: "https://github.com/Digital-Process-Tools/claude-remember"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [80, 20]
topics: ["ai", "anthropic", "claude", "claude-code", "developer-tools", "memory", "persistent-memory", "ai-agent", "cli-plugin"]
stars: 163
forks: 51
openIssues: 6
closedIssues: 223
watchers: 3
contributors: 25
recentReleases: 9
createdAt: "2026-03-15T16:47:29Z"
lastCommitAt: "2026-08-29T10:21:01Z"
lastReleaseAt: "2026-07-27T05:32:31Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 98
undervaluedScore: 36
maintainers: ["fdaviddpt", "turbomotioncat", "jmossie82"]
openGraphImageUrl: "https://opengraph.githubassets.com/56c0f62543ad9c52beab96ddc0fed63fb0baf1c47b842635107812615f370afd/Digital-Process-Tools/claude-remember"
discussionCount: 1
---

# Continuous Memory for Claude Code

Claude Code starts every session blank. It doesn't know what you worked on yesterday, what conventions your team follows, or what mistakes it already made. You re-explain everything, every time.

Claude Remember fixes that. It hooks into Claude Code's lifecycle — saving sessions automatically, compressing them through Haiku into layered daily summaries, and loading them back into context on the next session start. No manual prompting, no copy-pasting notes. The agent starts every session with its history already present.

The result: your Claude Code instance develops continuity. It remembers what it learned, what broke, what worked. Not perfect recall — compressed, practical memory that fits in minimal tokens.

## Install

### From our marketplace (recommended)

We maintain our own [plugin marketplace](https://github.com/Digital-Process-Tools/claude-marketplace) so updates actually work. Add it once, then install:

```
/plugin marketplace add Digital-Process-Tools/claude-marketplace
/plugin install remember@dpt-plugins
```

To update later:

```
/plugin marketplace update
```

**Restart Claude Code after installing or enabling.** Claude Code…
