---
repo: "alpacax/alpacon-cli"
name: "alpacon-cli"
description: "CLI tool for accessing and managing Alpacon workspaces and services."
readmeQualityOk: true
url: "https://github.com/alpacax/alpacon-cli"
homepage: "https://www.alpacax.com/alpacon/"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["cli", "go", "golang", "alpacon", "command-line"]
stars: 13
forks: 1
openIssues: 55
closedIssues: 125
watchers: 3
contributors: 12
recentReleases: 0
createdAt: "2023-11-07T07:42:17Z"
lastCommitAt: "2026-09-01T08:47:27Z"
lastReleaseAt: "2024-03-15T07:23:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 67
maintainers: ["jisung-02", "junho226"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ea24754624ca7b29d0f994daf84ec2d320a167ff9893c2a22d778fee5479832/alpacax/alpacon-cli"
---

# Alpacon CLI

`Alpacon CLI` is the command-line client for [Alpacon](https://alpacon.io), the AI-native PAM. With Alpacon, humans, AI agents, and CI/CD pipelines reach and operate your entire fleet through a single identity—and every command they run is judged at runtime, recorded, and bounded by a scoped work session. Three guarantees:

1. **A gate, not a credential.** After login, a **work session** is the first thing required—nothing reaches your servers without one. Sessions are scoped (servers, commands, time window).
2. **Damage containment.** Every command is judged at runtime against the session's scope. If a credential leaks or an AI client is compromised, what the attacker can do is bounded by the session, not by what the credential could touch on its own.
3. **One audit shape.** Everything inside a session is recorded—same timeline whether the actor is human, AI agent, or CI/CD pipeline.

This CLI lets you drive your Alpacon workspace from the terminal: open a work session, then Websh into a server, exec remote commands, transfer files, create TCP tunnels, and manage API tokens with command/server/file ACLs. Login is browser-based (OAuth + MFA); everything else stays…
