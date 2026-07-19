---
repo: "oclif/test"
name: "test"
description: "test helpers for oclif components"
readmeQualityOk: true
url: "https://github.com/oclif/test"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 23
forks: 12
openIssues: 1
closedIssues: 31
watchers: 0
contributors: 15
recentReleases: 0
createdAt: "2018-01-13T23:38:44Z"
lastCommitAt: "2026-07-19T06:11:26Z"
lastReleaseAt: "2018-01-20T05:41:06Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 69
maintainers: ["svc-cli-bot", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f6ae62bf8b25f3c076b4944173d925d18bf4ea948714aeeb77d76ae10076e52d/oclif/test"
discussionCount: 3
---

# @oclif/test

test helpers for oclif CLIs

## Migration

See the [V4 Migration Guide](https://github.com/oclif/test/blob/HEAD/MIGRATION.md) if you are migrating from v3 or older.

## Usage

`@oclif/test` provides a handful of utilities that make it easy to test your [oclif](https://oclif.io) CLI.

> [!NOTE]
> In order for these utilities to capture all output to the terminal, you must disable any console output interception/suppression features in your test framework.
>
> - For Jest users, enable [the `verbose` flag](https://jestjs.io/docs/configuration#verbose-boolean) in your Jest config.
> - For Vitest users, enable [the `disableConsoleIntercept` flag](https://vitest.dev/guide/cli.html#disableconsoleintercept) in your Vitest config.

### `captureOutput`

`captureOutput` allows you to get the stdout, stderr, return value, and error of the callback you provide it. This makes it possible to assert that certain strings were printed to stdout and stderr or that the callback failed with the expected error or succeeded with the expected result.

**Options**

- `print` - Print everything that goes to stdout and stderr.
- `stripAnsi` - Strip ansi codes from everything that goes to…
