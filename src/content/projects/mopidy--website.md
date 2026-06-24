---
repo: "mopidy/website"
name: "website"
description: "The Mopidy project's website, excluding docs"
url: "https://github.com/mopidy/website"
homepage: "https://mopidy.com"
language: "Sass"
languages: ["Sass", "HTML"]
languagePcts: [66, 31]
stars: 14
forks: 20
openIssues: 1
closedIssues: 5
watchers: 8
contributors: 24
recentReleases: 0
createdAt: "2011-01-22T05:58:39Z"
lastCommitAt: "2026-06-24T06:39:20Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 92
undervaluedScore: 78
maintainers: ["jodal", "dependabot[bot]", "tkem"]
openGraphImageUrl: "https://opengraph.githubassets.com/386caa6c76101b7ab464ba6a7eaeb25b4f871019b54507f524226714bd05d1f4/mopidy/website"
---

# Mopidy website

This repo is the source for https://mopidy.com, hosted at GitHub Pages.

The documentation site, https://docs.mopidy.com, does not use this repo. It is
based on the `docs/` dir of the main Mopidy repo, and is hosted by [Read The
Docs](https://readthedocs.org/).

## Running locally

See the docs on [Testing your GitHub Pages site locally with Jekyll][1].

[1]: https://help.github.com/en/articles/testing-your-github-pages-site-locally-with-jekyll

## Deploying changes

To update https://mopidy.com, make changes to the source, commit, and push to
`git@github.com:mopidy/website.git`.

That's it.

## Extension registry

This extension registry is a community effort, and will never be complete
without your help.

To add or update an extension, use the existing extension definitions in the
`_ext/` directory for inspiration. Submit your update as a pull request on
this repo.

The source files for the Mopidy extension registry can be found in the
`_ext/` directory. Any related images are in the `media/ext/` directory.

The "front matter" part of the extension definitions is a YAML data structure
with the following fields:

``` yaml
### Required fields:

title: Mopidy-Foo…
