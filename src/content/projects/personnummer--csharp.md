---
repo: "personnummer/csharp"
name: "csharp"
description: "Validate Swedish personal identity numbers"
readmeQualityOk: true
url: "https://github.com/personnummer/csharp"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["personnummer", "csharp", "social-security-number", "validation", "personal-identity-number", "hacktoberfest"]
stars: 16
forks: 11
openIssues: 1
closedIssues: 14
watchers: 3
contributors: 8
recentReleases: 0
createdAt: "2017-10-18T18:46:23Z"
lastCommitAt: "2026-10-02T10:00:32Z"
lastReleaseAt: "2023-03-12T18:36:40Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 75
undervaluedScore: 47
maintainers: ["renovate[bot]", "frozzare", "rasmusbe"]
openGraphImageUrl: "https://opengraph.githubassets.com/d6447ecba98f72205b0dcb82b34fdd282eaf7d072ee7c6e24cc4fa586acad07f/personnummer/csharp"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/sweidproject"]
---

# Personnummer

Validate Swedish social security numbers.

## Installation

```
dotnet add package Personnummer
```

## Examples

### Validation

```csharp
using Personnummer;

class Test 
{
  public void TestValidation() 
  {
    Personnummer.Valid("191212121212");     // => True
    Personnummer.Valid("121212+1212")       // => True
    Personnummer.Valid("20121212-1212")     // => True
  }
}
```

### Format

```csharp
using Personnummer;

// Short format (YYMMDD-XXXX)
(new Personnummer("1212121212")).Format();
//=> 121212-1212

// Short format for 100+ years old
(new Personnummer("191212121212")).Format();
//=> 121212+1212

// Long format (YYYYMMDDXXXX)
(new Personnummer("1212121212")).Format(true);
//=> 201212121212
```

### Age

```csharp
using Personnummer;

(new Personnummer("1212121212")).Age;
//=> 7
```

### Get sex

```csharp

(new Personnummer("1212121212")).IsMale;
//=> true
(new Personnummer("1212121212")).IsFemale;
//=> false
```

### Coordination numbers

The package supports coordination numbers. This feature is enabled by default
and can be disabled by passing an option object to the constructor, parse 
or validate function.

```csharp…
