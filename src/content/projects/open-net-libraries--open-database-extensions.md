---
repo: "Open-NET-Libraries/Open.Database.Extensions"
name: "Open.Database.Extensions"
description: "Useful set of utilities and abstractions for simplifying modern data-access operations and ensuring DI compatibility. "
readmeQualityOk: true
url: "https://github.com/Open-NET-Libraries/Open.Database.Extensions"
homepage: "https://electricessence.github.io/Open.Database.Extensions/api/index.html"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["csharp", "dotnet", "database", "extensions", "sqlclient", "asynchronous", "expressive", "ado", "async-await", "data-flow"]
stars: 24
forks: 3
openIssues: 0
closedIssues: 1
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2018-01-12T06:11:46Z"
lastCommitAt: "2026-11-05T00:21:50Z"
lastReleaseAt: "2018-04-01T22:21:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 85
undervaluedScore: 55
maintainers: ["electricessence"]
openGraphImageUrl: "https://opengraph.githubassets.com/f0e56b04baf05909b087a00522a67c284c134a35d652b92b3d3a299b720bd884/Open-NET-Libraries/Open.Database.Extensions"
---

# Open.Database.Extensions

Useful set of utilities and abstractions for simplifying modern database operations and ensuring dependency injection compatibility.

## Principles

- Minimize connection open time.
- Deferred/lazy transformation.
- Optimize for specific use cases.
- Minimize boilerplate code.

## Features
- Provides a fluent interface for database operations.
- Supports dependency injection for connection factories.
- Support both synchronous and asynchronous operations.
- Provides expressive commands for executing SQL queries and stored procedures.

### Connection Factories

Connection factories facilitate creation and disposal of connections without the concern of a connection reference or need for awareness of a connection string.
A `SqlConnectionFactory` is provided and can be overridden to provide more specific dependency injection configurations.

### Expressive Commands

The provided expressive command classes allow for an expressive means to append parameters and execute the results without lengthy complicated setup.

Extensions are provided to create commands from connection factories.

### Example

```cs
var result = connectionFactory…
