---
repo: "objectionary/hone-maven-plugin"
name: "hone-maven-plugin"
description: "Maven plugin that applies a number of optimizations to your Bytecode, using EOLANG and 𝜑-calculus, trying to make it work faster"
readmeQualityOk: true
url: "https://github.com/objectionary/hone-maven-plugin"
homepage: "https://www.objectionary.com/hone-maven-plugin/"
language: "Java"
languages: ["Java"]
languagePcts: [88]
topics: ["bytecode-manipulation", "code-optimization", "eolang", "java", "maven-plugin"]
stars: 15
forks: 17
openIssues: 24
closedIssues: 321
watchers: 2
contributors: 29
recentReleases: 0
createdAt: "2024-08-09T13:20:46Z"
lastCommitAt: "2026-09-20T08:45:37Z"
lastReleaseAt: "2024-10-22T14:42:57Z"
status: "thriving"
tags: ["needs_contributors", "fork_magnet"]
healthScore: 98
undervaluedScore: 83
maintainers: ["yegor256", "morphqdd", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff551b86d1c3d08352d95680cb3b8663a23775b190c0fd140364eee07a7c5bee/objectionary/hone-maven-plugin"
---

# Bytecode Optimizing Maven Plugin

This [Maven] plugin _may_ optimize your [Bytecode][bytecode] after compilation,
  to make it work faster.
Just add this to your `pom.xml` file (you must have [Docker] installed too):

```xml
<project>
  [..]
  <build>
    <plugins>
      <plugin>
        <groupId>org.eolang</groupId>
        <artifactId>hone-maven-plugin</artifactId>
        <version>0.29.4</version>
        <executions>
          <execution>
            <goals>
              <goal>build</goal>
              <goal>optimize</goal>
              <goal>rmi</goal>
            </goals>
            <configuration>
              <rules>streams/*</rules>
            </configuration>
          </execution>
        </executions>
      </plugin>
    </plugins>
  </build>
</project>
```

The plugin will do exactly the following:

1. Take Bytecode `.class` files from the `target/classes/` directory and copy
all of them to the `target/classes-before-hone/` directory (as a backup).
1. Using [jeo-maven-plugin],
transform `.class` files to
`.xmir` [format][XMIR],
which is [EO] in XML, and place them into
the `target/hone/jeo-disassemble/` directory.
1. Using [phino],
convert `.xmir` files to…
