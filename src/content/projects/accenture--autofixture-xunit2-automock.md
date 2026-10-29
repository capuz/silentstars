---
repo: "Accenture/AutoFixture.XUnit2.AutoMock"
name: "AutoFixture.XUnit2.AutoMock"
description: "Autofixture auto-mocking for XUnit2 using a mocking library of your choice."
readmeQualityOk: true
url: "https://github.com/Accenture/AutoFixture.XUnit2.AutoMock"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["autofixture", "xunit", "moq", "nsubstitute", "fakeiteasy", "mock"]
stars: 23
forks: 6
openIssues: 0
closedIssues: 13
watchers: 23
contributors: 8
recentReleases: 0
createdAt: "2017-01-13T08:47:33Z"
lastCommitAt: "2026-10-29T10:20:23Z"
lastReleaseAt: "2019-08-24T11:26:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 94
undervaluedScore: 43
maintainers: ["dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e1e820f9a672c6077091aa0d81a73883f5177db53ace8944c34c5a9c34e06aa7/Accenture/AutoFixture.XUnit2.AutoMock"
discussionCount: 2
---

# Objectivity.AutoFixture.XUnit2.AutoMock

Accelerates preparation of mocked structures for unit tests under  [XUnit2](http://xunit.github.io/) by configuring [AutoFixture](https://github.com/AutoFixture/AutoFixture) data generation to use a mocking library of your choice. Gracefully handles recursive structures by omitting recursions.

It provides the following mocking attributes:

- AutoMockData
- InlineAutoMockData
- MemberAutoMockData

***

## Supported mocking libraries

| Mocking library                                           | Corresponding NuGet package |
| ---------------------------------------------------------:|:--------------------------- |
| [Moq](https://github.com/moq/moq4)                        | [](https://www.nuget.org/packages/Objectivity.AutoFixture.XUnit2.AutoMoq/) |
| [NSubstitute](https://github.com/nsubstitute/NSubstitute) | [](https://www.nuget.org/packages/Objectivity.AutoFixture.XUnit2.AutoNSubstitute/) |
| [FakeItEasy](https://github.com/FakeItEasy/FakeItEasy)    | [](https://www.nuget.org/packages/Objectivity.AutoFixture.XUnit2.AutoFakeItEasy) |

## Installation

Choose the package that matches your mocking library of choice:

```bash
# For Moq…
