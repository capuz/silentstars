---
repo: "ForNeVeR/rider-plugin-template"
name: "rider-plugin-template"
description: "JetBrains Rider plugin template"
readmeQualityOk: true
url: "https://github.com/ForNeVeR/rider-plugin-template"
language: "Kotlin"
languages: ["Kotlin", "PowerShell"]
languagePcts: [54, 28]
stars: 14
forks: 5
openIssues: 5
closedIssues: 12
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2024-05-09T15:09:22Z"
lastCommitAt: "2026-09-18T21:32:22Z"
lastReleaseAt: "2026-08-02T19:25:15Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 90
undervaluedScore: 60
maintainers: ["renovate[bot]", "github-actions[bot]", "ForNeVeR"]
openGraphImageUrl: "https://opengraph.githubassets.com/23fd0278c4e07758a8d5ac076acd28923879e93102c20bc618208cc604db1a39/ForNeVeR/rider-plugin-template"
---

JetBrains Rider Plugin Template [][nuget.page] [][jetbrains.opensource]
===============================
This is a template of plugin for JetBrains Rider, including:
- a backend part,
- a frontend part,
- a protocol to connect between those,
- an integration test example.

Installing Template
-------------------

### From NuGet
```console
$ dotnet new install FVNever.Rider.Plugin.Template
```

If you need a preview version, then specify a version explicitly, e.g.
```console
$ dotnet new install FVNever.Rider.Plugin.Template::251.0.0-eap08
```

### From Sources
1. Fork or clone the repository.
2. Create a local NuGet package:
   ```console
   $ dotnet pack -o ./output
   ```
   Your NuGet package will be generated in the `./output/` folder.
3. Install the template:
   ```console
   $ dotnet new install ./output/FVNever.Rider.Plugin.Template.*.nupkg
   ```

Using the Template
------------------
Create a project from the template:
```console
$ dotnet new jetbrains-rider-plugin [--name YourNewPlugin] [--output YourNewPluginPath]
```

Execute the following shell command in the plugin directory. It will prepare it for work:
```console
$ ./gradlew prepare
```
After that, the plugin is…
