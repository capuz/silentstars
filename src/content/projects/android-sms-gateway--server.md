---
repo: "android-sms-gateway/server"
name: "server"
description: "The SMS Gateway for Android™ Server enables the dispatch of SMS messages through Android devices without requiring direct Internet access to them."
url: "https://github.com/android-sms-gateway/server"
homepage: "https://docs.sms-gate.app"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["android", "backend", "sms-gateway", "api", "mobile-messaging", "rest-api", "server", "remote-sms"]
stars: 129
forks: 49
openIssues: 1
closedIssues: 11
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2023-10-29T06:37:33Z"
lastCommitAt: "2026-06-23T06:42:57Z"
lastReleaseAt: "2024-02-06T12:54:19Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 49
maintainers: ["capcom6", "dependabot[bot]", "eiabea"]
openGraphImageUrl: "https://opengraph.githubassets.com/307c5d63b4b0c3be366a6ece8df7d35e0f86f4416ae7f2c8219b84982cbe879c/android-sms-gateway/server"
---

# SMSGate Server

This server acts as the backend component of the [SMSGate](https://github.com/capcom6/android-sms-gateway), facilitating the sending of SMS messages through connected Android devices. It includes a RESTful API for message management, integration with Firebase Cloud Messaging (FCM), and a database for persistent storage.

## Table of Contents

- [SMSGate Server](#smsgate-server)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Quickstart](#quickstart)
  - [Work modes](#work-modes)
  - [JWT Authentication](#jwt-authentication)
    - [Configuration](#configuration)
    - [Token Management](#token-management)
      - [Generate Token Pair](#generate-token-pair)
      - [Refresh Access Token](#refresh-access-token)
      - [Revoke Token](#revoke-token)
    - [Using JWT Tokens](#using-jwt-tokens)
    - [Available Scopes](#available-scopes)
  - [Contributing](#contributing)
  - [License](#license)
  - [Legal Notice](#legal-notice)

## Features

- **SMS Messaging**: Dispatch SMS and data messages through a RESTful API.
- **Message Status**: Retrieve status for sent messages.
- **Device Management**: View…
