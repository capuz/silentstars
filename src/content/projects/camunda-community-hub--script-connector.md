---
repo: "camunda-community-hub/script-connector"
name: "script-connector"
description: "Connector for script evaluation"
url: "https://github.com/camunda-community-hub/script-connector"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["zeebe", "extension", "scripting", "jsr223", "zeebe-worker"]
stars: 32
forks: 19
openIssues: 1
closedIssues: 27
watchers: 7
contributors: 15
recentReleases: 0
createdAt: "2018-07-05T07:07:12Z"
lastCommitAt: "2026-06-27T00:36:46Z"
lastReleaseAt: "2021-05-28T13:12:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 63
maintainers: ["renovate[bot]", "jonathanlukas"]
openGraphImageUrl: "https://opengraph.githubassets.com/e36ebdfa6577623e177bac7263747266d8f0226ab53a16b912a2ed1854b3f97c/camunda-community-hub/script-connector"
---

# Script Connector

_This is a community project that provides a connector. It is not officially supported by Camunda. Everybody is invited to contribute!_
A connector to evaluate scripts (i.e. script tasks) that are not written in FEEL. Scripts are useful for prototyping, to do (simple) calculations, or creating/modifying variables.

## Usage

### Connector

The connector provides an [element template](./connector/element-templates/script-connector.json) that can be used to configure it.

### Script languages

Available script languages are by default:
* [javascript](https://www.graalvm.org/) (GraalVM JS) [Note: Consider using the [Camunda 8 JavaScript SDK for Node.js](https://docs.camunda.io/docs/apis-tools/node-js-sdk/) if you want to run a native javascript application.]
* [groovy](http://groovy-lang.org/)
* [mustache](http://mustache.github.io/mustache.5.html)
* [kotlin](https://kotlinlang.org/)

To register new script languages, you can use the `ScriptEngineFactory` to register any JSR-223 compliant script engine.

If you want to provide a non-compliant implementation, you can use the…
