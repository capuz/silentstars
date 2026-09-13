---
repo: "tomasbjerre/violations-command-line"
name: "violations-command-line"
description: "Command line tool that will find report files from static code analysis, present and optionally fail the command."
readmeQualityOk: true
url: "https://github.com/tomasbjerre/violations-command-line"
homepage: "https://www.npmjs.com/package/violations-command-line"
language: "Java"
languages: ["Java"]
languagePcts: [99]
topics: ["static-code-analysis", "lint"]
stars: 16
forks: 2
openIssues: 0
closedIssues: 8
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2019-05-30T18:47:06Z"
lastCommitAt: "2026-09-13T08:29:24Z"
lastReleaseAt: "2025-10-07T19:37:14Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 50
maintainers: ["tomasbjerre", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/dc2735b8465c9b7bcbcf2bad38f58d31dad04d735c9f86e178b7763ea56bfa72/tomasbjerre/violations-command-line"
---

# Violations Command Line

This is a command line tool that will find report files from static code analysis, present and optionally fail the command. It uses the [Violations Lib](https://github.com/tomasbjerre/violations-lib).

- The runnable can be found in [Maven Central](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22violations-command-line%22)
- or [NPM](https://www.npmjs.com/package/violations-command-line).
- The `Docker` image can be found in [Dockerhub](https://hub.docker.com/r/tomasbjerre/violations-command-line)
  - Can used like `docker run --mount src="$(pwd)",target=/home/violations-command-line,type=bind tomasbjerre/violations-command-line:a.b.c -v "FINDBUGS" src/test/resources/findbugs/ ".*main\.xml$" "Spotbugs"`.
  - Or open a shell to have a look `docker run --rm -it --entrypoint sh tomasbjerre/violations-command-line:a.b.c`

| Version           | Java Version |
| ------------------| ------------ |
| version < 2.0.0   | 8            |
| 2.0.0 - 3.2.1     | 11           |
| 3.2.2 <= version  | 17           |

Run it with:

```bash
npx violations-command-line -s ERROR -mv 0 \
 -v "CHECKSTYLE" "." ".*checkstyle/main\.xml$" "Checkstyle" \
 -v "JSLINT" "."…
