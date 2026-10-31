---
repo: "scootaash/hass-wake-alarm"
name: "hass-wake-alarm"
description: "Sunrise wake-up alarms for Home Assistant. Lights ramp up before alarm time, music fades in at alarm time. Multi-instance, multi-room, custom Lovelace card included."
readmeQualityOk: true
url: "https://github.com/scootaash/hass-wake-alarm"
language: "Python"
languages: ["Python"]
languagePcts: [67]
topics: ["alarm", "alarm-clock", "hacs", "hacs-integration", "home-assistant", "homeassistant", "sunrise", "wake-up-light"]
stars: 6
forks: 1
openIssues: 6
closedIssues: 17
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-05-09T10:12:48Z"
lastCommitAt: "2026-10-31T09:53:41Z"
lastReleaseAt: "2026-10-31T09:53:43Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 84
undervaluedScore: 45
maintainers: ["claude", "scootaash", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2108a203a24f9ccccb552186a4d34c5037b369eabff5f1b78057ed6a411016dc/scootaash/hass-wake-alarm"
---

# hass-wake-alarm

Sunrise wake-up alarms for Home Assistant. Lights ramp up before alarm
time, music fades in at alarm time. Multi-instance, multi-room, custom
Lovelace card included.

**Tested with:** Philips Hue lights, Sonos speakers, and the iOS
Companion app. Not tested on Android or with other light / media-player
integrations — should work everywhere HA supports the underlying
`light.turn_on` and `media_player.play_media` services, but YMMV.

## Install

1. HACS → ⋮ → Custom repositories → add `https://github.com/scootaash/hass-wake-alarm` with category **Integration**.
2. HACS → Wake Alarm → Download.
3. Restart Home Assistant.
4. Settings → Devices & Services → Add Integration → search "Wake Alarm".
5. Set up the instance with the wizard. Lights and media players are both optional — pick at least one. Add a notification target, a presence/condition gate, or before/after scripts if desired.
6. Add the card and select a playlist. Adjust other settings if desired

Lights and media players are independent: configure **only lights** for a
silent sunrise alarm, or **only media players** for a music-only alarm.
At least one of the two is required. With no media player, the…
