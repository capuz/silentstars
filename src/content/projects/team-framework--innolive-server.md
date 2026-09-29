---
repo: "team-framework/innolive-server"
name: "innolive-server"
description: "Backend server providing REST APIs for the InnoLive solution."
originalDescription: "Backend server providing REST APIs for the InnoLive solution."
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/team-framework/innolive-server"
language: "Go"
languages: ["Go"]
languagePcts: [81]
stars: 6
forks: 0
openIssues: 4
closedIssues: 165
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-07-20T11:10:23Z"
lastCommitAt: "2026-09-29T08:11:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 54
maintainers: ["hjbin-25"]
openGraphImageUrl: "https://opengraph.githubassets.com/893fbfe2c5cab266c3f2722d120031e665a68d161fffea45c947a86ab6b47177/team-framework/innolive-server"
---

# innolive-server

A Go media server that receives real-time WebRTC live broadcasts, processes them through **AI de-identification**, and delivers the processed video to users and broadcasts it to streaming platforms.

The server receives user camera frames and forwards them to an AI server. The AI server blurs faces other than registered faces, and the server delivers the results to users and live. It's a live broadcast server that masks the faces of bystanders visible on the broadcast screen.

---

## Problems This Project Solves

When broadcasting outdoors, faces of people passing behind the broadcaster are visible as-is. innolive-server inserts an AI privacy step in the middle of the broadcast pipeline, keeping only the broadcaster's face and blurring all other faces. If AI processing fails, the server displays a black screen instead of outputting the unprocessed original.

## Key Features

- **WebRTC Ingest/Delivery**: Based on [pion/webrtc](https://github.com/pion/webrtc). Supports STUN/TURN, ICE reconnection grace period, and ICE restart recovery when switching networks.
- **AI Privacy Pipeline**: Sends frames to an AI server to blur faces. Three modes: `bypass`,…
