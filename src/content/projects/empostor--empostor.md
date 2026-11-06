---
repo: "Empostor/Empostor"
name: "Empostor"
description: "The First Dynamic Ports and Authentication supported Opensource Among Us private server"
readmeQualityOk: true
url: "https://github.com/Empostor/Empostor"
homepage: "https://empostor.github.io"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 5
forks: 7
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 5
recentReleases: 3
createdAt: "2026-05-16T23:14:43Z"
lastCommitAt: "2026-11-06T02:43:18Z"
lastReleaseAt: "2026-11-06T02:45:01Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 88
undervaluedScore: 77
maintainers: ["HayashiUme", "FangkuaiYa", "Oborodzuki"]
openGraphImageUrl: "https://opengraph.githubassets.com/03be914cd6c2b5b92ea913a6fcb9d15ea5aa7f4f26a385e6b6b8c64f3aceb25e/Empostor/Empostor"
discussionCount: 0
---

# Empostor
Empostor is an open-source private server implementation for Among Us.


## Features
- FriendCode support (authentication)
- Dynamic ports
- Admin Panel (dashboard)
- Plugin support
- Server-side anticheat

## Getting Started 

To run the server, you need:

- [.NET 8.0 Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)

Download the build you'd like from the [releases](https://github.com/Empostor/Empostor/releases). You most likely want the x64 build. Use the arm64 build if you are running Empostor on a Raspberry Pi, another ARM-based SBC, or an ARM VPS.

Unzip the file and go to config.json. To make your server playable for other devices, replace the "PublicIp" field with your actual public IP address.

It is also recommended to [set up a Reverse Proxy](https://empostor.github.io/get-started/reverse-proxy#use-a-reverse-proxy) (for HTTPS connections).

## Client Setup

### Windows
1. Go [here](https://empostor.github.io/empostor) and enter your server's IP/domain, port and name. Press "Download server file"
2. Press Win + R and enter this (leave the quotation marks):
```cmd
"%userprofile%\AppData\LocalLow\Innersloth\Among Us"…
