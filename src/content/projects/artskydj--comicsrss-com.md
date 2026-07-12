---
repo: "ArtskydJ/comicsrss.com"
name: "comicsrss.com"
description: "RSS feeds for comics"
readmeQualityOk: true
url: "https://github.com/ArtskydJ/comicsrss.com"
homepage: "https://www.comicsrss.com"
language: "HTML"
languages: ["HTML"]
languagePcts: [98]
topics: ["comic", "comics", "rss", "gocomics", "feed", "rss-generator", "arcamax", "hacktoberfest"]
stars: 97
forks: 19
openIssues: 4
closedIssues: 140
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2017-03-29T03:51:41Z"
lastCommitAt: "2026-07-12T06:16:37Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 97
undervaluedScore: 51
maintainers: ["ArtskydJ"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d033bfc5b66e6c7ab5c9c3e665f2f37fa84a906b1b3cd98f8fad0f25cdf2792/ArtskydJ/comicsrss.com"
---

# comicsrss.com

Source code for the site generator and rss feed generator for [comicsrss.com](https://www.comicsrss.com).

Also, all of the site's content is in this repository, as it is hosted by GitHub Pages.

## Support Me

If you'd like to help keep this site going, you can send me a few bucks using [Patreon](https://www.patreon.com/bePatron?u=6855838). I'd really appreciate it!

## Technical Details

I have received [many requests](https://github.com/ArtskydJ/comicsrss.com/issues/86) to add more comic series to the site. However, my time is limited. So if you want to help out, you can make a scraper!

To be able to add comic series to Comics RSS, it is helpful to understand the basics of what is going on.

Comics RSS has scrapers, and the site generator. Each scraper parses a different comic website, and writes a temporary file to the disk. The site generator reads the temporary JSON files, and writes static HTML/RSS files to the disk.

### How scrapers work

The scrapers make https requests to a website (for example, https://www.gocomics.com), parse the responses, and write temporary JSON files to the disk.

On a multi-comic site like https://www.gocomics.com, a scraper has…
