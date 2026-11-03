---
repo: "soenneker/soenneker.validators.gmail.exists"
name: "soenneker.validators.gmail.exists"
description: "A validation module checking for Gmail account existence"
readmeQualityOk: true
url: "https://github.com/soenneker/soenneker.validators.gmail.exists"
homepage: "https://soenneker.com"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["csharp", "dotnet", "email", "exists", "gmail", "google", "validator", "validators", "gmailexistsvalidator"]
stars: 5
forks: 2
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-10-23T00:23:18Z"
lastCommitAt: "2026-11-03T12:47:57Z"
lastReleaseAt: "2025-05-09T15:29:11Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 79
undervaluedScore: 73
maintainers: ["soenneker", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7b08a6530ed754151f9f205178b0457ea92538c7e3a63d11291b8fed706fd5ef/soenneker/soenneker.validators.gmail.exists"
fundingLinks: ["GITHUB:https://github.com/soenneker"]
discussionCount: 0
---

# Soenneker.Validators.Gmail.Exists

Applies a Google Calendar response-header heuristic that may indicate whether a Gmail address has an account.

## Install

```bash
dotnet add package Soenneker.Validators.Gmail.Exists
```

## Registration

```csharp
using Soenneker.Validators.Gmail.Exists.Registrars;
using Microsoft.Extensions.DependencyInjection;

services.AddGmailExistsValidatorAsSingleton();
```

Scoped registration is also available. Both registrations reuse singleton HTTP-client-cache and rate-limiter-factory services. Disposing a scoped validator does not evict or dispose the shared named HTTP client.

## Configure request spacing

```json
{
  "GmailExistsValidator": {
    "IntervalMs": 3000
  }
}
```

The default interval is 3,000 milliseconds. `EmailExists` routes calls through a shared named rate limiter using this interval.

## Check an address

```csharp
using Soenneker.Validators.Gmail.Exists.Abstract;

bool? result = await validator.EmailExists(
    "person@gmail.com",
    cancellationToken);
```

The address is escaped as one URL path component and sent to Google's public Calendar ICS endpoint. The response is considered a positive match only when an…
