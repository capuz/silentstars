---
repo: "yurika0211/lucky-agent"
name: "lucky-agent"
description: "LuckyAgent — an Agent framework focused on long-task planning and system memory"
originalDescription: "LuckyAgent — 注重长任务规划和系统记忆性的Agent框架"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/yurika0211/lucky-agent"
homepage: "https://yurika0211.github.io/lucky-agent/"
language: "Go"
languages: ["Go"]
languagePcts: [85]
topics: ["agent-framework", "agent-memory", "ai-agents", "golang", "llm-agent", "long-horizon-planning"]
stars: 17
forks: 3
openIssues: 2
closedIssues: 247
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-04-19T19:58:48Z"
lastCommitAt: "2026-11-07T10:36:35Z"
lastReleaseAt: "2026-07-02T18:30:58Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 53
maintainers: ["yurika0211", "mikemikimike"]
openGraphImageUrl: "https://opengraph.githubassets.com/19f1df3e4d5638437cc48bfc1b63dfedb287876394741461a713dcacbc9ed72d/yurika0211/lucky-agent"
---

# LuckyAgent

The LuckyAgent main repository maintains the public Agent core library and keeps a thin entry point for building the complete `lh` program. Models, sessions, memory, RAG, and application entry points come from independent Go modules and are assembled to run within the same process.

It is not just a single chat window; it provides an Agent infrastructure that can be observed, configured, and run continuously.

## Interface Preview

## Embed SDK (In-Process)

Embed LuckyAgent as a Go library in a host process without first starting `lh serve`. The SDK lives in `luckyagent-app`, imported as `github.com/yurika0211/luckyagent-app/sdk`.

```go
agent, err := sdk.New(sdk.Config{
    HomeDir:  "/var/lib/myapp/luckyagent",
    Provider: "openai",
    Model:    "gpt-5.4-mini",
    APIKey:   os.Getenv("OPENAI_API_KEY"),
})
```

For details, see [luckyagent-app/sdk/README.md](https://github.com/yurika0211/luckyagent-app/blob/main/sdk/README.md). Stable surface (v0): `New` / `Chat*` (including multimodal Input) / Sessions (including Compact) / Memory / RAG / Tools / Models / Skills. The Agent loop itself is `github.com/yurika0211/lucky-agent/agent`; full application assembly goes…
