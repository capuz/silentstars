---
repo: "funfair-tech/BuildBot"
name: "BuildBot"
description: "Discord Bot for reporting commit, build and deployment status"
readmeQualityOk: true
url: "https://github.com/funfair-tech/BuildBot"
language: "C#"
languages: ["C#"]
languagePcts: [99]
topics: ["discord-bot", "buildbot", "discord"]
stars: 7
forks: 1
openIssues: 5
closedIssues: 24
watchers: 5
contributors: 11
recentReleases: 0
createdAt: "2017-08-08T10:07:18Z"
lastCommitAt: "2026-10-30T22:14:41Z"
lastReleaseAt: "2023-06-22T19:19:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 70
maintainers: ["credfeto", "dnyw4l3n13"]
openGraphImageUrl: "https://opengraph.githubassets.com/d2902129c9906797e17a1d631c374d30b3196dfc0c7d1b37f52e0fa956da2e96/funfair-tech/BuildBot"
postedAt: "2026-09-01T08:56:05.310Z"
---

# BuildBot

FunFair's build notification bot: receives GitHub, Watchtower and CloudFormation webhooks and posts the results to Discord.

## Build Status

| Branch  | Status                                                     |
|---------|------------------------------------------------------------|
| main    | [][pre-release] |
| release | [][release]             |

## Overview

BuildBot is an ASP.NET Core service that listens for webhooks from GitHub (pushes and commit statuses), Watchtower (container updates) and CloudFormation (stack deployments via SNS). It turns each notification into a Discord embed and posts it to a single channel webhook, so build, deployment and container activity shows up in one place. GitHub requests are verified against the webhook's HMAC-SHA256 signature when a secret is configured.

## Quick Start

```shell
export GITHUB__WEBHOOKSECRET="<github-webhook-secret>"
export DISCORD__WEBHOOKURL="https://discord.com/api/webhooks/<id>/<token>"
dotnet run --project src/BuildBot/BuildBot.csproj
```

The service listens on port 8080; `curl http://localhost:8080/ping` checks that it is running.

## Installation

BuildBot is not published as a NuGet package. It…
