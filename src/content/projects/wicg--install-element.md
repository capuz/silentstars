---
repo: "WICG/install-element"
name: "install-element"
description: "An `<install>` element might be nice."
readmeQualityOk: true
url: "https://github.com/WICG/install-element"
language: "HTML"
languages: ["HTML"]
languagePcts: [93]
stars: 21
forks: 4
openIssues: 17
closedIssues: 5
watchers: 3
contributors: 11
recentReleases: 0
createdAt: "2025-10-21T10:19:07Z"
lastCommitAt: "2026-09-19T02:47:33Z"
status: "thriving"
tags: []
healthScore: 73
undervaluedScore: 47
maintainers: ["LiaHiscock", "LuHuangMSFT", "Kbhlee2121"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3d5e73120dcfb6460f0dc46eb586931664766d1ebb17104eebf06f687c00cbf/WICG/install-element"
---

# The `<install>` Element

The `<install>` element is a declarative HTML element that allows web developers
to offer installation of web applications directly from a page. It renders a
user-agent-controlled button whose text and iconography are determined by the
browser, providing a strong signal of user intent and protection against spoofing.
The element is part of the [Permission Element](https://wicg.github.io/PEPC/permission-elements.html)
family, sharing the same security model, styling restrictions, and validation
infrastructure.

The `<install>` element is one of two entry points to web app installation
initiated by a website. The other is the [Web Install API][api] - `navigator.install()` -
which provides a promise-based JavaScript entry point. Both share a single backend
implementation — manifest fetch, validation, consent UI, and error taxonomy.

## Authors

- [Lia Hiscock](https://github.com/LiaHiscock) ([Microsoft](https://microsoft.com/))
- [Mike West](https://github.com/mikewest) ([Google](https://google.com/))

## Participate

- [Issue tracker](https://github.com/WICG/install-element/issues)
- [Chromestatus](https://chromestatus.com/feature/5152834368700416)

##…
