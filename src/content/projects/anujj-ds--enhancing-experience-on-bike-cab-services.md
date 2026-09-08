---
repo: "anujj-ds/enhancing-experience-on-bike-cab-services"
name: "enhancing-experience-on-bike-cab-services"
description: "Enhancing User Experience in a Ride-Hailing Application: A UI/UX Redesign Proposal: RideEase"
readmeQualityOk: true
url: "https://github.com/anujj-ds/enhancing-experience-on-bike-cab-services"
homepage: "https://enhancing-experience-on-bike-cab-se.vercel.app"
language: "JavaScript"
languages: ["JavaScript", "CSS"]
languagePcts: [47, 28]
stars: 11
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-08-12T04:41:22Z"
lastCommitAt: "2026-09-08T08:17:17Z"
status: "thriving"
tags: []
healthScore: 69
undervaluedScore: 47
maintainers: ["nayanans007", "ArunimaJha", "anujj-ds"]
openGraphImageUrl: "https://opengraph.githubassets.com/5ccb25b112ba0eda21708d64d26a3c0c94c7f3d7b469a63d577b61020eefea8b/anujj-ds/enhancing-experience-on-bike-cab-services"
---

# RideEase

A ride-hailing web app concept (inspired by Rapido), built as an academic project. Riders can book a ride with a real pickup-to-drop map route, get a fare estimate, and chat with the driver using a live AI translation bot.

## Features

- **Real road routing** — pickup and drop are connected via an actual road route (not a straight line), using OpenStreetMap + OSRM.
- **AI translation chat** — powered by Google's Gemini API. Auto-detects the language you type in and translates both sides of the conversation (default: Kannada).
- **Fare estimation** — calculated from the real route distance (₹15 base + ₹12/km).
- **Route deviation alert** — simulates a notification if the driver goes off the planned route.
- **Cash-only payment** — no UPI integration in this version.
- **SOS button** — present in the UI but intentionally inactive; shows an "under development" message since it requires an emergency contact setup flow that hasn't been built yet.

## Tech stack

- **Frontend:** HTML, CSS, JavaScript, Leaflet.js (map)
- **Backend:** Python, Flask
- **APIs:** OSRM (free routing, no key required), Google Gemini API (translation)

## Installation Guide

1. Install…
