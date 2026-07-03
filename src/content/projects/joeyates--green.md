---
repo: "joeyates/green"
name: "green"
description: "Apply Elixir styling rules"
url: "https://github.com/joeyates/green"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [100]
topics: ["elixir", "linting"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-12-08T20:45:14Z"
lastCommitAt: "2026-07-03T06:24:38Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 82
undervaluedScore: 41
maintainers: ["joeyates"]
openGraphImageUrl: "https://opengraph.githubassets.com/85e190aa778643f5bd85d418b604823227fd3f7a05430368fa4ecde047a5e652/joeyates/green"
---

# Green

An Elixir code formatter.

Currently, it can enforce [lexmag's Elixir style guide][lexmag].

[lexmag]: https://github.com/lexmag/elixir-style-guide

## Motivation

The standard Elixir formatter only enforces a small number of rules.
This project aims to enforce enough rules so that the "house style" of a project
can be enforced by the formatter.

## Name

The name "Green" is a reference to bikeshedding, i.e. "All bike sheds should
be green."

## Status

Currently, Green provides `Green.Lexmag.ElixirStyleGuideFormatter` which,
as far as is possible, implements the rules of [lexmag's style guide][lexmag]
that are not already implemented by `mix format`.

## Usage

Add the following to your `mix.exs`:

```elixir
defp deps() do
  [
    {:green, "~> (See the badge above)", only: :dev}
  ]
end
```

Modify `.formatter.exs` to activate the formatter plugin:

```elixir
[
  plugins: [Green.Lexmag.ElixirStyleGuideFormatter]
]
```

## Limitations

Two rules change the order of lines:

* `PreferPipelines` groups `use`, `import`, `alias` and `require` statements,
* `RemoveNilFromStructDefinition` places the list of `nil`-default fields
  at the top of the struct definition.

Where…
