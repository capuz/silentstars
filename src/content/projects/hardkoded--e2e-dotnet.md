---
repo: "hardkoded/e2e-dotnet"
name: "e2e-dotnet"
description: "Community .NET port of the e2e agentic testing framework."
readmeQualityOk: true
url: "https://github.com/hardkoded/e2e-dotnet"
homepage: "https://hardkoded.com/e2e-dotnet"
language: "C#"
languages: ["C#"]
languagePcts: [96]
stars: 11
forks: 1
openIssues: 41
closedIssues: 320
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-10-02T21:56:39Z"
lastCommitAt: "2026-10-30T11:03:37Z"
lastReleaseAt: "2026-10-18T22:18:34Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 97
undervaluedScore: 60
maintainers: ["kblok", "claude", "coderabbitai[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b964eacf66606e4f384f875c4c52e3e2e715478c9f4b4867879711a421fc369f/hardkoded/e2e-dotnet"
fundingLinks: ["GITHUB:https://github.com/hardkoded"]
---

# E2E for .NET

Community [.NET](https://dotnet.microsoft.com) port of [e2e](https://github.com/tester-army/e2e), the agentic end-to-end testing framework. Describe a goal in natural language, let an agent drive the app, then check the result with locators.

This is **not** an official TesterArmy product and is not endorsed by TesterArmy. It reimplements the public testing flow. It does not copy the TypeScript sources. Behavior that is intentionally different is listed in [COMPATIBILITY.md](https://github.com/hardkoded/e2e-dotnet/blob/HEAD/COMPATIBILITY.md).

License: Apache License 2.0. Copyright 2026 TesterArmy.

Docs and API reference: https://www.hardkoded.com/e2e-dotnet/

## Install

```bash
dotnet add package E2E
dotnet add package E2E.NUnit   # or E2E.XUnit.V3 for xUnit v3
```

The library targets `net10.0` and includes `WebEngine`, which drives Chromium, Firefox, or WebKit through [Microsoft.Playwright](https://playwright.dev/dotnet/); `WebEngineOptions.BrowserName` picks one, and Chromium is the default. `Connect` and a `Browser` provider attach over CDP, so they need Chromium. The first `WebEngine` launch in a process installs the browser it launches, so the first run…
