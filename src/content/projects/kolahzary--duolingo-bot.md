---
repo: "Kolahzary/Duolingo-bot"
name: "Duolingo-bot"
description: "Tired of streak anxiety? Welcome to the resistance!"
readmeQualityOk: true
url: "https://github.com/Kolahzary/Duolingo-bot"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["duolingo", "duolingo-hack", "duolingo-streak"]
stars: 5
forks: 9
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-11-29T18:32:26Z"
lastCommitAt: "2026-10-24T00:15:43Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 83
undervaluedScore: 80
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7920d6e9723ca5d004d58f550795dbfdd2636c662d88a3d53817092bd772470/Kolahzary/Duolingo-bot"
---

# Duolingo Bot

A Playwright-based bot to automate Duolingo interactions and maintain your streak.

## Motivation

Duolingo is a fantastic app for learning languages. However, the gamification mechanics—specifically the streak—can sometimes have the opposite effect. Instead of being a motivating tool for learning, it can become a daily chore. Many users find themselves logging in just to "keep the streak alive," focusing on the number rather than the actual learning.

The app transforms from a helpful educational tool into a source of anxiety, where you commit time solely to avoid losing your progress. If you find yourself in this position—enslaved by the streak and not using Duolingo for its intended purpose—this script is for you.

Consider this your path to freedom. Keep your streak, but reclaim your time.

## TLDR; How can I automate my streak protection?

1.  **Fork the repository** and clone your fork locally.
2.  **Authenticate**: Follow the [Secure Authentication Setup](#secure-authentication-setup) guide below to generate your encrypted state.
3.  **Configure Schedule**: Optionally, customize the cron schedule in `.github/workflows/streak-keeper.yml` to run whenever you…
