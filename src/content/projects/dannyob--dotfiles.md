---
repo: "dannyob/dotfiles"
name: "dotfiles"
description: "There's no place like $HOME"
readmeQualityOk: true
url: "https://github.com/dannyob/dotfiles"
language: "Shell"
languages: ["Shell"]
languagePcts: [44]
topics: ["dotfiles", "dotfile", "guix", "emacs", "sway", "swaywm"]
stars: 9
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2019-01-22T00:21:02Z"
lastCommitAt: "2026-09-26T08:47:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 57
undervaluedScore: 31
maintainers: ["dannyob"]
openGraphImageUrl: "https://opengraph.githubassets.com/a6f24f51a9f0518753df832d104ae746bdfb6463f6446d4ebed6c4bca75d8947/dannyob/dotfiles"
---

# My Dotfiles!

First, many, many thanks to every other dotfile repository I've ever gawped at
amazement at.

## With GNU Stow

These dotfiles are currently managed using [GNU
Stow](https://www.gnu.org/software/stow/), using a system similar to that
described by [Brandon
Invergo](http://brandon.invergo.net/news/2012-05-26-using-gnu-stow-to-manage-your-dotfiles.html).
One minor gotcha to note is that, by default, `stow` targets the parent
directory of the stowed files. That default works if you have a "dotfiles"
directory in your home directory. I store my dotfiles a little deeper into my
directory structure, and in multiple places, so I scatter .stowrc files in
several directories. For example, my home directory has this default:

```
--target=/home/danny
--dir=/home/danny/Public/dotfiles
```

Which points to these public dotfiles -- but I have other directories that
store localpackages in ~/.local/ , etc. They have different .stowrc's in them,
which override my global default when I'm using stow in those
directories.

## With Guix Home Services

I'm gradually moving from using Stow to managing my dotfiles (and more) with
Guix's [Home…
