---
repo: "f-droid/fdroid-website"
name: "fdroid-website"
description: "mirror of https://gitlab.com/fdroid/fdroid-website"
readmeQualityOk: true
url: "https://github.com/f-droid/fdroid-website"
language: "HTML"
languages: ["HTML"]
languagePcts: [76]
topics: ["fdroid", "jekyll", "website"]
stars: 83
forks: 9
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 466
recentReleases: 0
createdAt: "2019-08-28T21:56:24Z"
lastCommitAt: "2026-09-14T09:12:25Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 79
undervaluedScore: 44
maintainers: ["licaon-kter", "eighthave", "uniqx"]
openGraphImageUrl: "https://opengraph.githubassets.com/f9224037f8a279073528bc203286faa0fade29bbacb8ac04367f35e8183bf2a8/f-droid/fdroid-website"
fundingLinks: ["GITHUB:https://github.com/f-droid", "LIBERAPAY:https://liberapay.com/F-Droid-Data", "OPEN_COLLECTIVE:https://opencollective.com/F-Droid", "CUSTOM:https://f-droid.org/donate/", "CUSTOM:https://www.hellotux.com/f-droid"]
---

# The F-Droid Website

This is the repository for the website at <https://f-droid.org>.  It
is based on Jekyll and you can find the development version
[here](https://fdroid.gitlab.io/fdroid-website/).

## Building

### Using Debian/bookworm

First, make sure [_bookworm-backports_ is enabled](https://backports.debian.org/Instructions/).

```
sudo apt-get install -t bookworm-backports \
  gettext linkchecker po4a python3 python3-babel rsync rubocop ruby-bundler \
  ruby-git ruby-jekyll-include-cache ruby-jekyll-redirect-from ruby-json \
  ruby-loofah ruby-rchardet ruby-rouge ruby-rspec ruby-zip unzip
bundle install --local
jekyll build
```

If you experience an error during the build process, try also:

```
bundle update
```

Look at the [_.gitlab-ci.yml_](https://gitlab.com/fdroid/fdroid-website/blob/master/.gitlab-ci.yml)
for more examples of custom setups, like building only a subset of the languages.

### Using Ruby Gems

You need to have Jekyll 3.2+ installed what is easily done with Gem which depends on Ruby 2.0+.
Because of the F-Droid plugin you need to have zlib installed.

```bash
sudo apt-get install build-essential git ruby-full zlib1g-dev
sudo gem install bundler…
