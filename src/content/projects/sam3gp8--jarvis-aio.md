---
repo: "sam3gp8/jarvis-aio"
name: "jarvis-aio"
description: "MCU-inspired autonomous AI butler for Home      Assistant — voice, vision, per-person memory, goals, and a full HUD panel."
readmeQualityOk: true
url: "https://github.com/sam3gp8/jarvis-aio"
language: "Python"
languages: ["Python"]
languagePcts: [87]
topics: ["haos", "home-assistant", "jarvis", "sentinel", "voice-assistant", "integration"]
stars: 34
forks: 10
openIssues: 2
closedIssues: 79
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-06-13T22:24:46Z"
lastCommitAt: "2026-11-05T14:05:19Z"
lastReleaseAt: "2026-06-22T02:20:49Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 43
maintainers: ["claude", "sam3gp8", "jimmyeao"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a4e2edfc29113ed5f553caec9c398c71a8fb9c9277a7b06fc2db50d58074427/sam3gp8/jarvis-aio"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/sam3gp8"]
discussionCount: 4
---

# JARVIS AI Assistant

### *Just A Rather Very Intelligent System*

An autonomous AI butler for Home Assistant — voice, vision, and a reasoning core that learns your home and watches over it.

---

It installs as a Home Assistant **custom integration** via HACS and runs entirely inside HA — no separate container, and no cloud account required to start. Its guiding principle is **suggest, don't act**: JARVIS starts conservative, surfaces what it notices, and widens its own autonomy only as you allow.

## Quick start (5 minutes, no cameras required)

JARVIS looks elaborate, but the floor is low — you can be talking to it in five minutes with nothing but Home Assistant and one configured LLM provider. Cameras, voice hardware, and local GPU inference are all **optional** upgrades you add later.

1. **Install via HACS** — search for "JARVIS AI Assistant" in HACS ([or use the badge below](#installation)), install it, restart Home Assistant.
2. **Add the integration** — *Settings → Devices & Services → Add Integration → JARVIS*. Choose one or more providers in the setup menu, enter and validate each provider's key or endpoint, then choose the Main Agent provider and model. You can use…
