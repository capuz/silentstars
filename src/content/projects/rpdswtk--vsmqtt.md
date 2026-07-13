---
repo: "rpdswtk/vsmqtt"
name: "vsmqtt"
description: "VSMqtt is a simple MQTT client integrated in vscode."
readmeQualityOk: true
url: "https://github.com/rpdswtk/vsmqtt"
homepage: "https://marketplace.visualstudio.com/items?itemName=rpdswtk.vsmqtt"
language: "TypeScript"
languages: ["TypeScript", "Svelte"]
languagePcts: [63, 25]
topics: ["mqtt", "client", "mqtt-client", "vscode-extension", "vscode"]
stars: 17
forks: 1
openIssues: 2
closedIssues: 20
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2021-01-16T19:06:14Z"
lastCommitAt: "2026-07-13T06:37:38Z"
lastReleaseAt: "2026-07-12T18:28:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 92
undervaluedScore: 69
maintainers: ["dependabot[bot]", "rpdswtk"]
openGraphImageUrl: "https://opengraph.githubassets.com/3fdacb3cf8edada4367418430e8ad1cae1f74fa6eeb0c17787a1442d17ca0ce2/rpdswtk/vsmqtt"
---

# VSMQTT

Vsmqtt is a simple MQTT client integrated in vscode.

## Features

* Create and use multiple mqtt profiles
* Connect to broker
* Support for secure connection
* Publish messages to mqtt brokers
* Subscribe to topics
* Browse details of received messages
* Connect to multiple brokers simultaneously
* Colors to differentiate messages by topics
* Pin topics (pinned topics are saved to settings and are used to subscribe to automatically upon connection)
* Export to csv
* Support for websocket connection
* Clear retained messages
* Right click on message to open in text edior
* Save/load default topic, payload, qos and retain values for publish section on UI

## Extension Settings

By default, this extension stores MQTT broker profiles in workspace `settings.json` under: `"vsmqtt.brokerProfiles"`.

You can configure where profiles are saved using the `"vsmqtt.profileStorageTarget"` setting. Note that this setting has a **machine scope** (it cannot be overridden at the workspace level, preventing a workspace configuration from shadowing your preferred global target).

### Storage Target Settings:

* **`vsmqtt.profileStorageTarget`**:
  * `"workspace"` (default): Stores broker…
