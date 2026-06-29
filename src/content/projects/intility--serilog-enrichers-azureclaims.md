---
repo: "intility/serilog-enrichers-azureclaims"
name: "serilog-enrichers-azureclaims"
description: "A Serilog enricher that enriches the log event with claims from Azure v1 and v2 accesstokens."
url: "https://github.com/intility/serilog-enrichers-azureclaims"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["accesstoken", "serilog", "serilog-enricher"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 2
watchers: 4
contributors: 27
recentReleases: 0
createdAt: "2023-06-22T13:47:26Z"
lastCommitAt: "2026-06-29T07:22:58Z"
lastReleaseAt: "2024-11-22T12:35:06Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 60
maintainers: ["dependabot[bot]", "serilog-enrichers-release-bot[bot]", "loekensgard"]
openGraphImageUrl: "https://opengraph.githubassets.com/b9aeb22269a067bc4d1ac6228b5659c51fc0b8f114b895d6d8b362bd1f4b9981/intility/serilog-enrichers-azureclaims"
---

# Serilog.Enrichers.AzureClaims and Serilog.Enrichers.Claims
Enriches Serilog events with information from the ClaimsPrincipal.

Install the _Serilog.Enrichers.AzureClaims_ [NuGet package](https://www.nuget.org/packages/Serilog.Enrichers.AzureClaims/)  
Install the _Serilog.Enrichers.Claims_ [NuGet package](https://www.nuget.org/packages/Serilog.Enrichers.Claims/)

```powershell
Install-Package Serilog.Enrichers.AzureClaims
Install-Package Serilog.Enrichers.Claims
```

Then, apply the enricher to your `LoggerConfiguration`:

```csharp
Log.Logger = new LoggerConfiguration()
    .Enrich.WithUpn()
    .Enrich.WithDisplayName()
    .Enrich.WithTenantId()
    .Enrich.WithObjectId()
    .Enrich.WithAppId()
    .Enrich.WithCustomClaim("AnyExistingClaim") // Available from Serilog.Enrichers.Claims
    // ...other configuration...
    .CreateLogger();
```

### Included enrichers

#### Available from Serilog.Enrichers.AzureClaims

 * `WithUpn()` - adds `UserPrincipalName` based on the ClaimType `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn`
 * `WithDisplayName()` - adds `DisplayName` based on the ClaimType `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name` or `name`…
