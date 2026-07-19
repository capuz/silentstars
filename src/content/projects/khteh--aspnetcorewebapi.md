---
repo: "khteh/AspNetCoreWebApi"
name: "AspNetCoreWebApi"
description: "ASP.NET 10.0 Web API with GRPC and SignalR application using Clean Architecture.  Includes Identity, JWT authentication w/ refresh tokens."
readmeQualityOk: true
url: "https://github.com/khteh/AspNetCoreWebApi"
language: "C#"
languages: ["C#"]
languagePcts: [97]
topics: ["asp-net-core", "asp-net-core-web-api", "asp-net-identity", "csharp", "dotnet-core", "grpc-service", "signalr", "clean-architecture", "http2-web-server", "postgresql"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2019-04-30T00:35:30Z"
lastCommitAt: "2026-07-19T06:12:58Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 82
undervaluedScore: 44
maintainers: ["khteh"]
openGraphImageUrl: "https://opengraph.githubassets.com/a40f0671b4ff9c00d5e20e093d9fec68f423fb1d875566762286c90f5f9d4833/khteh/AspNetCoreWebApi"
discussionCount: 0
---

# AspNetCoreWebApi

An ASP.NET 10.0 Web API, SignalR and GRPC project using Clean Architecture to quickly bootstrap new projects. Includes Identity, JWT authentication w/ refresh tokens. The design of the application is driven by both Domain-Driven-Design and Clean Architecture (https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html). It makes use of Command and Decorator pattern, and MediatR for in-process synchronous messaging.

# Development environment

- Copy `nuget.config.FIXME` to `nuget.config`
- Add `Username` and access token from github Developer Settings

# Database Setup

- Uses PostgreSQL.
- Install/update dotnet ef tool:

  ```
  $ dotnet tool install --global dotnet-ef
  $ dotnet tool update --global dotnet-ef
  ```

- Either run the application / `Web.Api.Infrastructure` project and the DB will be automatically created or:
- Apply database migrations to create the db. From a command line within the `Web.Api.Infrastructure` project folder use the dotnet CLI to run :

  ```
  $ cd src/Web.Api.Infrastructure
  $ dotnet ef database update -c AppDbContext
  $ dotnet ef database update -c AppIdentityDbContext
  ```

# SignalR Client Setup

- `npm…
