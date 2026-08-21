---
repo: "technologiestiftung/berlin-open-source-portal"
name: "berlin-open-source-portal"
description: "Showcase of Open Source Software that is built, maintained and/or funded by Berlin state governmental agencies"
readmeQualityOk: true
url: "https://github.com/technologiestiftung/berlin-open-source-portal"
homepage: "https://berlinopensource.de"
language: "Liquid"
languages: ["Liquid"]
languagePcts: [50]
topics: ["open-data", "open-administration", "citylab-berlin"]
stars: 35
forks: 9
openIssues: 4
closedIssues: 7
watchers: 7
contributors: 23
recentReleases: 0
createdAt: "2020-10-14T12:22:17Z"
lastCommitAt: "2026-08-21T04:11:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 92
undervaluedScore: 56
maintainers: ["tsboter"]
openGraphImageUrl: "https://opengraph.githubassets.com/d81e78b009eec21c350470f520bd06b3a4b24e3ab79686ed2be51500e7e58151/technologiestiftung/berlin-open-source-portal"
---

# Berlin Open Source

## _Für eine offene Stadt_ (for an open city)

A prototype to showcase Open Source Software that is built, maintained and/or funded by Berlin state governmental agencies.

We built this prototype in order to make a case for the use of FOSS (Free and Open Source Software) in government and to convince the related stakeholders that there is value in making your Open Source infrastructure more visible and accessible.

---

## Adding content

Feel free to make pull requests, we'll review and merge them as soon as we can. Feel free to edit the MarkDown files, if you are unfamilliar with this, the [Mastering MarkDown](https://guides.github.com/features/mastering-markdown/) guide is pretty good.

### Adding a project

To add a project just create a new markdown file in `src/projects/`. Take a look at the already existing projects and define your own front matter accordingly.

#### Example project markdown front matter:

```yaml
---
layout: layouts/project.liquid
tags: ["Umwelt"] # optional
id: giessdenkiez
title: Gieß den Kiez
abstract: Alle Berliner Stadtbäume in einer Anwendung
languages: ["Typescript"] # optional
license: MIT # optional
link:…
