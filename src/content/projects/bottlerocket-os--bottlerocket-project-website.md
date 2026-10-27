---
repo: "bottlerocket-os/bottlerocket-project-website"
name: "bottlerocket-project-website"
description: "Source code and content for the bottlerocket website"
readmeQualityOk: true
url: "https://github.com/bottlerocket-os/bottlerocket-project-website"
homepage: "https://bottlerocket.dev/"
language: "HTML"
languages: ["HTML"]
languagePcts: [70]
stars: 13
forks: 21
openIssues: 32
closedIssues: 162
watchers: 12
contributors: 24
recentReleases: 0
createdAt: "2022-08-17T14:17:12Z"
lastCommitAt: "2026-10-27T09:16:20Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 70
maintainers: ["piyush-jena", "vigh-m", "ginglis13"]
openGraphImageUrl: "https://opengraph.githubassets.com/90435a754c2e0b915ee54490a46338db51da0e05734808bcd5c6575c314692e7/bottlerocket-os/bottlerocket-project-website"
---

# Bottlerocket Project Website

This repository is the source to the Bottlerocket project website. It contains the content (as [Markdown](https://commonmark.org/) files), templates (HTML), stylesheets (CSS), and [Hugo](https://gohugo.io/) configurations (mostly [TOML](https://toml.io/en/), some [YAML](https://yaml.org/)).

## Contributing

The Bottlerocket website is open to contribution and collaboration. See [CONTRIBUTING](https://github.com/bottlerocket-os/bottlerocket-project-website/blob/HEAD/CONTRIBUTING.md) for specific instructions.

### Rendering Locally

This site uses [Hugo](https://github.com/gohugoio/hugo) for rendering.
You may run `hugo` locally to validate your changes render properly.

#### Rendering

If [`hugo` is installed](#hugo-installation), you may view the rendered site by running:

```sh
# To render everything, including draft posts
hugo server -D

# To render the site as it will appear when being published
hugo server
```

If you use `make`, have `docker`, and do not have `hugo` installed, you may also use the following `make` target as a convenience:

```sh
make preview
```

#### Hugo Installation

Hugo is available for many platforms.

- Linux: most…
