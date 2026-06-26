---
repo: "vvvv/vvvv.org"
name: "vvvv.org"
description: "Website of vvvv"
url: "https://github.com/vvvv/vvvv.org"
homepage: "http://vvvv.org"
language: "JavaScript"
languages: ["JavaScript", "Vue", "HTML"]
languagePcts: [30, 29, 22]
stars: 10
forks: 11
openIssues: 1
closedIssues: 2
watchers: 6
contributors: 16
recentReleases: 0
createdAt: "2022-05-17T10:20:17Z"
lastCommitAt: "2026-06-26T23:42:05Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 93
undervaluedScore: 80
maintainers: ["joreg", "antongit", "chkw-rks"]
openGraphImageUrl: "https://opengraph.githubassets.com/b6cae008b34c3d59c8bad42682b79a62bc71644197fa0350aa3af0521af53bbc/vvvv/vvvv.org"
---

Source of [vvvv.org](http://vvvv.org)

## Adding a Blog post

- Fork this repository
- Browse [the blog folder](https://github.com/vvvv/vvvv.org/tree/main/content/blog/) to see how existing posts are written
- Create a new folder in the `\{currentYear]\News` or `\{currentYear]\Dates` folder (depending on the type of your post) with a short name describing the post (that folder name is just for the folder structure, no other relevance)
- The only file that is mandatory in your folder is the `index.md` file. Best copy one over from another blogpost and modify it
- For posts of type `date` you need to enter from- and to- dates in the format: "2026-02-26T18:00:00" (defaulting to CET timezone) or "2026-02-26T18:00:00+02:00" to specify an offset from CET.
- To preview your post locally, see the section "Local Build" below
- Finally make a pull-request from your fork to this repo

### Shortcodes
For embedding external media use these short codes:

* Mastodon: `{{< mastodon "mastodon.xyz/@vvvv/109598445063555699" 550 >}}` Parameters: Link [Height (default=550)]
* Pixelfed: `{{< pixelfed "pixelfed.social/p/madewithvvvv/509678388578111219" 550 >}}` Parameters: Link [Height (default=550)]
*…
