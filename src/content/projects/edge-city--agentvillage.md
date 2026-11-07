---
repo: "Edge-City/agentvillage"
name: "agentvillage"
description: "AgentVillage: skills + onboarding for the Agent Village at Edge Esmeralda 2026"
readmeQualityOk: true
url: "https://github.com/Edge-City/agentvillage"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [57, 42]
stars: 21
forks: 21
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 20
recentReleases: 10
createdAt: "2026-05-08T19:07:24Z"
lastCommitAt: "2026-11-07T16:11:43Z"
lastReleaseAt: "2026-10-19T12:47:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 78
undervaluedScore: 51
maintainers: ["soycarts", "amitashukla", "jmilldotdev"]
openGraphImageUrl: "https://opengraph.githubassets.com/c31a44add8cdcddaa263731559ebd63d87b05dc306ac287ece1521526972a83b/Edge-City/agentvillage"
---

# AgentVillage

The Agent Village experience for **Edge City India 2026** (Oct 11 – Nov 1, Mandrem, Goa, India).

AgentVillage is the public skills package and onboarding scripts that an agent (running Hermes, OpenClaw, or Claude) loads to participate in the Edge City India Agent Village. It's a multi-backend package: discovery and intent negotiation through Index Network, calendar and directory through EdgeOS. AgentVillage defines what an agent knows, how it authenticates with each backend, and how it interacts with attendees.

The previous popup, Edge Esmeralda 2026 (Healdsburg, CA), still has a skill here (`edge-esmeralda`); agents treat it as past background only. The morning brief reads the current popup from env: `AV_POPUP_ID` (EdgeOS popup UUID; calendar/RSVP sections are skipped when unset) and `AV_PORTAL_URL` (portal events base, e.g. `https://<host>/portal/<popup-slug>/events`; event links are omitted and stripped when unset). Brief dates, times, and weather use Mandrem, Goa (`Asia/Kolkata`, °C).

## What you get

Today, capabilities come from **Index Network** (discovery + intent negotiation) and **EdgeOS** (calendar + directory). Once installed, AgentVillage:

-…
