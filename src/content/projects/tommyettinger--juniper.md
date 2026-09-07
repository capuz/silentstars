---
repo: "tommyettinger/juniper"
name: "juniper"
description: "Java pseudo-random number generation code with minimal dependencies."
readmeQualityOk: true
url: "https://github.com/tommyettinger/juniper"
homepage: "https://tommyettinger.github.io/juniper/"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 16
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-05-03T06:25:37Z"
lastCommitAt: "2026-09-07T08:34:19Z"
lastReleaseAt: "2022-12-11T03:40:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 63
maintainers: ["tommyettinger"]
openGraphImageUrl: "https://opengraph.githubassets.com/206c96223485cb374d8533d2a47f9347d0cdc5249a1d8da93ac39c503462460c/tommyettinger/juniper"
---

# juniper
Java pseudo-random number generation code with minimal dependencies.

## Javadocs

[Javadocs are hosted here](https://tommyettinger.github.io/juniper/apidocs/).

## How to get it?

With Gradle, the dependency (of the core module, if you have multiple) is:

```
api "com.github.tommyettinger:juniper:0.10.6"
```

In a libGDX project that has a GWT/HTML backend, the `html/build.gradle` file
should additionally have:

```
implementation "com.github.tommyettinger:digital:0.10.2:sources"
implementation "com.github.tommyettinger:juniper:0.10.6:sources"
```

And the `GdxDefinition.gwt.xml` file should have:

```
<inherits name="com.github.tommyettinger.digital" />
<inherits name="com.github.tommyettinger.juniper" />
```

If you don't use Gradle, then with Maven, the dependency is:

```xml
<dependency>
  <groupId>com.github.tommyettinger</groupId>
  <artifactId>juniper</artifactId>
  <version>0.10.6</version>
</dependency>
```

These dependencies use JitPack.io as a repo. For the reasons why, see
[my extended rant in the digital project](https://github.com/tommyettinger/digital#rant).
In practice, all gdx-liftoff projects already depend on JitPack.io, so they don't
need any…
