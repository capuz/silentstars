---
repo: "JaCraig/SQLHelper"
name: "SQLHelper"
description: "SQLHelper is a wrapper around DbConnection/DbCommand and a micro ORM. It automatically handles batching, data conversion, transactions, etc. for you. It's been around even longer than Dapper as part various libraries I've had over the years. "
url: "https://github.com/JaCraig/SQLHelper"
homepage: "https://jacraig.github.io/SQLHelper/"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["database", "sql", "orm", "microorm"]
stars: 25
forks: 8
openIssues: 0
closedIssues: 4
watchers: 6
contributors: 1
recentReleases: 0
createdAt: "2016-11-29T18:14:42Z"
lastCommitAt: "2026-06-24T00:24:19Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 66
maintainers: ["JaCraig", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/75108917/af351e00-eb6c-11e9-8737-e9fc321c38ea"
---

# SQLHelper

SQLHelper is a simple class to help with running queries against a database.

## Basic Usage

In order to use the system, you do need register it with your ServiceCollection:

    serviceCollection.AddCanisterModules();

This is required prior to using the SQLHelper class for the first time. Once Canister is set up, you can use the SQLHelper class:

    var Configuration = new ConfigurationBuilder()
                .AddInMemoryCollection()
                .Build();
    var StringBuilderPool = serviceCollection
        .BuildServiceProvider()
        .GetService<ObjectPool<StringBuilder>>();
    var Instance = new SQLHelper(StringBuilderPool, Configuration);

Or simply ask for an instance using dependency injection:

    public MyClass(SQLHelper helper) { ... }

The SQLHelper class takes in an <code>ObjectPool&lt;StringBuilder&gt;</code>, an <code>IConfiguration</code>, and an optional logger. Once an instance is set up, you can create a batch, add queries, and then execute them.

    var Results = await Instance.CreateBatch()
                		   .AddQuery(CommandType.Text,"SELECT * FROM [TestDatabase].[dbo].[TestTable]")…
