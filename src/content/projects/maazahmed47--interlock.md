---
repo: "MaazAhmed47/Interlock"
name: "Interlock"
description: "Runtime trust layer for MCP tools. Detects post-approval drift including behavioral effective-permission drift (denied→allowed) that manifest diffing misses and quarantines before execution, and emits tamper-evident Security Receipts."
readmeQualityOk: true
url: "https://github.com/MaazAhmed47/Interlock"
homepage: "https://getinterlock.dev"
language: "Python"
languages: ["Python"]
languagePcts: [85]
topics: ["security-gateway", "agent-security", "fastapi", "runtime-security", "ai-security-tool", "drift-detection", "llms", "mcp-security", "model-context-protocol-mcp", "tool-drift"]
stars: 6
forks: 1
openIssues: 1
closedIssues: 2
watchers: 3
contributors: 1
recentReleases: 1
createdAt: "2026-05-07T15:33:48Z"
lastCommitAt: "2026-07-18T05:46:12Z"
lastReleaseAt: "2026-05-30T10:17:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 55
maintainers: ["MaazAhmed47"]
openGraphImageUrl: "https://opengraph.githubassets.com/a35d2b08f56649e7bd0baff3d769213545e6e31b9be24346c052413059588c91/MaazAhmed47/Interlock"
discussionCount: 2
---

# Interlock

Interlock is a self-hosted MCP runtime trust layer for AI agents.

It detects when approved MCP tools change their schema, data access, external reach, side effects, auth scope, or behavior after approval, then can hold or quarantine risky changes before execution and preserve audit evidence.

**Live proof:** behavioral drift caught and quarantined: same tool, same manifest, expected `403 denied` → observed `200 allowed`, with hash-chain verified receipt evidence.

_Pre-release, design-partner stage — self-hosted, for trying drift detection on one non-production MCP workflow. [Quick start ↓](#quick-start)_

### Stop MCP tools from doing what they were never approved to do.

Interlock focuses on post-approval tool and capability drift: the changes that happen after an MCP tool has already been trusted. It can still enforce policy, scan responses, and record audit evidence, but the core question is whether the tool is still inside the approved trust boundary.

**Live at: https://getinterlock.dev**

[Product Brief](https://interlock-security.notion.site/Interlock-Runtime-Security-Gateway-for-AI-Agents-35a82dc0e7c380efb499dbef25046664) ·
[2-Minute…
