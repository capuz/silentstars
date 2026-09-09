---
repo: "grisp/mix_grisp"
name: "mix_grisp"
description: "Mix plug-in for GRiSP"
readmeQualityOk: true
url: "https://github.com/grisp/mix_grisp"
homepage: "https://www.grisp.org"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [100]
stars: 6
forks: 6
openIssues: 2
closedIssues: 6
watchers: 3
contributors: 11
recentReleases: 1
createdAt: "2018-09-13T11:52:17Z"
lastCommitAt: "2026-09-09T08:19:07Z"
lastReleaseAt: "2026-09-08T14:03:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 92
undervaluedScore: 74
maintainers: ["ziopio"]
openGraphImageUrl: "https://opengraph.githubassets.com/9460eb65de62d650102bd5086599b479797240f5e34f903d0b3ce4e4d85290eb/grisp/mix_grisp"
---

# mix_grisp

Mix tooling for building, deploying, and updating Elixir applications on
[GRiSP boards][grisp]. It provides the same GRiSP workflows as
`rebar3_grisp`, adapted to Mix releases and Elixir configuration.

Run `mix help grisp.TASK` for task-specific help.

## Requirements

- Elixir 1.20 or later
- A local Erlang/OTP installation whose major version matches the target OTP
- A GRiSP 2 board and SD card
- A GRiSP toolchain or Docker when building OTP, eMMC images, or bootloaders

## Installation

Add GRiSP and this build-time plugin to `mix.exs`:

```elixir
defp deps do
  [
    {:grisp, "~> 2.12"},
    {:mix_grisp, "~> 1.0", runtime: false}
  ]
end
```

Fetch dependencies with `mix deps.get`. Print the installed plugin and library
versions with:

```console
mix grisp.version
```

## Create a new application

Install the dependency-free `grisp_new` archive to make the project generator
available globally:

```console
mix archive.install hex grisp_new
```

Its configure task creates a supervised Mix application with release and
GRiSP configuration, plus optional networking files:

```console
mix grisp.new
```

For non-interactive use:

```console
mix grisp.new…
