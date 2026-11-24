---
repo: "gfhdhytghd/Hypr-Agent-Portal"
name: "Hypr-Agent-Portal"
description: "Computer Use MCP for Hyprland"
readmeQualityOk: true
url: "https://github.com/gfhdhytghd/Hypr-Agent-Portal"
language: "Python"
languages: ["Python"]
languagePcts: [83]
stars: 7
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-05-06T08:57:28Z"
lastCommitAt: "2026-11-24T14:05:07Z"
lastReleaseAt: "2026-08-31T05:21:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 35
maintainers: ["gfhdhytghd"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c79166fc09a97fe5e69879036e22d1ebebb08a5d310682add510cb855b66bc6/gfhdhytghd/Hypr-Agent-Portal"
---

# hypr-agent-portal

hypr-agent-portal is an experimental Hyprland plugin plus MCP bridge for background agent control.

It exposes compositor dispatchers. Current supported Hyprland builds use the Lua
config provider. The legacy examples below require an older build that still
supports plugin dispatchers through the hyprlang config provider:

```ini
hyprctl dispatch hypr-agent-portal:screenshot /tmp/hypr-agent-portal-session.json
hyprctl dispatch hypr-agent-portal:screenshot '/tmp/hypr-agent-portal-session.json,address:0x1234'
hyprctl dispatch hypr-agent-portal:pointer 'address:0x1234,930,520,click,left'
hyprctl dispatch hypr-agent-portal:pointer 'address:0x1234,930,520,drag,left,1180,760,0.2'
hyprctl dispatch hypr-agent-portal:indicator 'address:0x1234,930,520,type'
hyprctl dispatch hypr-agent-portal:keyboard 'address:0x1234,tap,v,ctrl'
hyprctl dispatch hypr-agent-portal:session 'begin,address:0x1234'
hyprctl dispatch hypr-agent-portal:panic status
```

With the Lua config provider, `hyprctl dispatch` evaluates its argument as a Lua
dispatcher expression. Use the Lua plugin functions instead:
