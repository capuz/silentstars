---
repo: "stonar96/RayTraceAntiXray"
name: "RayTraceAntiXray"
description: "Paper plugin for server-side async multithreaded ray tracing to hide ores that are exposed to air using Paper Anti-Xray engine-mode 1."
readmeQualityOk: true
url: "https://github.com/stonar96/RayTraceAntiXray"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 225
forks: 87
openIssues: 4
closedIssues: 46
watchers: 5
contributors: 6
recentReleases: 0
createdAt: "2021-03-28T20:03:19Z"
lastCommitAt: "2026-09-20T08:27:02Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 78
undervaluedScore: 25
maintainers: ["stonar96"]
openGraphImageUrl: "https://opengraph.githubassets.com/a061512bb8f0facf45cc68ca9401e94bfdcadeb3cf83e34cddbf39b0dec52895/stonar96/RayTraceAntiXray"
---

# RayTraceAntiXray
Paper plugin for server-side async multithreaded ray tracing to hide ores that are exposed to air using Paper Anti-Xray engine-mode 1.

Paper Anti-Xray can't hide ores that are exposed to air in caves for example (see picture below). This plugin is an add-on for Paper Anti-Xray to hide those ores too, using ray tracing to calculate whether or not those ores are visible to players. This plugin can also fully hide block entities such as chests since Minecraft 1.20.6.

## How to install
* Download and install [Paper](https://papermc.io/downloads/paper) 26.3. Folia is supported since Minecraft 1.20.1.
* Enable [Paper Anti-Xray](https://docs.papermc.io/paper/anti-xray/) using `engine-mode: 1`.
* Download and install [ProtocolLib](https://www.spigotmc.org/resources/protocollib.1997/).
* Download and install [RayTraceAntiXray](https://builtbybit.com/resources/raytraceantixray.24914/). (For older Minecraft versions, browse the update history.)
* Configure RayTraceAntiXray by editing the file plugins/RayTraceAntiXray/[config.yml](https://github.com/stonar96/RayTraceAntiXray/blob/HEAD/RayTraceAntiXray/src/main/resources/config.yml).
* See also: [Recommended…
