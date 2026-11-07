---
repo: "hzFishy/FishyUtils"
name: "FishyUtils"
description: "My utils for Unreal Engine projects"
readmeQualityOk: true
url: "https://github.com/hzFishy/FishyUtils"
language: "C++"
languages: ["C++"]
languagePcts: [98]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-03-31T22:34:28Z"
lastCommitAt: "2026-11-07T13:54:08Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 76
undervaluedScore: 61
maintainers: ["hzFishy"]
openGraphImageUrl: "https://opengraph.githubassets.com/ea312980baa9c911dcbff32bd830c9741aa20f189f164e95d9f93e0d7a7d17e1/hzFishy/FishyUtils"
---

# About
Here is a list of some of the features of this plugin:
- Console commands helpers to easily make console vars, commands, ... (See `FUConsole.h`) such as:
   - `FU_CMD_AUTOVAR`, `FU_CMD_AUTOVAR_EXTERN`, `FU_CMD_RUNFUNC_ACTOR_SINGLE`, `FU_CMD_RUNFUNC_OBJECT_SINGLE`, `FU_CMD_RUNLAMBDA`
- Logging helpers (See `FULogging.h`)
   - `_FU_LOG_OBJECT` (`_FU_LOG_OBJECT_D`, `_FU_LOG_OBJECT_W`, `_FU_LOG_OBJECT_E`, `_FU_LOG_OBJECT_S`), `_FU_LOG_STATIC` (`_FU_LOG_STATIC_D`, `_FU_LOG_STATIC_W`, `_FU_LOG_STATIC_E`, `_FU_LOG_STATIC_S`)
- Debug draw helpers (See `FUDraw.h`) and Visual Loger helpers (See `FUVisualLoggerMacros.h`)
   - Sphere, Circle, Box, Capsule, Line, Point, Plane, String/Text, DirectionalArrow, LineWithMiddleText, DirectionalArrowWithMiddleText, ActorBounds, BodyInstance, PrimitiveComponent, Rectangle, Polygon.
   - Note: For `FFUOrientedBox` the draw functions are on the type itself
- Assert helpers (See `FUAsserts.h`) such as:
   - `FU_ENSURE`, `FU_ENSURE_MSG`, `FU_ENSURE_VALID`, `FU_ENSURE_WEAKVALID`, `FU_ENSURE_WEAKNOTNULL`
- Tick World Subsystem to register custom callbacks to various tick phases (See `UFUExtraTickWorldSubsystem`)
- In editor additions:
   - Select…
