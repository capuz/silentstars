---
repo: "allenhutchison/podcast-rag"
name: "podcast-rag"
description: "Using a set of MP3 podcasts, create a RAG System to work with the model of your choice."
readmeQualityOk: true
url: "https://github.com/allenhutchison/podcast-rag"
homepage: "https://allen.hutchison.org/category/projects/podcast-rag/"
language: "Python"
languages: ["Python"]
languagePcts: [84]
stars: 20
forks: 5
openIssues: 10
closedIssues: 7
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-09-22T18:27:14Z"
lastCommitAt: "2026-08-28T14:32:07Z"
lastReleaseAt: "2025-11-24T22:54:46Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 63
maintainers: ["allenhutchison", "dependabot[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/c2a309929661a83e67ac8c5f2e24a545fc3fbf40501a898846f7ebc35b78eff5/allenhutchison/podcast-rag"
discussionCount: 1
---

# Podcast RAG System

A Python-based Retrieval-Augmented Generation (RAG) system for intelligent search and question-answering over podcast libraries. The system transcribes audio using Whisper, extracts metadata with AI, and enables semantic search with automatic citations.

## Features
- Automatic transcription of MP3 files using OpenAI Whisper
- AI-powered metadata extraction (titles, hosts, guests, summaries, keywords)
- Vector embeddings and semantic search using Gemini File Search
- Natural language queries with source citations
- Scheduled batch processing
- Dry-run mode and comprehensive logging

## Installation

This project uses [uv](https://docs.astral.sh/uv/) for fast, reliable dependency management. You can also use traditional pip if preferred.

### Prerequisites
1. Python 3.11+ (recommended)
2. Install `ffmpeg`:
   - **Linux:**
     ```bash
     sudo apt-get install ffmpeg
     ```
   - **macOS (using Homebrew):**
     ```bash
     brew install ffmpeg
     ```
   - **Windows:**
     - Download and install `ffmpeg` from [https://ffmpeg.org/download.html](https://ffmpeg.org/download.html).

3. Install `uv` (recommended):
   ```bash
   curl -LsSf…
