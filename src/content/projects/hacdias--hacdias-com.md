---
repo: "hacdias/hacdias.com"
name: "hacdias.com"
description: "🧙‍♂️ Source of my website."
readmeQualityOk: true
url: "https://github.com/hacdias/hacdias.com"
homepage: "https://hacdias.com"
language: "HTML"
languages: ["HTML", "CSS", "JavaScript"]
languagePcts: [46, 25, 24]
topics: ["hugo", "indieweb", "personal-website", "small-web"]
stars: 16
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-11-18T09:20:32Z"
lastCommitAt: "2026-10-25T08:40:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 71
maintainers: ["hacdias"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1b22d3a8973e7f11b2d80ceccd582b6b965cdb62d2c6f267676df9a2ee760cb/hacdias/hacdias.com"
fundingLinks: ["GITHUB:https://github.com/hacdias", "KO_FI:https://ko-fi.com/hacdias"]
---

# hacdias.com

> 🧙‍♂️ The source code of [hacdias.com](https://hacdias.com)

## Configuration

There are some peculiarities with my website's Hugo configuration. I use this section
of the README for future documentation for others, or if I myself forget.

### Pages

I have struggled with Hugo's way of dealing with pages, especially sections. I could
never create a nested page without having to create a section, and therefore a listing.
I designed my website and templates such that:

- A section is nothing more than a signal to Hugo to build nested pages.
- Section templates are treated as single page templates.
- Only taxonomy term pages are presented as lists.

Other important notes:

- The taxonomy "category" is a root-level taxonomy, e.g., `/articles/`.
- The page `/categories/` does not get rendered.
- All posts go into the `/posts/` section, which does not get rendered.
- All posts are built to `/yyyy/mm/dd/title/` URL.

## License

Codebase licensed with [MIT License](https://github.com/hacdias/hacdias.com/blob/HEAD/LICENSE) © [Henrique Dias](https://hacdias.com).
Anything other than source code (e.g., content, images, photos) is copyrighted.
