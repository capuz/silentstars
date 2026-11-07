---
repo: "groovy-console/groovy-web-console"
name: "groovy-web-console"
description: "Groovy Web Console, an online web code editor to write and execute programs written with the Apache Groovy programming language"
readmeQualityOk: true
url: "https://github.com/groovy-console/groovy-web-console"
homepage: "https://groovyconsole.dev/"
language: "TypeScript"
languages: ["TypeScript", "Java"]
languagePcts: [49, 22]
topics: ["groovy", "spock-framework", "web-console", "jvm"]
stars: 21
forks: 7
openIssues: 3
closedIssues: 8
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2021-06-21T15:56:23Z"
lastCommitAt: "2026-11-07T10:33:38Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 87
undervaluedScore: 66
maintainers: ["renovate[bot]", "glaforge", "leonard84"]
openGraphImageUrl: "https://opengraph.githubassets.com/e4a6e402033405d0dc0753ffdac7311c5bb0243e0c74aa1ae0f46a609a382c88/groovy-console/groovy-web-console"
---

# Groovy Web Console

Visit https://groovyconsole.dev/ to try it out!

The Groovy Web Console lets you write, run, and share [Groovy](https://groovy-lang.org/)
scripts right from your browser — no local installation required. Your code is
executed by a cloud backend and the result is sent straight back to the editor.

You can:

* Run plain Groovy scripts as well as [Spock](https://spockframework.org/)
  specifications.
* Pick the Groovy version to run against (3, 4, 5, or 6).
* Inspect the Abstract Syntax Tree (AST) of your code.
* Save and share your scripts as GitHub gists, and browse your session history.

The sections below are for contributors who want to build, run, or deploy the
project locally.

## Backend

### Building the backend

Go to `functions/groovy-executor` and type `../../mvnw package`.
The output will be in `functions/groovy-executor/target/deployment`.

There are different profiles, one for each groovy version:

* `groovy_6_0`
* `groovy_5_1`
* `groovy_4_0` (default)
* `groovy_3_0`

Use `../../mvnw package -P groovy_5_1`

### Deploying the backend

Go to https://github.com/groovy-console/groovy-web-console/actions/workflows/deploy.yml and click on `Run Workflow`…
