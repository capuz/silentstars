---
repo: "ArkanisCorporation/Hosting.Extensions.1Password"
name: "Hosting.Extensions.1Password"
description: "Integrate 1Password secrets into .NET applications during development using the op CLI. Automatically resolves op:// references in IConfiguration."
url: "https://github.com/ArkanisCorporation/Hosting.Extensions.1Password"
homepage: "https://www.nuget.org/packages/Arkanis.Hosting.Extensions.1Password"
language: "C#"
languages: ["C#"]
languagePcts: [89]
topics: ["1password", "arkanis", "dotnet", "extensions", "hosting", "c-sharp", "csharp", "developer-tools", "integration", "net"]
stars: 15
forks: 0
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-12-17T18:42:49Z"
lastCommitAt: "2026-06-27T00:48:56Z"
lastReleaseAt: "2026-03-10T23:28:09Z"
status: "thriving"
tags: []
healthScore: 91
undervaluedScore: 46
maintainers: ["renovate[bot]", "FatalMerlin", "dolejska-daniel"]
openGraphImageUrl: "https://opengraph.githubassets.com/0793d5233a7bc4a2d11ffff42b252a12a556b301c74ec1e55535f2ae4874365d/ArkanisCorporation/Hosting.Extensions.1Password"
discussionCount: 0
---

# 🔐 Arkanis.Hosting.Extensions.1Password

**Seamlessly integrate 1Password secrets into your .NET applications during development.**

---

## ✨ Why This Library?

If you love 1Password (and who doesn't?) and want to bring that same level of security and convenience to your .NET development workflow, this library is for you.

**The Problem:** Managing secrets during development is painful. You don't want to commit API keys, connection strings, or passwords to source control, but you also don't want to juggle multiple files, environment variables, or complicated secret management systems just to run your app locally.

**The Solution:** This library bridges the gap between 1Password and your .NET application's configuration system. Just reference your 1Password secrets using the `op://` URI scheme in your existing configuration files, and let the library handle the rest. No changes to your existing configuration infrastructure required!

## 🚀 Features

- **🎯 Zero Configuration Changes Required** - Works seamlessly with your existing `IConfiguration` setup
- **🔄 Universal Compatibility** - Supports `appsettings.json`, environment variables, or any configuration source
- **⚡…
