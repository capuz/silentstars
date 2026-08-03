---
repo: "intility/json-api-toolkit"
name: "json-api-toolkit"
description: "Build JSON:API endpoints in ASP.NET Core."
readmeQualityOk: true
url: "https://github.com/intility/json-api-toolkit"
homepage: "https://intility.github.io/json-api-toolkit/"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["dotnet", "csharp", "ef-core", "json-api", "secmgmt"]
stars: 7
forks: 0
openIssues: 10
closedIssues: 24
watchers: 2
contributors: 25
recentReleases: 0
createdAt: "2025-03-11T08:39:06Z"
lastCommitAt: "2026-08-03T06:43:11Z"
lastReleaseAt: "2025-03-19T12:20:36Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 74
maintainers: ["dependabot[bot]", "erlendellefsen", "intility-release-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9db864baea221d110db6918b7597b7befa3809d15fde6e6aed6774b27f773126/intility/json-api-toolkit"
---

<h1 align="center">
  JsonApiToolkit
</h1>

    <em>Build JSON:API endpoints in ASP.NET Core.</em>
</p>
    </a>
    </a>
    </a>
    </a>
    </a>
</p>

## Description

JsonApiToolkit translates [JSON:API](https://jsonapi.org/) query parameters (`filter[]`, `sort`, `include`, `fields[]`, `page[]`) into typed EF Core queries and shapes responses as spec-compliant documents, so your ASP.NET Core controllers stay short.

## Installation

```bash
dotnet add package Intility.JsonApiToolkit
```

## Usage

Register the toolkit in `Program.cs`:

```csharp
builder.Services.AddJsonApiToolkit();
```

Derive controllers from `JsonApiController` and let `JsonApiQueryAsync` handle the request:

```csharp
public class BooksController : JsonApiController
{
    private const string ResourceType = "book";

    [HttpGet]
    [AllowedIncludes("author", "publisher")]
    public async Task<IActionResult> GetAllAsync()
    {
        return await JsonApiQueryAsync(_dbContext.Books, ResourceType);
    }
}
```

Then call the endpoint with JSON:API query parameters:

```
GET /api/books?filter[title]=javascript&include=author&fields[book]=title,published&page[size]=10&sort=-published
```

## What it…
