---
repo: "jtklinger/claude-code-backup-guide"
name: "claude-code-backup-guide"
description: "A comprehensive guide to backing up and restoring Claude Code settings across machines"
url: "https://github.com/jtklinger/claude-code-backup-guide"
language: "Shell"
languages: ["Shell"]
languagePcts: [84]
stars: 13
forks: 3
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2025-11-03T19:55:23Z"
lastCommitAt: "2026-06-28T02:02:07Z"
lastReleaseAt: "2026-06-28T02:02:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 37
maintainers: ["jtklinger"]
openGraphImageUrl: "https://opengraph.githubassets.com/a598228c8c35a82526b5b38090d28f10edb16ac80a99b81623239b9a041a3fad/jtklinger/claude-code-backup-guide"
---

# Claude Code Backup & Restore Guide

**Current release: v2.3.0** (see [changelog](#changelog))

A config-driven system for backing up and restoring your complete Claude Code environment — settings, memory, skills, plugins, user-content directories (plans, commands, agents, output-styles, rules, hooks, scheduled-tasks), sessions, subagent transcripts, tool-result payloads, and more.

## Table of Contents

- [Overview](#overview)
- [What to Backup](#what-to-backup)
- [What NOT to Backup](#what-not-to-backup)
- [Quick Start](#quick-start)
- [Detailed Instructions](#detailed-instructions)
- [Scheduling Automatic Backups](#scheduling-automatic-backups)
- [Sanitized Export for Sharing](#sanitized-export-for-sharing)
- [Security](#security)
- [Troubleshooting](#troubleshooting)
- [FAQ](#faq)
- [Changelog](#changelog)
- [Upgrading](#upgrading)
- [Versioning](#versioning)

## Overview

Claude Code stores a rich set of data across your machine: global instructions, per-project memory, installed skills, plugins, saved plans, custom commands, subagents, output styles, rules, hooks, scheduled tasks, session transcripts, subagent transcripts, tool-result payloads, and MCP server…
