---
repo: "micro/mu"
name: "mu"
description: "The runtime for Micro, an open personal assistant"
readmeQualityOk: true
url: "https://github.com/micro/mu"
homepage: "https://micro.mu"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["micro", "agent", "assistant"]
stars: 436
forks: 21
openIssues: 61
closedIssues: 570
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2025-11-06T09:21:18Z"
lastCommitAt: "2026-10-09T10:51:03Z"
lastReleaseAt: "2026-01-29T12:34:22Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 34
maintainers: ["asim"]
openGraphImageUrl: "https://opengraph.githubassets.com/80e460667611ba8769056a7571aeeef100b2fe9f2d95210502d3216638dcaaa6/micro/mu"
discussionCount: 2
---

# Mu

The runtime for **Micro, an open personal assistant**.

## Home

A place to view and do things e.g prompt, see what's happening, etc.

## Inbox

Connect from various places and it all goes in one inbox.

| Protocol | Info |
|---|---|
| HTTP | Start a conversation or reopen one from Inbox. |
| SMTP | Send a message to `agent@your-domain` from your verified email address |
| SMS | Verify your phone number in Account, then text the configured number. |
| XMPP | Connect with your account and a Chat token from Client access, then message the agent. |

## Agents

**Micro** is the default agent. Agents have instructions and a set of
tools. Services provide those tools: mail, files, calendar, search, weather,
notes, shell, and more. You ask for an outcome; the agent chooses the tools.

## Work

Work can run in the background and return its result to the originating conversation. 
Task records live in service/tasks. Agents own the daily brief and delivery logic, 
while service/events schedules it and Work tracks each occurrence.

## Services

Complete standalone services that agents can use as tools or you can browse with. 
For example a complete Mail client and server. Web search…
