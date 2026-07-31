---
repo: "jbock-java/jbock"
name: "jbock"
description: "Reflectionless command line parser"
readmeQualityOk: true
url: "https://github.com/jbock-java/jbock"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["command-line-parser", "java", "annotation-processing"]
stars: 93
forks: 9
openIssues: 1
closedIssues: 13
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2017-04-12T14:48:23Z"
lastCommitAt: "2026-07-31T06:28:31Z"
lastReleaseAt: "2017-11-21T17:42:19Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 25
maintainers: ["h908714124"]
openGraphImageUrl: "https://opengraph.githubassets.com/295bbc23da9f05aaf509d75cc6b202fbada4b0538fd60f2ead91261201adafed/jbock-java/jbock"
---

jbock is a command line parser, which uses the same well-known annotation names as [JCommander](https://jcommander.org/)
and [picocli](https://github.com/remkop/picocli).
It is an
[annotation processor](https://openjdk.java.net/groups/compiler/processing-code.html)
which does not use runtime reflection, but generates a custom parser at compile time instead.

### Quick rundown

Create an abstract class, or alternatively a Java interface,
and add the `@Command` annotation.
In this so-called *command class*, each abstract method represents a command line option or argument.
Every such method must have

* getter signature (doesn't return `void`, takes no arguments) and
* annotation (either `@Option`, `@Parameter` or `@VarargsParameter`).

The types `boolean`, `List` and `Optional` (including `OptionalInt`) have special meaning.
See example below.

````java
@Command
abstract class DeleteCommand {

  @Option(names = {"-v", "--verbosity"},
          description = {"A non-required, named option. The return type is optionalish.",
                         "Using int or Integer would make it required."})
  abstract OptionalInt verbosity();

  @Parameter(
          index = 0,…
