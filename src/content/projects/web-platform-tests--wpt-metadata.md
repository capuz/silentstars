---
repo: "web-platform-tests/wpt-metadata"
name: "wpt-metadata"
description: "Out-of-tree metadata for wpt"
readmeQualityOk: true
url: "https://github.com/web-platform-tests/wpt-metadata"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 46
forks: 68
openIssues: 14
closedIssues: 37
watchers: 72
contributors: 203
recentReleases: 0
createdAt: "2019-03-07T20:35:54Z"
lastCommitAt: "2026-10-23T12:04:48Z"
status: "thriving"
tags: ["legacy_hero", "community_watch", "fork_magnet"]
healthScore: 94
undervaluedScore: 52
maintainers: ["moz-wptsync-bot", "wptmetadata-bot", "wptfyibot"]
openGraphImageUrl: "https://opengraph.githubassets.com/94d3d339cf9c9dc32208dd145cabde3426aa6561f2b6038d5228949b6fb8c36b/web-platform-tests/wpt-metadata"
---

## wpt-metadata
wpt-metadata is a repo for storing [wpt.fyi](https://github.com/web-platform-tests/wpt.fyi) test-result metadata, about tests defined in the [wpt](https://github.com/web-platform-tests/wpt) repo, in metadata yml files.

You can review the [Design Doc](https://docs.google.com/document/d/1oWYVkc2ztANCGUxwNVTQHlWV32zq6Ifq9jkkbYNbSAg/edit) for more details.

YAML Link Format Specs:

```yaml
links:
  - product: [product spec] (optional)
    url: [URL]
    label: [Label]
    results:
    - test: [Test name] 
      subtest: [Subtest name] (optional)
      status: [Specific test result status] (optional)
  - ...
```
    
Where
- `product` is a browser name with an option of [product spec](https://github.com/web-platform-tests/wpt.fyi/blob/master/api/README.md)
  - `{browser-name}[-{browser-version}[-{os}[-{os-version}]]]`
  - e.g. `chrome`, `safari-12`, or `firefox-63.0-linux`
  - when `product` is omitted, this `link` applies to tests across all browsers
- `url` is a bug URL; `url` is non-optional unless a `label` is present.
- `label` is a label to its tests; `label` is used at a test-level and do not
  apply to subtests. When `label` is present in a link:
  - `product`…
