---
repo: "soenneker/soenneker.blazor.turnstile"
name: "soenneker.blazor.turnstile"
description: "A Blazor interop library for Cloudflare Turnstile"
readmeQualityOk: true
url: "https://github.com/soenneker/soenneker.blazor.turnstile"
homepage: "https://soenneker.com"
language: "CSS"
languages: ["CSS"]
languagePcts: [86]
topics: ["blazor", "cloudflare", "csharp", "dotnet", "interop", "turnstile"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-06-09T14:54:05Z"
lastCommitAt: "2026-07-31T06:31:06Z"
lastReleaseAt: "2025-05-08T10:23:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 71
maintainers: ["renovate[bot]", "soenneker"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c562ab2e554616c11a6353b07ed8a80ca71ec3403851619eca918fcc5a707ba/soenneker/soenneker.blazor.turnstile"
fundingLinks: ["GITHUB:https://github.com/soenneker"]
discussionCount: 0
---

#  Soenneker.Blazor.Turnstile
### A Blazor interop library for Cloudflare Turnstile

This library simplifies the integration of Cloudflare Turnstile into Blazor applications, providing access to options, methods, and events. A demo project showcasing common usages is included.

Please refer to the [Cloudflare documentation](https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/) for further details.

## Installation

```
dotnet add package Soenneker.Blazor.Turnstile
```

### 1. Add the following to your `Startup.cs` file

```csharp
public void ConfigureServices(IServiceCollection services)
{
    services.AddTurnstileInteropAsScoped();
}
```

## Usage

```razor
@using Soenneker.Blazor.Turnstile

<Turnstile @ref="_turnstile" OnCallback="OnCallback" Options="_options" ></Turnstile>

@code{
    private readonly TurnstileOptions _options = new()
    {
        SiteKey = "1x00000000000000000000AA" // Testing key
    };

    private void OnCallback(string token)
    {
        // Send this token to your server for validation
        Logger.LogInformation("OnCallback fired, token: {token}", token);
    }
}
```

?? While 95%+ of the Cloudflare Turnstile JS has been…
