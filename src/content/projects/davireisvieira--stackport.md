---
repo: "DaviReisVieira/stackport"
name: "stackport"
description: "Open-source web console and UI for AWS Emulator, MiniStack, Floci, LocalStack, Moto and real AWS: live dashboard, resource browser, API explorer"
readmeQualityOk: true
url: "https://github.com/DaviReisVieira/stackport"
homepage: "https://stackport.cloud"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [53, 46]
topics: ["aws", "aws-emulator", "developer-tools", "devtools", "fastapi", "localstack", "react", "s3-browser", "ministack", "docker"]
stars: 179
forks: 30
openIssues: 26
closedIssues: 103
watchers: 2
contributors: 11
recentReleases: 0
createdAt: "2026-04-05T23:13:31Z"
lastCommitAt: "2026-11-16T11:54:06Z"
lastReleaseAt: "2026-04-26T21:23:00Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 92
undervaluedScore: 33
maintainers: ["DaviReisVieira", "vaibhavkr993630-droid", "amjadjibon"]
openGraphImageUrl: "https://opengraph.githubassets.com/3541f7270c51a80a1960ca8f08422994ab169a3277c44219472350744509fb04/DaviReisVieira/stackport"
discussionCount: 1
---

## Why StackPort

Local emulators give you AWS on your laptop. StackPort gives you a console to look at it with: a web UI and dashboard that works the same way whichever emulator you run. It's open source, runs locally with one command, and needs no AWS account. It can point at a real AWS account too, with a single setting to make it read-only.

## Works with

| Emulator | Default endpoint | How StackPort connects | Quick start |
|---|---|---|---|
| [AWS Emulator](https://github.com/aws/aws-emulator) | `https://127.0.0.1:9297` | HTTPS. Finds the keys and certificate the emulator writes to `~/.aws/emulator/<port>/` by itself, and the new ones after a restart | [AWS Emulator](#aws-emulator) |
| [MiniStack](https://github.com/ministackorg/ministack) | `http://localhost:4566` | HTTP, any access key (`test`) | [MiniStack](#ministack) |
| [Floci](https://github.com/floci-io/floci) | `http://localhost:4566` | HTTP, any access key (`test`) | [Floci](#floci) |
| [LocalStack](https://github.com/localstack/localstack) | `http://localhost:4566` | HTTP, any access key (`test`) | [LocalStack](#localstack) |
| [Moto](https://github.com/getmoto/moto) | `http://localhost:5000` | HTTP, any access…
