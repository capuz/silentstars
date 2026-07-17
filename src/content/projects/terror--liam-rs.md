---
repo: "terror/liam.rs"
name: "liam.rs"
description: "My personal website/blog"
readmeQualityOk: true
url: "https://github.com/terror/liam.rs"
homepage: "https://liam.rs"
language: "Rust"
languages: ["Rust", "Jinja"]
languagePcts: [70, 27]
topics: ["blog", "personal-website", "bash"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2020-08-21T00:44:57Z"
lastCommitAt: "2026-07-17T05:59:18Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 86
undervaluedScore: 59
maintainers: ["terror", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/289141635/387761fa-e239-4bd6-9163-93992229f16c"
---

## liam.rs

`liam.rs` is the source for my personal website and static site generator.

The generator is written in Rust and uses [MiniJinja](https://github.com/mitsuhiko/minijinja)
for templates, [Pandoc](https://pandoc.org/) for Markdown rendering, and
[Axum](https://github.com/tokio-rs/axum) for the local development server.

The site generator handles:

- Rendering posts and projects from Markdown into static HTML.

- Loading typed YAML frontmatter for posts and projects.

- Generating the index, post archive, project archive, individual post pages,
  and RSS feed.

- Serving `docs/` locally with automatic browser refresh on file changes.

If you notice a typo, broken link, or rendering issue, feel free to open an
issue or submit a pull request.

## Development

Posts live in `posts/` and are regular Markdown files with YAML frontmatter:

```md
---
title: Useful git aliases
date: 2020-09-02
---

Post body...
```

Projects live in `projects/` and use the same frontmatter convention with a few
additional fields:

```md
---
title: foo
date: 2025-03-17
topics: ['foo', 'bar']
lead: foo
image: foo.png
---

Project body...
```

Dates are used for sorting and RSS metadata. Slugs are…
