---
repo: "personnummer/java"
name: "java"
description: "Validate Swedish personal identity numbers"
readmeQualityOk: true
url: "https://github.com/personnummer/java"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["personnummer", "java", "social-security-number", "validation", "personal-identity-number", "hacktoberfest"]
stars: 9
forks: 4
openIssues: 1
closedIssues: 17
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2017-10-20T08:26:50Z"
lastCommitAt: "2026-10-02T10:00:39Z"
lastReleaseAt: "2020-10-08T18:50:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 73
undervaluedScore: 46
maintainers: ["renovate[bot]", "rasmusbe"]
openGraphImageUrl: "https://opengraph.githubassets.com/58bc6094f86923be428ac22403dbb449d9b1adbf9159318f0eb4f05e06fb40a3/personnummer/java"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/sweidproject"]
---

# Personnummer

Validate Swedish personal identity numbers.

## Installation

Add the package to your maven or gradle configuration.  
If you prefer to use the package from github rather than maven-central,
add the repository as well.

```xml
<dependency>
  <groupId>dev.personnummer</groupId>
  <artifactId>personnummer</artifactId>
  <version>3.*.*</version>
</dependency> 
```

```groovy
plugins {
    id 'maven'
}

repositories {
    // If using maven central
    mavenCentral()
    // If you wish to use github
    maven {
      url "https://github.com/personnummer/java:personnummer"
    }
}

dependencies {
    configuration("dev.personnummer:personnummer")
}
```

For more information on how to install and authenticate with github packages, check [this link](https://help.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-apache-maven-for-use-with-github-packages).

## Examples

### Validation

```java
import dev.personnummer.*;

class Test 
{
  public void TestValidation() 
  {
    Personnummer.valid("191212121212");    // => True
    Personnummer.valid("121212+1212");     // => True
    Personnummer.valid("20121212-1212");   // => True
  }
}
```…
