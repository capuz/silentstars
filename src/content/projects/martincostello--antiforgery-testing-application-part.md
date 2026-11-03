---
repo: "martincostello/antiforgery-testing-application-part"
name: "antiforgery-testing-application-part"
description: "Sample application for integration testing ASP.NET Core applications using antiforgery protections"
readmeQualityOk: true
url: "https://github.com/martincostello/antiforgery-testing-application-part"
homepage: "https://blog.martincostello.com/integration-testing-antiforgery-with-application-parts/"
language: "C#"
languages: ["C#"]
languagePcts: [81]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2020-06-15T17:11:37Z"
lastCommitAt: "2026-11-03T10:51:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 88
undervaluedScore: 66
maintainers: ["renovate[bot]", "costellobot", "martincostello"]
openGraphImageUrl: "https://opengraph.githubassets.com/d7bdd1cf7d0fe5227b1705caff53b3d99890ac2feabc290152a9191b62366460/martincostello/antiforgery-testing-application-part"
fundingLinks: ["GITHUB:https://github.com/martincostello", "BUY_ME_A_COFFEE:https://buymeacoffee.com/martincostello"]
---

# ASP.NET Core Application Part For Testing Anti-forgery Protected Resources

## Introduction

An example application that demonstrates using [ASP.NET Core Application Parts](https://docs.microsoft.com/en-us/aspnet/core/mvc/advanced/app-parts "Share controllers, views, Razor Pages and more with Application Parts") for easier integration testing of HTTP resources that are protected by the [anti-forgery](https://docs.microsoft.com/en-us/aspnet/core/security/anti-request-forgery "Prevent Cross-Site Request Forgery (XSRF/CSRF) attacks in ASP.NET Core") features of ASP.NET Core, such as `[ValidateAntiforgeryToken]`.

## How It Works

To avoid the danger of having unsafe code that returns valid CSRF tokens in the application itself, instead we can use Application Parts to inject additional functionality into the server at runtime when running integration tests using [`WebApplicationFactory<TEntryPoint>`](https://docs.microsoft.com/en-us/aspnet/core/test/integration-tests "Integration tests in ASP.NET Core").

The test project contains the…
