---
repo: "chromium/openscreen"
name: "openscreen"
description: "The Open Screen Library implements the Open Screen Protocol, Multicast DNS and DNS-SD, and the Cast protocols (discovery, application control, and media streaming)."
readmeQualityOk: true
url: "https://github.com/chromium/openscreen"
homepage: "https://chromium.googlesource.com/openscreen"
language: "C++"
languages: ["C++"]
languagePcts: [93]
stars: 12
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 34
recentReleases: 0
createdAt: "2026-02-12T03:29:45Z"
lastCommitAt: "2026-10-23T22:43:33Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 79
undervaluedScore: 56
maintainers: ["baylesj", "tsyoum", "augiekim"]
openGraphImageUrl: "https://opengraph.githubassets.com/e59ccdbbd00ce72f7674be907b26b37eed048d51cd44bb16c214930920030b13/chromium/openscreen"
---

# Open Screen Library

The Open Screen Library implements the Open Screen Protocol, Multicast DNS and
DNS-SD, and the Cast protocols (discovery, application control, and media
streaming).

The library consists of feature modules that share a [common platform API](https://github.com/chromium/openscreen/blob/HEAD/platform/README.md)
that must be implemented and linked by the embedding application.

The major feature modules in the library can be used independently and have
their own documentation:

- [Cast protocols](https://github.com/chromium/openscreen/blob/HEAD/cast/README.md) (aka `libcast`)
- [Open Screen Protocol](https://github.com/chromium/openscreen/blob/HEAD/osp/README.md)
- [Multicast DNS and DNS-SD](https://github.com/chromium/openscreen/blob/HEAD/discovery/README.md)

## Getting the code

### Installing depot_tools

Library dependencies are managed using `gclient`, from the
[depot_tools](https://www.chromium.org/developers/how-tos/depottools) repo.

To get gclient, run the following command in your terminal:

```bash
    git clone https://chromium.googlesource.com/chromium/tools/depot_tools.git
```

Then add the `depot_tools` folder to your `PATH` environment variable.…
