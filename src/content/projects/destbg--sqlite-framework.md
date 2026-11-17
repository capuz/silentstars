---
repo: "destbg/SQLite.Framework"
name: "SQLite.Framework"
description: "A lightweight ORM for SQLite, designed for .NET MAUI and Avalonia with AOT support and LINQ-style IQueryable querying"
readmeQualityOk: true
url: "https://github.com/destbg/SQLite.Framework"
homepage: "https://sqlite-framework.net/"
language: "C#"
languages: ["C#"]
languagePcts: [97]
topics: ["c-sharp", "database", "orm", "sqlite", "aot", "avalonia", "dotnet", "dotnet-core", "linq", "maui"]
stars: 29
forks: 2
openIssues: 0
closedIssues: 13
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-05-05T14:44:21Z"
lastCommitAt: "2026-11-17T12:15:15Z"
lastReleaseAt: "2025-05-08T18:12:45Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 63
maintainers: ["destbg", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/978149994/b25861e0-b32f-42f2-8c75-a65d0ec2ef3b"
---

# SQLite.Framework

LINQ-to-SQL for SQLite, with the LINQ surface of EF Core but without the runtime weight and without the trimming and AOT pain. Built for .NET MAUI, Avalonia and any other AOT-published .NET 8/9/10/11 app where you want to use full-featured `IQueryable` instead of hand-written SQL.

```csharp
SQLiteOptions options = new SQLiteOptionsBuilder("library.db")
    .UseMinimumSqliteVersion(SQLiteMinimumVersion.V3_36)
    .Build();
using var db = new SQLiteDatabase(options);

var authors = await (
    from b in db.Table<Book>()
    join a in db.Table<Author>() on b.AuthorId equals a.Id
    where b.Price > 10
    group b by a.Name into g
    orderby g.Sum(x => x.Price) descending
    select new
    {
        Author = g.Key,
        Books = g.Count(),
        Revenue = g.Sum(x => x.Price)
    }
).Skip(10).Take(20).ToListAsync();
```

That whole expression is one SQL query. The framework keeps the generated SQL close to the shape of the LINQ chain you wrote.

## Why this and not...

| You're using | What you'll like here | What you'll lose |
|---|---|---|
| **EF Core** | Same `IQueryable` shape, smaller dependency, AOT works with minimal setup. Lightweight stand-ins for…
