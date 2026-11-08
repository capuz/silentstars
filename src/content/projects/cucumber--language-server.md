---
repo: "cucumber/language-server"
name: "language-server"
description: "Cucumber Language Server"
readmeQualityOk: true
url: "https://github.com/cucumber/language-server"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["polyglot-release"]
stars: 56
forks: 35
openIssues: 7
closedIssues: 23
watchers: 62
contributors: 36
recentReleases: 0
createdAt: "2021-10-12T13:48:40Z"
lastCommitAt: "2026-11-08T10:41:16Z"
lastReleaseAt: "2022-04-27T12:56:24Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch", "funded", "fork_magnet"]
healthScore: 93
undervaluedScore: 49
maintainers: ["renovate[bot]", "davidjgoss", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/42ab3c3799b46caf990dd67805aef3a412561bba0afdcaf968845d51e9da68a9/cucumber/language-server"
fundingLinks: ["GITHUB:https://github.com/cucumber", "OPEN_COLLECTIVE:https://opencollective.com/cucumber"]
---

Cucumber Language Server

Provides most of the functionality offered by the
[Cucumber Visual Studio Code Extension](https://github.com/cucumber/vscode) and can also be utilised with other editors that support the Language Server Protocol (LSP).

## Features

See [Cucumber Language Service](https://github.com/cucumber/language-service), which implements most of the logic in this server.
If you are looking to add a new feature, you should probably add it to [Cucumber Language Service](https://github.com/cucumber/language-service).

## Install

Cucumber Language Server is [available on npm](https://www.npmjs.com/package/@cucumber/language-server):

```console
npm install @cucumber/language-server
```

### Settings

The LSP client can provide settings to the server, but the server provides [reasonable defaults](https://github.com/cucumber/language-server/blob/main/src/CucumberLanguageServer.ts) (see `defaultSettings`) if the client does not
provide them.

The server retrieves `cucumber.*` settings from the client with a [workspace/configuration](https://microsoft.github.io/language-server-protocol/specification#workspace_configuration) request.

See…
