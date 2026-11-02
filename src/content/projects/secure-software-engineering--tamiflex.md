---
repo: "secure-software-engineering/tamiflex"
name: "tamiflex"
description: "TamiFlex facilitates static analysis of programs that use reflection and custom class loaders"
readmeQualityOk: true
url: "https://github.com/secure-software-engineering/tamiflex"
language: "Java"
languages: ["Java", "HTML"]
languagePcts: [76, 22]
stars: 45
forks: 17
openIssues: 10
closedIssues: 2
watchers: 9
contributors: 13
recentReleases: 1
createdAt: "2015-03-14T10:03:43Z"
lastCommitAt: "2026-11-02T13:38:14Z"
lastReleaseAt: "2026-11-02T13:36:09Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 75
undervaluedScore: 49
maintainers: ["xaerru", "swissiety", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4722374985db1ac0ffd0439d32eb1a916851462473bc756a378366ef890d437/secure-software-engineering/tamiflex"
---

# TamiFlex

TamiFlex is a tool for dealing with reflection in the static analysis of Java programs. It can record reflective calls dynamically and then embed them into the application.
[Read more here in the wiki.](https://github.com/secure-software-engineering/tamiflex/wiki)

## Building

Build the project from the repository root with Maven and JDK 21 or newer:

```sh
mvn clean package
```

Maven downloads the build dependencies from Maven Central. The generated agent and tool JARs are written to the respective module's `target` directory.

Before opening a pull request, format the sources:

```sh
mvn com.spotify.fmt:fmt-maven-plugin:format
```

## Releasing

Run the *Prepare Release* GitHub workflow (choose major, minor or patch). It opens a release PR against `master`; once merged, the release is tagged, the JARs are attached to a GitHub release and `master` is advanced to the next `-SNAPSHOT` version.

## License

TamiFlex itself is available as Open Source under the [Eclipse Public License](https://www.eclipse.org/legal/epl-v10.html).

TamiFlex uses technology from ASM, which is under [this OS license](http://asm.ow2.org/license.html).

## User questionnaire

We would…
