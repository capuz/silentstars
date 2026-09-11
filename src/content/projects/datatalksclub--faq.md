---
repo: "DataTalksClub/faq"
name: "faq"
description: "FAQ for Zoomcamp courses"
readmeQualityOk: true
url: "https://github.com/DataTalksClub/faq"
homepage: "http://datatalks.club/faq/"
language: "Python"
languages: ["Python"]
languagePcts: [95]
stars: 7
forks: 18
openIssues: 0
closedIssues: 215
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2025-09-17T08:56:59Z"
lastCommitAt: "2026-09-11T08:14:41Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 98
undervaluedScore: 93
maintainers: ["alexeygrigorev", "github-actions[bot]", "Franky007Bond"]
openGraphImageUrl: "https://opengraph.githubassets.com/c5b1e6376d18d2c4506c1d3b678ddc4f525edb74d43099cdd5e4d2dc55236e40/DataTalksClub/faq"
---

# DataTalks.Club FAQ

Answers to the questions DataTalks.Club Zoomcamp students regularly ask, so they
can find them quickly. It's available at
[datatalks.club/faq](https://datatalks.club/faq).

Each course cohort brings thousands of students. They have the same problems:

- a Docker mount that fails on Windows
- an API that changed since the video was recorded
- a homework answer that doesn't match any of the options

The instructors have to answer the same question in every cohort. In this FAQ database,
we collect all these questions, so they can be used to help the students. We also
use it for the FAQ assistant in Slack to answer these questions automatically.

## Overview

The repository has several parts:

- [Content](#content) (`_questions/`): the answers, one markdown file per
  question, 1395 of them across 6 courses
- [FAQ automation](#faq-automation) (`faq_automation/`): the automation that
  reads a student's proposal issue and opens a pull request, or closes the issue
  if it's already answered
- [Evals](#evals) (`faq_automation/evals/`): test cases that measure how well the
  automation finds existing entries and picks the right action
- [Skills](#skills)…
