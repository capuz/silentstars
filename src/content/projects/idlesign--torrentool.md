---
repo: "idlesign/torrentool"
name: "torrentool"
description: "The tool to work with torrent files."
readmeQualityOk: true
url: "https://github.com/idlesign/torrentool"
homepage: "https://github.com/idlesign/torrentool"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["python", "bencode", "torrent"]
stars: 163
forks: 29
openIssues: 0
closedIssues: 23
watchers: 10
contributors: 5
recentReleases: 0
createdAt: "2015-10-21T17:53:29Z"
lastCommitAt: "2026-11-14T10:47:04Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 100
undervaluedScore: 38
maintainers: ["idlesign"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b0b328925e97e988739a53ee736fb99cfadb985323652d53510d7e97f4c4689/idlesign/torrentool"
---

# torrentool

<https://github.com/idlesign/torrentool>

## Description

*The tool to work with torrent files.*

Works on Python 3.10+.

Includes:

* Command line interface. Requires `click` package to be installed.

  Use `pip install torrentool[cli]` to install this dependency automatically.
* Torrent utils (file creation, read and modification).
* Bencoding utils (decoder, encoder).

## Using CLI

```shell
# Make .torrent out of `video.mkv`
$ torrentool torrent create /home/my/files_here/video.mkv

# Make .torrent out of entire `/home/my/files_here` dir,
# and put some open trackers announce URLs into it,
# and publish file on torrent caching service, so it is ready to share.
$ torrentool torrent create /home/my/files_here --open_trackers --cache

# Print out existing file info.
$ torrentool torrent info /home/my/some.torrent
```

Use command line `--help` switch to know more.

!!! note

    Some commands require `requests` package to be installed.

## From your Python code

```python
from torrentool.api import Torrent

# Reading and modifying an existing file.
my_torrent = Torrent.from_file('/home/idle/some.torrent')
my_torrent.total_size  # Total files size in bytes.…
