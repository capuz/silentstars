---
repo: "microsoft/dynwinrt"
name: "dynwinrt"
description: "Use WinRT methods dynamically"
readmeQualityOk: true
url: "https://github.com/microsoft/dynwinrt"
language: "Rust"
languages: ["Rust"]
languagePcts: [84]
stars: 12
forks: 3
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 20
recentReleases: 10
createdAt: "2026-04-03T04:08:42Z"
lastCommitAt: "2026-07-16T06:00:14Z"
lastReleaseAt: "2026-07-13T09:06:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 55
maintainers: ["lei9444", "dependabot[bot]", "microsoft-github-policy-service[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/286b60b24b67a192dc811b80c0089c855d29d8153fdaae9ed12b57bb04e118ea/microsoft/dynwinrt"
---

# dynwinrt

**Call any Windows Runtime (WinRT) API from JavaScript or TypeScript — without writing a native addon.**

## Why dynwinrt?

If you've ever tried to call a modern Windows API (WinAppSDK, Windows AI, notifications, file pickers, sensors, …) from an Electron, Node, or Python app, you've probably hit one of these walls:

- **Writing a C++ `node-addon-api` addon** — needs `node-gyp`, MSVC, Python, the matching Windows SDK, and a CI matrix per Electron version.
- **Writing a C# addon via `node-api-dotnet`** — needs the .NET SDK, a `csproj` build step, and a hand-maintained wrapper for every API surface you want to expose.
- **Waiting for an official projection** — Windows ships `.winmd` metadata months before any JavaScript- or Python-friendly projection appears in a published package.

`dynwinrt` removes all of that. It reads the same `.winmd` metadata your Windows SDK / WinAppSDK NuGet packages already ship and calls the underlying COM vtables **dynamically at runtime via libffi**. The codegen emits typed `.js` + `.d.ts` wrappers; the runtime invokes them through `dynwinrt`'s native binary. No MSBuild step in your app, no `node-gyp`, no per-Windows-version recompile.…
