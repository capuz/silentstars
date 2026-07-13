---
repo: "sfaqer/OneUnit"
name: "OneUnit"
description: "Framework for testing OneScript applications and libraries"
originalDescription: "Фреймворк для тестирования приложений и библиотек OneScript"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/sfaqer/OneUnit"
language: "1C Enterprise"
languages: ["1C Enterprise"]
languagePcts: [100]
stars: 49
forks: 5
openIssues: 1
closedIssues: 10
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2025-03-20T04:36:13Z"
lastCommitAt: "2026-07-13T06:37:05Z"
lastReleaseAt: "2025-11-27T02:07:05Z"
status: "thriving"
tags: []
healthScore: 73
undervaluedScore: 29
maintainers: ["sfaqer", "nixel2007"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c4dd23352a6bd74f9f79e6df293c11f414f702b78cc34037ebbc955a1f37e1c/sfaqer/OneUnit"
---

# OneUnit

Framework for testing OneScript applications and libraries

## 1. Writing Tests

The following example provides an overview of the minimally required set of components for writing tests. Additional information about the framework's capabilities will be presented in the following sections.

```bsl
#Use asserts

&Test
Procedure MyFirstTest() Export

    // Given
    Calculator = New Calculator();

    // When
    Result = Calculator.Add(1, 1);

    // Then
    Expect.that(Result).equals(2);

EndProcedure
```

### 1.1 Annotations

OneUnit supports the following annotations for configuring tests and extending the framework's capabilities.

|Annotation|Description|
|---|---|
| `&TestSuite` | Indicates that the scenario is a [test suite](#19-lifecycle-of-a-test-suite-instance), used to configure the lifecycle of the test suite |
| `&Test` | Indicates that the method is a simple test. This annotation does not declare any parameters, the test is executed as is |
| `&ParameterizedTest` | Indicates that the method is a [parameterized test](#111-parameterized-tests) |
| `&RepeatableTest` | Indicates that the method is a [repeatable...
