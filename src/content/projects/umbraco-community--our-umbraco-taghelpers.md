---
repo: "umbraco-community/Our-Umbraco-TagHelpers"
name: "Our-Umbraco-TagHelpers"
description: "A community project of C# ASP.NET TagHelpers for the Open Source CMS Umbraco"
readmeQualityOk: true
url: "https://github.com/umbraco-community/Our-Umbraco-TagHelpers"
language: "C#"
languages: ["C#"]
languagePcts: [68]
topics: ["hacktoberfest", "taghelper", "taghelpers", "asp-net-core", "umbraco", "umbraco-cms", "aspnet", "aspnet-core", "dotnet", "dotnet-core"]
stars: 32
forks: 27
openIssues: 10
closedIssues: 31
watchers: 1
contributors: 14
recentReleases: 0
createdAt: "2021-10-14T08:03:12Z"
lastCommitAt: "2026-11-17T14:36:30Z"
lastReleaseAt: "2022-11-17T14:57:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 94
undervaluedScore: 66
maintainers: ["warrenbuckley"]
openGraphImageUrl: "https://opengraph.githubassets.com/31ff360ffe9416a48e55ea61fba0a6323c0faa32c7f42584620bb2627e5351cc/umbraco-community/Our-Umbraco-TagHelpers"
discussionCount: 2
---

# Our Umbraco TagHelpers

A community project of C# ASP.NET TagHelpers for the Open Source CMS Umbraco

## Installing

Add the following Nuget Package to your Umbraco website project `Our.Umbraco.TagHelpers` with Visual Studio, Rider or with the dotnet CLI tool as follows when inside the directory with the .CSProj file for the Umbraco website project.

```
cd MyUmbracoProject
dotnet add package Our.Umbraco.TagHelpers
```

## Setup

With the Nuget package added you need to register the collection of TagHelpers for Razor views and partials to use them.
Browse to `/Views/_ViewImports.cshtml` in your Umbraco project and add the following line at the bottom

```cshtml
@addTagHelper *, Our.Umbraco.TagHelpers
```

## `<our-dictionary>`

This is a tag helper element `<our-dictionary>` that will use the current page's request Language/Culture to use a dictionary translation from the Umbraco translation section.

- Find dictionary key
- Find translation for Current Culture/Language of the page
- If no translation found see if we have fallback attribute set fallback-lang or umb-dictionary-fallback-lang
- Attempt to find dictionary item for that ISO language fallback
- No translation found -…
