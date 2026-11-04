---
repo: "aliang-one/aliangboard"
name: "aliangboard"
description: "An open-source, AI-native Kubernetes panel — full multi-cluster management via a Vue 3 + Node gateway, with a built-in Agent workbench and MCP server that lets LLMs read, write, and operate your cluster."
readmeQualityOk: true
url: "https://github.com/aliang-one/aliangboard"
language: "JavaScript"
languages: ["JavaScript", "Vue"]
languagePcts: [70, 30]
topics: ["ai", "docker-ui", "k8s", "kubernetes", "self-hosted", "ui", "cloud-native", "dashboard", "mcp", "mcp-server"]
stars: 114
forks: 2
openIssues: 3
closedIssues: 15
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-08-11T02:20:26Z"
lastCommitAt: "2026-11-04T02:52:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 30
maintainers: ["aliang-one", "anupamme"]
openGraphImageUrl: "https://opengraph.githubassets.com/796fecb3830f1e59606850d6dfdc6ee6ca7df5b0a2f8e1480a1d0c80043df7de/aliang-one/aliangboard"
---

**English** | [简体中文](https://github.com/aliang-one/aliangboard/blob/HEAD/README.zh-CN.md)

# AliangBoard

> Open-source, AI-native Kubernetes management panel — natural-language
> operations on top of full multi-cluster management.

AliangBoard turns an LLM into an operator for your clusters: with the built-in **Agent workbench** and **MCP server**, you can ask in natural language to read pod logs, debug containers, roll back a release, or modify resources. At the same time it is a complete Kubernetes panel covering the full resource lifecycle, exec / port-forward / debug-container injection, and multi-cluster switching.

Tech stack in one line: a Vue 3 + Vite + Pinia frontend (plain JS, no TypeScript) and a Node transparent Kubernetes API gateway (zero extra runtime dependencies).

## 🌐 Live Demo

| Item | Value |
| --- | --- |
| **Demo site** | [🚀 Open the live demo](https://demo-aliangboard.aliang.one/) |
| **Username** | `admin` |
| **Password** | `admin123` |

> The demo is a public, shared instance: anything you create or change is visible to other visitors, so please do not put anything sensitive on it.

## 📸 Screenshots

**Namespace Overview** — layered topology of a…
