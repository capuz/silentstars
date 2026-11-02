---
repo: "Cosium/web-native-messaging-host"
name: "web-native-messaging-host"
description: "A java library allowing to turn any JVM application into a Web Native Messaging Host"
readmeQualityOk: true
url: "https://github.com/Cosium/web-native-messaging-host"
language: "Java"
languages: ["Java"]
languagePcts: [82]
topics: ["native-messages", "native-messaging", "native-messaging-host"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2022-12-27T16:17:33Z"
lastCommitAt: "2026-11-02T15:17:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 41
maintainers: ["dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/931e851e36a56a44663eca825f3e0714a0de731f7c7c84b342c83a07051b5416/Cosium/web-native-messaging-host"
---

# Web Native Messaging Host

A java library allowing to turn any JVM application into a [Web Native Messaging Host](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Native_messaging) .

# Gotchas

To date, [web native messaging protocol](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Native_messaging) only supports `stdio` communication:
- messages are sent to the native application's `stdin`  
- messages are sent to the browser extension via native application's `stdout`

Native application (e.g. your JVM application) instances started by the browser must never use `System.out` for anything else than native messaging. Very often, you will have to make sure your logger never writes to `System.out`.

As soon as a `Channel` is open, the current library will swap `System.in` and `System.out` for instances throwing exception on any interaction attempt coming from components foreign to the current library. On `Channel` shutdown, the library will swap back the standard `System.in` and `System.out` instances. The current library cannot cover the full application lifecycle, therefore it is only a best effort.

Using `System.out` (e.g. for…
