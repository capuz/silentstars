---
repo: "lud/mix_version"
name: "mix_version"
description: "A simple version tool for Elixir"
readmeQualityOk: true
url: "https://github.com/lud/mix_version"
homepage: "https://hex.pm/packages/mix_version"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [100]
topics: ["mix", "elixir"]
stars: 6
forks: 2
openIssues: 3
closedIssues: 5
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2020-09-12T01:39:44Z"
lastCommitAt: "2026-09-22T08:44:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 88
undervaluedScore: 65
maintainers: ["lud", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b82659437d91515a4e9d6ae30e46aafa19a336eb1522a481c025a260b41ec46f/lud/mix_version"
---

# mix version

Automatically updates the version of Elixir projects:

* Updates the version number in `mix.exs`.
* Commits the changes.
* Creates an annotated git tag with the new version.
* Supports hooks to add additional changes, for instance updating a change log.

## Installation

### As a dependency

You can install MixVersion as a regular dependency in your Elixir projects:

```elixir
defp deps do
  [
    {:mix_version, "~> 2.5", only: [:dev, :test], runtime: false},
  ]
end
```

### Installing globally

When managing multiple projects, it can be easier to install the mix task as an
archive.

```bash
mix archive.install hex mix_version
```

## Breaking changes in version 2

The v2 is a partial rewrite where most checks are run before attempting to make
any modification for the project. A few changes to how MixVersion should be used
were implemented:

* The configuration of MixVersion from the config files is not supported
  anymore. This is to support MixVersion as a globally installed archive. When
  MixVersion is not listed in the dependencies, Elixir would warn if a project
  contains configuration for an unknown application.
* The new configuration is provided by…
