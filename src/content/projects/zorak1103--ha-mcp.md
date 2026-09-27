---
repo: "zorak1103/ha-mcp"
name: "ha-mcp"
description: "A Model Context Protocol (MCP) server that provides AI assistants with access to Home Assistant, enabling smart home control and automation management."
readmeQualityOk: true
url: "https://github.com/zorak1103/ha-mcp"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["homeassistant", "mcp-server", "openrouter"]
stars: 6
forks: 2
openIssues: 1
closedIssues: 77
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-01-04T12:58:41Z"
lastCommitAt: "2026-09-27T09:28:41Z"
lastReleaseAt: "2026-01-29T09:42:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 69
maintainers: ["zorak1103"]
openGraphImageUrl: "https://opengraph.githubassets.com/4282acee482517929e4370e1d4fe6ba39b0e79d93f26a838546a097beabc5d50/zorak1103/ha-mcp"
discussionCount: 0
---

# ha-mcp

A Model Context Protocol (MCP) server that provides AI assistants with access to Home Assistant, enabling smart home control and automation management.

## Features

- **41 Specialized Tools**: Entity queries, automation CRUD, helper management, scripts, scenes, devices, areas, labels, floors, zones, persons, tags, traces, blueprints, updates, todos, calendars, cameras, dashboards, system log, and more
- **Hybrid Architecture**: WebSocket for most operations, REST API for automation/script/scene CRUD
- **Complete CRUD**: Create, read, update, delete automations/scripts/scenes/helpers
- **Deep System Access**: Query registries, analyze dependencies, access logbook, validate config
- **Flexible Output**: Natural language (LLM-optimized) and JSON formats
- **Access Control**: Read-only mode, whitelist/blacklist, fine-grained action-level control
- **Auto-Reconnect**: Automatic reconnection with exponential backoff
- **Post-Mutation Confirmation**: Automatic state polling after create/update/delete confirms changes

## vs. Other MCP Servers for Home Assistant

Two alternatives exist: the [official HA MCP integration](https://www.home-assistant.io/integrations/mcp_server)…
