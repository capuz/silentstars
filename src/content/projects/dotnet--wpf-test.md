---
repo: "dotnet/wpf-test"
name: "wpf-test"
description: "WPF is a .NET Core UI framework for building Windows desktop applications.  wpf-test contains test infrastructure and test collateral for the WPF framework. "
readmeQualityOk: true
url: "https://github.com/dotnet/wpf-test"
language: "C#"
languages: ["C#"]
languagePcts: [81]
topics: ["wpf"]
stars: 72
forks: 33
openIssues: 37
closedIssues: 24
watchers: 6
contributors: 439
recentReleases: 0
createdAt: "2021-05-14T21:35:01Z"
lastCommitAt: "2026-09-29T08:10:36Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 86
undervaluedScore: 27
maintainers: ["dotnet-maestro[bot]", "himgoyalmicro"]
openGraphImageUrl: "https://opengraph.githubassets.com/7fb9a107c0c1ef62f1960a9c87a98822da718d894a5375e7b35a66f1056eeaa3/dotnet/wpf-test"
---

# Windows Presentation Foundation (WPF) Test

This repository contains the source code of the tests for WPF UI Framework. It has the test infrastructure and different suites of tests ( DRTs, Microsuites and Feature Tests) for testing different areas of WPF. 

This repo is currently under the process of being open-sourced. We are tracking the progress here [Test Repository Migration](https://github.com/orgs/dotnet/projects/145)

## Getting started

Follow the [Developer Guide](https://github.com/dotnet/wpf-test/blob/HEAD/docs/developer-guide.md) instructions for machine setup and understanding the workflow.

### Quickstart

In order to run the tests on your local machine,

- Build the tests with `build.cmd` script. Use `/help` parameter to check the different arguments that can be passed along with the build command.
- cd into `$(RepoRoot)\publish\test\$(Configuration)\$(Platform)\Test` and run `RunDrts.cmd` to run the DRT tests.

At the end of the run, you should see something like this:

```
  A total of 84 test Infos were processed, with the following results.
   Passed: 84
   Failed (need to analyze): 0
   Failed (with BugIDs): 0
   Ignore: 0

```

Once the tests run, the…
