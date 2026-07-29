---
repo: "OxyHQ/Mention"
name: "Mention"
description: "The Mention application for Web, Android and iOS. Mention by Oxy."
readmeQualityOk: true
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
contributors: 4
recentReleases: 0
createdAt: "2024-12-07T01:41:02Z"
lastCommitAt: "2026-07-29T06:15:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 96
undervaluedScore: 85
maintainers: ["NateIsern"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/899773466/016bf854-8b7a-4064-ae29-9c8a5e7253dc?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260729%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260729T061702Z&X-Amz-Expires=300&X-Amz-Signature=60e8005a54c2f231684a574a056b272af49a9a3889f5a6dc0403748abc05135e&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTMwNjEyMiwibmJmIjoxNzg1MzA1ODIyLCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.FR1jOZo_cL2wDjKjvEZ7VYK4ey4BeZFmefXAoghA4P8"
fundingLinks: ["GITHUB:https://github.com/OxyHQ"]
discussionCount: 1
---

# Mention

Mention is a social app for iOS, Android, and the web. It combines an Expo
client, an Express API, a signed-record layer (MTN), ActivityPub federation,
and a remote MCP server in one Bun workspace.

## Repository

| Workspace | Purpose |
| --- | --- |
| `packages/frontend` | Expo 56 / React Native 0.85 / React 19 app |
| `packages/backend` | Express 5 API, Socket.IO, workers, federation, and MTN |
| `packages/shared-types` | Shared TypeScript contracts |
| `packages/mcp` | Remote and local Model Context Protocol server |

Oxy owns account identity and the social graph. Mention owns posts, feeds,
engagement, notifications, Mention-specific settings, and federation state.
Live rooms use `@syra.fm/sdk` and load only when needed.

## Requirements

- Bun 1.3.14
- Node.js 22.17.0
- Docker with Compose for the local data plane
- Xcode or Android Studio only when running the corresponding native target

Install exactly from the lockfile, then validate the toolchain:

```sh
bun install --frozen-lockfile
bun run doctor
```

`doctor` checks the runtime, workspace links, and the pinned Expo, React,
React Native, Bloom, and shared-types versions.

## Local development

The local…
