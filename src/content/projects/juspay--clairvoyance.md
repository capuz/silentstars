---
repo: "juspay/clairvoyance"
name: "clairvoyance"
description: "Clairvoyance is a real-time companion that listens, understands, and responds. It streams audio and text as they happen, unlocking rich insights and enabling intuitive interactions. Whether you're seeking clarity, context, or a capable personal agent, Clairvoyance brings intelligence closer to you—fluid, aware, and always ready."
readmeQualityOk: true
url: "https://github.com/juspay/clairvoyance"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 13
forks: 60
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 56
recentReleases: 0
createdAt: "2025-05-16T11:13:31Z"
lastCommitAt: "2026-07-24T06:09:53Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 97
undervaluedScore: 83
maintainers: ["swaroopvarma2359", "sharifajahanshaik", "yugesh-ganipudi"]
openGraphImageUrl: "https://opengraph.githubassets.com/e62013fadc997ed1a3e31575e21568dd118ade9d7ce25c48b8f9f85600ac48ce/juspay/clairvoyance"
---

# Clairvoyance

Clairvoyance is a powerful, multi-agent conversational AI platform designed to support sophisticated, real-time voice and data interactions. It is built on a modular architecture featuring a FastAPI server that manages and orchestrates multiple specialized voice agents.

## 1. Core Architecture

The platform is built around a few key components:

*   **FastAPI Server:** The central application that exposes API endpoints, manages agent lifecycles, and handles incoming requests.
*   **Voice Agents:** Specialized, independent agents responsible for handling different conversational workflows. Each agent is built using a robust framework to manage real-time communication.
    *   **Automatic Agent:** A Pipecat-based agent designed for dynamic data retrieval and analytics conversations. It can operate in `live` mode with real-time data or `test` mode with dummy data.
    *   **Breeze Buddy Agent:** An agent focused on telephony and workflow-driven conversations, such as order confirmations. It integrates with multiple telephony providers like Twilio and Exotel.
*   **Database Integration:** The application uses a database to store configuration, track calls, and manage…
