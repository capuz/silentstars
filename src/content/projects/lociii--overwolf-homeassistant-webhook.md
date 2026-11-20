---
repo: "lociii/overwolf-homeassistant-webhook"
name: "overwolf-homeassistant-webhook"
description: "Overwolf App that forwards game events to HomeAssistant"
readmeQualityOk: true
url: "https://github.com/lociii/overwolf-homeassistant-webhook"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [78]
topics: ["game-state-integration", "gaming", "homeassistant", "overwolf"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 14
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2022-10-23T18:20:32Z"
lastCommitAt: "2026-11-20T11:57:18Z"
lastReleaseAt: "2025-11-27T20:59:18Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 75
undervaluedScore: 57
maintainers: ["lociii"]
openGraphImageUrl: "https://opengraph.githubassets.com/255704107d5b587676e26a8931f5eac1c2103bdb2433845de2e893e710f5b9fe/lociii/overwolf-homeassistant-webhook"
---

# overwolf-homeassistant-webhook

Send game events from overwolf to Home Assistant.

Events are sent fire and forget. There will be no validation that they were actually received and processed.
This delivery behavior is intentional: batches are discarded from the local queue when sent, HTTP response statuses are not checked, and failed requests are not retried. Network failures are logged, but the app does not track delivery or processing status.

The throttle controls the interval between batch sends, not the number of concurrent requests. Each interval sends at most 100 events. The queue holds at most 1,000 events; when full, the oldest event is discarded to retain recent state. These limits count events, not payload bytes.

Requests are aborted after 10 seconds. Sends do not wait for previous requests to finish, so slow endpoints can leave multiple requests in flight and batches may arrive out of order. There is no explicit concurrency limit. When game listening stops, all queued events are sent immediately in batches of at most 100, without waiting for responses. Failed or timed-out batches are not requeued.
