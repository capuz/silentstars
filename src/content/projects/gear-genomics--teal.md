---
repo: "gear-genomics/teal"
name: "teal"
description: "Sanger Trace Viewer"
readmeQualityOk: true
url: "https://github.com/gear-genomics/teal"
homepage: "https://www.gear-genomics.com/teal"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [80]
topics: ["gear-genomics", "sanger", "sanger-chromatograms", "pcr", "trace"]
stars: 10
forks: 3
openIssues: 0
closedIssues: 2
watchers: 4
contributors: 3
recentReleases: 0
createdAt: "2017-11-03T16:11:41Z"
lastCommitAt: "2026-09-03T08:12:59Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 75
undervaluedScore: 50
maintainers: ["tobiasrausch", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e256faece47b0c6e1d0117c1d2c3c73287e8a8c53623d27ac40458a22f5368d8/gear-genomics/teal"
---

# Teal
Visualize trace files.

Dependencies
------------

Teal requires Tracy, please intall first:

`https://github.com/gear-genomics/tracy`

Install a local copy for testing
--------------------------------

`git clone https://github.com/gear-genomics/teal.git`

`cd teal`

Setup and run the server
------------------------

The server runs in a terminal

Install the dependencies:

`sudo apt install python python-pip`

`pip install flask flask_cors`

Start the server:

`cd PATH_TO_TEAL/teal`

`export PATH=$PATH:/PATH_TO_TRACY/tracy/bin`

`echo $PATH`

`python server/server.py`

Setup and run the client
------------------------

The client requires a different terminal

Install the dependencies:

`cd PATH_TO_TEAL/teal/client`

`sudo apt install npm`

`sudo npm install`

Start the client:

`cd PATH_TO_TEAL/teal/client`

`npm run dev`
