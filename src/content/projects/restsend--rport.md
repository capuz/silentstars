---
repo: "restsend/rport"
name: "rport"
description: "WebRTC-based remote port forwarding tool written in Rust"
readmeQualityOk: true
url: "https://github.com/restsend/rport"
homepage: "https://miuda.ai/?ref=rport"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["p2p-forwarder", "port-forwarding", "webrtc"]
stars: 66
forks: 15
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-08-28T16:28:25Z"
lastCommitAt: "2026-07-25T06:01:53Z"
lastReleaseAt: "2026-01-05T02:50:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 64
undervaluedScore: 26
maintainers: ["shenjinti"]
openGraphImageUrl: "https://opengraph.githubassets.com/225ac8553056f389b974a862404e89b4e2c5a8f9418113e345cccc2f17aeafe5/restsend/rport"
---

# RPort - WebRTC-based remote port forwarding tool written in Rust

RPort is a modern, WebRTC-based remote port forwarding tool written in Rust. It enables secure peer-to-peer connections for port forwarding, remote access, and network tunneling without requiring complex NAT traversal configurations.

It is built on top of [rustrtc](https://github.com/restsend/rustrtc), a pure Rust WebRTC implementation.

## Features

- 🚀 **WebRTC-based P2P connections** - Direct peer-to-peer tunneling
- 🔒 **Secure tunneling** - End-to-end encrypted connections
- 📁 **Configuration file support** - TOML-based configuration with CLI override
- 🌐 **IPv6 filtering** - Automatic IPv6 candidate filtering for better compatibility
- 🔧 **Multiple operation modes** - Agent, client, and proxy modes
- 🔄 **Background daemon support** - Run as a system daemon with custom log files
- 📊 **Structured logging** - Comprehensive logging with tracing support
- ⚡ **High performance** - Built with Tokio async runtime
- 🛜 **Built-in TURN server** - No need for third-party TURN servers

## Architecture

```
┌─────────────┐    WebRTC P2P    ┌─────────────┐
│   Client    │◄────────────────►│    Agent    │
│…
