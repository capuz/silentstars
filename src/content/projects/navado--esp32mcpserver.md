---
repo: "navado/ESP32MCPServer"
name: "ESP32MCPServer"
description: "Allow AI models connect to ESP32 and read connected sensors NMEA2k, ODB/ODBII, NMEA0183. AI generated MCP server."
readmeQualityOk: true
url: "https://github.com/navado/ESP32MCPServer"
language: "C++"
languages: ["C++"]
languagePcts: [88]
topics: ["ai", "esp32", "generated-code", "mcp-server", "can-bus", "nmea0183", "nmea2000", "sensors", "websocket-server", "odb2"]
stars: 66
forks: 18
openIssues: 3
closedIssues: 9
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2025-01-17T23:04:49Z"
lastCommitAt: "2026-11-14T22:00:45Z"
lastReleaseAt: "2026-03-04T05:18:59Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 84
undervaluedScore: 50
maintainers: ["navado", "AdelinoGP", "asfour75"]
openGraphImageUrl: "https://opengraph.githubassets.com/ef1d33cfd1ef7b44ad373d06892080d0f9a4729492046b0c88bd6cd991a2676b/navado/ESP32MCPServer"
---

# ESP32 MCP Server

A [Model Context Protocol](https://modelcontextprotocol.io/) (MCP) server running on ESP32 (and Nordic nRF52840 in sensor-only mode), exposing real-world sensor data and bus protocols to AI assistants and automation tooling over WebSocket / JSON-RPC 2.0.

Connect an AI agent directly to your hardware: query I2C sensors, parse NMEA 0183 GPS/marine data, decode NMEA 2000 and OBD-II CAN frames, replay bus history — all through a standard MCP interface.

---

## Features

| Capability | Details |
|---|---|
| **MCP Protocol** | JSON-RPC 2.0 over WebSocket, resource discovery & subscriptions |
| **I2C Sensors** | Auto-scan + drivers for BME280, MPU6050, ADS1115, SHT31, AHT20, BH1750, INA219 |
| **NMEA 0183** | GGA, RMC, VTG, GSV, MWV, DBT, DPT, HDG, HDT with XOR checksum validation |
| **NMEA 2000 / CAN** | 29-bit PGNs: position, heading, speed, depth, wind, attitude, water temp |
| **OBD-II / CAN** | Standard 11-bit OBD-II service 01/09 PID decoding (60+ PIDs) |
| **Bus History** | Persistent ring buffers for CAN, NMEA, NMEA 2000, OBD-II — queryable via MCP |
| **Bus Readers** | Time-bounded serial and CAN reads, raw or parsed mode, JSON output |
| **Bluetooth…
