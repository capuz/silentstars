---
repo: "josteink/gmailjs-node-boilerplate"
name: "gmailjs-node-boilerplate"
description: "A minimal extension which demonstrates how to create a extension with Gmail.JS and NodeJS-based bundling."
readmeQualityOk: true
url: "https://github.com/josteink/gmailjs-node-boilerplate"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["chrome-extension", "hacktoberfest", "gmail"]
stars: 76
forks: 36
openIssues: 3
closedIssues: 15
watchers: 4
contributors: 5
recentReleases: 0
createdAt: "2017-02-12T12:44:55Z"
lastCommitAt: "2026-07-14T05:52:56Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 72
undervaluedScore: 31
maintainers: ["renovate[bot]", "josteink"]
openGraphImageUrl: "https://opengraph.githubassets.com/5658924b73edd441daea38d7d0868ba4d9b5dafcdf717db3148343e332eb1512/josteink/gmailjs-node-boilerplate"
---

# GmailJS Node boilerplate

This repo contains sample code to get a WebExtensions-based
browser-extension using
the [gmail.js](https://github.com/KartikTalwar/gmail.js/) library.

## Usage

First get the code and build it:

````
# get code
git clone https://github.com/josteink/gmailjs-node-boilerplate/

# get deps and build
cd gmailjs-node-boilerplate
npm install
# ensure you're running latest version!
npm update
npm run build
````

Now ensure the code loads and works:

* Load the folder containing the extension (`manifest.json`) in
your browser.
* Load `mail.google.com` in your browser and open the developer console.

You should be greeted by a message saying the following

    Hello, <you>. This is your extension talking!

If that works, you should now be ready to customize the
extension-code. Do this by editing `extension.js` and rerunning `npm run build`. 

You can also interact with a instance of Gmail.js ready for use. `gmail`
should already be exposed in the developer console as a global
variable.

You can use this to get familiar with the API.

Cheers!

## Disclaimer

This project first and foremost about learning. It is **NOT** set up or configured as one would typically…
