---
repo: "objectionary/lints"
name: "lints"
description: "A collection of style checkers for XMIR: they don't predict runtime errors, but prevent compilation mistakes"
readmeQualityOk: true
url: "https://github.com/objectionary/lints"
homepage: "https://www.objectionary.com/lints/"
language: "Java"
languages: ["Java", "XSLT"]
languagePcts: [59, 39]
topics: ["java", "linter", "style-checker"]
stars: 12
forks: 28
openIssues: 105
closedIssues: 279
watchers: 2
contributors: 26
recentReleases: 0
createdAt: "2024-11-17T10:22:41Z"
lastCommitAt: "2026-07-10T06:43:34Z"
lastReleaseAt: "2024-12-01T05:56:31Z"
status: "thriving"
tags: ["needs_contributors", "fork_magnet"]
healthScore: 93
undervaluedScore: 83
maintainers: ["volodya-lombrozo", "renovate[bot]", "rultor"]
openGraphImageUrl: "https://opengraph.githubassets.com/00a0143699a3713e4eb478765568bd45c0a4c010602b7c26c4c705941155d109/objectionary/lints"
---

# Collection of Checkers for EO Programs

This Java package is a collection of "lints" (aka "checkers") for
[XMIR] (an intermediate representation of a
[EO] object). This is not about static analysis or code
formatting. This is about best practices and readiness of code
for successful compilation and execution.

We use this package as a dependency in the
[EO-to-Java compiler][EO]:

```xml
<dependency>
  <groupId>org.eolang</groupId>
  <artifactId>lints</artifactId>
  <version>0.2.6</version>
</dependency>
```

You can also use it in order to validate the validity
of [XMIR] documents your software may generate:

```java
import com.jcabi.xml.StrictXML;
import org.eolang.lints.Source;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

final class Foo {
    @Test
    void testValidSource() {
        Assertions.assertTrue(
            new Source(
                new StrictXML("<object> your XMIR goes here </object>")
            ).defects().isEmpty()
        );
    }
}
```

It is possible to disable any particular linter in a program,
with the help of the `+unlint` meta.

Whole-program analysis (running lints across a set of XMIR files
instead of one at a…
