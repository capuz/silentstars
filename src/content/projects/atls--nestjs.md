---
repo: "atls/nestjs"
name: "nestjs"
description: "NestJS Custom Workshop"
url: "https://github.com/atls/nestjs"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["nestjs", "nestjs-library", "nestjs-tinkoff", "nestjs-aws", "nestjs-s3", "nestjs-logger", "nestjs-bus", "nestjs-signed-url", "nestjs-kratos", "nestjs-keto"]
stars: 38
forks: 9
openIssues: 8
closedIssues: 67
watchers: 6
contributors: 19
recentReleases: 0
createdAt: "2020-05-22T19:11:50Z"
lastCommitAt: "2026-06-23T23:17:55Z"
lastReleaseAt: "2025-01-24T11:48:11Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 87
undervaluedScore: 56
maintainers: ["TorinAsakura", "atlantis-terraformer-bot[bot]", "atlantis-courier[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/266188607/592e2833-03ad-41b8-a672-ba0a55f62c8c"
fundingLinks: ["CUSTOM:https://www.tbank.ru/cf/ANRIiFuP8ID"]
discussionCount: 0
---

![nestjs-github-cover](https://user-images.githubusercontent.com/102182195/235650080-e661338e-4466-43f7-84fc-f801558495eb.png)

# ATLS | NestJS

[English](README.md) | [Русский](README_RU.md)

NestJS Infrastructure-first toolkit

- CQRS, gRPC, Kafka, Auth, Storage

## What’s inside

### Transport

- gRPC (errors, reflection, playground, http-proxy)
- ConnectRPC (errors)
- GraphQL Gateway (redis-subscriptions)

### Messaging & Async

- Kafka (cqrs)
- CQRS
- Batch Queue

### Auth & Identity

- Hydra
- Kratos
- Keto
- gRPC Identity

### Persistence & Infra

- Redis
- S3 / GCS
- MikroORM / TypeORM
- Typesense (typeorm)
- Signed URL

### DX & Utilities

- Logger
- Validation
- Pipes
- Proto Types
- Dataloader
- Microservices Registry
- External Renderer

## Why this repo exists

- NestJS does not provide built-in modules for gRPC, Kafka, authentication systems,
  API gateways, or search engines
- In production, this usually turns into custom glue code
  and repeated infrastructure logic copied across services

This repository provides infrastructure-level modules for NestJS
that cover these concerns out of the box
and remove the need to reimplement the same infra in every project.

##…
