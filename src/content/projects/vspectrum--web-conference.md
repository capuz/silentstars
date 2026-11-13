---
repo: "VSpectrum/web-conference"
name: "web-conference"
description: "Web-Conferencing webapp using Django, WebRTC and NodeJS (signaling and chat server). Network metrics are logged (and displayed live) during a conference. Video samples along with its metrics can be recorded and uploaded to http://assessment.veydh.com for gathering public opinion of quality and correlations."
readmeQualityOk: true
url: "https://github.com/VSpectrum/web-conference"
homepage: "http://conference.veydh.com"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [64]
stars: 5
forks: 5
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2014-09-23T07:50:18Z"
lastCommitAt: "2026-11-13T11:22:14Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 63
maintainers: ["VSpectrum"]
openGraphImageUrl: "https://opengraph.githubassets.com/1c10dca0b3ee4eef87fecf6ef2c43d1fcbe414d3cb73094c06b1f5de583dbe9a/VSpectrum/web-conference"
---

# Web Conference

A small multi-person WebRTC room. Each browser sends media directly to the others (STUN), or forces that media through a TURN relay.

The 2014 Django site is still in `WebConfSite/`. This tree replaces it.

## Why there is still a server

WebRTC media does not travel through the application. Browsers still need a signaling channel to trade session descriptions and ICE candidates before a peer connection exists. Django, accounts, Google login, invites, the QoE database, and the separate Socket.IO chat process are not part of that job.

FastAPI serves the page and one WebSocket. Rooms live in memory for the life of the process. A room code is the only credential: anyone with the link can join.

## Run

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn server.main:app --host 127.0.0.1 --port 8000 --reload
```

Open http://127.0.0.1:8000 . Camera and microphone capture works on localhost. Pick **Direct (STUN)** with no extra setup. Uncheck the devices if you only want to try the room UI.

Relay mode stays disabled until you configure your own TURN server. Copy `.env.example` to `.env`:

```bash…
