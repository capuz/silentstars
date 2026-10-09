---
repo: "hust-open-atom-club/OpenAtomClub"
name: "OpenAtomClub"
description: "Official repository and homepage of the HUST Open Atom Club (华科开放原子开源俱乐部)"
originalDescription: "华科开放原子开源俱乐部官方仓库及主页"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/hust-open-atom-club/OpenAtomClub"
homepage: "https://hust.openatom.club/"
language: "JavaScript"
languages: ["JavaScript", "SCSS", "HTML"]
languagePcts: [56, 22, 22]
stars: 5
forks: 19
openIssues: 33
closedIssues: 18
watchers: 3
contributors: 36
recentReleases: 0
createdAt: "2024-03-19T03:36:09Z"
lastCommitAt: "2026-10-09T10:49:55Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "funded", "fork_magnet"]
healthScore: 64
undervaluedScore: 56
maintainers: ["Paulkm2006", "mudongliang", "MU-ty"]
openGraphImageUrl: "https://opengraph.githubassets.com/72df3a13379d2eb9ddd1e4af77e33ea9bb421dc1ce7d0c57f2180a0ccc5c0adc/hust-open-atom-club/OpenAtomClub"
fundingLinks: ["GITHUB:https://github.com/hust-open-atom-club"]
discussionCount: 8
---

This is the official website page of the Open Atom Club at Huazhong University of Science and Technology.

## Adding and Modifying Pages

This website uses the [Minimal Mistakes theme](https://mmistakes.github.io/minimal-mistakes/). For details on customizing the project, refer to the theme's documentation.

To add new pages (Wiki / News), refer to `_template.md` in `pages/_wiki` and `pages/_news` respectively.

To set a post author, add the author information in [`_data/authors.yml`](https://github.com/hust-open-atom-club/OpenAtomClub/blob/HEAD/_data/authors.yml) (refer to the existing entries), then specify `author: key` in the page (only one author is supported).

## Local Preview and Build

1. Set up a Ruby development environment: install Ruby following the [Ruby installation guide on Runoob](https://www.runoob.com/ruby/ruby-installation-windows.html), then run `gem install bundler`
2. Run `bundle install --path=vendor/bundle` to install the dependency packages
3. Run `bundle exec jekyll serve`, after which the site can be previewed at <http://localhost:4000/>
4. The command to build the entire site is

   ```shell
   bundle exec jekyll build
   ```

   Appending `--profile`…
