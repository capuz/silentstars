---
repo: "ostrya/PresencePublisher"
name: "PresencePublisher"
description: "An Android MQTT client that regularly publishes messages to notify about the device's presence"
readmeQualityOk: true
url: "https://github.com/ostrya/PresencePublisher"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["android", "mqtt-client", "presence"]
stars: 106
forks: 16
openIssues: 7
closedIssues: 43
watchers: 5
contributors: 3
recentReleases: 0
createdAt: "2019-01-05T20:07:28Z"
lastCommitAt: "2026-10-31T15:58:31Z"
lastReleaseAt: "2019-05-01T20:05:12Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 72
undervaluedScore: 31
maintainers: ["ostrya"]
openGraphImageUrl: "https://opengraph.githubassets.com/1781990c2003ec548ca32b4919b4f85eb89463d22e57747735d5033f56af25e8/ostrya/PresencePublisher"
---

# Presence Publisher

[<img src="https://f-droid.org/badge/get-it-on.png" alt="Get it on F-Droid" height="75">](https://f-droid.org/packages/org.ostrya.presencepublisher)
[<img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" height="75" alt="Get it on Google Play">](https://play.google.com/store/apps/details?id=org.ostrya.presencepublisher&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1)

Presence Publisher is a simple app that regularly publishes to a configurable MQTT topic whenever connected to a
given Wi-Fi network or in proximity to a Bluetooth beacon. This can be used to integrate the presence of your phone
in home automation.

Several networks and beacons can be configured at once, and the message to be sent can be configured
for each of them.

If your MQTT server is available on the internet, you can also choose to send an 'offline' message
whenever you are not connected to any of the configured Wi-Fi networks and not in range of any
configured beacon.

As an additional feature, you can send the battery level of your device whenever a condition is met,
so that you can recharge it before it turns off.…
