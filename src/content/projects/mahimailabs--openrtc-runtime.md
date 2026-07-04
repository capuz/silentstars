---
repo: "mahimailabs/openrtc-runtime"
name: "openrtc-runtime"
description: "OpenRTC lets developers run multiple LiveKit voice agents in one Python worker, sharing heavy models instead of duplicating them per process."
readmeQualityOk: true
url: "https://github.com/mahimailabs/openrtc-runtime"
homepage: "https://docs.openrtc.tech/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["livekit", "livekit-agents", "voice-agent", "voice-ai", "agent-deployments", "openrtc"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-19T13:44:11Z"
lastCommitAt: "2026-07-04T22:51:52Z"
lastReleaseAt: "2026-03-21T23:46:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 58
maintainers: ["mahimairaja", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e2112f8440a1b04b67efbac32b99d8d3f17f0d1640e6dfa708ed2d964d9c904/mahimailabs/openrtc-runtime"
fundingLinks: ["GITHUB:https://github.com/mahimairaja"]
discussionCount: 1
---

</a>

<p>
</p>

[**Docs**](https://openrtc.mintlify.app) · [**Quick start**](#quick-start) · [**Isolation**](#isolation-modes) · [**Routing**](#routing) · [**Introspection**](#session-introspection) · [**API**](#public-api-at-a-glance)

</div>

```python
from openrtc import AgentPool
from my_agents import RestaurantAgent, DentalAgent, SupportAgent

pool = AgentPool()                       # one worker, prewarm once
pool.add("restaurant", RestaurantAgent)  # standard livekit.agents.Agent subclasses
pool.add("dental", DentalAgent)
pool.add("support", SupportAgent)
pool.run()                               # N agents share one Silero VAD + turn detector
```

A thin multi-agent layer for [LiveKit Agents](https://docs.livekit.io/agents). Register many standard `livekit.agents.Agent` subclasses on one `AgentPool` and host them in a single worker: shared prewarm (Silero VAD, turn detector) loads once instead of once per worker, and every incoming call still gets its own `AgentSession`. OpenRTC never introduces a base class and never sits between you and `@function_tool`, `RunContext`, `on_enter`, `on_exit`, or the `*_node` hooks. You change how many workers you run, not how you write an…
