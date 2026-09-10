---
repo: "polymathrobotics/livekit_ros2_bridge"
name: "livekit_ros2_bridge"
description: "Generic bridge for connecting ros2 pub/sub into Livekit"
readmeQualityOk: true
url: "https://github.com/polymathrobotics/livekit_ros2_bridge"
language: "C++"
languages: ["C++"]
languagePcts: [98]
stars: 6
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2026-02-03T19:14:26Z"
lastCommitAt: "2026-09-10T08:19:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 34
maintainers: ["jon-mcmillan", "noblica"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad7a9c9e39bd6ae8af2afd86098c48e650d00a50fb9c3e72ac88c1a628b79abe/polymathrobotics/livekit_ros2_bridge"
---

# livekit_ros2_bridge

`livekit_ros2_bridge` is a ROS 2 package that joins a LiveKit room as a ROS-aware participant. It gives LiveKit clients a way to request topic or video subscriptions, fetch interface definitions, call ROS services, and publish small ROS topic messages.

The core mental model is:

- clients join the same LiveKit room as the bridge
- clients send a heartbeat that says "this is the full set of subscriptions I still want"
  - the bridge streams the requested subscriptions over LiveKit data and video tracks
  - the bridge stops a track if the heartbeats stop or if a subscription is dropped in later heartbeats
- the bridge responds to heartbeats with a status update that clients use to correlate a subscription with a data or video track.
- access control is done with global allow and deny lists by topic
- discovery and request-response work happen over RPC

## What it exposes

The bridge uses three kinds of LiveKit surfaces:

- RPCs for request-response flows such as listing resources, fetching interface definitions, and calling services
- data-packet topics for ROS publish requests and subscription control-plane messages
- tracks for ongoing delivery of ROS topic…
