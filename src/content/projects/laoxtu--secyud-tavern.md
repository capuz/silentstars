---
repo: "laoxTu/secyud-tavern"
name: "secyud-tavern"
description: "A highly customizable AI role-playing and interactive storytelling platform."
originalDescription: "一个高度可定制化的 AI 角色扮演与互动叙事平台。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/laoxTu/secyud-tavern"
homepage: "https://github.com/laoxTu/secyud-tavern-docs"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["ai", "engine", "tavern", "ts", "chat", "llm", "agent"]
stars: 33
forks: 1
openIssues: 6
closedIssues: 25
watchers: 1
contributors: 1
recentReleases: 8
createdAt: "2026-04-25T03:37:24Z"
lastCommitAt: "2026-10-15T08:31:36Z"
lastReleaseAt: "2026-09-12T00:53:39Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 47
maintainers: ["laoxTu"]
openGraphImageUrl: "https://opengraph.githubassets.com/9d093d19f7ced2472d51525f5513ecf2bf454326bdc1ffb5d538dec0f094d6a1/laoxTu/secyud-tavern"
---

# Secyud Tavern

A highly customizable AI role-playing and interactive storytelling platform.

🔗 [Detailed documentation](https://github.com/laoxTu/secyud-tavern-docs)

---

## Quick Start

```bash
pnpm install          # Install dependencies
pnpm prepare          # Prerequisite script
pnpm build            # Production build
pnpm start -p 12804   # Start → http://localhost:12804
```

## License

This project is open source under the GNU Affero General Public License v3.0.
You may study, distribute, modify, and use it commercially, but please be aware of its restrictions and disclaimers.

## Plugins

> Plugins for this project are compile-time plugins by default. After downloading a plugin, run the start script to restart the project.
> To disable a plugin, set `"disabled": true` in manifest.json, then run the start script again.

- [secyud-tavern-importer](https://github.com/laoxTu/secyud-tavern-importer)
  An importer plugin that can import SillyTavern-format character cards and presets. Currently it can only import text descriptions and similar content; it cannot replicate scripts, which must be adjusted manually.
