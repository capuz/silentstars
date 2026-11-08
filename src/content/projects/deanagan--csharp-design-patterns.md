---
repo: "deanagan/csharp-design-patterns"
name: "csharp-design-patterns"
description: "A demo for design patterns written in C# with Moq, Xunit and FluentAssertions"
readmeQualityOk: true
url: "https://github.com/deanagan/csharp-design-patterns"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["moq", "csharp", "fluentassertions", "fluent-assertions", "xunit", "xunit-tests", "design-patterns", "demo"]
stars: 17
forks: 3
openIssues: 5
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2019-10-14T11:27:19Z"
lastCommitAt: "2026-11-08T10:41:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 85
undervaluedScore: 52
maintainers: ["deanagan"]
openGraphImageUrl: "https://opengraph.githubassets.com/8fc5572c13510f1b832c7bf593e4d7cb982403c47e5df87e8d732462190003d1/deanagan/csharp-design-patterns"
---

# C# Design Patterns

A collection of GoF design pattern examples written in C#. Each pattern has a
source project and, where applicable, a corresponding test project under
`Patterns/`.

## Requirements

- .NET 10 SDK

## Design patterns

- Abstract Factory
- Adapter
- Bridge
- Builder
- Chain of Responsibility
- Command
- Composite
- Decorator
- Facade
- Factory Method
- Flyweight
- Iterator
- Mediator
- Memento
- Observer
- Prototype
- Proxy
- Singleton with Dependency Injection
- State
- Strategy
- Template Method
- Visitor

## Build and test

Run these commands from the repository root:

```sh
dotnet restore DesignPatterns.slnx
dotnet build DesignPatterns.slnx --no-restore
dotnet test DesignPatterns.slnx --no-build
```

The test projects use xUnit. The repository is migrating to NSubstitute for
mocking and Shouldly for assertions; use these for new and updated tests.

## Code coverage

Collect coverage for all test projects with Coverlet:

```sh
dotnet test DesignPatterns.slnx \
  --collect:"XPlat Code Coverage" \
  --results-directory ./coverage-results
```

Install ReportGenerator once, then create an HTML report and coverage summary:

```sh
dotnet tool install…
