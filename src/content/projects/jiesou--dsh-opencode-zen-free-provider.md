---
repo: "jiesou/dsh-opencode-zen-free-provider"
name: "dsh-opencode-zen-free-provider"
description: "Connects OpenCode Zen free models to DeepSeek Harness. 1M context, with all metadata synced."
originalDescription: "OpenCode Zen 免费模型接入 DeepSeek Harness。1M 上下文，同步全部元数据"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/jiesou/dsh-opencode-zen-free-provider"
homepage: "https://www.npmjs.com/package/@jiesou/dsh-opencode-zen-free-provider"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [50, 49]
topics: ["deepseek-harness", "dsh", "dsh-bundle", "dsh-plugin", "llm-provider", "opencode"]
stars: 30
forks: 4
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-08-17T06:45:04Z"
lastCommitAt: "2026-10-21T17:31:08Z"
lastReleaseAt: "2026-10-15T17:06:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 42
maintainers: ["jiesou"]
openGraphImageUrl: "https://opengraph.githubassets.com/96477dfb121ba372a211d0fe40b6219589053e7fd7a20ccf187a585eb579f4f3/jiesou/dsh-opencode-zen-free-provider"
---

# dsh-opencode-zen-free-provider

OpenCode Zen Free provider for dsh.

[English](https://github.com/jiesou/dsh-opencode-zen-free-provider/blob/HEAD/README.en.md)

This plugin lets you use OpenCode Zen's free models with dsh. When the plugin starts, it syncs the model catalog and all metadata from OpenCode Zen and models.dev, **fetching only once**, with no polling. Even if the fetch fails at startup, the plugin still mounts normally, and routing serves from an empty catalog.

The context window follows the models.dev metadata by default. **Exceptions: MiMo V2.6 Flash, DeepSeek V4.1 Flash, and GLM 5.3 Flash**: their backend services actually support more than the 200K listed for the free tier, so this plugin declares measured values (1M for the first two, 600K for GLM 5.3 Flash). Testing showed `deepseek-v4.1-flash-free` still returns 200 at 1.04 million prompt tokens, and it accurately retrieves a needle buried 93% deep in a 3MB document. The real ceiling is request body size (about 3.9MB of characters), not the context window. `glm-5.3-flash-free` (upstream routes to `perplexity/glm-5.3-flash`) likewise retrieves a marker buried 93% deep at 264K prompt tokens, still returns 200…
