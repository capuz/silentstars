---
repo: "Retro-Rewind-Team/rwfc-web"
name: "rwfc-web"
description: "Full-stack web application for Retro Rewind"
readmeQualityOk: true
url: "https://github.com/Retro-Rewind-Team/rwfc-web"
homepage: "https://rwfc.net"
language: "TypeScript"
languages: ["TypeScript", "C#"]
languagePcts: [52, 48]
stars: 9
forks: 4
openIssues: 14
closedIssues: 131
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2025-07-28T00:24:55Z"
lastCommitAt: "2026-10-23T12:04:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 84
maintainers: ["noelhermanss", "ppebb", "DirkDoes"]
openGraphImageUrl: "https://opengraph.githubassets.com/7fc11c4ee58759d2045f964a2da5a9b97e1eac827489b53dc18399b2d2fc7d09/Retro-Rewind-Team/rwfc-web"
---

# Retro Rewind Website

A full-stack web application for Retro Rewind. Provides a competitive VR leaderboard, time trial rankings with ghost file management, a live RWFC room browser, and per-player race statistics.

This README is aimed at developers setting up the project locally for development and collaboration.

---

## Table of Contents

- [Overview](#overview)
- [Repository Layout](#repository-layout)
- [Prerequisites](#prerequisites)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Testing](#testing)
- [Configuration Reference](#configuration-reference)
- [Background Services](#background-services)
- [API Reference](#api-reference)
- [Health Checks](#health-checks)
- [Track Sync Tool](#track-sync-tool)

---

## Overview

| Layer | Stack |
|---|---|
| Frontend | Solid.js, TypeScript, Tailwind CSS v4, Vite |
| Backend | ASP.NET Core .NET 10, EF Core, PostgreSQL |
| Tests | xUnit v3 on Microsoft.Testing.Platform, Vitest with jsdom |
| API docs | Scalar (available in development at `/scalar`) |

The frontend and backend run as separate processes. In development the frontend calls the backend directly via the `VITE_API_URL` environment variable. There is…
