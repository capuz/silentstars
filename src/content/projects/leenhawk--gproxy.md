---
repo: "LeenHawk/gproxy"
name: "gproxy"
description: "gproxy is a Rust-based multi-channel LLM proxy that exposes OpenAI / Claude / Gemini-style APIs through a unified gateway, with a built-in admin console, user/key management, and request/usage auditing."
readmeQualityOk: true
url: "https://github.com/LeenHawk/gproxy"
homepage: "https://gproxy.leenhawk.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
topics: ["claude", "gemini", "gpt", "llm-proxy"]
stars: 273
forks: 46
openIssues: 0
closedIssues: 71
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-01T09:42:21Z"
lastCommitAt: "2026-11-04T08:03:40Z"
lastReleaseAt: "2026-02-08T15:47:11Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 100
undervaluedScore: 35
maintainers: ["LeenHawk", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e555a0f948bd7c6d0cb70a63627bc90f54b2283298550e8a875b8f765efb5a63/LeenHawk/gproxy"
fundingLinks: ["GITHUB:https://github.com/LeenHawk"]
discussionCount: 2
---

# GPROXY

**One API endpoint for your LLM services.**

[English](https://github.com/LeenHawk/gproxy/blob/HEAD/README.md) · [简体中文](https://github.com/LeenHawk/gproxy/blob/HEAD/README.zh-CN.md) · [Русский](https://github.com/LeenHawk/gproxy/blob/HEAD/README.ru.md)

[Documentation](https://gproxy.leenhawk.com/) · [Downloads](https://github.com/LeenHawk/gproxy/releases) · [Discussions](https://github.com/LeenHawk/gproxy/discussions) · [Sponsor](https://github.com/sponsors/LeenHawk)

GPROXY is a self-hosted LLM API gateway written in Rust. Add your upstream accounts, configure model routes in the console, and call different services through the same endpoint and gateway API key. Provider changes, credential updates, usage, and costs are managed in one place.

v4 runs as a desktop or mobile application with a setup wizard, a CLI service, a container, or on Cloudflare, Netlify, and Vercel. Use the [latest stable release](https://github.com/LeenHawk/gproxy/releases/latest) for regular deployments; development snapshots are available under [nightly](https://github.com/LeenHawk/gproxy/releases/tag/nightly).

## Features

Built-in channels include OpenAI, Claude API / Code / Web, Codex,…
