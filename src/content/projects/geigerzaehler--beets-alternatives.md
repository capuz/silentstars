---
repo: "geigerzaehler/beets-alternatives"
name: "beets-alternatives"
description: "Beets plugin to manage external files"
url: "https://github.com/geigerzaehler/beets-alternatives"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 134
forks: 27
openIssues: 23
closedIssues: 36
watchers: 7
contributors: 9
recentReleases: 0
createdAt: "2014-09-10T15:46:50Z"
lastCommitAt: "2026-06-26T06:46:45Z"
lastReleaseAt: "2025-02-28T10:40:44Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 88
undervaluedScore: 39
maintainers: ["renovate[bot]", "geigerzaehler"]
openGraphImageUrl: "https://opengraph.githubassets.com/39b2cfd5c05ebe71f87f031e435135437b1fb4f8f0d613175d5fb0b0bd9a1aeb/geigerzaehler/beets-alternatives"
---

beets-alternatives
==================

You want to manage multiple versions of your audio files with beets?
Your favorite iPlayer has limited space and does not support Ogg Vorbis? You
want to keep lossless versions on a large external drive? You want to
symlink your audio to other locations?

With this [beets][beets-docs] plugin every file in you music library have
multiple alternate versions in separate locations.

If you’re interested in contributing to this project, check out the [developer
documentation](./DEVELOPING.md).

Getting Started
---------------

Install the plugin and make sure you are using at least version 2.4 of beets and
Python 3.10.

```bash
pip install --upgrade "beets>=2.4" beets-alternatives
```

Then, [enable the plugin][using plugins]. You may use the `beet config --edit`
command to add the *alternatives* plugin to the configuration.

```yaml
plugins:
- ...
- alternatives
```

Now, you can get rolling with one of the use cases below.

### External Files

Suppose your favorite portable player only supports MP3 and MP4, has
limited disk space and is mounted at `/player`. Instead of selecting
its content manually and using the `convert` plugin to transcode…
