---
repo: "usetrmnl/trmnlp"
name: "trmnlp"
description: "a local dev server for building TRMNL plugins"
readmeQualityOk: true
url: "https://github.com/usetrmnl/trmnlp"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [94]
stars: 231
forks: 41
openIssues: 0
closedIssues: 78
watchers: 4
contributors: 19
recentReleases: 0
createdAt: "2025-01-05T21:57:24Z"
lastCommitAt: "2026-10-14T08:57:49Z"
status: "thriving"
tags: []
healthScore: 100
undervaluedScore: 41
maintainers: ["ikraamg", "ExcuseMi", "barrymichaeldoyle"]
openGraphImageUrl: "https://opengraph.githubassets.com/f144bd3cf1687be392fdda1725a78d68664973aa0dff2e6af99c316142573ca3/usetrmnl/trmnlp"
---

# trmnlp

A basic self-hosted web server to ease the development and sharing of [TRMNL](https://trmnl.com/) plugins.

[Liquid](https://shopify.github.io/liquid/) templates are rendered leveraging the [TRMNL Design System](https://trmnl.com/framework). They may be generated as HTML (faster, and a good approximation of the final result) or as PNG images (slower, but more accurate).

The server watches the filesystem for changes to the Liquid templates, seamlessly updating the preview without the need to refresh.

## Quick Start

With [Docker](https://docs.docker.com/get-docker/) installed:

```sh
mkdir -p ~/.local/bin         # install
docker run --rm --entrypoint cat trmnl/trmnlp /app/templates/init/bin/trmnlp > ~/.local/bin/trmnlp
chmod +x ~/.local/bin/trmnlp
trmnlp init my_plugin         # scaffold a project
cd my_plugin
trmnlp serve                  # preview at http://localhost:4567
```

Have Ruby 4.0 or newer? `gem install trmnl_preview` starts faster — see [Installing via RubyGems](#installing-via-rubygems).

## Project Structure

This is the structure of a plugin project:

```
.
├── .github
│   └── workflows
│       └── trmnl.yml
├── .gitignore
├── .trmnlp.yml
├── bin
│…
