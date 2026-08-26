---
repo: "merenlab/anvio.org"
name: "anvio.org"
description: "The anvi'o community web page"
readmeQualityOk: true
url: "https://github.com/merenlab/anvio.org"
language: "HTML"
languages: ["HTML", "JavaScript", "SCSS"]
languagePcts: [30, 29, 23]
stars: 6
forks: 14
openIssues: 3
closedIssues: 7
watchers: 2
contributors: 16
recentReleases: 0
createdAt: "2022-01-05T14:40:25Z"
lastCommitAt: "2026-08-26T04:16:48Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 93
undervaluedScore: 87
maintainers: ["github-actions[bot]", "meren", "ivagljiva"]
openGraphImageUrl: "https://opengraph.githubassets.com/ebb6223c62a52fcfa9010dbaf181e7af226e9baaa4b2b7a482136e4557015528/merenlab/anvio.org"
---

Source code for the anvi'o community web page served at https://anvio.org

After getting a copy of it, you can run this web page on your local using the following command:

```
bundle exec jekyll serve --incremental
```

Once you run a copy of the web page, visit http://localhost:4000/web-tips/ to find some useful tips for content developers.

If you get an error like this:

/var/lib/gems/3.0.0/gems/jekyll-4.2.1/lib/jekyll/commands/serve/servlet.rb:3:in `require': cannot load such file -- webrick (LoadError).

You can just run this command to install `Webrick` toolkit:

```
bundle add webrick
```

After `Webrick` successfully installed, you can run this web page on your local using the following command:

```
rm -rf _site && bundle exec jekyll serve --incremental --trace
```

# Contributing

If you have any questions regarding anything below, please get in touch with us on the anvi'o Slack channel (an up-to-date link is at the top of the front page of https://anvio.org).

## Update / add new anvi'o resources defined in the main page

Please edit the relevant file under `_data/resources/` in this repository. To add a new resource, you don't need to do anything in the anvi'o…
