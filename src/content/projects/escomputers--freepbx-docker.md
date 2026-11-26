---
repo: "escomputers/freepbx-docker"
name: "freepbx-docker"
description: "Dockerized FreePBX 17 with Asterisk 21, PHP 8,2, dedicated MariaDB and data persistence"
readmeQualityOk: true
url: "https://github.com/escomputers/freepbx-docker"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [61, 24]
topics: ["apache2", "asterisk", "cdr", "containers", "digium", "distributed-systems", "docker", "docker-compose", "freepbx", "mariadb"]
stars: 130
forks: 47
openIssues: 0
closedIssues: 11
watchers: 6
contributors: 2
recentReleases: 0
createdAt: "2023-05-25T22:52:15Z"
lastCommitAt: "2026-11-26T23:37:20Z"
lastReleaseAt: "2025-10-15T19:12:25Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 34
maintainers: ["escomputers", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/05badb986df1b52e1d53e8ea9bf7129455de600ae2de5ac2e767397d5f9ccb72/escomputers/freepbx-docker"
discussionCount: 0
---

## Introduction

This is MVP [Docker Compose](https://docs.docker.com/compose/) application for having [FreePBX](https://www.freepbx.org) - A Voice over IP manager for [Asterisk](https://www.asterisk.org), running in containers.

Upon starting this multi-container application, it will give you a turnkey PBX system for SIP calling.

* FreePBX 17.0.21
* PHP 8.2.31
* Asterisk 21.10.2
* MariaDB 10.11.14
* Fail2ban pre-configured with restrictive enforcement rules
* Email notifications
* Logrotate configured also for Asterisk and Freepbx
* Supports data persistence
* Base image Debian [debian:bookworm-slim](https://hub.docker.com/_/debian/)
* Apache 2.4.65
* NodeJS v18.20.4
* DAHDI channel not supported

### Ports
The following ports are exposed via Docker.

| Port              | Description |
| ----------------- | ----------- |
| `80/tcp`          | HTTP        |
| `443/tcp`         | HTTPS       |
| `5060/udp`        | PJSIP       |
