---
repo: "gasleakdetector/gasleakdetector"
name: "gasleakdetector"
description: "An IoT system that alerts you when gas leaks"
url: "https://github.com/gasleakdetector/gasleakdetector"
language: "Java"
languages: ["Java"]
languagePcts: [92]
topics: ["android-app", "arduino", "esp8266", "gas-leakage-detection", "gas-sensor", "gasleak-detection", "gasleakdetector", "iot", "mq-6", "app-realtime"]
stars: 6
forks: 0
openIssues: 3
closedIssues: 28
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-03-15T01:59:06Z"
lastCommitAt: "2026-06-26T21:32:16Z"
lastReleaseAt: "2026-05-21T12:01:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 61
maintainers: ["traitimtrongvag", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d76b3c6c2885a10043fe14806bec5caf1709bedfd0e5d7964ad279203489ccbd/gasleakdetector/gasleakdetector"
discussionCount: 4
---

</p>

</p>

  <h1>Gas Leak Detector - App</h1>
  <p>English&nbsp;&nbsp;|&nbsp;&nbsp;
  </p>
  <br/>    
  <br/>    
</div>

## Overview

<p>
  </a>
</p>

Gas Leak Detector is a full-stack IoT safety system. An MQ-6 sensor on an ESP8266 continuously samples ambient gas levels and pushes readings to a serverless Vercel API. Data is persisted in Supabase and streamed in real time to the Android app via WebSocket - no polling, no delay.

The system is composed of three independent repositories that form one pipeline:

| Layer | Repo | Stack |
|---|---|---|
| Firmware | [gasleakdetector-esp](https://github.com/gasleakdetector/gasleakdetector-esp) | C++ / Arduino / ESP8266 |
| Backend | [gasleakdetector-server](https://github.com/gasleakdetector/gasleakdetector-server) | Node.js / Vercel / Supabase |
| Mobile | **gasleakdetector** *(this repo)* | Android / Java |

## Sample Demo

[Watch Demo Video](https://www.youtube.com/watch?v=RLNf9Zphb1I)

## Setup Full Project

You can view a detailed guide on how to set up the entire project [Here](Tutorial/README.md)

## System Flow

</p>

1. ESP8266 reads the MQ-6 sensor every 400 ms and POSTs to `/api/ingest` with API key authentication.
2. The…
