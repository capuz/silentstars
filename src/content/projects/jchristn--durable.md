---
repo: "jchristn/Durable"
name: "Durable"
description: "A lightweight .NET ORM library with LINQ capabilities, designed with a clean, generic architecture that allows developers to build custom repository implementations without being constrained by opinionated base classes"
readmeQualityOk: true
url: "https://github.com/jchristn/Durable"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["database", "ef", "linq", "mysql", "orm", "postgres", "postgresql", "sqlite", "sqlserver"]
stars: 6
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-08-19T17:00:15Z"
lastCommitAt: "2026-08-16T04:09:33Z"
status: "thriving"
tags: []
healthScore: 100
undervaluedScore: 48
maintainers: ["jchristn"]
openGraphImageUrl: "https://opengraph.githubassets.com/40f4543b01b5d15bc96f989e5c16620363280792a3ac209303fea69d8142cb9d/jchristn/Durable"
discussionCount: 2
---

</div>

# Durable ORM

_**IMPORTANT** Durable is in ALPHA.  We appreciate your patience, feedback, and willingness to test this library in its early stages.  We welcome feedback, issues, and constructive criticism in the [Issues](https://github.com/jchristn/durable/issues) and [Discussions](https://github.com/jchristn/durable/discussions)_

A lightweight .NET ORM library with LINQ capabilities, designed with a clean, generic architecture that allows developers to build custom repository implementations without being constrained by opinionated base classes.

## Quick Start - Hello World

Here's a complete working example using SQLite:

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Durable;
using Durable.Sqlite;

// 1. Define your entity
[Entity("people")]
public class Person
{
    [Property("id", Flags.PrimaryKey | Flags.AutoIncrement)]
    public int Id { get; set; }

    [Property("first_name", Flags.String, 64)]
    public string FirstName { get; set; }

    [Property("last_name", Flags.String, 64)]
    public string LastName { get; set; }

    [Property("birthday")]
    public DateTime Birthday { get; set; }
}…
