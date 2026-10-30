---
repo: "przeprogramowani/10x-bench"
name: "10x-bench"
description: "This repository serves as a benchmark for various LLMs vibe coding Przeprogramowani.pl website."
readmeQualityOk: true
url: "https://github.com/przeprogramowani/10x-bench"
homepage: "https://10xbench.ai/"
language: "Astro"
languages: ["Astro", "TypeScript"]
languagePcts: [60, 32]
topics: ["ai", "claude-code", "codex", "cursor", "gemini-3-pro"]
stars: 15
forks: 11
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-02-08T09:33:05Z"
lastCommitAt: "2026-10-30T11:02:24Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 82
undervaluedScore: 36
maintainers: ["psmyrdek", "mkczarkowski", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/371259e95d759395763e458c206f382a880ad9600e5c67fd639fa15cd01501e8/przeprogramowani/10x-bench"
---

# 10x Benchmark

A comprehensive benchmark comparing how different large language models tackle "vibe coding" — creating a fully functional website for [Przeprogramowani.pl](https://przeprogramowani.pl) in a single attempt, without iterative refinement.

## Overview

This repository evaluates the practical capabilities of various state-of-the-art LLMs by having each model create a website implementation based on the same prompt and content specifications. The results provide insights into each model's ability to understand requirements, generate code, and produce production-ready web solutions.

## Key Concept: "Vibe Coding"

Vibe coding represents a one-shot approach to web development where an LLM must:
- Understand the complete project requirements from a single prompt
- Extract and properly format content specifications
- Generate a functional, well-structured website
- Produce clean, maintainable code without iterative debugging

## Project Structure

### Core Directories & Files

| Path | Purpose |
|------|---------|
| `./website/` | Astro-based results dashboard (displays all benchmark results) |
| `./scripts/process-results.ts` | TypeScript script that processes CSV…
