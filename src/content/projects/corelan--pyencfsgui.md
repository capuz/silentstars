---
repo: "corelan/pyencfsgui"
name: "pyencfsgui"
description: "Python based Gui wrapper for encfs and gocryptfs volumes"
readmeQualityOk: true
url: "https://github.com/corelan/pyencfsgui"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["encfs", "osxfuse", "python3", "gocryptfs"]
stars: 22
forks: 5
openIssues: 0
closedIssues: 3
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2019-11-30T07:11:32Z"
lastCommitAt: "2026-10-15T08:31:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 75
undervaluedScore: 36
maintainers: ["corelanc0d3r"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/224974192/cfd97e80-14f2-11ea-91fb-acec50f0ef8f"
---

# pyencfsgui

## What is pyencfsgui?

pyencfsgui is a Qt based GUI/wrapper around EncFS (`encfs`, `encfsctl`) and GoCryptFS (`gocryptfs`), `mount` and `umount`. 
It is written in python3, and relies on `encfs`/`gocryptfs` to be able to mount an enrypted folder. (These utilities typically rely on OSXFuse/MacFuse/...Fuse to provide a filesystem.)<br>
In other words, pyencfsgui simply provides a GUI that uses the aformentioned utilities in the backend, and relies on the ability to launch these binaries, to interact with them and to capture & parse the output from those tools.<br>
As a result, the EncFSGui source code is pretty easy to understand, as it does not contain any crypto or other black magic to do its job.  The downside is that it is a wrapper and may break if tools start behaving in a different way.<br>

pyencfsgui was developed on macOS using encfs versions 1.8.x and 1.9.x., and gocryptfs version 1.8.x <br>

pyencfsgui was tested on recent version of macOS and Kali Linux<br>

## Dependencies

In order for pyencfsgui to be able to function, you need to install the following dependencies:

- python3 (3.9.x or higher, tested with newer Python 3 releases as well)
- python3…
