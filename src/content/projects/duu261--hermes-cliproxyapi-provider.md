---
repo: "duu261/hermes-cliproxyapi-provider"
name: "hermes-cliproxyapi-provider"
description: "Hermes Agent plugins for CLIProxyAPI (CPA): mirror CPA provider groups as native-wire Hermes providers with model capabilities from CPA, plus /cpa in chat for pool and account health and live quota (Claude, Codex, xAI, Antigravity, Devin, Kimi, Kiro). Read-only, lockout-safe. Optional billing route."
readmeQualityOk: true
url: "https://github.com/duu261/hermes-cliproxyapi-provider"
homepage: "https://hermes-agent.nousresearch.com/docs/plugins/cliproxyapi-provider"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["claude", "cliproxyapi", "codex", "cpa", "gemini", "grok", "hermes-agent", "hermes-plugin", "llm-gateway", "model-provider"]
stars: 6
forks: 3
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-13T15:35:43Z"
lastCommitAt: "2026-11-15T11:22:40Z"
lastReleaseAt: "2026-11-03T12:34:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 58
maintainers: ["duu261", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1417365905/47737dc7-b1c2-4de7-9172-6f347232faec"
discussionCount: 0
---

# hermes-cliproxyapi-provider

English | [Tiếng Việt](https://github.com/duu261/hermes-cliproxyapi-provider/blob/HEAD/README.vi.md) | [简体中文](https://github.com/duu261/hermes-cliproxyapi-provider/blob/HEAD/README.zh-CN.md)

[Hermes Agent](https://github.com/NousResearch/hermes-agent) plugins for
[CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) (CPA): a
model-provider, and a companion [`/cpa`](#cpa-pool-status-companion-plugin)
chat command for pool health and live quota.

CPA is a gateway: one instance fronts many providers (Claude, Codex, Gemini,
xAI, Kimi, Devin, OpenAI-compatible upstreams, plugin providers such as Kiro)
and owns their accounts, OAuth, rotation and translation. Hermes alone sees
such a gateway as one custom endpoint on one wire with hand-pinned metadata.

This plugin mirrors CPA into Hermes instead. Point it at a CPA instance and it
registers one Hermes provider per CPA provider, each on the wire that CPA's
executor for that provider accepts with the least translation, with the model
list and the model capabilities CPA publishes (context window, max output,
image input, reasoning levels). It adds nothing CPA does not serve.

The companion `/cpa` shows…
