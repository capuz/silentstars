---
repo: "w3c/w3c-jekyll-theme"
name: "w3c-jekyll-theme"
description: "W3C Jekyll theme"
readmeQualityOk: true
url: "https://github.com/w3c/w3c-jekyll-theme"
language: "HTML"
languages: ["HTML"]
languagePcts: [100]
stars: 8
forks: 0
openIssues: 1
closedIssues: 1
watchers: 4
contributors: 15
recentReleases: 0
createdAt: "2023-12-06T17:06:59Z"
lastCommitAt: "2026-11-23T12:20:03Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 53
maintainers: ["deniak", "remibetin", "gosko"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b98522afbfd18339be74c3def5f56573920769b59942ae0883d77455905faf3/w3c/w3c-jekyll-theme"
---

## Introduction

This Jekyll theme provides a simple way to generate pages with the [W3C style](https://design-system.w3.org/). That Jekyll theme and the W3C Design System should only be used for content served under a w3.org URI such as the [main W3C website](https://www.w3.org/).

## Installation

### Prerequisites

Before you begin, make sure you have the following installed:

- [Ruby](https://www.ruby-lang.org/en/documentation/installation/) (<= 3.2)
- [Bundler](https://bundler.io/)

On Ubuntu (24.04 LTS):
```shell
sudo apt install ruby-dev ruby-bundler
# Set the path to your bundler data
mkdir ~/.bundler
bundle config path ~/.bundler
```

On MacOS:
```shell
brew install chruby ruby-install
ruby-install ruby 3.2
# Update your zsh profile to use this version of Ruby
echo "source $(brew --prefix)/opt/chruby/share/chruby/chruby.sh" >> ~/.zprofile
echo "source $(brew --prefix)/opt/chruby/share/chruby/auto.sh" >> ~/.zprofile
echo "chruby ruby-3.2" >> ~/.zprofile
```

### Theme Installation

1. **Specify your Jekyll dependencies (optional)**
