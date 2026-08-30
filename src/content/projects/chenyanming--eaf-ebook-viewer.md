---
repo: "chenyanming/eaf-ebook-viewer"
name: "eaf-ebook-viewer"
description: "Calibre-powered Ebook Viewer for Emacs Application Framework"
readmeQualityOk: true
url: "https://github.com/chenyanming/eaf-ebook-viewer"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [96]
stars: 7
forks: 0
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-11T16:20:35Z"
lastCommitAt: "2026-08-30T09:23:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 24
maintainers: ["chenyanming"]
openGraphImageUrl: "https://opengraph.githubassets.com/21a37eb0be5189c645dbad6edf63c28f405a540f6afdf78fe875375e8befcae7/chenyanming/eaf-ebook-viewer"
---

### EAF Ebook Viewer

Ebook Viewer application for the [Emacs Application Framework](https://github.com/emacs-eaf/emacs-application-framework), powered by calibre's native E-book Viewer.

It supports EPUB, MOBI, AZW3, FB2 and other formats supported by calibre. Local books are opened directly. Books stored by a macOS cloud file provider are downloaded to a read-only local cache first.

### Demo

### Install

Run all commands from the EAF repository root.

#### 1. Install EAF

Install [EAF](https://github.com/emacs-eaf/emacs-application-framework#install).

Ebook Viewer is not in the EAF application registry. The EAF installer cannot
clone Ebook Viewer.

#### 2. Clone Ebook Viewer

```Shell
git clone --recurse-submodules https://github.com/chenyanming/eaf-ebook-viewer.git \
  app/ebook-viewer
```

If you cloned the repository without its submodules, initialize them:

```Shell
git -C app/ebook-viewer submodule update --init --recursive
```

#### 3. Install the system build dependencies

Run the command for your operating system.

##### Debian or Ubuntu

```Shell
sudo apt install build-essential libicu-dev libpulse0 libxrandr2 \
  libxml2-dev libxslt1-dev pkg-config pyqt6-dev-tools…
