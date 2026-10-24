---
repo: "defold/asset-portal"
name: "asset-portal"
description: "List of Defold assets, libraries and extensions"
readmeQualityOk: true
url: "https://github.com/defold/asset-portal"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 191
forks: 40
openIssues: 9
closedIssues: 181
watchers: 12
contributors: 32
recentReleases: 0
createdAt: "2019-08-28T06:43:40Z"
lastCommitAt: "2026-10-24T00:15:57Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 99
undervaluedScore: 42
maintainers: ["defold-services", "paweljarosz", "AngryLeaderBee"]
openGraphImageUrl: "https://opengraph.githubassets.com/051a48f4ecc066c6e57aa69b133d0c1d9f22e6dcd00e219652b0720a69475e8d/defold/asset-portal"
---

# Assets
Collection of Defold assets, libraries and extensions. The asset definitions listed in `assets` are used by the [Asset Portal on the Defold site](https://www.defold.com/assets).

## Submitting an asset
Submit a new asset for inclusion in this collection either via the `Submit Asset` button on the Asset Portal or by [creating an issue](https://github.com/defold/asset-portal/issues/new?template=new-asset.md).

## Updating an asset
You can update an asset by modifying its metadata file. The metadata for all assets can be found in the `assets` folder of this repository. Once you are happy with the changes please submit a pull request.

### Automatic release updates

GitHub release and tag metadata is refreshed every six hours. For entries marked as
Defold libraries, version-tag archive URLs and missing `library_url` values
automatically advance to the newest stable GitHub Release. Repositories without
GitHub Releases fall back to their newest tag. Branch archive URLs such as
`master.zip` and `refs/heads/main.zip` already float automatically and are left
unchanged, as are custom URL formats.

Set `"library_url_auto_update": false` only when a version must remain intentionally…
