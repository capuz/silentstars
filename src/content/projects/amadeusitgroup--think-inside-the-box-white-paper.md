---
repo: "AmadeusITGroup/Think-Inside-the-Box-White-Paper"
name: "Think-Inside-the-Box-White-Paper"
description: "Ship the docs in the box: A proposal for co-packaging code and AI-optimized documentation as an industry standard."
readmeQualityOk: true
url: "https://github.com/AmadeusITGroup/Think-Inside-the-Box-White-Paper"
homepage: "https://amadeusitgroup.github.io/Think-Inside-the-Box-White-Paper/"
language: "Astro"
languages: ["Astro"]
languagePcts: [99]
topics: ["ai-software-development", "ai-software-engineering", "context", "context-engineering", "genai", "library", "software-library", "package", "package-management", "package-manager"]
stars: 5
forks: 1
openIssues: 7
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-07-07T04:36:29Z"
lastCommitAt: "2026-10-21T08:49:29Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 73
undervaluedScore: 46
maintainers: ["aigea-ama", "dependabot[bot]", "andreascorti"]
openGraphImageUrl: "https://opengraph.githubassets.com/7934406d5b6124607118db2e672239bf081b37f517f72a212f73e63a2a58c400/AmadeusITGroup/Think-Inside-the-Box-White-Paper"
discussionCount: 1
---

# Think Inside the Box

> **Ship the docs in the box:** A proposal for co-packaging code and AI-optimized documentation as an industry standard.

## Overview

This repository contains a white paper proposing **co-packaged documentation**, the practice of shipping structured, AI-optimized documentation alongside library code within the same distributable package artifact.

## The Problem

AI coding assistants (GitHub Copilot, Claude, etc.) are transforming software development, but they do not operate with all the contextual knowledge they need when consuming libraries. Today's packages contain code but not documentation, the docs live on websites that AI agents struggle to access and consume. This gap forces agents to rely on stale training data, producing hallucinated APIs, deprecated patterns, and incorrect usage.

## The Solution

The **Think Inside the Box Principle**: Everything a consumer needs should arrive in one box — the code *and* the documentation, version-matched and ready to use.

We propose a new industry standard:
- **A `docs/` directory** in every package containing structured markdown documentation
- **An entry point** (`README.md`) describing the 5 Ws of the…
