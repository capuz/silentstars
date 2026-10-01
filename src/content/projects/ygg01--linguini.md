---
repo: "Ygg01/Linguini"
name: "Linguini"
description: "C# Port of fluent.rs zero-copy parser"
readmeQualityOk: true
url: "https://github.com/Ygg01/Linguini"
language: "C#"
languages: ["C#"]
languagePcts: [95]
topics: ["localization", "dotnet", "i18n", "c-sharp", "zero-copy"]
stars: 42
forks: 15
openIssues: 7
closedIssues: 27
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2021-03-04T11:03:18Z"
lastCommitAt: "2026-10-01T10:10:23Z"
lastReleaseAt: "2025-07-12T21:10:56Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero", "funded"]
healthScore: 95
undervaluedScore: 50
maintainers: ["Ygg01"]
openGraphImageUrl: "https://opengraph.githubassets.com/4bcd03f60ba95171d21da8df1281aedea7de2234941fb20315e92245f659cd88/Ygg01/Linguini"
fundingLinks: ["GITHUB:https://github.com/Ygg01"]
discussionCount: 1
---

# Linguini
Linguini is a C# implementation of Project Fluent, a localization system for natural-sounding translations with features like:

## Asymmetric Localization
Natural-sounding translations with genders and grammatical cases only when necessary. Expressiveness is not limited by the grammar of the source language.

## Progressive Enhancement
Translations are isolated; locale-specific logic doesn't leak to other locales. Authors can iteratively improve translations without impact on other languages.

## Modular
Linguini is highly modular. You only can use the parts you need.
Need just parsing? Get Linguni.Syntax.
Need only Plural Rules data? Get PluralRules.Generator and connect to XML CLDR Plural rules data.

## Performant
Linguini uses a zero-copy parser to parse the resources. While at the moment, there are no benchmarks,
it is used by [RobustToolbox](https://github.com/space-wizards/RobustToolbox) as a localization framework.

# How to get it?

To install the [Fluent Bundle](https://www.nuget.org/packages/Linguini.Bundle/) type in your console:

```dotnet add package Linguini.Bundle```

You can also follow other NuGet installation instructions. E.g. :

```paket add…
