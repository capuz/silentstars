---
repo: "zsuroy/ctty"
name: "ctty"
description: "A lightweight, all-in-one connection manager — SSH, Serial, SFTP, Telnet, FTP, WebDAV and S3 in a single TUI 🔥"
readmeQualityOk: true
url: "https://github.com/zsuroy/ctty"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["devops", "terminal", "tui", "serialport", "sftp", "ssh", "telnet", "skill", "ftp", "filemanager"]
stars: 268
forks: 16
openIssues: 2
closedIssues: 9
watchers: 2
contributors: 3
recentReleases: 2
createdAt: "2026-08-13T16:21:03Z"
lastCommitAt: "2026-11-26T15:25:52Z"
lastReleaseAt: "2026-09-01T17:11:38Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 28
maintainers: ["zsuroy", "musicwei"]
openGraphImageUrl: "https://opengraph.githubassets.com/c6775110ea53c177f0d42e68313b5d059ea873844f6c3b7c88969b43cf596d8f/zsuroy/ctty"
---

# 🚀 ctty - Connection Manager

[English](https://github.com/zsuroy/ctty/blob/HEAD/README.md) | [中文](https://github.com/zsuroy/ctty/blob/HEAD/README_CN.md)

> **A lightweight, all-in-one connection manager — SSH, serial, telnet, SFTP, FTP, WebDAV, and S3 in a single TUI** 🔥

ctty is a fast, native terminal tool for managing all your connections — SSH hosts, serial devices, telnet endpoints, SFTP file transfers, FTP sites, WebDAV servers, and S3 object storage — without the overhead of Electron apps. Built with Go and featuring an intuitive TUI interface, it brings the convenience of GUI connection managers like Tabby to the terminal, with zero bloat.

**Why ctty?**
- **Tabby too heavy?** ctty is a single ~5MB binary, no Electron, no browser engine — just pure Go
- **Need serial + telnet + SFTP + FTP + WebDAV + S3 + SSH in one tool?** Most terminal emulators only do SSH; ctty covers them all in a single binary — serial/telnet/FTP/WebDAV/S3/SFTP are built in, SSH reuses your system OpenSSH
- **Want to stay in the terminal?** No context switching between apps — everything is keyboard-driven
