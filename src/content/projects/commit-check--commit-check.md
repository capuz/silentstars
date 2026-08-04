---
repo: "commit-check/commit-check"
name: "commit-check"
description: "Commit Check enforces commit metadata standards — commit messages, branch naming, committer info, signoff, and more."
readmeQualityOk: true
url: "https://github.com/commit-check/commit-check"
homepage: "https://docs.commit-check.com/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["branch-naming", "conventional-commits", "commit-check", "conventional-branch", "naming-conventions", "standard-naming", "yet-another-commit-checker", "code-quality", "devops", "git-hooks"]
stars: 69
forks: 16
openIssues: 5
closedIssues: 83
watchers: 2
contributors: 15
recentReleases: 0
createdAt: "2022-04-25T13:41:15Z"
lastCommitAt: "2026-08-04T06:11:47Z"
lastReleaseAt: "2022-12-14T13:27:17Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "funded"]
healthScore: 97
undervaluedScore: 54
maintainers: ["shenxianpeng", "dependabot[bot]", "Copilot"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/485387677/b2057db2-d7ac-42bf-aaa7-1e83b06e6dd6?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260804%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260804T061324Z&X-Amz-Expires=300&X-Amz-Signature=7e0212ec1501b63664775d173c34342c8d686f2af97772f06ae0da5e2303edae&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTgyNDMwNCwibmJmIjoxNzg1ODI0MDA0LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.kKLEroJ5F4ZMCqRXCKgb_9XbOg3JgUFquXui6QBkq9E"
fundingLinks: ["GITHUB:https://github.com/shenxianpeng"]
discussionCount: 4
---

# Commit Check

## Table of Contents

- [Overview](#overview)
- [Quick Start](#quick-start)
- [Installation](#installation)
- [Configuration](#configuration)
  - [Use Default Configuration](#use-default-configuration)
  - [Use Custom Configuration File](#use-custom-configuration-file)
  - [Organization-Level Configuration (inherit_from)](#organization-level-configuration-inherit_from)
  - [Use CLI Arguments or Environment Variables](#use-cli-arguments-or-environment-variables)
  - [Check Push Safety](#check-push-safety)
- [AI-Native Usage](#ai-native-usage)
  - [Machine-Readable JSON Output (--format json)](#machine-readable-json-output---format-json)
  - [Quieter Human-Readable Output](#quieter-human-readable-output)
  - [Python API (no subprocess required)](#python-api-no-subprocess-required)
- [Examples](#examples)
- [Badging your repository](#badging-your-repository)
- [Why Commit Check?](#why-commit-check)
- [Versioning](#versioning)
- [Have question or feedback?](#have-question-or-feedback)
- [License](#license)

## Overview

**Commit Check** is a lightweight policy engine for Git commit metadata.

It validates commit messages, branch names, author identity, signoff…
