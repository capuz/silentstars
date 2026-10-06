---
repo: "merill/aka"
name: "aka"
description: "Crowd sourced database of Microsoft's aka.ms links"
readmeQualityOk: true
url: "https://github.com/merill/aka"
homepage: "https://akams.fyi"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [87]
stars: 8
forks: 0
openIssues: 4
closedIssues: 1689
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2023-05-06T02:02:03Z"
lastCommitAt: "2026-10-06T10:42:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 79
maintainers: ["merill"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/636925965/14026079-b32d-4aa5-a621-c33d2d596f32"
fundingLinks: ["GITHUB:https://github.com/merill"]
---

# akams.fyi

🚀 → [akams.fyi](https://akams.fyi) = Search aka.ms links!

This repository hosts the source for [akams.fyi](https://akams.fyi), a crowd-sourced directory of Microsoft's aka.ms links.

## Contributing

### Adding a new aka.ms link

#### From the site (recommended)

Use **[akams.fyi/add](https://akams.fyi/add)** — no GitHub account required. The form checks the link resolves and shows you where it goes before you submit.

Submissions are published in an hourly batch, so allow a little time for a new link to appear.

#### By opening an issue

If you'd rather use GitHub, the [Add a new aka.ms link](https://github.com/merill/aka/issues/new?template=add-link.yaml) template feeds into the same queue.

#### By pull request (advanced)

Best for editing existing links, deleting links, or adding many at once.

Each link is one `.json` file in [website/config](https://github.com/merill/aka/tree/main/website/config):

* The filename is the aka.ms short name — `aka.ms/intune` → `intune.json`.
* Use lowercase.
* A `/` in the link becomes `~` — `aka.ms/ad/ca` → `ad~ca.json`.

Fields:

| Field | Meaning |
| --- | --- |
| `link` | The short name, without the `aka.ms/` prefix. |
|…
