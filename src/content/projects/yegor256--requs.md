---
repo: "yegor256/requs"
name: "requs"
description: "Controlled Natural Language for Requirements Specifications, with Maven Plugin"
readmeQualityOk: true
url: "https://github.com/yegor256/requs"
homepage: "https://www.requs.org/"
language: "Java"
languages: ["Java", "XSLT"]
languagePcts: [47, 32]
topics: ["requirements", "requirements-management", "java", "maven-plugin", "natural-language-processing"]
stars: 52
forks: 6
openIssues: 24
closedIssues: 88
watchers: 7
contributors: 7
recentReleases: 0
createdAt: "2013-04-21T17:55:05Z"
lastCommitAt: "2026-10-23T02:58:42Z"
lastReleaseAt: "2014-04-28T15:55:38Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 92
undervaluedScore: 53
maintainers: ["renovate[bot]", "rultor", "yegor256"]
openGraphImageUrl: "https://opengraph.githubassets.com/480c01625ef042618e2ae60d301d541ea30603fbf81d667db9d597fc68949af3/yegor256/requs"
---

# Controlled Natural Language for Requirements Specifications

REQUS is a controlled natural language (CNL) for requirements specifications.
It is explained in detail in [this paper][pdf],
which was published in the
[ACM SIGPLAN International Workshop on Beyond Code: No Code (BCNC)][workshop].
More details about REQUS syntax you can find at
[www.requs.org](https://www.requs.org/).

In order to use it in a Java project, just add this plugin to your `pom.xml`:

```xml
<reporting>
  <plugins>
    <plugin>
      <groupId>org.requs</groupId>
      <artifactId>requs-maven-plugin</artifactId>
      <version>1.17.0</version>
    </plugin>
  </plugins>
</reporting>
```

Then, add REQUS files to `src/main/requs` and name them as `main.req`, etc.

Then, run `mvn clean site` and you will see a report at `target/site/requs`.

## How to contribute?

Fork the repository, make changes, submit a pull request.
We promise to review your changes same day and apply to
the `master` branch, if they look correct.

Please run Maven build before submitting a pull request:

```bash
mvn clean install -Pqulice
```

To render the site and edit its pages:

```bash
cd jekyll
bundle install
bundle exec jekyll…
