---
repo: "TryGhost/Source"
name: "Source"
description: "The default theme for Ghost"
readmeQualityOk: true
url: "https://github.com/TryGhost/Source"
homepage: "https://source.ghost.io"
language: "CSS"
languages: ["CSS", "Handlebars"]
languagePcts: [47, 42]
topics: ["blog", "ghost", "ghost-theme", "magazine", "news", "newsletter", "publishing"]
stars: 131
forks: 257
openIssues: 1
closedIssues: 42
watchers: 4
contributors: 28
recentReleases: 0
createdAt: "2023-09-15T09:30:01Z"
lastCommitAt: "2026-10-26T03:02:52Z"
lastReleaseAt: "2024-06-03T09:20:37Z"
status: "thriving"
tags: ["funded", "fork_magnet"]
healthScore: 99
undervaluedScore: 55
maintainers: ["renovate[bot]", "minimaluminium", "weylandswart"]
openGraphImageUrl: "https://opengraph.githubassets.com/7b8c394255e25fdf5ac23b0b68556cff4ee0e80d0d45da3e4aba5a2fc73db8ea/TryGhost/Source"
fundingLinks: ["GITHUB:https://github.com/TryGhost", "OPEN_COLLECTIVE:https://opencollective.com/ghost"]
---

# Source

The default theme for [Ghost](http://github.com/tryghost/ghost/). This is the latest development version of Source! If you're just looking to download the latest release, head over to the [releases](https://github.com/TryGhost/Source/releases) page.

&nbsp;

# First time using a Ghost theme?

Ghost uses a simple templating language called [Handlebars](http://handlebarsjs.com/) for its themes.

This theme has lots of code comments to help explain what's going on just by reading the code. Once you feel comfortable with how everything works, we also have full [theme API documentation](https://ghost.org/docs/themes/) which explains every possible Handlebars helper and template.

**The main files are:**

- `default.hbs` - The parent template file, which includes your global header/footer
- `home.hbs` - The homepage
- `index.hbs` - The main template to generate a list of posts
- `post.hbs` - The template used to render individual posts
- `page.hbs` - Used for individual pages
- `tag.hbs` - Used for tag archives, eg. "all posts tagged with `news`"
- `author.hbs` - Used for author archives, eg. "all posts written by Jamie"

One neat trick is that you can also create custom…
