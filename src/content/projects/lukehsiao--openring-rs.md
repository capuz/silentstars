---
repo: "lukehsiao/openring-rs"
name: "openring-rs"
description: ":chains: a webring for static site generators written in Rust"
readmeQualityOk: true
url: "https://github.com/lukehsiao/openring-rs"
homepage: "https://luke.hsiao.dev/blog/openring-rs/"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["webring", "rust", "static-site", "atom", "rss", "openring"]
stars: 61
forks: 1
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 4
createdAt: "2022-08-05T02:50:25Z"
lastCommitAt: "2026-08-22T04:05:45Z"
lastReleaseAt: "2026-06-10T16:45:54Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 56
maintainers: ["lukehsiao", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c20c7e8f567b7124359194dfd1a1ee26977722fe94804ce55249629079b7e6d/lukehsiao/openring-rs"
---

<h1 align="center">
    ⛓<br>
    openring-rs
</h1>
    <strong>A tool for generating a webring from Atom/RSS feeds.</strong>
</div>
<br>
  </a>
  </a>
  </a>
</div>
<br>

`openring-rs` is a tool for generating a webring from Atom/RSS feeds, so you can populate a template with articles from those feeds and embed them in your own blog.
An example template is provided in `in.html`.

This is a Rust-port of Drew DeVault's [openring](https://git.sr.ht/~sircmpwn/openring), with the primary differences being:
- we respect throttling and send conditional requests by default via caching (disable with `--no-cache`)
- the template is written using [Tera](https://keats.github.io/tera/) and is provided as an argument, not read from stdin
- we show a little progress bar
- we fetch all feeds concurrently
- we provide better error messages (via [miette](https://github.com/zkat/miette))
- we allow filtering feeds with `--before`
- we support per-feed weighting, so prolific feeds don't dominate the ring
- we generate a summary from the source if one is missing in the feed

## Demo
To see this in action, you can look at the footer of this blog post.

<https://luke.hsiao.dev/blog/openring-rs/>

##…
