---
repo: "bryanwweber/pelican-redirect"
name: "pelican-redirect"
description: "Create HTML files to redirect changed posts in Pelican"
readmeQualityOk: true
url: "https://github.com/bryanwweber/pelican-redirect"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 8
forks: 5
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2021-07-29T18:47:48Z"
lastCommitAt: "2026-09-19T01:17:09Z"
lastReleaseAt: "2025-10-12T15:24:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 96
undervaluedScore: 67
maintainers: ["dependabot[bot]", "bryanwweber"]
openGraphImageUrl: "https://opengraph.githubassets.com/df3f2884912877057bc38e746f48e22d455779dc5d7b78778ed675a8b563d215/bryanwweber/pelican-redirect"
fundingLinks: ["CUSTOM:https://donate.getpelican.com", "LIBERAPAY:https://liberapay.com/pelican"]
---

# Pelican Redirect: A Plugin for Pelican

Redirect pages using meta http-equiv tags

## Installation

This plugin can be installed via:

```shell
python -m pip install pelican-redirect
```

After the plugin is installed via pip, add `pelican_redirect` to your `PLUGINS` list in pelicanconf.py
```shell
PLUGINS = ['pelican_redirect', ...]
```

## Usage

Once this plugin is installed, you can add a key to the frontmatter of the file called `original_url`. The plugin will generate an HTML page at that location that redirects to the new location of the post/page. Example:

```markdown
Title: A sample title
original_url: blog-posts/2021/07/21/a-sample-title.html

Content here
```

Assuming this file is now going to be served from `blog-posts/a-simple-title.html`, a file will be written to `blog-posts/2021/07/21/a-sample-title.html` that redirects to the new URL.

If `original_url` does not have a file extension, or the file extension is something other than `.htm` or `.html`, then `original_url` is assumed to be a directory and `index.html` is appended to the URL.

## Bulk Usage

To perform a page-wide redirect, you can use the `CONTENT_REDIRECT_CONFIGURATION` setting, which allows you…
