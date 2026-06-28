---
repo: "Waremderme/GateSentinel-C2-RemoteTool"
name: "GateSentinel-C2-RemoteTool"
description: "GateSentinel is a modern C2 framework for security research and penetration testing, supporting HVNC, RAT-style remote access, reverse shells, and remote desktop in controlled labs. Topics: c2, GateSentinel-c2, hvnc, hvnc-rat, rat, remote-access-tool, backdoor, malware, reverse-shell, botnet"
url: "https://github.com/Waremderme/GateSentinel-C2-RemoteTool"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [38]
stars: 13
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-20T17:54:04Z"
lastCommitAt: "2026-06-28T01:34:55Z"
lastReleaseAt: "2026-01-20T17:54:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 47
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/d85d52b5e663992080e915e653bb16f802de52423b6834a1c75caeaa9db02d41/Waremderme/GateSentinel-C2-RemoteTool"
---

# 🛡️ GateSentinel

A modern C2 (Command and Control) framework designed for security research and penetration testing.

## Overview

GateSentinel is a lightweight C2 framework featuring a Go-based server and C-based client, providing secure remote control capabilities with traffic disguise and encryption.

> **⚠️ Early Development Notice**
>
> This project is in early development with AI-assisted code. Architecture may change significantly. Please report issues via GitHub.

## Key Features

- **🔐 Traffic Disguise** - C2 traffic wrapped as HTML comments
- **🌐 HTTP/HTTPS Support** - Dual protocol with flexible switching
- **🔒 Custom Encoding** - Scrambled Base64 for data security
- **⚡ Hot Reload** - Configuration updates without restart
- **🎯 Stealth Endpoints** - Customizable API paths
- **📊 Web Interface** - Intuitive beacon management dashboard
- **🔧 Flexible Deployment** - EXE and DLL client modes

## Screenshots

### Main Console

### Beacon Management

### Task Execution

### System Monitoring

## Quick Start

### Server Setup
```bash
cd server
go build -o gatesentinel
./gatesentinel

# Access: http://localhost:8080/websafe/admin
# Default credentials: admin / admin123…
