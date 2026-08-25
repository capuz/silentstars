---
repo: "bnussman/beep"
name: "beep"
description: "Monorepo for Ride Beep App. Ride Beep App 🚕 is a rideshare platform for college students at any colleges and university."
readmeQualityOk: true
url: "https://github.com/bnussman/beep"
homepage: "https://ridebeep.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["postgresql", "typescript", "react-native", "bun", "trpc", "redis", "vite"]
stars: 30
forks: 11
openIssues: 5
closedIssues: 75
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2021-04-22T18:01:52Z"
lastCommitAt: "2026-08-25T04:09:57Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 98
undervaluedScore: 65
maintainers: ["bnussman"]
openGraphImageUrl: "https://opengraph.githubassets.com/3072d358ba514adf65a8df5aa452f523b7696fe158d8b1576353e800ee84b187/bnussman/beep"
discussionCount: 0
---

# Beep App 🚕

## 📚 Introduction

This is the monorepo for the Beep App. The *Beep App* is a full stack ride share application. This app is built for students at any college campus but is mostly used by students at Appalachian State University. This application is not afilliated with any university and is independently developed and maintained.

## ⌨️ Developing Locally

### Dependencies

#### Required
- [Bun](https://bun.sh/docs/installation)
- [Node.js](https://nodejs.org/) (I reccomend using [Volta](https://docs.volta.sh/guide/getting-started) to install)
- [pnpm](https://pnpm.io/installation)
- [Docker Compose](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository)

#### Optional
- [EAS CLI](https://github.com/expo/eas-cli?tab=readme-ov-file#installation) (only needed if you're going to build releases for the app)

### 💻 Running Locally

Fork this repository
```
git clone <url of your fork>
```

Go into the projects directory
```
cd beep
```

Install dependencies
```
pnpm i
```

Bring local db and redis up with Docker
```
docker-compose up -d
```

Create the database schema (run this in the `api/` directory)
```
pnpm db:push
```

To run the development…
