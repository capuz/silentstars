---
repo: "open-audio-stack/open-audio-stack-registry"
name: "open-audio-stack-registry"
description: "Audio registry with searchable list of packages containing Plugins, Presets and Projects."
readmeQualityOk: true
url: "https://github.com/open-audio-stack/open-audio-stack-registry"
homepage: "https://open-audio-stack.github.io/open-audio-stack-registry/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["audio-plugin", "registry"]
stars: 48
forks: 9
openIssues: 34
closedIssues: 108
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2024-10-30T05:43:11Z"
lastCommitAt: "2026-07-11T05:58:40Z"
lastReleaseAt: "2025-08-15T04:27:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 56
maintainers: ["kmturley"]
openGraphImageUrl: "https://opengraph.githubassets.com/47c06f838178beea01fa2b9385949075f69a02271f49720953b6359365f3ba1b/open-audio-stack/open-audio-stack-registry"
---

<h1>
  Open Audio Stack
</h1>
<p>Audio registry specification and API with searchable list of packages</p>
  <p>
    ⦁︎
    ⦁︎
    ⦁︎
    ⦁︎
  </p>
<p>

</div>

# open-audio-stack-registry

Audio registry with searchable list of packages containing Plugins, Presets and Projects. Provides an API with file metadata and urls to binaries for installation.

This registry is primarily for distributing free open-source packages. There are plenty of solutions for closed-source, paid plugins. Packages should be built for cross-platform, supporting Linux, Mac and Windows. Packages which don't meet the guidelines may be rejected and/or removed at an Open Stack contributor at any time.

## How it works

Community members add Yaml files to a new branch of this code, one for each package version.
After yaml files have been scanned for security, they are merged into the main codebase.
GitHub Actions generates a GitHub static site containing json files for each part of the registry.
Compatible command-line tools, apps and websites can read the json files to discover packages.

## Contributing a package

You can use this website for filling out metadata…
