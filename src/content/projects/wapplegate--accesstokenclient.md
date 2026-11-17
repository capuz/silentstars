---
repo: "wapplegate/AccessTokenClient"
name: "AccessTokenClient"
description: "This .NET library simplifies client credentials access token requests with an access token client that can be reused for all your services."
readmeQualityOk: true
url: "https://github.com/wapplegate/AccessTokenClient"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["client", "credentials", "oauth"]
stars: 18
forks: 1
openIssues: 0
closedIssues: 1
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2020-05-30T14:52:52Z"
lastCommitAt: "2026-11-17T12:18:44Z"
lastReleaseAt: "2022-07-02T02:10:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 39
maintainers: ["wapplegate"]
openGraphImageUrl: "https://opengraph.githubassets.com/31c4149fe14ddd618230a182aa2e19b26272e6257d410fff5935a9ac0db60ec4/wapplegate/AccessTokenClient"
discussionCount: 0
---

# AccessTokenClient

This library provides an access token client that can be used to make client credentials OAuth requests. Instead of re-writing the same access token clients over and over again for services, use this package to make those token requests. The package also includes the ability to cache access tokens in memory so they can be reused and provides extension points for custom cache implementations.

## Installation

In order to begin using the token client, install the `AccessTokenClient` and `AccessTokenClient.Extensions` nuget packages. The extensions package includes a service collection extension method which will register the required services.

```csharp
public void ConfigureServices(IServiceCollection services)
{
    services.AddAccessTokenClient();
}
```

## Retrying Failed Token Requests

The `AddAccessTokenClient` extension method accepts an action that can be used to configure the `IHttpClientBuilder` used internally when registering the token client. A custom policy to retry failed requests to the token endpoint can be provided. The `AccessTokenClient.Extensions` package contains a default retry policy which can be used.

```csharp…
