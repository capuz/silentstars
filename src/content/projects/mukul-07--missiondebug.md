---
repo: "mukul-07/missiondebug"
name: "missiondebug"
description: "MCAP-native incident replay for ROS 2 robots. Capture the 60s before a failure and scrub it in Foxglove."
url: "https://github.com/mukul-07/missiondebug"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [70, 23]
topics: ["debugging", "fastapi", "mcap", "observability", "python", "react", "robotics", "ros", "ros2", "typescript"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-05-05T19:09:05Z"
lastCommitAt: "2026-06-30T06:52:52Z"
lastReleaseAt: "2026-06-22T07:19:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 57
maintainers: ["mukul-07"]
openGraphImageUrl: "https://opengraph.githubassets.com/46761847c4a3f10465debaad7135e5e809116078647ed8b2f0699c54ff816ea7/mukul-07/missiondebug"
---

# MissionDebug

> **Incident memory for your ROS 2 robot fleet.** Capture the 60 seconds around every failure, replay it like a black box in Foxglove, and query your whole fleet's incident history so your team stops re-solving the same problem.

The deepest fleet-ops pain isn't "I can't find what broke." It's *"we keep re-solving the same incident because nobody remembers it broke this way before."* MissionDebug fixes that. Every capture gets a structured summary; the fleet **incident dashboard** rolls up recurrence rate, MTTR, and top failure patterns; and opening any incident answers **"has this happened before?"**, surfacing similar past incidents *with how they were resolved*.

And you can **ask the whole history in plain English** (*"why does warehouse-bot-03 keep stalling, and what fixed it last time?"*) and get a grounded, citation-backed answer. Bring your own LLM key (Anthropic or OpenAI), or point it at an air-gapped local model.

Under the hood it's a focused capture layer: an agent runs alongside your ROS 2 stack, keeps a rolling buffer of the topics you care about, and writes a standard MCAP the moment a detector fires: stall (commanded-but-not-moving, so a parked…
