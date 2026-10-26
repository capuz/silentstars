---
repo: "Tatsh/macprefs"
name: "macprefs"
description: "Command and library to export macOS preferences."
readmeQualityOk: true
url: "https://github.com/Tatsh/macprefs"
homepage: "https://tatsh.github.io/macprefs/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["command-line", "macos", "preferences", "utilities"]
stars: 44
forks: 2
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2020-09-12T01:26:35Z"
lastCommitAt: "2026-10-26T18:06:38Z"
lastReleaseAt: "2023-10-01T05:53:25Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 98
undervaluedScore: 58
maintainers: ["dependabot[bot]", "pre-commit-ci[bot]", "Tatsh"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/294846140/27ecd59e-9a5a-447a-bec2-d1a29b94c572"
fundingLinks: ["GITHUB:https://github.com/Tatsh", "KO_FI:https://ko-fi.com/tatsh2", "LIBERAPAY:https://liberapay.com/tatsh2", "PATREON:https://patreon.com/tatsh2"]
---

# macprefs

Command and library to export macOS preferences.

## Installation

### Pip

```shell
pip install macprefs
```

## Usage

```plain
Usage: prefs-export [OPTIONS]

  Export preferences.

Options:
  -C, --config FILE               Path to the configuration file.
  -K, --deploy-key FILE           Key for pushing to Git repository.
  -c, --commit                    Commit the changes with Git.
  -d, --debug                     Enable debug logging.
  -o, --output-directory DIRECTORY
                                  Where to store the exported data.
  -h, --help                      Show this message and exit.
```

`prefs-export` is the main utility. You can export preferences, generate a
[`~/.macos`](https://github.com/mathiasbynens/dotfiles/blob/main/.macos)-like script, and store the
results in a Git repository.

My primary usage is like so:

```shell
prefs-export --output-directory ~/.config/defaults --commit
```

The default output directory is `~/Library/Application Support/macprefs`.

Colours can be disabled by setting the environment variable `NO_COLOR` to a non-empty value.

## Configuration

The configuration file is a TOML file. By default `prefs-export` checks…
