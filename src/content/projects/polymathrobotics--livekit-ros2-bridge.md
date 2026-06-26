---
repo: "polymathrobotics/livekit_ros2_bridge"
name: "livekit_ros2_bridge"
description: "Generic bridge for connecting ros2 pub/sub into Livekit"
url: "https://github.com/polymathrobotics/livekit_ros2_bridge"
language: "C++"
languages: ["C++"]
languagePcts: [98]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 28
recentReleases: 0
createdAt: "2026-02-03T19:14:26Z"
lastCommitAt: "2026-06-26T06:46:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 22
maintainers: ["jon-mcmillan", "noblica", "troygibb"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf0092991448eefe03b9f022a1b25e3f042837dc7c2592e657682875a21bec47/polymathrobotics/livekit_ros2_bridge"
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
