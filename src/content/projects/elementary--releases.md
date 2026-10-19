---
repo: "elementary/releases"
name: "releases"
description: "See all releases and the status of repos"
readmeQualityOk: true
url: "https://github.com/elementary/releases"
homepage: "https://releases.elementary.io"
language: "HTML"
languages: ["HTML", "SCSS"]
languagePcts: [47, 31]
topics: ["github", "organization", "jekyll", "hacktoberfest"]
stars: 103
forks: 69
openIssues: 4
closedIssues: 24
watchers: 8
contributors: 31
recentReleases: 0
createdAt: "2020-04-01T21:49:02Z"
lastCommitAt: "2026-10-19T09:15:00Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero", "funded", "fork_magnet"]
healthScore: 96
undervaluedScore: 53
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/37e2b5c7c465dd269f12702e4ec15e5c43dc40fb2a4a8449236ce93f82421453/elementary/releases"
fundingLinks: ["GITHUB:https://github.com/elementary", "PATREON:https://patreon.com/elementary", "LIBERAPAY:https://liberapay.com/elementary", "CUSTOM:https://elementary.io/get-involved#funding"]
discussionCount: 0
---

# Releases

See all releases and the status of repos at [releases.elementary.io](https://releases.elementary.io)

## Building

You'll need the following dependencies:

```
ruby-full
build-essential
zlib1g-dev
```

We recommend installing gems to a (hidden) directory in your home folder:

```sh
echo '' >> ~/.bashrc
echo '# Install Ruby Gems to ~/.gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/.gems"' >> ~/.bashrc
echo 'export PATH="$HOME/.gems/bin:$PATH"' >> ~/.bashrc
echo '' >> ~/.bashrc
source ~/.bashrc
```

Install bundler:

```sh
gem install bundler
```

Install gems:

```sh
bundle install
```

Build and serve locally with:

```sh
bundle exec jekyll serve --host 0.0.0.0
```

The site should now be available at http://0.0.0.0:4000/ on your local machine, and your local machine's IP address on your network—great for testing on mobile OSes.

### Updating Data

`_data/repos.json` is automatically rebuilt from a GitHub Action, but you can build it for local development:

First, create a [GitHub token](https://github.com/settings/tokens) with `repo` permissions and copy it somewhere safe.

Then, make sure you have `pip` and `PyGithub`. On elementary OS:

```sh
sudo apt install…
