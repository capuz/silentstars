---
repo: "phntmxyz/sidekick"
name: "sidekick"
description: "Your personal CLI for your Flutter project"
readmeQualityOk: true
url: "https://github.com/phntmxyz/sidekick"
homepage: "https://pub.dev/packages/sidekick"
language: "Dart"
languages: ["Dart"]
languagePcts: [98]
topics: ["hacktoberfest", "dart", "flutter"]
stars: 57
forks: 6
openIssues: 25
closedIssues: 57
watchers: 2
contributors: 14
recentReleases: 0
createdAt: "2021-07-14T12:44:33Z"
lastCommitAt: "2026-11-04T02:57:35Z"
lastReleaseAt: "2022-01-19T14:26:25Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 69
undervaluedScore: 30
maintainers: ["passsy", "AzazelSensei"]
openGraphImageUrl: "https://opengraph.githubassets.com/6bec3a8beb361a6acafdc1b6b08e93cdff39c4eef11c048b66937e5349554849/phntmxyz/sidekick"
---

# Sidekick

Dart CLI generator for Flutter and Dart apps - extend your project with custom tasks, add a sidekick to your app.

Write your automation scripts in Dart - a language all your coworkers are comfortable with - while fully supporting debugging and testing without losing the simplicity of executing shell scripts.

Awesome examples

- Deployment scripts with multi-dimension build flavors
- Bump the version of your packages at once
- Generate release notes by combining merged PRs and completed JIRA issues
- Fix broken generated build_runner code while waiting for a fix to be merged
- Update GraphQL schemas
- Create init scripts for coworkers to set up their environment

## Getting Started

### Create your first CLI

Install the CLI generator `sidekick`. This is only required for generation, not for the execution of the CLI.

```bash
dart pub global activate sidekick
```

Initialize project

```bash
sidekick init <path-to-repo> 
```

Follow the instructions and you just created your first sidekick CLI.
You can execute your CLI right away using its entrypoint and use any of the existing tasks.

Assuming your CLI is called `flg` (short for `flutter gallery`), execute the `flg`…
