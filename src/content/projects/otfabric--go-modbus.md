---
repo: "otfabric/go-modbus"
name: "go-modbus"
description: "Modern Go (Golang) Modbus TCP/RTU client and server library. Supports TLS, typed register codecs, SunSpec discovery, connection pooling, retries, and industrial IoT."
readmeQualityOk: true
url: "https://github.com/otfabric/go-modbus"
homepage: "https://otfabric.io"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["go", "golang", "industrial-iot", "modbus", "modbus-client", "modbus-library", "modbus-rtu", "modbus-server", "modbus-tcp", "plc"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-12T08:19:56Z"
lastCommitAt: "2026-11-16T11:52:14Z"
lastReleaseAt: "2026-03-16T01:45:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 59
maintainers: ["boeboe", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/17932211dbdd2b5ba778fe29b789038f00cb4357abafccaae34e7a5f4c85bb8f/otfabric/go-modbus"
---

# go-modbus — Modbus TCP, RTU, ASCII & TLS Library for Go (Golang)

**go-modbus is a production-ready Modbus client and server library for Go.** It supports Modbus TCP, Modbus RTU and Modbus ASCII (RS-232/RS-485), Modbus over TLS (MBAPS), UDP, RTU-over-TCP, RTU-over-UDP and ASCII-over-TCP, in pure Go with no CGO.

Use it to talk to PLCs, energy meters, solar inverters (SunSpec), sensors and other industrial devices from SCADA, industrial IoT (IIoT), energy-management and automation software, or to simulate Modbus devices for testing.

Beyond basic register reads and writes, go-modbus adds what production systems need: typed register codecs with explicit byte/word order, connection pooling, automatic retries, `context.Context` cancellation, structured logging, metrics hooks and a CLI.

**Quick links:** [Quick start](#quick-start) · [Comparison](#go-modbus-vs-other-go-modbus-libraries) · [Install](#install) · [API reference](https://github.com/otfabric/go-modbus/blob/HEAD/API.md) · [CLI](#modbus-cli) · [FAQ](#faq)

---

## Why go-modbus?

- **Every common transport** — Modbus TCP, RTU and ASCII (serial), TLS (MBAPS / Modbus Security), UDP, RTU-over-TCP, RTU-over-UDP and…
