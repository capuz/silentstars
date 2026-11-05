---
repo: "BrighterCommand/Darker"
name: "Darker"
description: "The query-side counterpart of Brighter"
readmeQualityOk: true
url: "https://github.com/BrighterCommand/Darker"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["dotnet-core", "darker", "brighter", "handlers", "query"]
stars: 258
forks: 26
openIssues: 0
closedIssues: 48
watchers: 12
contributors: 14
recentReleases: 0
createdAt: "2016-07-27T16:33:03Z"
lastCommitAt: "2026-11-05T11:25:25Z"
lastReleaseAt: "2017-10-31T20:37:14Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 100
undervaluedScore: 40
maintainers: ["iancooper"]
openGraphImageUrl: "https://opengraph.githubassets.com/b648a3af2b654b1c5e8fd81855078646373149e08115883ae093e31b5fb02f1f/BrighterCommand/Darker"
discussionCount: 2
---

# Darker
The query-side counterpart of [Brighter](https://github.com/BrighterCommand/Paramore.Brighter).

## Usage with Microsoft.Extensions.DependencyInjection
In your `ConfigureServices` method, use `AddDarker` to add Darker to the container.
DI integration is provided by the [Paramore.Darker.Extensions.DependencyInjection](https://www.nuget.org/packages/Paramore.Darker.Extensions.DependencyInjection) package.

```csharp
// This method gets called by the runtime. Use this method to add services to the container.
public void ConfigureServices(IServiceCollection services)
{
    // Add Darker and some extensions.
    services.AddDarker()
        .AddHandlersFromAssemblies(typeof(GetPeopleQueryHandler).Assembly)
        .AddJsonQueryLogging()
        .AddDefaultResiliencePipelines();

    // Add framework services.
    services.AddMvc();
}
```
**EF Core and the request scope.** EF Core registers the `DbContext` as Scoped. A Scoped `QueryProcessor` gets a sibling scope, so it does **not** share the request's `DbContext`. To share it, use Scoped handlers and opt in to the request scope with the `Paramore.Darker.Extensions.AspNetCore` package:
```csharp…
