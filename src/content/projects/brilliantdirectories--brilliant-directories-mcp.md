---
repo: "brilliantdirectories/brilliant-directories-mcp"
name: "brilliant-directories-mcp"
description: "Official MCP server for Brilliant Directories — manage members, posts, leads, reviews, pages, and more from any AI agent. OpenAPI 3.1 spec included."
readmeQualityOk: true
url: "https://github.com/brilliantdirectories/brilliant-directories-mcp"
homepage: "https://www.brilliantdirectories.com"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [98]
topics: ["ai-agents", "anthropic", "brilliant-directories", "claude", "cursor", "mcp", "mcp-server", "model-context-protocol", "openapi", "brilliantdirectories"]
stars: 17
forks: 4
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 10
createdAt: "2026-04-18T00:24:25Z"
lastCommitAt: "2026-07-25T06:02:36Z"
lastReleaseAt: "2026-05-17T22:50:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 51
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/0a0a0fda374ef192af060d190e6cf09790f7e69001a94402afab6f2e07ab05cd/brilliantdirectories/brilliant-directories-mcp"
---

# Official Brilliant Directories MCP Server — Setup Guide

Universal AI integration for your BD site. Give any AI agent full access to your Brilliant Directories site with one API key.

Manage **members, posts (single-image and multi-image), leads, reviews, top and sub categories, email templates, pages (homepage, landing pages), 301 redirects, smart lists, widgets, menus, forms, tags, membership plans**, and more — across every resource BD exposes via its REST API.

This guide walks you through connecting your AI of choice (Claude, Cursor, etc.) to your BD site. Pick your AI app below, paste two things, restart. Most setups take under 5 minutes.

## ⚠️ REQUIREMENTS — Before you start

1. **Your BD site URL.** Use the full canonical URL exactly as it loads in a browser — include `https://` (or `http://` if your site has no SSL), include `www.` if your site uses it, no trailing slash.
   - ✅ `https://www.mysite.com` (most BD sites)
   - ✅ `https://mysite.com` (only if your site has no `www.`)
   - ✅ `http://mysite.com` (HTTP-only sites — protocol respected)
   - ❌ `mysite.com` (missing protocol)
   - ❌ `https://mysite.com/` (trailing slash)
   - ❌ `https://mysite.com` if the site…
