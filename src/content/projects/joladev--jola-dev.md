---
repo: "joladev/jola.dev"
name: "jola.dev"
description: "My personal blog and portfolio, built in Elixir using Phoenix and NimblePublisher."
url: "https://github.com/joladev/jola.dev"
homepage: "https://jola.dev"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [79]
stars: 16
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-08-04T11:39:59Z"
lastCommitAt: "2026-06-29T07:24:06Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 59
maintainers: ["joladev", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ccbe0ff14171c6cc961928852bc1a67c69c608b2ba45929c3392064a07e68e6/joladev/jola.dev"
---

# jola.dev

A Phoenix-based blog and portfolio website for jola.dev, built with Elixir and NimblePublisher for static content management.

## Overview

This project is a personal blog and portfolio site that features:
- Static blog posts generated from Markdown files
- No database dependency - all content is compiled at build time
- Server-side rendered pages with Phoenix
- Tailwind CSS for styling
- Syntax highlighting for code blocks via Makeup
- Health checks and monitoring ready for production

## Prerequisites

- Elixir 1.14 or later
- Node.js (for asset compilation)
- Mix (comes with Elixir)

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd jola_dev
   ```

2. **Install dependencies**
   ```bash
   mix setup
   ```
   This command will:
   - Install Elixir dependencies
   - Install Node.js dependencies (Tailwind, Esbuild)
   - Set up the development environment

3. **Start the Phoenix server**
   ```bash
   mix phx.server
   ```
   Or to start with an interactive shell:
   ```bash
   iex -S mix phx.server
   ```

4. **Visit the site**

   Open your browser and navigate to [`http://localhost:5554`](http://localhost:5554)

   Note:…
