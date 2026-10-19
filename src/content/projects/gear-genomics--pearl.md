---
repo: "gear-genomics/pearl"
name: "pearl"
description: "Patching references via trace assemblies"
readmeQualityOk: true
url: "https://github.com/gear-genomics/pearl"
homepage: "https://www.gear-genomics.com/pearl/"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [59, 26]
topics: ["sanger-sequencing", "sanger-chromatograms", "sanger-trace-alignment", "gear-genomics", "pcr"]
stars: 5
forks: 3
openIssues: 4
closedIssues: 2
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2019-07-11T07:38:16Z"
lastCommitAt: "2026-10-19T09:14:00Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 69
undervaluedScore: 48
maintainers: ["tobiasrausch", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e2ecbf36e3f32fd39b75573784ac803ebe1a1d584652d55f18cae3f49c50770/gear-genomics/pearl"
---

# Pearl
Patching references via trace assemblies

Dependencies
------------

Pearl requires Tracy, please intall first:

`https://github.com/gear-genomics/tracy`

Install a local copy for testing
--------------------------------

`git clone https://github.com/gear-genomics/pearl.git`

`cd pearl`

Setup and run the server
------------------------

The server runs in a terminal

Install the dependencies:

`sudo apt install python python-pip`

`pip install flask flask_cors`

Start the server:

`cd PATH_TO_PEARL/PEARL`

`export PATH=$PATH:/PATH_TO_TRACY/tracy/bin`

`echo $PATH`

`python server/server.py`

Setup and run the client
------------------------

The client requires a different terminal

Install the dependencies:

`cd PATH_TO_PEARL/pearl/client`

`sudo apt install npm`

`sudo npm install`

Start the client:

`cd PATH_TO_PEARL/pearl/client`

`npm run dev`
