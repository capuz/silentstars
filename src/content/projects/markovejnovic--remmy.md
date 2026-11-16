---
repo: "markovejnovic/remmy"
name: "remmy"
description: "The fastest rm you've seen"
readmeQualityOk: true
url: "https://github.com/markovejnovic/remmy"
language: "C++"
languages: ["C++"]
languagePcts: [78]
topics: ["cli", "command-line-tool", "coreutils", "cpp", "cpp26", "developer-tools", "fast", "filesystem", "macos", "multi-threading"]
stars: 6
forks: 0
openIssues: 7
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-09-23T08:55:37Z"
lastCommitAt: "2026-11-16T04:29:29Z"
lastReleaseAt: "2026-09-27T08:39:12Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 35
maintainers: ["markovejnovic"]
openGraphImageUrl: "https://opengraph.githubassets.com/7dc4c7087208e0d8087f48dfccb4b975b56471a2ad58be128c6ef1b9688b1a58/markovejnovic/remmy"
---

# remmy

**`rm -rf`, 3× faster on macOS.**

  

## Quickstart

You can grab a `remmy` version from the
[Releases](https://github.com/markovejnovic/remmy/releases) page. Builds are
static and exist for Linux (x86_64, aarch64, armv7l, ppc64le, s390x) and
Apple Silicon macOS 15+:

```bash
curl -fsSL "https://github.com/markovejnovic/remmy/releases/latest/download/remmy-$(uname -s)-$(uname -m).tar.gz" | tar -xz
sudo install -m 0755 "remmy-$(uname -s)-$(uname -m)/remmy" /usr/local/bin/remmy
```

`remmy` has the exact-same interface and semantics as your macOS `rm` and you
can run:

```bash
remmy -r node_modules/
```

If you trust `remmy` enough, you can add an alias in your `.bashrc` to use
`remmy` instead of `rm`:

```bash
echo "alias rm='/usr/local/bin/remmy'" >> ~/.bashrc
source ~/.bashrc
```

## Donationware

**`remmy` is donationware.** That means that if you like `remmy`,
if you like my work and if you want to support `remmy` or me, you
*should* donate. Here are some institutions you can consider:

- 🌍 [United World College](https://uwc.org/support-us/) transformed my life by
  taking me from a small town and opening my eyes to different cultures,
  worldly perspectives and…
