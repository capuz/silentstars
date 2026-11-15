---
repo: "Muxee4ka/ucams_home_assistant"
name: "ucams_home_assistant"
description: "Home Assistant integration for Ufanet (Уфанет) — video surveillance, intercom, recording archive, call history. RTSP/WebRTC cameras, automatic snapshots and archive via services."
originalDescription: "Home Assistant integration for Ufanet (Уфанет) — видеонаблюдение, домофон, архив записей, история звонков. RTSP/WebRTC камеры, автоматический снапшот и архив через сервисы."
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/Muxee4ka/ucams_home_assistant"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["cctv", "hacs", "home-assistant", "home-assistant-custom", "intercom", "ufanet", "camera", "domofon", "rtsp", "russia"]
stars: 23
forks: 3
openIssues: 0
closedIssues: 7
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-04-29T13:04:30Z"
lastCommitAt: "2026-11-15T08:26:07Z"
lastReleaseAt: "2026-05-10T11:02:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 56
maintainers: ["Muxee4ka"]
openGraphImageUrl: "https://opengraph.githubassets.com/671b0e66c976a626ff4a93b96fd29af1936104a84ef775d7f780ff9e9492dfc5/Muxee4ka/ucams_home_assistant"
---

# Ucams for Home Assistant

**Unofficial video surveillance and intercom integration for Ufanet (Ufanet) for Home Assistant.**

---

Connects cameras from `dom.ufanet.ru` and `cams.ufanet.ru` to Home Assistant: live RTSP stream, screenshots, recording archive, intercom door opening, call history, and camera geolocation on a map. Authorization uses your contract number and personal account password.

## Features

- **Cameras**: live RTSP stream, WebRTC via Flussonic, snapshots on request.
- **Images**: camera previews with automatic refresh (interval is configurable).
- **Intercoms**: open a door with a single button (momentary switch with auto-off).
- **Barrier gates**: an open button for each barrier gate on the account (momentary switch), as in the "My Smart Home" app.
- **Intercom calls**: a "Call" event and a last-call sensor for each intercom. By default, history is polled every 30 seconds; with push notifications enabled, the event arrives about one second after the call.
- **Recording archive**: buttons for 5 minutes / 1 hour / 5 hours, and the `ucams.get_archive` service with an arbitrary time window.
- **Snapshots**: the `ucams.snapshot` service with a fallback to a…
