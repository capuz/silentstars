---
repo: "jiangxingfan1-coder/Open-Agent-API"
name: "Open-Agent-API"
description: "Turn agents into an API. Call an agent, not a model, with the official OpenAI, Claude or Gemini SDK. 把智能体变成 API。"
readmeQualityOk: true
url: "https://github.com/jiangxingfan1-coder/Open-Agent-API"
homepage: "https://openagentapi.pages.dev/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [69, 20]
topics: ["agent-client-protocol", "agent-gateway", "ai-agents", "mcp", "openai-compatible", "self-hosted", "coding-agents", "human-in-the-loop", "dsh-plugin", "mcp-server"]
stars: 2
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-11-13T23:45:35Z"
lastCommitAt: "2026-11-21T22:25:33Z"
lastReleaseAt: "2026-11-21T09:34:10Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 69
undervaluedScore: 56
maintainers: ["jiangxingfan1-coder"]
openGraphImageUrl: "https://opengraph.githubassets.com/46fe1a0cfbcb1710d30c0e0c7d93d6bea46d988c7c3d70382547ec0d1c6e0218/jiangxingfan1-coder/Open-Agent-API"
promoted: true
postedAt: "2026-11-20T12:33:44.346Z"
---

You call an agent, not a model: one with its own tools, skills, and permissions. One call is one task.

  English · <a href="README.zh-CN.md">简体中文</a>

## Live Walkthrough: Publish → Key → SDK Call

## Thirty seconds

Skip the rewrite. Swap two lines in your existing OpenAI, Anthropic, or Gemini SDK client—point `base_url` at the gateway and put an agent ID in `model`—and your app calls a full agent that uses its own tools, remembers across turns, and stops when a sensitive action needs your sign-off.

```diff
 from openai import OpenAI

 client = OpenAI(
-    base_url="https://api.openai.com/v1",
-    api_key=OPENAI_API_KEY,
+    base_url="http://127.0.0.1:8787/v1",  # your Open Agent API
+    api_key="sk-oaa-…",                   # an API key created in the console
 )

 resp = client.chat.completions.create(
-    model="<some-model>",
+    model="agent/research",               # the agent's call name
     messages=[{"role": "user", "content": "Compare these three quotes on lead time and total price"}],
 )
 print(resp.choices[0].message.content)
```

The same in Node.js:
