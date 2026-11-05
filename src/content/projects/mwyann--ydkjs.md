---
repo: "Mwyann/ydkjs"
name: "ydkjs"
description: "You Don't Know Javascript"
readmeQualityOk: true
url: "https://github.com/Mwyann/ydkjs"
homepage: "https://www.ydkjs.eu/"
language: "Pascal"
languages: ["Pascal", "JavaScript"]
languagePcts: [41, 32]
topics: ["game", "javascript"]
stars: 65
forks: 9
openIssues: 5
closedIssues: 5
watchers: 9
contributors: 1
recentReleases: 0
createdAt: "2017-06-27T19:53:00Z"
lastCommitAt: "2026-11-05T14:04:31Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 63
undervaluedScore: 37
maintainers: ["Mwyann"]
openGraphImageUrl: "https://opengraph.githubassets.com/f6059210013b64831c8ebeb592dfc717e31b9dbb2c589f25ca9a88af487b88a1/Mwyann/ydkjs"
---

# YDKJS

[https://www.ydkjs.eu/](https://www.ydkjs.eu/)

## Installation

You need the original CD or an ISO. Mount it or extract it.

Run the YDKJ Extractor, and on the bottom of the window, specify the path of the mounted/extracted CD content (root folder of the SRF files) in the "From" field, and an empty directory path where all the extracted content will be placed into the "To" field, and press "Convert all". This may take a while, so please be patient, and take the next steps while waiting.

Prepare your server, for example on Ubuntu 18.04 (here I use `mariadb-server`, but `mysql-server` works too of course):

```bash
sudo apt-get install apache2 mariadb-server php php-mysql ffmpeg
```

Copy the html folder into your web server. The game does not need to be in the DocumentRoot folder, so you can use subfolders if you wish. Protip: you can use git or svn to make future updates easier, for example:

```bash
svn co https://github.com/Mwyann/ydkjs.git/trunk/html ydkj
```

For now the data extraction should be done, so let's take care of it. Create a ``res-full`` folder into the root of the game's html folder and copy all the data that's been extracted into…
