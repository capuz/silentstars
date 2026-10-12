---
repo: "elementary/appcenter-web"
name: "appcenter-web"
description: "Web frontend for viewing AppCenter apps"
readmeQualityOk: true
url: "https://github.com/elementary/appcenter-web"
homepage: "https://appcenter.elementary.io"
language: "HTML"
languages: ["HTML", "Ruby", "SCSS"]
languagePcts: [51, 28, 22]
topics: ["appstream", "jekyll", "github-pages", "hacktoberfest", "jekyll-site", "ruby", "ruby-lang"]
stars: 46
forks: 11
openIssues: 23
closedIssues: 37
watchers: 6
contributors: 47
recentReleases: 0
createdAt: "2016-07-07T01:23:35Z"
lastCommitAt: "2026-10-12T11:14:49Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero", "funded"]
healthScore: 86
undervaluedScore: 43
maintainers: ["actions-user", "dependabot[bot]", "ryonakano"]
openGraphImageUrl: "https://opengraph.githubassets.com/e7dd2c374a6f1d010ea7022cb34a7e9a59b37336c3befa623fd74f46d2c8b75b/elementary/appcenter-web"
fundingLinks: ["GITHUB:https://github.com/elementary", "PATREON:https://patreon.com/elementary", "LIBERAPAY:https://liberapay.com/elementary", "CUSTOM:https://elementary.io/get-involved#funding"]
---

# AppCenter Web

Web frontend for viewing AppCenter apps for elementary OS.

## Building

AppCenter Web is a simple Jekyll-powered site hosted by GitHub Pages. To run it locally, see [the GitHub docs](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/).

### Dependencies

This guide assumes you're on elementary OS or a similar Ubuntu-based environment.

#### Packages

- `ruby-full` (should include `ruby` and `ruby-dev`)
- `build-essential`
- `zlib1g-dev`

#### Ruby Stuff

- `jekyll` and `bundler`

We recommend installing gems to a (hidden) directory in your home folder:

```shell
echo '' >> ~/.bashrc
echo '# Install Ruby Gems to ~/.gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/.gems"' >> ~/.bashrc
echo 'export PATH="$GEM_HOME/bin:$PATH"' >> ~/.bashrc
echo '' >> ~/.bashrc
source ~/.bashrc
```

Install jekyll and bundler:

```shell
gem install jekyll bundler
```

Install gems:

```shell
bundle install
```

(Adapted from https://jekyllrb.com/docs/installation/)

### Updating Apps

The list of apps is generated with a simple Ruby script. To rebuild the app list, delete the existing files so any removals (e.g. end-of-life apps) are reflected, then…
