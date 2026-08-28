---
repo: "yefim/yefeme"
name: "yefeme"
description: "My custom jekyll theme"
readmeQualityOk: true
url: "https://github.com/yefim/yefeme"
language: "SCSS"
languages: ["SCSS", "HTML"]
languagePcts: [60, 37]
topics: ["jekyll", "theme", "jekyll-theme"]
stars: 12
forks: 2
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2016-12-24T02:02:55Z"
lastCommitAt: "2026-08-28T15:34:13Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 99
undervaluedScore: 42
maintainers: ["yefim"]
openGraphImageUrl: "https://opengraph.githubassets.com/e63a31a897594b197a18c3e27a1e3b3fd4aba5650910158a69773f51dd20509d/yefim/yefeme"
---

# Yefeme

Yefeme is Yefim's custom Jekyll theme. You can use it but you don't have to. It's mainly good for blogs.

## Demo

I use this theme for [my personal blog](https://yef.im).

## Installation

Add this line to your Jekyll site's Gemfile:

```ruby
gem 'yefeme'
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: yefeme
```

And then execute:

    $ bundle

## Usage

### Configuration variables

Yefeme will respect the following variables, if set in your site's `_config.yml`:

``` yaml
author: [Your name]
title: [The title of your site]
description: [A short description of your site's purpose]
url: [URL of your site]
lang: [Language of your site]
email: [Your email]
twitter_username: [Your Twitter handle]
github_username: [Your GitHub handle]
```

### Photography shoots

The home layout can mix posts with a `shoots` collection in reverse chronological order. Configure the collection and Cloudflare Images delivery variants in your site's `_config.yml`:

```yaml
collections:
  shoots:
    output: true
    permalink: /portfolio/:name

cf_images_account_hash: [Your Cloudflare Images account hash]
cf_images_variants:
  thumb: thumb
  xl: xl
```

Each…
