---
repo: "aws/aws-dotnet-distributed-cache-provider"
name: "aws-dotnet-distributed-cache-provider"
description: "An IDistributedCache implementation backed by Amazon DynamoDB."
readmeQualityOk: true
url: "https://github.com/aws/aws-dotnet-distributed-cache-provider"
homepage: "https://www.nuget.org/packages/AWS.AspNetCore.DistributedCacheProvider"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 47
forks: 3
openIssues: 2
closedIssues: 2
watchers: 5
contributors: 24
recentReleases: 0
createdAt: "2022-06-24T19:36:48Z"
lastCommitAt: "2026-08-28T14:19:21Z"
lastReleaseAt: "2026-03-19T20:08:50Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 65
undervaluedScore: 31
maintainers: ["AlexDaines", "aws-sdk-dotnet-automation", "philasmar"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5966a63874c6a5ae9d5dbe6ef155248afc3b17ab600f077e6dc340b67bc9997/aws/aws-dotnet-distributed-cache-provider"
discussionCount: 3
---

# AWS .NET Distributed Cache Provider [ ](https://www.nuget.org/packages/AWS.AspNetCore.DistributedCacheProvider/)
The AWS .NET Distributed Cache Provider provides an implementation of the ASP.NET Core interface [IDistributedCache](https://docs.microsoft.com/en-us/aspnet/core/performance/caching/distributed) backed by Amazon DynamoDB. A common use of an `IDistributedCache` implementation is to store ephemeral, non-critical [session state](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/app-state?#session-state) data in ASP.NET Core applications.

# Getting Started
Install the [AWS.AspNetCore.DistributedCacheProvider](https://www.nuget.org/packages/AWS.AspNetCore.DistributedCacheProvider/) package from NuGet.

.NET uses [dependency injection](https://learn.microsoft.com/en-us/dotnet/core/extensions/dependency-injection) to provide services to different objects that rely on them. This library provides extensions to assist the user in injecting this implementation of `IDistributedCache` as a service for other objects to consume.

## Sample
For example, if you are building an application that requires the use of sessions in a distributed webapp, .NET's session state…
