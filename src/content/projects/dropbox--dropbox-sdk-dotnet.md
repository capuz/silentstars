---
repo: "dropbox/dropbox-sdk-dotnet"
name: "dropbox-sdk-dotnet"
description: "The Official Dropbox API V2 SDK for .NET"
readmeQualityOk: true
url: "https://github.com/dropbox/dropbox-sdk-dotnet"
homepage: "https://www.dropbox.com/developers"
language: "C#"
languages: ["C#"]
languagePcts: [99]
topics: ["dotnet", "netstandard", "netframework", "sdk", "sdk-dotnet", "dropbox", "dropbox-sdk", "dropbox-api", "dropbox-v2"]
stars: 347
forks: 440
openIssues: 21
closedIssues: 108
watchers: 56
contributors: 36
recentReleases: 0
createdAt: "2015-06-17T04:16:18Z"
lastCommitAt: "2026-08-05T06:06:33Z"
lastReleaseAt: "2016-02-24T23:28:19Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 94
undervaluedScore: 45
maintainers: ["AndreyVMarkelov", "dropbox-sdk-updater[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/37572093/1a11ea80-f9b5-11ea-9ab5-01bb19edf4fa?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260805%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260805T060945Z&X-Amz-Expires=300&X-Amz-Signature=bfe756af3713f5853968f00187b3963798ff2105dead5589d011a3978fd4d54f&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTkxMDQ4NSwibmJmIjoxNzg1OTEwMTg1LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.rxJkGrOEI2Q4OQifqSq094kZ16poY9un61WZ5-u1mTQ"
---

## Important: Use v7.0.0 or newer of this SDK for compatibility with the Dropbox API servers. Older versions stopped working in January 2026. Please refer to this blog post for more information: https://dropbox.tech/developers/api-server-certificate-changes

The official Dropbox SDK for DotNet.

Documentation can be found on [GitHub Pages][documentation]

## Installation

Create an app via the [Developer Console][devconsole]

Install via [NuGet](https://www.nuget.org/)

```
PM> Install-Package Dropbox.Api
```

After installation, follow one of our [Examples][examples] or read the [Documentation][documentation].

You can also view our [OAuth guide][oauthguide].

## Examples

We provide [Examples][examples] to help get you started with a lot of the basic functionality in the SDK.

- **OAuth**
    - [OAuth Basic](https://github.com/dropbox/dropbox-sdk-dotnet/tree/main/dropbox-sdk-dotnet/Examples/OauthBasic) - Simple application that runs through a basic OAuth flow to acquire a token and make a call to users/get_current_account.
    - [OAuth PKCE](https://github.com/dropbox/dropbox-sdk-dotnet/tree/main/dropbox-sdk-dotnet/Examples/OAuthPKCE) - Simple application that runs through an…
