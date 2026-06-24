---
repo: "OxyHQ/Mention"
name: "Mention"
description: "The Mention application for Web, Android and iOS. Mention by Oxy."
url: "https://github.com/OxyHQ/Mention"
homepage: "https://mention.earth"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["social-network", "expo", "oxy", "react-native", "typescript", "app"]
stars: 5
forks: 1
openIssues: 6
closedIssues: 57
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-12-07T01:41:02Z"
lastCommitAt: "2026-06-24T23:37:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 94
undervaluedScore: 85
maintainers: ["NateIsern"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/899773466/016bf854-8b7a-4064-ae29-9c8a5e7253dc"
fundingLinks: ["GITHUB:https://github.com/OxyHQ"]
discussionCount: 1
---

# Mention

> A modern, cross-platform social app built with Expo, React Native, TypeScript, and a Node.js/Express backend in a monorepo structure.

---

## Table of Contents
- [About](#about)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development Scripts](#development-scripts)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

---

## About

**Mention** is a universal social platform inspired by Twitter/X, designed for mobile and web. It features real-time feeds, user profiles, trends, notifications, and more. Built with Expo, React Native, and a Node.js backend in a modern monorepo structure, it supports file-based routing, multi-language support, and a modern UI.

## Project Structure

This is a **monorepo** using Bun workspaces with the following structure:

```
/
├── packages/            # All code packages
│   ├── frontend/        # Expo React Native app
│   │   ├── app/         # App entry, screens, and routing
│   │   │   ├── [username]/  # User profile, followers, following
│   │   │   ├── ai/          # AI assistant (Alia chat)
│   │   │   ├── p/[id]/      # Post details, replies, quotes…
